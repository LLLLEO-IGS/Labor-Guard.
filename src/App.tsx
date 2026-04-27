import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Calculator from './pages/Calculator';
import Consultation from './pages/Consultation';
import DocumentPreview from './pages/DocumentPreview';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen max-w-md mx-auto bg-white shadow-xl flex flex-col font-sans">
        <header className="bg-primary text-white p-4 shadow-md sticky top-0 z-10">
          <h1 className="text-xl font-bold text-center tracking-wide">Labor Guard</h1>
          <p className="text-xs text-center text-blue-200 mt-1">匿名查詢，紀錄不留存</p>
        </header>
        <main className="flex-1 overflow-y-auto bg-gray-50 relative">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/document" element={<DocumentPreview />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
