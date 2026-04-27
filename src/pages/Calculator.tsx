import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { differenceInDays } from 'date-fns';
import { ArrowLeft, Calculator as CalcIcon, FileText } from 'lucide-react';

export default function Calculator() {
  const navigate = useNavigate();
  const [salary, setSalary] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState<{ years: number; monthsOfPay: number; totalPay: number } | null>(null);

  const calculate = () => {
    if (!salary || !startDate || !endDate) return;
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);
    
    if (eDate <= sDate) {
      alert("離職日期必須晚於到職日期");
      return;
    }

    const days = differenceInDays(eDate, sDate) + 1;
    const years = days / 365.25;
    const monthsOfPay = Math.min(years * 0.5, 6);
    const totalPay = Math.floor(monthsOfPay * parseInt(salary, 10));

    setResult({ years, monthsOfPay, totalPay });
  };

  const handleGenerateDoc = (type: 'attest' | 'mediation') => {
    navigate('/document', { state: { type, salary, startDate, endDate, result } });
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center gap-3 mb-2">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-full shadow-sm text-gray-500 hover:text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <CalcIcon className="text-primary w-5 h-5" />
          權益試算機
        </h2>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">平均月薪 (新台幣)</label>
          <input 
            type="number" 
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder="例如：45000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">到職日期</label>
          <input 
            type="date" 
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">預計離職日期</label>
          <input 
            type="date" 
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        </div>

        <button 
          onClick={calculate}
          className="mt-2 w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-colors shadow-md active:scale-[0.98]"
        >
          開始試算
        </button>
      </div>

      {result && (
        <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 mt-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <h3 className="text-lg font-bold text-primary mb-3">試算結果</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between border-b border-blue-200/50 pb-2">
              <span>服務年資</span>
              <span className="font-semibold">{result.years.toFixed(2)} 年</span>
            </div>
            <div className="flex justify-between border-b border-blue-200/50 pb-2">
              <span>勞基法新制基數</span>
              <span className="font-semibold">{result.monthsOfPay.toFixed(2)} 個月 <span className="text-xs text-gray-500">(最高 6 個月)</span></span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="font-bold text-base">預估資遣費</span>
              <span className="font-bold text-xl text-red-600">NT$ {result.totalPay.toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button 
              onClick={() => handleGenerateDoc('attest')}
              className="w-full bg-white text-primary border border-primary font-medium py-2.5 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" /> 產生存證信函範本
            </button>
            <button 
              onClick={() => handleGenerateDoc('mediation')}
              className="w-full bg-white text-gray-700 border border-gray-300 font-medium py-2.5 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" /> 產生勞資調解申請書
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
