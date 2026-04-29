import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { differenceInDays } from 'date-fns';
import { ArrowLeft, CalendarDays, AlertCircle, Info } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

/**
 * 勞基法第 38 條 — 特別休假天數
 *
 * 6 個月以上 1 年未滿者：3 日
 * 1 年以上 2 年未滿者：7 日
 * 2 年以上 3 年未滿者：10 日
 * 3 年以上 5 年未滿者：每年 14 日
 * 5 年以上 10 年未滿者：每年 15 日
 * 10 年以上者：每 1 年加給 1 日，最多加至 30 日
 */
function getAnnualLeaveDays(years: number): number {
  if (years < 0.5) return 0;
  if (years < 1) return 3;
  if (years < 2) return 7;
  if (years < 3) return 10;
  if (years < 5) return 14;
  if (years < 10) return 15;
  // 10 年以上：15 + (years - 10 + 1) 但不超過 30
  return Math.min(15 + Math.floor(years) - 10 + 1, 30);
}

/** 取得每個年資區間的特休天數表 (供明細展示) */
function getLeaveBreakdown(totalYears: number) {
  const milestones = [
    { minYears: 0.5, maxYears: 1, days: 3 },
    { minYears: 1, maxYears: 2, days: 7 },
    { minYears: 2, maxYears: 3, days: 10 },
    { minYears: 3, maxYears: 5, days: 14 },
    { minYears: 5, maxYears: 10, days: 15 },
  ];

  const result: { label: string; days: number; active: boolean }[] = [];

  for (const m of milestones) {
    result.push({
      label: `${m.minYears}~${m.maxYears} 年`,
      days: m.days,
      active: totalYears >= m.minYears,
    });
  }

  // 10 年以上
  if (totalYears >= 10) {
    const extra = Math.min(Math.floor(totalYears) - 10 + 1, 15);
    result.push({
      label: `10+ 年`,
      days: 15 + extra,
      active: true,
    });
  } else {
    result.push({
      label: `10+ 年`,
      days: 16,
      active: false,
    });
  }

  return result;
}

export default function AnnualLeaveCalc() {
  const navigate = useNavigate();
  const { t } = useLang();
  const [startDate, setStartDate] = useState('');
  const [refDate, setRefDate] = useState('');
  const [result, setResult] = useState<{
    years: number;
    leaveDays: number;
    breakdown: ReturnType<typeof getLeaveBreakdown>;
  } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!startDate) {
      newErrors.startDate = t.errDateRequired;
    }
    if (!refDate) {
      newErrors.refDate = t.errDateRequired;
    }

    if (startDate && refDate) {
      const s = new Date(startDate);
      const r = new Date(refDate);
      if (r <= s) {
        newErrors.refDate = t.alRefDateError;
      }
      if (s.getFullYear() < 1911 || s.getFullYear() > 2100) {
        newErrors.startDate = t.errDateRange;
      }
      if (r.getFullYear() < 1911 || r.getFullYear() > 2100) {
        newErrors.refDate = t.errDateRange;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculate = () => {
    if (!validate()) return;

    const s = new Date(startDate);
    const r = new Date(refDate);
    const days = differenceInDays(r, s);
    const years = days / 365.25;
    const leaveDays = getAnnualLeaveDays(years);
    const breakdown = getLeaveBreakdown(years);

    setResult({ years, leaveDays, breakdown });
  };

  return (
    <div className="p-4 flex flex-col gap-4 pb-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-full shadow-sm text-gray-500 hover:text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <CalendarDays className="text-primary w-5 h-5" />
          {t.alTitle}
        </h2>
      </div>

      {/* Description */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-3.5 text-sm text-blue-800 flex items-start gap-2">
        <Info className="w-5 h-5 shrink-0 mt-0.5 text-blue-500" />
        <span>{t.alSubtitle}</span>
      </div>

      {/* Form */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.alStartDate}</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => { setStartDate(e.target.value); setErrors(prev => { const { startDate: _, ...rest } = prev; return rest; }); }}
            className={`w-full border rounded-lg p-3 outline-none focus:ring-2 transition-all ${errors.startDate ? 'border-red-400 focus:ring-red-300 focus:border-red-400' : 'border-gray-300 focus:ring-primary/50 focus:border-primary'}`}
            min="1911-01-01"
            max="2100-12-31"
          />
          {errors.startDate && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.startDate}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.alRefDate}</label>
          <input
            type="date"
            value={refDate}
            onChange={(e) => { setRefDate(e.target.value); setErrors(prev => { const { refDate: _, ...rest } = prev; return rest; }); }}
            className={`w-full border rounded-lg p-3 outline-none focus:ring-2 transition-all ${errors.refDate ? 'border-red-400 focus:ring-red-300 focus:border-red-400' : 'border-gray-300 focus:ring-primary/50 focus:border-primary'}`}
            min="1911-01-01"
            max="2100-12-31"
          />
          {errors.refDate && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.refDate}</p>}
        </div>

        <button
          onClick={calculate}
          className="mt-2 w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-colors shadow-md active:scale-[0.98]"
        >
          {t.alCalculate}
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="mt-2 space-y-4">
          {/* 主結果卡 */}
          <div className="bg-gradient-to-br from-[#1A237E] to-[#283593] text-white p-5 rounded-2xl shadow-lg">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <CalendarDays className="w-5 h-5" />
              {t.alResultTitle}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span className="text-blue-200">{t.serviceYears}</span>
                <span className="font-semibold">{result.years.toFixed(2)} {t.years}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="font-bold text-base">{t.alCurrentLeave}</span>
                <span className="font-extrabold text-3xl text-amber-300 drop-shadow-sm">
                  {result.leaveDays} <span className="text-lg">{t.days}</span>
                </span>
              </div>
            </div>
          </div>

          {/* 年資區間表 */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-3">{t.alBreakdownTitle}</h4>
            <div className="space-y-2">
              {result.breakdown.map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-3 rounded-xl text-sm transition-all ${
                    row.active
                      ? 'bg-primary/10 text-primary font-semibold border border-primary/20'
                      : 'bg-gray-50 text-gray-400'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {row.active ? '✅' : '⬜'} {row.label}
                  </span>
                  <span>{row.days} {t.days}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 法規依據 */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-xs text-gray-500">
            <p className="font-medium text-gray-600 mb-1">{t.alLegalBasis}</p>
            <p>{t.alLegalText}</p>
          </div>
        </div>
      )}
    </div>
  );
}
