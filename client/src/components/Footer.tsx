import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-display font-black text-xl">
                J
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">Josh's <span className="text-primary">GHL</span></span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
              The ultimate unbranded GoHighLevel onboarding experience. Save hundreds of hours and thousands of dollars with plug-and-play white-label videos.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Resources</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Video Modules</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Snapshots</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Setup Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Legal</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Josh's GHL Onboarding. All rights reserved.</p>
          <p>Not affiliated with or endorsed by HighLevel™.</p>
        </div>
      </div>
    </footer>
  );
}
