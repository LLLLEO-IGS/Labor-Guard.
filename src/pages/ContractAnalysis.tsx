import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileSearch, Bot, Sparkles } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

export default function ContractAnalysis() {
  const navigate = useNavigate();
  const { lang, t } = useLang();
  
  const [contractText, setContractText] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [result]);

  const handleAnalyze = async () => {
    if (!contractText.trim() || isLoading) return;

    setIsLoading(true);
    setErrorMsg('');
    setResult(null);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error(t.apiKeyMissing);
      }

      const langInstruction = lang === 'zh-TW' ? '請使用繁體中文回覆。' : (lang === 'en' ? 'Please reply in English.' : 'กรุณาตอบเป็นภาษาไทย');
      
      const systemPrompt = `你是一位熟悉勞動法規的專業律師。${langInstruction}

使用者會提供一段「勞動契約條款」或「公司內部規定」。
請幫忙抓出其中的法律陷阱、不合理之處或違法疑慮，並用「白話文」向勞工解釋。

請嚴格按照以下三個區塊進行回覆（使用 Markdown 標題）：
## 🧐 白話文翻譯
（用最簡單易懂的話，告訴勞工這條規定到底是什麼意思）

## ⚠️ 陷阱與違法疑慮
（點出這條規定是否合法，或者隱藏了什麼對勞工不利的陷阱。如果有違背勞基法，請引用條文說明無效）

## 💡 律師建議
（如果勞工遇到這種條款，該怎麼自保？例如：可以拒簽、簽了也無效、如何蒐證等）

請保持專業、語氣堅定，保護勞工權益。`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: [{
            role: 'user',
            parts: [{ text: \`要分析的條文內容如下：\\n\\n\${contractText}\` }]
          }]
        })
      });

      if (!response.ok) {
        let errorDetail = \`HTTP \${response.status}\`;
        try {
          const errorData = await response.json();
          errorDetail = errorData?.error?.message || JSON.stringify(errorData);
        } catch {
          errorDetail = \`HTTP \${response.status} \${response.statusText}\`;
        }
        throw new Error(\`\${t.apiFailed}（\${errorDetail}）\`);
      }

      const data = await response.json();
      const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || '抱歉，我目前無法回應。';
      setResult(replyText);

    } catch (error: any) {
      setErrorMsg(\`\${error.message || t.unknownError}\\n\\n\${t.apiKeyHint}\`);
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
          <FileSearch className="text-primary w-5 h-5" />
          {t.contractTitle}
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-5">
        <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm leading-relaxed">
          {t.contractSubtitle}
        </div>

        <div className="flex flex-col gap-3">
          <textarea
            value={contractText}
            onChange={(e) => setContractText(e.target.value)}
            placeholder={t.contractPlaceholder}
            className="w-full h-48 border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-sm leading-relaxed"
          />
        </div>

        <button
          onClick={handleAnalyze}
          disabled={!contractText.trim() || isLoading}
          className="mt-2 w-full bg-primary hover:bg-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              分析中...
            </div>
          ) : (
            <>
              <Sparkles className="w-5 h-5" /> {t.analyzeContract}
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
              <h3 className="font-bold text-gray-800">解析報告</h3>
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
