import { Mail, Linkedin, FileText, Github, MapPin, Star, Maximize2 } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <p className="text-center text-sm text-gray-500 mb-4">Cuộn từ trên xuống dưới →</p>

      {/* HERO SECTION */}
      <section className="bg-[#f2f0ea] border border-gray-200 rounded-2xl p-10 text-center space-y-4 shadow-sm">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-widest">Hero — Màn hình đầu tiên</p>
        <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto border-4 border-white shadow-sm">
          NT
        </div>
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-gray-900">Nguyễn Thành</h1>
          <p className="text-gray-600">Data Analyst • 1 năm kinh nghiệm</p>
          <p className="text-gray-500 italic">Biến dữ liệu thành insight bằng Power BI & SQL</p>
        </div>
        <div className="flex justify-center gap-3 pt-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition shadow-sm text-sm">
            <Linkedin size={16} className="text-blue-600" /> LinkedIn
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition shadow-sm text-sm">
            <Mail size={16} className="text-red-500" /> Email
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition shadow-sm text-sm font-bold">
             署 CV
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white border border-gray-100 rounded-2xl p-8 space-y-6 shadow-sm">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">About — Ngắn gọn</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <p className="text-sm font-semibold text-gray-500 mb-3">Tools</p>
            <div className="flex flex-wrap gap-2">
              {['Power BI', 'SQL', 'Excel'].map(tool => (
                <span key={tool} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">{tool}</span>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <p className="text-sm font-semibold text-gray-500 mb-3">Domain</p>
            <div className="flex flex-wrap gap-2">
              {['Sales', 'Finance'].map(domain => (
                <span key={domain} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">{domain}</span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed italic">
          3-4 dòng giới thiệu bản thân. Học trường nào, làm ở đâu, thích phân tích mảng gì...
        </p>
      </section>

      {/* PROJECT SECTION */}
      <section className="bg-white border border-gray-100 rounded-2xl p-8 space-y-6 shadow-sm">
        <div className="flex justify-between items-center">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Project — Phần chính</p>
          <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
            <Star size={12} fill="currentColor" /> Trọng tâm nhất
          </span>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Sales Performance Dashboard</h2>
          <p className="text-gray-600">2-3 dòng: dùng data gì, phân tích gì, insight chính tìm ra là gì</p>
          <div className="flex gap-2">
            {['Power BI', 'SQL Server', 'DAX'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium border border-gray-200">{tag}</span>
            ))}
          </div>
          
          {/* Mock Iframe Container */}
          <div className="relative w-full aspect-video bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-400 overflow-hidden">
            <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-medium">
              <FileText size={14}/> Power BI Report
            </div>
            <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-medium cursor-pointer hover:text-blue-500">
              <Maximize2 size={14}/> Full screen
            </div>
            <div className="text-center space-y-2 px-4">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-sm font-medium text-gray-500 italic">iframe embed Power BI ở đây</p>
              <p className="text-xs">responsive • interactive</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-[#f2f0ea] border border-gray-200 rounded-2xl p-10 text-center space-y-6 shadow-sm">
        <div className="space-y-4">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Contact</p>
            <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
              Sẵn sàng cho cơ hội mới • Ho Chi Minh City
            </h3>
        </div>
        <div className="flex justify-center gap-3 pt-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition shadow-sm text-sm">
            <Linkedin size={16} className="text-blue-600" /> LinkedIn
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition shadow-sm text-sm">
            <Mail size={16} className="text-red-500" /> Gmail
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition shadow-sm text-sm">
            <Github size={16} className="text-black" /> GitHub
          </button>
        </div>
      </section>
    </main>
  );
}
