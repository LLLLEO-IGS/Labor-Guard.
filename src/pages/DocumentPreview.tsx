import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Download, FileText } from 'lucide-react';
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

type DocType = 'attest' | 'mediation' | 'overtime-demand';

export default function DocumentPreview() {
  const navigate = useNavigate();
  const { t } = useLang();
  const location = useLocation();
  let state = location.state as {
    type: DocType;
    salary: string;
    startDate: string;
    endDate: string;
    result: CalcResult;
  };

  if (!state) {
    try {
      const cached = localStorage.getItem('laborGuardCalcResult');
      if (cached) {
        state = { ...JSON.parse(cached), type: 'attest' };
      }
    } catch (e) {
      // ignore JSON parse error
    }
  }

  const [docType, setDocType] = useState<DocType>(state?.type || 'attest');

  if (!state) {
    return (
      <div className="flex flex-col h-[calc(100vh-68px)]">
        <div className="bg-white p-4 shadow-sm z-10 flex items-center gap-3 shrink-0">
          <button onClick={() => navigate(-1)} className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <FileText className="text-primary w-5 h-5" />
            {t.attestTitle}
          </h2>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <p className="text-gray-500 mb-4">{t.noData}</p>
          <button 
            onClick={() => navigate('/calculator')} 
            className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            {t.goToCalc}
          </button>
        </div>
      </div>
    );
  }

  const { salary, startDate, endDate, result } = state;

  const today = new Date();
  const dateStr = `${today.getFullYear()} 年 ${today.getMonth() + 1} 月 ${today.getDate()} 日`;

  const rocStart = `${new Date(startDate).getFullYear() - 1911}年${new Date(startDate).getMonth() + 1}月${new Date(startDate).getDate()}日`;
  const rocEnd = `${new Date(endDate).getFullYear() - 1911}年${new Date(endDate).getMonth() + 1}月${new Date(endDate).getDate()}日`;

  const breakdownLines = [
    `  ① 資遣費：新台幣 ${result.severancePay.toLocaleString()} 元（年資 ${result.years.toFixed(2)} 年，新制基數 ${result.monthsOfPay.toFixed(2)} 個月）`,
    `  ② 預告工資：新台幣 ${result.noticeWage.toLocaleString()} 元（預告期 ${result.noticeDays} 天）`,
    result.leaveCompensation > 0 ? `  ③ 特休未休折算工資：新台幣 ${result.leaveCompensation.toLocaleString()} 元` : '',
  ].filter(Boolean).join('\n');

  const attestTemplate = `【存證信函範本 - 請求給付資遣費暨相關補償】

敬啟者：

緣本人自民國（下同）${rocStart}起受僱於 貴公司，平均月薪為新台幣 ${salary} 元。

詎料，貴公司於 ${rocEnd}，無預警（或以不當理由）終止勞動契約。依勞動基準法第11條、第16條、第17條及勞工退休金條例第12條等相關規定，貴公司應依法給付下列款項：

${breakdownLines}

以上合計新台幣 ${result.totalCompensation.toLocaleString()} 元。

為保障本人權益，特發此函，促請 貴公司於函到7日內，將上開款項合計新台幣 ${result.totalCompensation.toLocaleString()} 元匯入本人原薪資帳戶，並依法開立非自願離職證明書。若逾期未給付，本人將逕向勞工行政主管機關申訴並聲請勞資爭議調解，希勿自誤為禱。

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
勞工自 ${rocStart} 起受僱於相對人，平均工資為新台幣 ${salary} 元。相對人於 ${rocEnd} 終止勞動契約，惟未依法給付資遣費、預告工資及特休未休工資。

四、請求調解事項：
請求相對人依法給付下列款項：
${breakdownLines}

以上合計新台幣 ${result.totalCompensation.toLocaleString()} 元。

併同請求相對人發給非自願離職證明書，以利申請失業給付。

五、其他補充說明：
相對人未依勞動基準法第16條規定預告即逕行終止勞動契約，亦未依同法第17條規定發給資遣費，且未依就業保險法第25條規定辦理資遣通報。

申請日期：${dateStr}`;

  const hourlyWage = (Number(salary) / 30 / 8).toFixed(2);

  const overtimeDemandTemplate = `【存證信函範本 - 請求給付加班費】

敬啟者：

緣本人自民國（下同）${rocStart}起受僱於 貴公司，擔任（請填寫職稱），月薪為新台幣 ${salary} 元，換算每小時工資約為新台幣 ${hourlyWage} 元（月薪 ÷ 30 ÷ 8）。

查本人於任職期間，經常依 貴公司指示或業務需要延長工作時間（加班），惟 貴公司迄今未依勞動基準法第24條規定加給延長工時工資（加班費），茲就本人主張之加班事實及應付金額，詳述如下：

一、加班期間：民國（請填寫起始日期）至（請填寫結束日期）
二、加班時數及金額明細：
  （請填寫具體日期、加班時數及依法應計之加班費金額）

  ※ 依勞基法第24條第1項：
    • 平日延長工時前 2 小時：按時薪加給 1/3 以上
    • 平日延長工時第 3~4 小時：按時薪加給 2/3 以上
  ※ 依勞基法第24條第2項（休息日加班）：
    • 前 2 小時：按時薪加給 1/3 以上
    • 第 3~8 小時：按時薪加給 2/3 以上
    • 第 9~12 小時：按時薪加給 5/3 以上
  ※ 依勞基法第39條（國定假日/例假日出勤）：
    • 加倍發給工資

三、合計應付加班費：新台幣（請填寫）元

依勞動基準法第24條、第39條暨相關函釋，雇主使勞工於正常工時以外延長工作時間，應依法定倍率加給工資，且不得以補休取代加班費（除勞工自願選擇補休外）。

為保障本人權益，特發此函，促請 貴公司於函到7日內，將上開積欠之加班費全數匯入本人薪資帳戶。若逾期未給付，本人將逕向勞動主管機關申訴檢舉，並聲請勞資爭議調解，以維權益，希勿自誤為禱。

寄件人：（請簽名）
日期：${dateStr}`;

  const templates: Record<DocType, string> = {
    'attest': attestTemplate,
    'mediation': mediationTemplate,
    'overtime-demand': overtimeDemandTemplate,
  };

  const titleMap: Record<DocType, string> = {
    'attest': t.attestTitle,
    'mediation': t.mediationTitle,
    'overtime-demand': t.overtimeDemandOption,
  };

  const content = templates[docType];
  const title = titleMap[docType];

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
        {/* Template Type Selector */}
        <div className="flex gap-2 flex-wrap">
          {(['attest', 'mediation', 'overtime-demand'] as DocType[]).map((dt) => (
            <button
              key={dt}
              onClick={() => setDocType(dt)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${docType === dt ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'}`}
            >
              {titleMap[dt]}
            </button>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-3 rounded-lg text-sm">
          <strong>提示：</strong> {t.docHint}
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
          <Copy className="w-4 h-4" /> {t.copyText}
        </button>
        <button
          onClick={() => window.print()}
          className="flex-1 bg-primary text-white font-medium py-3 rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 active:scale-95"
        >
          <Download className="w-4 h-4" /> {t.exportPdf}
        </button>
      </div>
    </div>
  );
}
