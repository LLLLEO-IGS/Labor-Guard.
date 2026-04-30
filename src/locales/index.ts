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
  // Validation errors
  errSalaryRequired: string;
  errSalaryPositive: string;
  errSalaryMax: string;
  errDateRequired: string;
  errDateRange: string;
  errLeaveNonNegative: string;
  errLeaveMax: string;
  // Annual Leave Calculator
  annualLeaveCalc: string;
  annualLeaveCalcSub: string;
  alTitle: string;
  alSubtitle: string;
  alStartDate: string;
  alRefDate: string;
  alRefDateError: string;
  alCalculate: string;
  alResultTitle: string;
  alCurrentLeave: string;
  alBreakdownTitle: string;
  alLegalBasis: string;
  alLegalText: string;
  // Overtime Calculator
  overtimeCalc: string;
  overtimeCalcSub: string;
  otSalaryLabel: string;
  otHourlyWage: string;
  otHourlyFormula: string;
  otWeekdaySection: string;
  otWeekday1Short: string;
  otWeekday2Short: string;
  otWeekday1Label: string;
  otWeekday2Label: string;
  otWeekday1Law: string;
  otWeekday2Law: string;
  otRestDaySection: string;
  otRestDay1Short: string;
  otRestDay2Short: string;
  otRestDay3Short: string;
  otRestDay1Label: string;
  otRestDay2Label: string;
  otRestDay3Label: string;
  otRestDay1Law: string;
  otRestDay2Law: string;
  otRestDay3Law: string;
  otHolidaySection: string;
  otHolidayShort: string;
  otHolidayLabel: string;
  otHolidayLaw: string;
  otCalculateBtn: string;
  otResultTitle: string;
  otHours: string;
  otNoHours: string;
  otTotal: string;
  otTip: string;
  otLawInfoTitle: string;
  otLawInfoBody1: string;
  otLawItem1: string;
  otLawItem2: string;
  otLawItem3: string;
  otLawItem4: string;
  otLawItem5: string;
  otLawNote: string;
  // Document: overtime demand
  overtimeDemandOption: string;
}

const zh: Translations = {
  appName: 'Labor Guard',
  privacyNote: '匿名查詢，紀錄不留存',
  welcome: '歡迎使用 Labor Guard',
  welcomeSub: '您的專屬勞權智能輔助工具，保護您的職場權益。',
  aiConsult: '勞基法智能解析',
  aiConsultSub: '深度解析勞基法，提供行動建議',
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
  aiTitle: '勞基法智能解析',
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
  errSalaryRequired: '請輸入月薪',
  errSalaryPositive: '月薪必須為正數',
  errSalaryMax: '月薪不可超過 10,000,000',
  errDateRequired: '請選擇日期',
  errDateRange: '年份必須介於 1911 ~ 2100 之間',
  errLeaveNonNegative: '天數不可為負數',
  errLeaveMax: '天數不可超過 365 天',
  annualLeaveCalc: '特休天數試算',
  annualLeaveCalcSub: '依年資自動算出特休假天數',
  alTitle: '特休天數試算',
  alSubtitle: '依據勞基法第 38 條，依您的到職日期計算目前應有的特休天數。',
  alStartDate: '到職日期',
  alRefDate: '計算基準日（預設今天）',
  alRefDateError: '基準日必須晚於到職日',
  alCalculate: '計算特休',
  alResultTitle: '特休天數明細',
  alCurrentLeave: '目前應有特休',
  alBreakdownTitle: '各年資區間特休天數',
  alLegalBasis: '📖 法規依據',
  alLegalText: '勞動基準法第 38 條：勞工在同一雇主或事業單位，繼續工作滿一定期間者，應依規定給予特別休假。',
  overtimeCalc: '加班費精算工具',
  overtimeCalcSub: '依勞基法倍率自動計算加班費',
  otSalaryLabel: '本薪 / 月薪 (新台幣)',
  otHourlyWage: '時薪',
  otHourlyFormula: '月薪÷30÷8',
  otWeekdaySection: '平日加班',
  otWeekday1Short: '前 2 小時',
  otWeekday2Short: '第 3~4 小時',
  otWeekday1Label: '平日加班 (前2h)',
  otWeekday2Label: '平日加班 (3~4h)',
  otWeekday1Law: '勞基法§24-1：延長2小時，按時薪加給1/3以上',
  otWeekday2Law: '勞基法§24-1：再延長2小時，按時薪加給2/3以上',
  otRestDaySection: '休息日加班',
  otRestDay1Short: '前 2 小時',
  otRestDay2Short: '第 3~8 小時',
  otRestDay3Short: '第 9~12 小時',
  otRestDay1Label: '休息日 (前2h)',
  otRestDay2Label: '休息日 (3~8h)',
  otRestDay3Label: '休息日 (9~12h)',
  otRestDay1Law: '勞基法§24-2：休息日前2小時，按時薪加給1/3以上',
  otRestDay2Law: '勞基法§24-2：休息日第3~8小時，按時薪加給2/3以上',
  otRestDay3Law: '勞基法§24-2：休息日第9~12小時，按時薪加給5/3以上',
  otHolidaySection: '國定假日 / 例假日',
  otHolidayShort: '加班時數',
  otHolidayLabel: '國定假日加班',
  otHolidayLaw: '勞基法§39：休假日工作加倍發給工資',
  otCalculateBtn: '計算加班費',
  otResultTitle: '加班費明細',
  otHours: '小時',
  otNoHours: '尚未輸入加班時數',
  otTotal: '加班費合計',
  otTip: '💡 提醒：可至「存證信函產生器」使用「加班費催討」範本，向雇主正式催討欠付之加班費。',
  otLawInfoTitle: '📖 勞基法加班費倍率速查',
  otLawInfoBody1: '依勞動基準法第 24 條及第 39 條：',
  otLawItem1: '平日加班前 2 小時：時薪 × 1⅓ (加給 1/3)',
  otLawItem2: '平日加班第 3~4 小時：時薪 × 1⅔ (加給 2/3)',
  otLawItem3: '休息日前 2 小時：時薪 × 1⅓',
  otLawItem4: '休息日第 3~8 小時：時薪 × 1⅔；第 9~12 小時：時薪 × 2⅔',
  otLawItem5: '國定假日 / 例假日出勤：加倍發給 (時薪 × 2)',
  otLawNote: '※ 時薪 = 月薪 ÷ 30 ÷ 8',
  overtimeDemandOption: '加班費催討',
};

const en: Translations = {
  appName: 'Labor Guard',
  privacyNote: 'Anonymous queries, no records kept',
  welcome: 'Welcome to Labor Guard',
  welcomeSub: 'Your smart labor rights assistant, protecting your workplace rights.',
  aiConsult: 'LSA Smart Analysis',
  aiConsultSub: 'Deep analysis of Labor Standards Act & suggestions',
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
  aiTitle: 'LSA Smart Analysis',
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
  errSalaryRequired: 'Please enter salary',
  errSalaryPositive: 'Salary must be a positive number',
  errSalaryMax: 'Salary cannot exceed 10,000,000',
  errDateRequired: 'Please select a date',
  errDateRange: 'Year must be between 1911 and 2100',
  errLeaveNonNegative: 'Days cannot be negative',
  errLeaveMax: 'Days cannot exceed 365',
  annualLeaveCalc: 'Annual Leave Calculator',
  annualLeaveCalcSub: 'Auto-calculate your annual leave by seniority',
  alTitle: 'Annual Leave Calculator',
  alSubtitle: 'Calculate your annual leave entitlement based on your employment start date, per Labor Standards Act §38.',
  alStartDate: 'Employment Start Date',
  alRefDate: 'Reference Date (default: today)',
  alRefDateError: 'Reference date must be after start date',
  alCalculate: 'Calculate Leave',
  alResultTitle: 'Annual Leave Summary',
  alCurrentLeave: 'Current Entitlement',
  alBreakdownTitle: 'Leave by Seniority Bracket',
  alLegalBasis: '📖 Legal Basis',
  alLegalText: 'Labor Standards Act §38: Employees who have worked continuously for a specific period shall be granted special leave.',
  overtimeCalc: 'Overtime Pay Calculator',
  overtimeCalcSub: 'Auto-calculate overtime pay by LSA rates',
  otSalaryLabel: 'Base Salary (NTD)',
  otHourlyWage: 'Hourly Wage',
  otHourlyFormula: 'Salary÷30÷8',
  otWeekdaySection: 'Weekday Overtime',
  otWeekday1Short: 'First 2 hours',
  otWeekday2Short: 'Hours 3~4',
  otWeekday1Label: 'Weekday OT (first 2h)',
  otWeekday2Label: 'Weekday OT (3~4h)',
  otWeekday1Law: 'LSA §24-1: First 2 hours OT, pay +1/3 hourly rate',
  otWeekday2Law: 'LSA §24-1: Next 2 hours OT, pay +2/3 hourly rate',
  otRestDaySection: 'Rest Day Overtime',
  otRestDay1Short: 'First 2 hours',
  otRestDay2Short: 'Hours 3~8',
  otRestDay3Short: 'Hours 9~12',
  otRestDay1Label: 'Rest Day (first 2h)',
  otRestDay2Label: 'Rest Day (3~8h)',
  otRestDay3Label: 'Rest Day (9~12h)',
  otRestDay1Law: 'LSA §24-2: Rest day first 2h, pay +1/3 hourly rate',
  otRestDay2Law: 'LSA §24-2: Rest day hours 3~8, pay +2/3 hourly rate',
  otRestDay3Law: 'LSA §24-2: Rest day hours 9~12, pay +5/3 hourly rate',
  otHolidaySection: 'National / Regular Holidays',
  otHolidayShort: 'OT Hours',
  otHolidayLabel: 'Holiday Overtime',
  otHolidayLaw: 'LSA §39: Double pay for work on holidays',
  otCalculateBtn: 'Calculate Overtime Pay',
  otResultTitle: 'Overtime Pay Breakdown',
  otHours: 'hours',
  otNoHours: 'No overtime hours entered',
  otTotal: 'Total Overtime Pay',
  otTip: '💡 Tip: Use the "Overtime Pay Demand" template in the Legal Letter Generator to formally demand unpaid overtime.',
  otLawInfoTitle: '📖 LSA Overtime Rate Quick Reference',
  otLawInfoBody1: 'Per Labor Standards Act §24 and §39:',
  otLawItem1: 'Weekday OT first 2 hours: Hourly × 1⅓ (+1/3)',
  otLawItem2: 'Weekday OT hours 3~4: Hourly × 1⅔ (+2/3)',
  otLawItem3: 'Rest day first 2 hours: Hourly × 1⅓',
  otLawItem4: 'Rest day hours 3~8: Hourly × 1⅔; hours 9~12: Hourly × 2⅔',
  otLawItem5: 'National/regular holidays: Double pay (Hourly × 2)',
  otLawNote: '※ Hourly = Monthly Salary ÷ 30 ÷ 8',
  overtimeDemandOption: 'Overtime Pay Demand',
};

const th: Translations = {
  appName: 'Labor Guard',
  privacyNote: 'สอบถามแบบไม่ระบุตัวตน ไม่เก็บบันทึก',
  welcome: 'ยินดีต้อนรับสู่ Labor Guard',
  welcomeSub: 'ผู้ช่วยอัจฉริยะด้านสิทธิแรงงาน ปกป้องสิทธิในที่ทำงานของคุณ',
  aiConsult: 'วิเคราะห์กฎหมายแรงงานด้วย AI',
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
  aiTitle: 'วิเคราะห์กฎหมายแรงงานด้วย AI',
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
  errSalaryRequired: 'กรุณากรอกเงินเดือน',
  errSalaryPositive: 'เงินเดือนต้องเป็นจำนวนบวก',
  errSalaryMax: 'เงินเดือนไม่เกิน 10,000,000',
  errDateRequired: 'กรุณาเลือกวันที่',
  errDateRange: 'ปีต้องอยู่ระหว่าง 1911 ถึง 2100',
  errLeaveNonNegative: 'จำนวนวันต้องไม่ติดลบ',
  errLeaveMax: 'จำนวนวันไม่เกิน 365 วัน',
  annualLeaveCalc: 'คำนวณวันลาพักร้อน',
  annualLeaveCalcSub: 'คำนวณวันลาพักร้อนตามอายุงาน',
  alTitle: 'คำนวณวันลาพักร้อน',
  alSubtitle: 'คำนวณจำนวนวันลาพักร้อนที่คุณมีสิทธิ์ตามวันเริ่มงาน ตามกฎหมายแรงงาน มาตรา 38',
  alStartDate: 'วันเริ่มงาน',
  alRefDate: 'วันที่อ้างอิง (ค่าเริ่มต้น: วันนี้)',
  alRefDateError: 'วันที่อ้างอิงต้องอยู่หลังวันเริ่มงาน',
  alCalculate: 'คำนวณวันลา',
  alResultTitle: 'สรุปวันลาพักร้อน',
  alCurrentLeave: 'สิทธิ์ปัจจุบัน',
  alBreakdownTitle: 'วันลาตามช่วงอายุงาน',
  alLegalBasis: '📖 อ้างอิงกฎหมาย',
  alLegalText: 'กฎหมายมาตรฐานแรงงาน มาตรา 38: พนักงานที่ทำงานต่อเนื่องในระยะเวลาที่กำหนดจะได้รับวันลาพักร้อนพิเศษ',
  overtimeCalc: 'คำนวณค่าล่วงเวลา',
  overtimeCalcSub: 'คำนวณค่า OT ตามอัตรากฎหมาย',
  otSalaryLabel: 'เงินเดือนพื้นฐาน (NTD)',
  otHourlyWage: 'ค่าจ้างรายชั่วโมง',
  otHourlyFormula: 'เงินเดือน÷30÷8',
  otWeekdaySection: 'ล่วงเวลาวันธรรมดา',
  otWeekday1Short: '2 ชั่วโมงแรก',
  otWeekday2Short: 'ชั่วโมงที่ 3~4',
  otWeekday1Label: 'OT วันธรรมดา (2hแรก)',
  otWeekday2Label: 'OT วันธรรมดา (3~4h)',
  otWeekday1Law: 'มาตรา 24-1: OT 2 ชั่วโมงแรก +1/3',
  otWeekday2Law: 'มาตรา 24-1: OT ถัดไป 2 ชั่วโมง +2/3',
  otRestDaySection: 'ล่วงเวลาวันหยุด',
  otRestDay1Short: '2 ชั่วโมงแรก',
  otRestDay2Short: 'ชั่วโมงที่ 3~8',
  otRestDay3Short: 'ชั่วโมงที่ 9~12',
  otRestDay1Label: 'วันหยุด (2hแรก)',
  otRestDay2Label: 'วันหยุด (3~8h)',
  otRestDay3Label: 'วันหยุด (9~12h)',
  otRestDay1Law: 'มาตรา 24-2: วันหยุด 2hแรก +1/3',
  otRestDay2Law: 'มาตรา 24-2: วันหยุด 3~8h +2/3',
  otRestDay3Law: 'มาตรา 24-2: วันหยุด 9~12h +5/3',
  otHolidaySection: 'วันหยุดนักขัตฤกษ์',
  otHolidayShort: 'ชั่วโมง OT',
  otHolidayLabel: 'OT วันหยุด',
  otHolidayLaw: 'มาตรา 39: ทำงานวันหยุดจ่ายสองเท่า',
  otCalculateBtn: 'คำนวณค่า OT',
  otResultTitle: 'รายละเอียดค่าล่วงเวลา',
  otHours: 'ชั่วโมง',
  otNoHours: 'ยังไม่ได้กรอกชั่วโมง OT',
  otTotal: 'รวมค่าล่วงเวลา',
  otTip: '💡 เคล็ดลับ: ใช้แม่แบบ "ทวงถามค่า OT" ในเครื่องมือสร้างจดหมาย',
  otLawInfoTitle: '📖 อัตราค่าล่วงเวลาตามกฎหมาย',
  otLawInfoBody1: 'ตามกฎหมายแรงงาน มาตรา 24 และ 39:',
  otLawItem1: 'OT วันธรรมดา 2hแรก: รายชั่วโมง × 1⅓',
  otLawItem2: 'OT วันธรรมดา 3~4h: รายชั่วโมง × 1⅔',
  otLawItem3: 'วันหยุด 2hแรก: รายชั่วโมง × 1⅓',
  otLawItem4: 'วันหยุด 3~8h: × 1⅔; 9~12h: × 2⅔',
  otLawItem5: 'วันหยุดนักขัตฤกษ์: จ่ายสองเท่า (× 2)',
  otLawNote: '※ รายชั่วโมง = เงินเดือน ÷ 30 ÷ 8',
  overtimeDemandOption: 'ทวงถามค่าล่วงเวลา',
};

export const translations: Record<Lang, Translations> = { 'zh-TW': zh, en, th };

export const langLabels: Record<Lang, string> = {
  'zh-TW': '中文',
  en: 'English',
  th: 'ไทย',
};
