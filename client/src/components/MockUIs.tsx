import { Play, Download, MessageSquare, BarChart3, Users, CalendarDays, CheckCircle2 } from "lucide-react";

export function MockDashboard() {
  return (
    <div className="w-full max-w-[320px] bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-7 bg-gray-100 flex items-center gap-1.5 px-3 border-b border-gray-200">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex flex-1">
        <div className="w-14 bg-gray-900 p-3 flex flex-col gap-3">
          <div className="h-2.5 bg-primary/80 rounded-full w-full" />
          <div className="h-2 bg-white/20 rounded-full w-full" />
          <div className="h-2 bg-white/20 rounded-full w-full" />
          <div className="h-2 bg-white/20 rounded-full w-full" />
        </div>
        <div className="flex-1 p-4 flex flex-col gap-4 bg-gray-50">
          <div className="flex gap-2">
            <div className="flex-1 bg-white rounded-lg p-3 text-center border border-gray-100 shadow-sm">
              <div className="text-xl font-bold text-gray-900">24</div>
              <div className="text-[10px] text-gray-500 font-medium uppercase mt-1">Leads</div>
            </div>
            <div className="flex-1 bg-white rounded-lg p-3 text-center border border-gray-100 shadow-sm">
              <div className="text-xl font-bold text-gray-900">8</div>
              <div className="text-[10px] text-gray-500 font-medium uppercase mt-1">Sales</div>
            </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm flex items-end gap-1.5 h-[80px]">
            {[40, 70, 45, 90, 60, 100, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/20 rounded-t-sm relative group cursor-pointer" style={{ height: `${h}%` }}>
                <div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-sm transition-all duration-300" style={{ height: '0%' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MockDownloadWidget() {
  const items = [
    { title: "Onboarding Video 1", size: "24.5 MB" },
    { title: "Agency Setup Guide", size: "12.1 MB" },
    { title: "Client Handover Doc", size: "3.4 MB" },
    { title: "Automation Templates", size: "8.9 MB" },
  ];

  return (
    <div className="w-full max-w-[360px] bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl hover:shadow-[0_20px_40px_rgba(139,38,53,0.15)] transition-all duration-300">
      <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
        <span className="text-[13px] font-extrabold text-white uppercase tracking-wider">Resources</span>
        <span className="text-[11px] font-bold text-white/60 bg-white/10 px-2.5 py-1 rounded-full">4 Files</span>
      </div>
      <div className="p-3 flex flex-col gap-2 max-h-[300px] overflow-y-auto mock-scroll">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/20 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-bold text-white truncate">{item.title}</div>
              <div className="text-[11px] text-white/50 font-medium mt-0.5">{item.size}</div>
            </div>
            <button className="bg-white text-primary text-[11px] font-bold px-3 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all flex items-center gap-1.5">
              <Download className="w-3 h-3" /> Get
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MockChat() {
  return (
    <div className="w-full max-w-[300px] bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
      <div className="p-3 bg-white border-b border-gray-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs shadow-md">JS</div>
        <div>
          <div className="text-sm font-bold text-gray-900">Support Team</div>
          <div className="text-[11px] text-green-500 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Online
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-50 flex flex-col gap-3 h-[200px] overflow-y-auto mock-scroll">
        <div className="self-start bg-white border border-gray-200 text-gray-700 text-xs py-2 px-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
          Hey! Need help setting up your first sub-account?
        </div>
        <div className="self-end bg-primary text-white text-xs py-2 px-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-md">
          Yes, where do I find the snapshot links?
        </div>
        <div className="self-start bg-white border border-gray-200 text-gray-700 text-xs py-2 px-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
          They are right in the module 2 dashboard! I'll send you a direct link now.
        </div>
      </div>
      <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
        <div className="flex-1 bg-gray-100 rounded-full px-3 py-2 text-[11px] text-gray-400">Type a message...</div>
        <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-light transition-colors">
          <Play className="w-3 h-3 fill-current ml-0.5" />
        </button>
      </div>
    </div>
  );
}
