import { Link } from 'react-router-dom';
import { Scale, Calculator as CalcIcon, ShieldCheck, ChevronRight, ClipboardCheck, FileSearch, FileSignature, CalendarDays, Clock } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

export default function Dashboard() {
  const { t } = useLang();

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="text-center py-6">
        <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <ShieldCheck className="text-primary w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{t.welcome}</h2>
        <p className="text-gray-500 mt-2 text-sm">{t.welcomeSub}</p>
      </div>

      <div className="flex flex-col gap-4">
        <Link
          to="/consultation"
          className="group bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors text-primary">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">{t.aiConsult}</h3>
              <p className="text-gray-500 text-xs mt-1">{t.aiConsultSub}</p>
            </div>
          </div>
          <ChevronRight className="text-gray-300 group-hover:text-primary transition-colors" />
        </Link>

        <Link
          to="/calculator"
          className="group bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors text-primary">
              <CalcIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">{t.calculator}</h3>
              <p className="text-gray-500 text-xs mt-1">{t.calculatorSub}</p>
            </div>
          </div>
          <ChevronRight className="text-gray-300 group-hover:text-primary transition-colors" />
        </Link>

        <Link
          to="/annual-leave"
          className="group bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors text-primary">
              <CalendarDays className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">{t.annualLeaveCalc}</h3>
              <p className="text-gray-500 text-xs mt-1">{t.annualLeaveCalcSub}</p>
            </div>
          </div>
          <ChevronRight className="text-gray-300 group-hover:text-primary transition-colors" />
        </Link>

        <Link
          to="/overtime-calc"
          className="group bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors text-primary">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">{t.overtimeCalc}</h3>
              <p className="text-gray-500 text-xs mt-1">{t.overtimeCalcSub}</p>
            </div>
          </div>
          <ChevronRight className="text-gray-300 group-hover:text-primary transition-colors" />
        </Link>

        <Link
          to="/risk-assessment"
          className="group bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors text-primary">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">{t.riskAssessment}</h3>
              <p className="text-gray-500 text-xs mt-1">{t.riskAssessmentSub}</p>
            </div>
          </div>
          <ChevronRight className="text-gray-300 group-hover:text-primary transition-colors" />
        </Link>

        <Link
          to="/contract-analysis"
          className="group bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors text-primary">
              <FileSearch className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">{t.contractAnalysis}</h3>
              <p className="text-gray-500 text-xs mt-1">{t.contractAnalysisSub}</p>
            </div>
          </div>
          <ChevronRight className="text-gray-300 group-hover:text-primary transition-colors" />
        </Link>

        <Link
          to="/document"
          className="group bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors text-primary">
              <FileSignature className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">{t.legalLetterGenerator}</h3>
              <p className="text-gray-500 text-xs mt-1">{t.legalLetterGeneratorSub}</p>
            </div>
          </div>
          <ChevronRight className="text-gray-300 group-hover:text-primary transition-colors" />
        </Link>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        <p>{t.privacyFooter}</p>
      </div>
    </div>
  );
}
