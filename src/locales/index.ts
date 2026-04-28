export type Lang = 'zh-TW' | 'en' | 'th';

export interface Translations {
  // Header
  appName: string;
  privacyNote: string;
  // Dashboard
  welcome: string;
  welcomeSub: string;
  aiConsult: string;
  aiConsultSub: string;
  calculator: string;
  calculatorSub: string;
  privacyFooter: string;
  // Calculator
  avgSalary: string;
  startDate: string;
  endDate: string;
  unusedLeave: string;
  unusedLeavePlaceholder: string;
  calculate: string;
  resultTitle: string;
  serviceYears: string;
  severanceBase: string;
  severanceBaseNote: string;
  severancePay: string;
  noticePeriod: string;
  noticePeriodDays: string;
  noticeWage: string;
  leaveCompensation: string;
  totalCompensation: string;
  jobSearchLeaveReminder: string;
  generateAttest: string;
  generateMediation: string;
  copyReport: string;
  // Document Preview
  attestTitle: string;
  mediationTitle: string;
  docHint: string;
  copyText: string;
  exportPdf: string;
  // Consultation
  aiTitle: string;
  aiGreeting: string;
  inputPlaceholder: string;
  apiKeyMissing: string;
  apiFailed: string;
  unknownError: string;
  apiKeyHint: string;
  // Common
  back: string;
  days: string;
  months: string;
  years: string;
  ntd: string;
  noData: string;
  goToCalc: string;
  dateError: string;
  // Risk Assessment
  riskAssessment: string;
  riskAssessmentSub: string;
  riskTitle: string;
  riskSubtitle: string;
  analyzeRisk: string;
  risk1: string;
  risk2: string;
  risk3: string;
  risk4: string;
  risk5: string;
  // Contract Analysis
  contractAnalysis: string;
  contractAnalysisSub: string;
  contractTitle: string;
  contractSubtitle: string;
  contractPlaceholder: string;
  analyzeContract: string;
  // Legal Letter Generator
  legalLetterGenerator: string;
  legalLetterGeneratorSub: string;
}

const zh: Translations = {
  appName: 'Labor Guard',
  privacyNote: '匿名查詢，紀錄不留存',
  welcome: '歡迎使用 Labor Guard',
  welcomeSub: '您的專屬勞權智能輔助工具，保護您的職場權益。',
  aiConsult: 'AI 法律諮詢',
  aiConsultSub: '解析勞基法，提供行動建議',
  calculator: '權益試算機',
  calculatorSub: '資遣費試算與一鍵產出文件',
  privacyFooter: '所有查詢皆為匿名處理，保障您的個人隱私',
  avgSalary: '平均月薪 (新台幣)',
  startDate: '到職日期',
  endDate: '預計離職日期',
  unusedLeave: '未休特休天數',
  unusedLeavePlaceholder: '例如：7',
  calculate: '開始試算',
  resultTitle: '權益明細卡',
  serviceYears: '服務年資',
  severanceBase: '勞基法新制基數',
  severanceBaseNote: '(最高 6 個月)',
  severancePay: '資遣費',
  noticePeriod: '預告期',
  noticePeriodDays: '天',
  noticeWage: '預告工資',
  leaveCompensation: '特休未休折算',
  totalCompensation: '總應得補償',
  jobSearchLeaveReminder: '💡 提醒：預告期間內，您每週可請 2 日有薪「謀職假」，不影響全勤。',
  generateAttest: '產生存證信函範本',
  generateMediation: '產生勞資調解申請書',
  copyReport: '複製文字報告',
  attestTitle: '存證信函預覽',
  mediationTitle: '勞資調解申請書預覽',
  docHint: '此為系統自動生成之範本草稿，請填入「（請填寫）」的實際資訊後再行使用。',
  copyText: '複製文字',
  exportPdf: '匯出 PDF',
  aiTitle: 'AI 法律諮詢',
  aiGreeting: '您好，我是您的專屬勞資調解員。請問您目前遇到了什麼職場爭議？（例如：公司未給付加班費、無預警解雇等）',
  inputPlaceholder: '請描述您的職場爭議狀況...',
  apiKeyMissing: '未設定 API Key (VITE_GEMINI_API_KEY)',
  apiFailed: 'API 請求失敗',
  unknownError: '發生未知錯誤',
  apiKeyHint: '（請確認您是否已在環境變數中設定 VITE_GEMINI_API_KEY）',
  back: '返回',
  days: '天',
  months: '個月',
  years: '年',
  ntd: 'NT$',
  noData: '查無試算資料，請先進行試算。',
  goToCalc: '前往試算機',
  dateError: '離職日期必須晚於到職日期',
  riskAssessment: '職場風險體檢',
  riskAssessmentSub: '互動式清單，AI 總結潛在風險',
  riskTitle: '職場風險體檢',
  riskSubtitle: '請勾選您目前在職場遇到的狀況，AI 將為您評估潛在法律風險。',
  analyzeRisk: '開始體檢',
  risk1: '公司未依法給付加班費或強制補休',
  risk2: '沒有投保勞健保，或高薪低報',
  risk3: '遭遇無預警解雇或不當調動',
  risk4: '請假（如病假、生理假）遭到刁難或扣全勤',
  risk5: '遭遇職場霸凌或言語暴力',
  contractAnalysis: '合約陷阱解析',
  contractAnalysisSub: '貼上合約條文，AI 幫你抓出陷阱',
  contractTitle: '合約陷阱解析',
  contractSubtitle: '請貼上您覺得有疑慮的勞動契約條文或公司規定，讓 AI 為您白話翻譯並找出陷阱。',
  contractPlaceholder: '例如：乙方離職須提前三個月告知，否則需賠償兩個月薪資作為懲罰性違約金...',
  analyzeContract: '分析條文',
  legalLetterGenerator: '存證信函產生器',
  legalLetterGeneratorSub: '根據試算結果自動產生法律草稿',
};

const en: Translations = {
  appName: 'Labor Guard',
  privacyNote: 'Anonymous queries, no records kept',
  welcome: 'Welcome to Labor Guard',
  welcomeSub: 'Your smart labor rights assistant, protecting your workplace rights.',
  aiConsult: 'AI Legal Consultation',
  aiConsultSub: 'Analyze Labor Standards Act & get suggestions',
  calculator: 'Benefits Calculator',
  calculatorSub: 'Severance pay calculation & document generation',
  privacyFooter: 'All queries are anonymous to protect your privacy',
  avgSalary: 'Average Monthly Salary (NTD)',
  startDate: 'Employment Start Date',
  endDate: 'Expected Last Date',
  unusedLeave: 'Unused Annual Leave (Days)',
  unusedLeavePlaceholder: 'e.g. 7',
  calculate: 'Calculate',
  resultTitle: 'Benefits Summary',
  serviceYears: 'Years of Service',
  severanceBase: 'Severance Base (New System)',
  severanceBaseNote: '(Max 6 months)',
  severancePay: 'Severance Pay',
  noticePeriod: 'Notice Period',
  noticePeriodDays: 'days',
  noticeWage: 'Notice Period Wage',
  leaveCompensation: 'Unused Leave Compensation',
  totalCompensation: 'Total Compensation',
  jobSearchLeaveReminder: '💡 Reminder: During the notice period, you are entitled to 2 paid days per week for job-seeking leave.',
  generateAttest: 'Generate Certified Letter',
  generateMediation: 'Generate Mediation Application',
  copyReport: 'Copy Text Report',
  attestTitle: 'Certified Letter Preview',
  mediationTitle: 'Mediation Application Preview',
  docHint: 'This is an auto-generated template. Please fill in the blanks before using.',
  copyText: 'Copy Text',
  exportPdf: 'Export PDF',
  aiTitle: 'AI Legal Consultation',
  aiGreeting: 'Hello, I am your labor dispute mediator. What workplace issue are you facing? (e.g. unpaid overtime, wrongful dismissal)',
  inputPlaceholder: 'Describe your workplace dispute...',
  apiKeyMissing: 'API Key not set (VITE_GEMINI_API_KEY)',
  apiFailed: 'API request failed',
  unknownError: 'An unknown error occurred',
  apiKeyHint: '(Please set VITE_GEMINI_API_KEY in environment variables)',
  back: 'Back',
  days: 'days',
  months: 'months',
  years: 'years',
  ntd: 'NT$',
  noData: 'No calculation data found. Please calculate first.',
  goToCalc: 'Go to Calculator',
  dateError: 'End date must be after start date',
  riskAssessment: 'Risk Assessment',
  riskAssessmentSub: 'Interactive checklist with AI summary',
  riskTitle: 'Workplace Risk Assessment',
  riskSubtitle: 'Select the issues you are facing, and AI will evaluate your legal risks.',
  analyzeRisk: 'Analyze Risks',
  risk1: 'Unpaid overtime or forced comp time',
  risk2: 'No labor insurance or underreported salary',
  risk3: 'Sudden dismissal or unfair transfer',
  risk4: 'Difficulties taking leave (sick, menstrual) or attendance deductions',
  risk5: 'Workplace bullying or verbal abuse',
  contractAnalysis: 'Contract Trap Analysis',
  contractAnalysisSub: 'Paste contract clauses for AI analysis',
  contractTitle: 'Contract Trap Analysis',
  contractSubtitle: 'Paste any suspicious labor contract clauses or company rules for plain-language translation and trap identification.',
  contractPlaceholder: 'e.g., Party B must give 3 months notice before resigning, or pay 2 months salary as penalty...',
  analyzeContract: 'Analyze Clauses',
  legalLetterGenerator: 'Legal Letter Generator',
  legalLetterGeneratorSub: 'Auto-generate legal drafts from calculations',
};

const th: Translations = {
  appName: 'Labor Guard',
  privacyNote: 'สอบถามแบบไม่ระบุตัวตน ไม่เก็บบันทึก',
  welcome: 'ยินดีต้อนรับสู่ Labor Guard',
  welcomeSub: 'ผู้ช่วยอัจฉริยะด้านสิทธิแรงงาน ปกป้องสิทธิในที่ทำงานของคุณ',
  aiConsult: 'ปรึกษากฎหมายด้วย AI',
  aiConsultSub: 'วิเคราะห์กฎหมายแรงงาน ให้คำแนะนำ',
  calculator: 'เครื่องคำนวณสิทธิ',
  calculatorSub: 'คำนวณค่าชดเชยและสร้างเอกสาร',
  privacyFooter: 'การสอบถามทั้งหมดเป็นแบบไม่ระบุตัวตนเพื่อปกป้องความเป็นส่วนตัว',
  avgSalary: 'เงินเดือนเฉลี่ย (NTD)',
  startDate: 'วันที่เริ่มงาน',
  endDate: 'วันที่สิ้นสุดงาน',
  unusedLeave: 'วันลาพักร้อนที่ยังไม่ได้ใช้',
  unusedLeavePlaceholder: 'เช่น 7',
  calculate: 'คำนวณ',
  resultTitle: 'สรุปสิทธิประโยชน์',
  serviceYears: 'อายุงาน',
  severanceBase: 'ฐานค่าชดเชย (ระบบใหม่)',
  severanceBaseNote: '(สูงสุด 6 เดือน)',
  severancePay: 'ค่าชดเชย',
  noticePeriod: 'ระยะเวลาแจ้งล่วงหน้า',
  noticePeriodDays: 'วัน',
  noticeWage: 'ค่าจ้างแจ้งล่วงหน้า',
  leaveCompensation: 'ค่าชดเชยวันลาที่ไม่ได้ใช้',
  totalCompensation: 'ค่าชดเชยรวม',
  jobSearchLeaveReminder: '💡 เตือน: ในช่วงแจ้งล่วงหน้า คุณสามารถลาหาง 2 วันต่อสัปดาห์โดยได้รับค่าจ้าง',
  generateAttest: 'สร้างหนังสือรับรอง',
  generateMediation: 'สร้างใบสมัครไกล่เกลี่ย',
  copyReport: 'คัดลอกรายงาน',
  attestTitle: 'ตัวอย่างหนังสือรับรอง',
  mediationTitle: 'ตัวอย่างใบสมัครไกล่เกลี่ย',
  docHint: 'นี่เป็นแม่แบบที่สร้างอัตโนมัติ กรุณากรอกข้อมูลจริงก่อนใช้งาน',
  copyText: 'คัดลอก',
  exportPdf: 'ส่งออก PDF',
  aiTitle: 'ปรึกษากฎหมายด้วย AI',
  aiGreeting: 'สวัสดีครับ ผมเป็นผู้ไกล่เกลี่ยข้อพิพาทแรงงานของคุณ คุณกำลังประสบปัญหาอะไรในที่ทำงาน? (เช่น ค่าล่วงเวลาที่ไม่ได้รับ การเลิกจ้างไม่เป็นธรรม)',
  inputPlaceholder: 'อธิบายปัญหาแรงงานของคุณ...',
  apiKeyMissing: 'ไม่ได้ตั้งค่า API Key (VITE_GEMINI_API_KEY)',
  apiFailed: 'คำขอ API ล้มเหลว',
  unknownError: 'เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ',
  apiKeyHint: '(กรุณาตั้งค่า VITE_GEMINI_API_KEY ในตัวแปรสภาพแวดล้อม)',
  back: 'กลับ',
  days: 'วัน',
  months: 'เดือน',
  years: 'ปี',
  ntd: 'NT$',
  noData: 'ไม่พบข้อมูลการคำนวณ กรุณาคำนวณก่อน',
  goToCalc: 'ไปที่เครื่องคำนวณ',
  dateError: 'วันสิ้นสุดต้องอยู่หลังวันเริ่มต้น',
  riskAssessment: 'ตรวจประเมินความเสี่ยง',
  riskAssessmentSub: 'เช็คลิสต์ประเมินความเสี่ยงพร้อมสรุปโดย AI',
  riskTitle: 'ประเมินความเสี่ยงในที่ทำงาน',
  riskSubtitle: 'โปรดเลือกปัญหาที่คุณพบ แล้ว AI จะประเมินความเสี่ยงทางกฎหมายให้คุณ',
  analyzeRisk: 'เริ่มการประเมิน',
  risk1: 'ไม่จ่ายค่าล่วงเวลาหรือบังคับหยุดชดเชย',
  risk2: 'ไม่มีประกันสังคมหรือแจ้งเงินเดือนต่ำกว่าจริง',
  risk3: 'เลิกจ้างกะทันหันหรือโยกย้ายไม่เป็นธรรม',
  risk4: 'ลาป่วยหรือลากิจยาก ถูกหักเงิน',
  risk5: 'ถูกกลั่นแกล้งหรือใช้ความรุนแรงด้วยวาจา',
  contractAnalysis: 'วิเคราะห์ข้อสัญญา',
  contractAnalysisSub: 'วางข้อสัญญาให้ AI ช่วยหาช่องโหว่',
  contractTitle: 'วิเคราะห์ข้อสัญญา',
  contractSubtitle: 'วางข้อสัญญาแรงงานหรือกฎบริษัทที่น่าสงสัย เพื่อให้ AI ช่วยแปลและหาช่องโหว่',
  contractPlaceholder: 'เช่น ฝ่าย ข ต้องแจ้งล่วงหน้า 3 เดือนก่อนลาออก มิฉะนั้นต้องจ่ายค่าปรับเท่ากับเงินเดือน 2 เดือน...',
  analyzeContract: 'วิเคราะห์ข้อสัญญา',
  legalLetterGenerator: 'สร้างจดหมายกฎหมาย',
  legalLetterGeneratorSub: 'สร้างจดหมายกฎหมายอัตโนมัติจากการคำนวณ',
};

export const translations: Record<Lang, Translations> = { 'zh-TW': zh, en, th };

export const langLabels: Record<Lang, string> = {
  'zh-TW': '中文',
  en: 'English',
  th: 'ไทย',
};
