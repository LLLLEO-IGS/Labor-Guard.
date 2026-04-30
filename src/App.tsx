import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Globe } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Calculator from './pages/Calculator';
import Consultation from './pages/Consultation';
import DocumentPreview from './pages/DocumentPreview';
import RiskAssessment from './pages/RiskAssessment';
import ContractAnalysis from './pages/ContractAnalysis';
import AnnualLeaveCalc from './pages/AnnualLeaveCalc';
import OvertimeCalc from './pages/OvertimeCalc';
import { LanguageProvider, useLang } from './contexts/LanguageContext';
import { type Lang, langLabels } from './locales';

function Header() {
  const { lang, setLang, t } = useLang();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langs: Lang[] = ['zh-TW', 'en', 'th'];

  return (
    <header className="bg-primary text-white p-4 shadow-md sticky top-0 z-20">
      <div className="flex items-center justify-between">
        <div className="w-10" />
        <div className="text-center flex-1">
          <h1 className="text-xl font-bold tracking-wide">{t.appName}</h1>
          <p className="text-xs text-blue-200 mt-0.5">{t.privacyNote}</p>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Switch Language"
          >
            <Globe className="w-5 h-5" />
          </button>
          {showLangMenu && (
            <div className="absolute right-0 top-10 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-30 min-w-[100px]">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setShowLangMenu(false); }}
                  className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${lang === l ? 'bg-primary text-white font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {langLabels[l]}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen max-w-md mx-auto bg-white shadow-xl flex flex-col font-sans">
          <Header />
          <main className="flex-1 overflow-y-auto bg-gray-50 relative">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/document" element={<DocumentPreview />} />
              <Route path="/risk-assessment" element={<RiskAssessment />} />
              <Route path="/contract-analysis" element={<ContractAnalysis />} />
              <Route path="/annual-leave" element={<AnnualLeaveCalc />} />
              <Route path="/overtime-calc" element={<OvertimeCalc />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
