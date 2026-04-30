import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

interface OvertimeEntry {
  label: string;
  hours: number;
  rate: number;
  rateLabel: string;
  amount: number;
  legalBasis: string;
}

interface OvertimeResult {
  hourlyWage: number;
  entries: OvertimeEntry[];
  totalAmount: number;
}

export default function OvertimeCalc() {
  const navigate = useNavigate();
  const { t } = useLang();
  const [salary, setSalary] = useState('');
  const [weekdayOT1, setWeekdayOT1] = useState(''); // 平日前2小時
  const [weekdayOT2, setWeekdayOT2] = useState(''); // 平日第3~4小時
  const [restDayOT1, setRestDayOT1] = useState(''); // 休息日前2小時
  const [restDayOT2, setRestDayOT2] = useState(''); // 休息日第3~8小時
  const [restDayOT3, setRestDayOT3] = useState(''); // 休息日第9~12小時
  const [holidayOT, setHolidayOT] = useState('');   // 國定假日/例假日
  const [result, setResult] = useState<OvertimeResult | null>(null);
  const [showLaw, setShowLaw] = useState(false);

  const calculate = () => {
    const salaryNum = Number(salary);
    if (!salaryNum || salaryNum <= 0) return;

    const hourlyWage = Math.round(salaryNum / 30 / 8 * 100) / 100;
    const entries: OvertimeEntry[] = [];

    const h1 = Number(weekdayOT1) || 0;
    if (h1 > 0) {
      const rate = 4 / 3;
      const amount = Math.round(hourlyWage * rate * h1);
      entries.push({
        label: t.otWeekday1Label,
        hours: h1,
        rate,
        rateLabel: '1⅓ 倍 (×4/3)',
        amount,
        legalBasis: t.otWeekday1Law,
      });
    }

    const h2 = Number(weekdayOT2) || 0;
    if (h2 > 0) {
      const rate = 5 / 3;
      const amount = Math.round(hourlyWage * rate * h2);
      entries.push({
        label: t.otWeekday2Label,
        hours: h2,
        rate,
        rateLabel: '1⅔ 倍 (×5/3)',
        amount,
        legalBasis: t.otWeekday2Law,
      });
    }

    const r1 = Number(restDayOT1) || 0;
    if (r1 > 0) {
      const rate = 4 / 3;
      const amount = Math.round(hourlyWage * rate * r1);
      entries.push({
        label: t.otRestDay1Label,
        hours: r1,
        rate,
        rateLabel: '1⅓ 倍 (×4/3)',
        amount,
        legalBasis: t.otRestDay1Law,
      });
    }

    const r2 = Number(restDayOT2) || 0;
    if (r2 > 0) {
      const rate = 5 / 3;
      const amount = Math.round(hourlyWage * rate * r2);
      entries.push({
        label: t.otRestDay2Label,
        hours: r2,
        rate,
        rateLabel: '1⅔ 倍 (×5/3)',
        amount,
        legalBasis: t.otRestDay2Law,
      });
    }

    const r3 = Number(restDayOT3) || 0;
    if (r3 > 0) {
      const rate = 8 / 3;
      const amount = Math.round(hourlyWage * rate * r3);
      entries.push({
        label: t.otRestDay3Label,
        hours: r3,
        rate,
        rateLabel: '2⅔ 倍 (×8/3)',
        amount,
        legalBasis: t.otRestDay3Law,
      });
    }

    const hol = Number(holidayOT) || 0;
    if (hol > 0) {
      const rate = 2;
      const amount = Math.round(hourlyWage * rate * hol);
      entries.push({
        label: t.otHolidayLabel,
        hours: hol,
        rate,
        rateLabel: '2 倍 (×2)',
        amount,
        legalBasis: t.otHolidayLaw,
      });
    }

    const totalAmount = entries.reduce((sum, e) => sum + e.amount, 0);

    setResult({ hourlyWage, entries, totalAmount });
  };

  return (
    <div className="p-4 flex flex-col gap-4 pb-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-full shadow-sm text-gray-500 hover:text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Clock className="text-primary w-5 h-5" />
          {t.overtimeCalc}
        </h2>
      </div>

      {/* 法規說明摺疊 */}
      <button
        onClick={() => setShowLaw(!showLaw)}
        className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-sm text-blue-800 flex items-center justify-between transition-colors hover:bg-blue-100"
      >
        <span className="flex items-center gap-2 font-medium">
          <Info className="w-4 h-4" />
          {t.otLawInfoTitle}
        </span>
        {showLaw ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {showLaw && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-gray-700 leading-relaxed -mt-2 space-y-2">
          <p className="font-semibold text-blue-900">{t.otLawInfoBody1}</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>{t.otLawItem1}</li>
            <li>{t.otLawItem2}</li>
            <li>{t.otLawItem3}</li>
            <li>{t.otLawItem4}</li>
            <li>{t.otLawItem5}</li>
          </ul>
          <p className="text-xs text-gray-500 pt-1">{t.otLawNote}</p>
        </div>
      )}

      {/* Form */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.otSalaryLabel}</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder="45000"
            min="1"
          />
          {salary && Number(salary) > 0 && (
            <p className="text-xs text-gray-400 mt-1">{t.otHourlyWage}：NT$ {(Number(salary) / 30 / 8).toFixed(2)}</p>
          )}
        </div>

        {/* 平日加班 */}
        <div className="border-t pt-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            {t.otWeekdaySection}
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">{t.otWeekday1Short}</label>
              <input
                type="number"
                value={weekdayOT1}
                onChange={(e) => setWeekdayOT1(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                placeholder="0"
                min="0"
              />
              <p className="text-[11px] text-blue-600 mt-0.5">× 1⅓</p>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">{t.otWeekday2Short}</label>
              <input
                type="number"
                value={weekdayOT2}
                onChange={(e) => setWeekdayOT2(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                placeholder="0"
                min="0"
              />
              <p className="text-[11px] text-amber-600 mt-0.5">× 1⅔</p>
            </div>
          </div>
        </div>

        {/* 休息日加班 */}
        <div className="border-t pt-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            {t.otRestDaySection}
          </h4>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">{t.otRestDay1Short}</label>
              <input
                type="number"
                value={restDayOT1}
                onChange={(e) => setRestDayOT1(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                placeholder="0"
                min="0"
              />
              <p className="text-[11px] text-blue-600 mt-0.5">× 1⅓</p>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">{t.otRestDay2Short}</label>
              <input
                type="number"
                value={restDayOT2}
                onChange={(e) => setRestDayOT2(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                placeholder="0"
                min="0"
              />
              <p className="text-[11px] text-amber-600 mt-0.5">× 1⅔</p>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">{t.otRestDay3Short}</label>
              <input
                type="number"
                value={restDayOT3}
                onChange={(e) => setRestDayOT3(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                placeholder="0"
                min="0"
              />
              <p className="text-[11px] text-red-600 mt-0.5">× 2⅔</p>
            </div>
          </div>
        </div>

        {/* 國定假日 / 例假日 */}
        <div className="border-t pt-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            {t.otHolidaySection}
          </h4>
          <div>
            <label className="block text-xs text-gray-500 mb-1">{t.otHolidayShort}</label>
            <input
              type="number"
              value={holidayOT}
              onChange={(e) => setHolidayOT(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
              placeholder="0"
              min="0"
            />
            <p className="text-[11px] text-red-600 mt-0.5">× 2</p>
          </div>
        </div>

        <button
          onClick={calculate}
          disabled={!salary || Number(salary) <= 0}
          className="mt-2 w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-colors shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t.otCalculateBtn}
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="mt-2 space-y-4">
          {/* Summary Card */}
          <div className="bg-gradient-to-br from-[#1A237E] to-[#283593] text-white p-5 rounded-2xl shadow-lg">
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {t.otResultTitle}
            </h3>
            <p className="text-blue-200 text-sm mb-4">
              {t.otHourlyWage}：NT$ {result.hourlyWage.toFixed(2)}
              <span className="text-xs ml-1 text-blue-300">({t.otHourlyFormula})</span>
            </p>

            <div className="space-y-3 text-sm">
              {result.entries.map((entry, i) => (
                <div key={i} className="border-b border-white/20 pb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-blue-200">{entry.label}</span>
                    <span className="font-semibold text-amber-300">NT$ {entry.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs text-blue-300">
                    <span>{entry.hours} {t.otHours} × {entry.rateLabel}</span>
                    <span>= {entry.hours} × {result.hourlyWage.toFixed(2)} × {entry.rate.toFixed(4)}</span>
                  </div>
                  <p className="text-[11px] text-blue-400 mt-1">📖 {entry.legalBasis}</p>
                </div>
              ))}

              {result.entries.length === 0 && (
                <p className="text-blue-300 text-center py-4">{t.otNoHours}</p>
              )}

              {result.entries.length > 0 && (
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-base">{t.otTotal}</span>
                  <span className="font-extrabold text-2xl text-amber-300 drop-shadow-sm">
                    NT$ {result.totalAmount.toLocaleString()}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* 存入 localStorage 供存證信函使用 */}
          {result.totalAmount > 0 && (
            <div className="bg-amber-50 border border-amber-200 text-amber-800 p-3.5 rounded-xl text-sm flex items-start gap-2">
              <Info className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{t.otTip}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
