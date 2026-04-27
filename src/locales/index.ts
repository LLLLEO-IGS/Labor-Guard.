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
  goToCalc: '返回試算機',
  dateError: '離職日期必須晚於到職日期',
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
};

export const translations: Record<Lang, Translations> = { 'zh-TW': zh, en, th };

export const langLabels: Record<Lang, string> = {
  'zh-TW': '中文',
  en: 'English',
  th: 'ไทย',
};
