import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Scale, Send, User, Bot, ClipboardList, Shield } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function Consultation() {
  const navigate = useNavigate();
  const { lang, t } = useLang();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: t.aiGreeting }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, string | null>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, expandedSections]);

  const toggleSection = (msgId: string, section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [msgId]: prev[msgId] === section ? null : section,
    }));
  };

  const langInstruction: Record<string, string> = {
    'zh-TW': '請使用繁體中文回覆。',
    en: 'Please reply in English.',
    th: 'กรุณาตอบเป็นภาษาไทย',
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error(t.apiKeyMissing);
      }

      const systemPrompt = `你是一位資深勞資調解員。${langInstruction[lang] || langInstruction['zh-TW']}

請根據使用者的勞資爭議問題，引用中華民國勞基法條文進行回覆。

你的回覆必須嚴格按照以下 5 個區塊輸出，每個區塊用 Markdown 標題標記：

## 📋 狀況分析
（針對使用者描述的爭議進行分析）

## 📖 適用法條
（引用具體的勞基法、勞退條例等條文）

## ✅ 行動建議
（具體、可操作的行動步驟）

## 🗂️ 證據收集清單
（條列出使用者應該保存的所有證據，例如：薪資單、打卡紀錄、LINE 對話截圖等，請盡量具體）

## 🛡️ 應對錦囊
（提供與雇主面對面談判時的專業語句範本，以及心理建設與注意事項）

回答請保持專業、同理心，且排版清晰。`;

      const combinedPrompt = `${systemPrompt}\n\n使用者的問題：\n${userMessage.content}`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            role: 'user',
            parts: [{ text: combinedPrompt }]
          }]
        })
      });

      if (!response.ok) {
        // 讀取 API 回傳的實際錯誤訊息，方便除錯
        let errorDetail = `HTTP ${response.status}`;
        try {
          const errorData = await response.json();
          errorDetail = errorData?.error?.message || JSON.stringify(errorData);
        } catch {
          // 若無法解析 JSON，就用 status text
          errorDetail = `HTTP ${response.status} ${response.statusText}`;
        }
        throw new Error(`${t.apiFailed}（${errorDetail}）`);
      }

      const data = await response.json();
      const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || '抱歉，我目前無法回應您的問題。';

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: replyText
      }]);
    } catch (error: any) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `系統提示：${error.message || t.unknownError}\n\n${t.apiKeyHint}`
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  /** 解析 AI 回覆，把證據清單和應對錦囊抽出來做成可折疊區塊 */
  const renderAssistantMessage = (msg: Message) => {
    const content = msg.content;

    // 嘗試解析出各區塊
    const evidenceMatch = content.match(/##\s*🗂️\s*證據收集清單([\s\S]*?)(?=##\s*🛡️|$)/);
    const tacticsMatch = content.match(/##\s*🛡️\s*應對錦囊([\s\S]*?)$/);
    const mainContent = content
      .replace(/##\s*🗂️\s*證據收集清單[\s\S]*?(?=##\s*🛡️|$)/, '')
      .replace(/##\s*🛡️\s*應對錦囊[\s\S]*$/, '')
      .trim();

    const evidenceText = evidenceMatch?.[1]?.trim();
    const tacticsText = tacticsMatch?.[1]?.trim();
    const hasExtras = evidenceText || tacticsText;

    return (
      <div className="space-y-2">
        <div className="p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm">
          {mainContent}
        </div>
        {hasExtras && (
          <div className="flex gap-2 pl-1">
            {evidenceText && (
              <button
                onClick={() => toggleSection(msg.id, 'evidence')}
                className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border transition-all ${expandedSections[msg.id] === 'evidence' ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-primary/40 hover:bg-blue-50'}`}
              >
                <ClipboardList className="w-3.5 h-3.5" /> 證據清單
              </button>
            )}
            {tacticsText && (
              <button
                onClick={() => toggleSection(msg.id, 'tactics')}
                className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border transition-all ${expandedSections[msg.id] === 'tactics' ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-primary/40 hover:bg-blue-50'}`}
              >
                <Shield className="w-3.5 h-3.5" /> 應對錦囊
              </button>
            )}
          </div>
        )}
        {expandedSections[msg.id] === 'evidence' && evidenceText && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-sm text-gray-800 whitespace-pre-wrap">
            <h4 className="font-bold text-primary mb-1 flex items-center gap-1"><ClipboardList className="w-4 h-4" /> 證據收集清單</h4>
            {evidenceText}
          </div>
        )}
        {expandedSections[msg.id] === 'tactics' && tacticsText && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-gray-800 whitespace-pre-wrap">
            <h4 className="font-bold text-amber-700 mb-1 flex items-center gap-1"><Shield className="w-4 h-4" /> 應對錦囊</h4>
            {tacticsText}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-[calc(100vh-68px)]">
      <div className="bg-white p-4 shadow-sm z-10 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate(-1)} className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Scale className="text-primary w-5 h-5" />
          {t.aiTitle}
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {messages.map(msg => (
          <div key={msg.id} className={`flex gap-3 max-w-[90%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-blue-100 text-primary' : 'bg-primary text-white'}`}>
              {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
            </div>
            {msg.role === 'assistant' ? (
              renderAssistantMessage(msg)
            ) : (
              <div className="p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap bg-primary text-white rounded-tr-sm">
                {msg.content}
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 max-w-[85%] self-start">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200 rounded-tl-sm shadow-sm flex gap-1 items-center">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:-.5s]"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-gray-200 shrink-0">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t.inputPlaceholder}
            className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 pl-4 pr-12 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 p-2 bg-primary text-white rounded-full disabled:opacity-50 hover:bg-primary-dark transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
