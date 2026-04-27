import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Download, FileText } from 'lucide-react';

export default function DocumentPreview() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { 
    type: 'attest' | 'mediation'; 
    salary: string; 
    startDate: string; 
    endDate: string; 
    result: { years: number; monthsOfPay: number; totalPay: number } 
  };

  if (!state) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500 mb-4">查無試算資料，請先進行試算。</p>
        <button onClick={() => navigate('/calculator')} className="text-primary underline">返回試算機</button>
      </div>
    );
  }

  const { type, salary, startDate, endDate, result } = state;

  const today = new Date();
  const dateStr = `${today.getFullYear()} 年 ${today.getMonth() + 1} 月 ${today.getDate()} 日`;

  const attestTemplate = `【存證信函範本 - 請求給付資遣費】

敬啟者：

緣本人自民國（下同）${new Date(startDate).getFullYear() - 1911}年${new Date(startDate).getMonth() + 1}月${new Date(startDate).getDate()}日起受僱於 貴公司。

詎料，貴公司於 ${new Date(endDate).getFullYear() - 1911}年${new Date(endDate).getMonth() + 1}月${new Date(endDate).getDate()}日，無預警（或以不當理由）終止勞動契約。依勞動基準法第11條及第14條等相關規定，貴公司應依法給付資遣費。

經查，本人任職期間平均月薪為新台幣 ${salary} 元，年資計 ${result.years.toFixed(2)} 年。依勞工退休金條例第12條規定，貴公司應給付本人資遣費新台幣 ${result.totalPay.toLocaleString()} 元。

為保障本人權益，特發此函，促請 貴公司於函到7日內，將上開資遣費新台幣 ${result.totalPay.toLocaleString()} 元匯入本人原薪資帳戶。若逾期未給付，本人將逕向勞工行政主管機關申訴並聲請勞資爭議調解，希勿自誤為禱。

寄件人：（請簽名）
日期：${dateStr}`;

  const mediationTemplate = `【勞資爭議調解申請書 (草稿)】

一、申請人資料：
姓名：（請填寫）
聯絡電話：（請填寫）

二、相對人（雇主）資料：
公司名稱：（請填寫）
負責人：（請填寫）

三、爭議要點：
勞工自 ${new Date(startDate).getFullYear() - 1911}年${new Date(startDate).getMonth() + 1}月${new Date(startDate).getDate()}日 起受僱於相對人，平均工資為 ${salary} 元。相對人於 ${new Date(endDate).getFullYear() - 1911}年${new Date(endDate).getMonth() + 1}月${new Date(endDate).getDate()}日 終止勞動契約，惟未依法給付資遣費。

四、請求調解事項：
請求相對人依法給付資遣費新台幣 ${result.totalPay.toLocaleString()} 元。（年資：${result.years.toFixed(2)}年，適用勞退新制基數：${result.monthsOfPay.toFixed(2)}個月）

五、其他補充說明：
相對人未依勞動基準法規定辦理資遣通報及發給非自願離職證明書，併同請求發給非自願離職證明書以利申請失業給付。

申請日期：${dateStr}`;

  const content = type === 'attest' ? attestTemplate : mediationTemplate;
  const title = type === 'attest' ? '存證信函預覽' : '勞資調解申請書預覽';

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    alert('已複製到剪貼簿！');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-68px)]">
      <div className="bg-white p-4 shadow-sm z-10 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate(-1)} className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <FileText className="text-primary w-5 h-5" />
          {title}
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-3 rounded-lg text-sm">
          <strong>提示：</strong> 此為系統自動生成之範本草稿，請填入「（請填寫）」的實際資訊後再行使用。
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 whitespace-pre-wrap text-sm text-gray-700 leading-relaxed font-serif">
          {content}
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-200 shrink-0 flex gap-3">
        <button 
          onClick={handleCopy}
          className="flex-1 bg-white text-primary border border-primary font-medium py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 active:scale-95"
        >
          <Copy className="w-4 h-4" /> 複製文字
        </button>
        <button 
          onClick={() => alert('此功能在正式版中將生成 PDF 下載')}
          className="flex-1 bg-primary text-white font-medium py-3 rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 active:scale-95"
        >
          <Download className="w-4 h-4" /> 匯出 PDF
        </button>
      </div>
    </div>
  );
}
