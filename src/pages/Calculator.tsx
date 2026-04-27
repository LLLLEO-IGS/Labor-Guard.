import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { differenceInDays } from 'date-fns';
import { ArrowLeft, Calculator as CalcIcon, FileText, Copy, AlertTriangle } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

interface CalcResult {
  years: number;
  monthsOfPay: number;
  severancePay: number;
  noticeDays: number;
  noticeWage: number;
  leaveCompensation: number;
  totalCompensation: number;
}

/**
 * 預告期天數 (勞基法第16條)
 *   未滿 3 個月：0 天
 *   3 個月 ~ 1 年：10 天
 *   1 年 ~ 3 年：20 天
 *   3 年以上：30 天
 */
function getNoticeDays(years: number): number {
  if (years < 0.25) return 0;   // 未滿 3 個月
  if (years < 1) return 10;
  if (years < 3) return 20;
  return 30;
}

export default function Calculator() {
  const navigate = useNavigate();
  const { t } = useLang();
  const [salary, setSalary] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [unusedLeave, setUnusedLeave] = useState('');
  const [result, setResult] = useState<CalcResult | null>(null);
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    if (!salary || !startDate || !endDate) return;
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);

    if (eDate <= sDate) {
      alert(t.dateError);
      return;
    }

    const salaryNum = parseInt(salary, 10);
    const days = differenceInDays(eDate, sDate) + 1;
    const years = days / 365.25;

    // 資遣費 (勞退新制)
    const monthsOfPay = Math.min(years * 0.5, 6);
    const severancePay = Math.floor(monthsOfPay * salaryNum);

    // 預告工資
    const noticeDays = getNoticeDays(years);
    const noticeWage = Math.floor((salaryNum / 30) * noticeDays);

    // 特休折算工資
    const leaveDays = parseInt(unusedLeave || '0', 10);
    const leaveCompensation = Math.floor((salaryNum / 30) * leaveDays);

    // 總金額
    const totalCompensation = severancePay + noticeWage + leaveCompensation;

    setResult({ years, monthsOfPay, severancePay, noticeDays, noticeWage, leaveCompensation, totalCompensation });
  };

  const handleGenerateDoc = (type: 'attest' | 'mediation') => {
    navigate('/document', { state: { type, salary, startDate, endDate, result } });
  };

  const generateTextReport = () => {
    if (!result) return '';
    return [
      `══════════════════════`,
      `  Labor Guard 權益明細`,
      `══════════════════════`,
      `任職區間：${startDate} ～ ${endDate}`,
      `平均月薪：NT$ ${parseInt(salary).toLocaleString()}`,
      `服務年資：${result.years.toFixed(2)} 年`,
      ``,
      `── 各項金額 ──`,
      `資遣費　　：NT$ ${result.severancePay.toLocaleString()} (基數 ${result.monthsOfPay.toFixed(2)} 個月)`,
      `預告工資　：NT$ ${result.noticeWage.toLocaleString()} (${result.noticeDays} 天)`,
      `特休折算　：NT$ ${result.leaveCompensation.toLocaleString()} (${unusedLeave || 0} 天)`,
      ``,
      `══════════════════════`,
      `★ 總應得補償：NT$ ${result.totalCompensation.toLocaleString()}`,
      `══════════════════════`,
      ``,
      `※ 預告期間內，您每週可請 2 日有薪「謀職假」`,
      `※ 此試算依據中華民國勞基法新制 (2005年後適用)`,
    ].join('\n');
  };

  const handleCopyReport = () => {
    navigator.clipboard.writeText(generateTextReport());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 flex flex-col gap-4 pb-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-full shadow-sm text-gray-500 hover:text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <CalcIcon className="text-primary w-5 h-5" />
          {t.calculator}
        </h2>
      </div>

      {/* Form */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.avgSalary}</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder="45000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.startDate}</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.endDate}</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.unusedLeave}</label>
          <input
            type="number"
            value={unusedLeave}
            onChange={(e) => setUnusedLeave(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder={t.unusedLeavePlaceholder}
            min="0"
          />
        </div>

        <button
          onClick={calculate}
          className="mt-2 w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-colors shadow-md active:scale-[0.98]"
        >
          {t.calculate}
        </button>
      </div>

      {/* Result Card */}
      {result && (
        <div className="mt-2 space-y-4">
          {/* 權益明細卡 */}
          <div className="bg-gradient-to-br from-[#1A237E] to-[#283593] text-white p-5 rounded-2xl shadow-lg">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <CalcIcon className="w-5 h-5" />
              {t.resultTitle}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span className="text-blue-200">{t.serviceYears}</span>
                <span className="font-semibold">{result.years.toFixed(2)} {t.years}</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span className="text-blue-200">{t.severanceBase}</span>
                <span className="font-semibold">{result.monthsOfPay.toFixed(2)} {t.months} <span className="text-xs text-blue-300">{t.severanceBaseNote}</span></span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span className="text-blue-200">{t.severancePay}</span>
                <span className="font-semibold text-amber-300">{t.ntd} {result.severancePay.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span className="text-blue-200">{t.noticePeriod}</span>
                <span className="font-semibold">{result.noticeDays} {t.noticePeriodDays}</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span className="text-blue-200">{t.noticeWage}</span>
                <span className="font-semibold text-amber-300">{t.ntd} {result.noticeWage.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span className="text-blue-200">{t.leaveCompensation}</span>
                <span className="font-semibold text-amber-300">{t.ntd} {result.leaveCompensation.toLocaleString()}</span>
              </div>
              {/* 總金額 — 醒目強調 */}
              <div className="flex justify-between pt-3">
                <span className="font-bold text-base">{t.totalCompensation}</span>
                <span className="font-extrabold text-2xl text-amber-300 drop-shadow-sm">{t.ntd} {result.totalCompensation.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* 謀職假提醒 */}
          {result.noticeDays > 0 && (
            <div className="bg-amber-50 border border-amber-200 text-amber-800 p-3.5 rounded-xl text-sm flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{t.jobSearchLeaveReminder}</span>
            </div>
          )}

          {/* 功能按鈕群 */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleCopyReport}
              className={`w-full font-medium py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 ${copied ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <Copy className="w-4 h-4" /> {copied ? '✓ 已複製！' : t.copyReport}
            </button>
            <button
              onClick={() => handleGenerateDoc('attest')}
              className="w-full bg-white text-primary border border-primary font-medium py-2.5 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" /> {t.generateAttest}
            </button>
            <button
              onClick={() => handleGenerateDoc('mediation')}
              className="w-full bg-white text-gray-700 border border-gray-300 font-medium py-2.5 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" /> {t.generateMediation}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
