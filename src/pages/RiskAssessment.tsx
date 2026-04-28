import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ClipboardCheck, Bot, ShieldAlert } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

export default function RiskAssessment() {
  const navigate = useNavigate();
  const { lang, t } = useLang();
  
  const risks = [
    { id: 'risk1', label: t.risk1 },
    { id: 'risk2', label: t.risk2 },
    { id: 'risk3', label: t.risk3 },
    { id: 'risk4', label: t.risk4 },
    { id: 'risk5', label: t.risk5 },
  ];

  const [selectedRisks, setSelectedRisks] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [result]);

  const toggleRisk = (id: string) => {
    setSelectedRisks(prev => 
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  const handleAnalyze = async () => {
    if (selectedRisks.length === 0 || isLoading) return;

    setIsLoading(true);
    setErrorMsg('');
    setResult(null);

    const selectedTexts = risks.filter(r => selectedRisks.includes(r.id)).map(r => r.label);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error(t.apiKeyMissing);
      }

      const langInstruction = lang === 'zh-TW' ? '請使用繁體中文回覆。' : (lang === 'en' ? 'Please reply in English.' : 'กรุณาตอบเป็นภาษาไทย');
      
      const systemPrompt = `你是一位專業的勞資調解員與法律專家。${langInstruction}
使用者目前面臨以下職場狀況：
${selectedTexts.map(text => '- ' + text).join('\n')}

請嚴格按照以下三個區塊進行回覆（使用 Markdown 標題）：
## 🚨 潛在風險分析
（具體說明雇主這些行為觸犯了哪些勞動法規）

## ⚖️ 勞工權益說明
（說明在這種情況下，勞工可以主張什麼權利，例如請求資遣費、要求補發工資等）

## 🛡️ 第一步行動建議
（給出具體、安全且可執行的第一步，例如如何蒐證、該打哪支電話申訴等）

請保持專業、有同理心，且排版清晰。`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: [{
            role: 'user',
            parts: [{ text: "請幫我進行職場風險體檢" }]
          }]
        })
      });

      if (!response.ok) {
        let errorDetail = `HTTP ${response.status}`;
        try {
          const errorData = await response.json();
          errorDetail = errorData?.error?.message || JSON.stringify(errorData);
        } catch {
          errorDetail = `HTTP ${response.status} ${response.statusText}`;
        }
        throw new Error(`${t.apiFailed}（${errorDetail}）`);
      }

      const data = await response.json();
      const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || '抱歉，我目前無法回應。';
      setResult(replyText);

    } catch (error: any) {
      setErrorMsg(`${error.message || t.unknownError}\n\n${t.apiKeyHint}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-68px)]">
      <div className="bg-white p-4 shadow-sm z-10 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate(-1)} className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <ClipboardCheck className="text-primary w-5 h-5" />
          {t.riskTitle}
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-5">
        <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm leading-relaxed">
          {t.riskSubtitle}
        </div>

        <div className="flex flex-col gap-3">
          {risks.map(risk => (
            <label 
              key={risk.id} 
              className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedRisks.includes(risk.id) ? 'border-primary bg-primary/5' : 'border-gray-100 bg-white hover:border-gray-200'}`}
            >
              <div className="mt-0.5 flex-shrink-0">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                  checked={selectedRisks.includes(risk.id)}
                  onChange={() => toggleRisk(risk.id)}
                />
              </div>
              <span className={`text-sm ${selectedRisks.includes(risk.id) ? 'font-medium text-primary' : 'text-gray-700'}`}>
                {risk.label}
              </span>
            </label>
          ))}
        </div>

        <button
          onClick={handleAnalyze}
          disabled={selectedRisks.length === 0 || isLoading}
          className="mt-2 w-full bg-primary hover:bg-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              分析中...
            </div>
          ) : (
            <>
              <ShieldAlert className="w-5 h-5" /> {t.analyzeRisk}
            </>
          )}
        </button>

        {errorMsg && (
          <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm whitespace-pre-wrap">
            {errorMsg}
          </div>
        )}

        {result && (
          <div ref={resultRef} className="mt-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-800">分析報告</h3>
            </div>
            <div className="text-sm leading-relaxed whitespace-pre-wrap text-gray-700 font-serif">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
