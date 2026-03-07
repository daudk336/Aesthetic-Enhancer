import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, PlayCircle, Star, Users, Zap, LayoutDashboard, Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", mega: "features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#proof" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-white/90 backdrop-blur-xl border-gray-200 shadow-sm py-3" : "bg-white border-transparent py-4"
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[#5a1822] flex items-center justify-center text-white font-display font-black text-xl shadow-lg group-hover:scale-105 transition-transform">
              J
            </div>
            <span className="font-display font-bold text-xl text-gray-900 tracking-tight">Josh's <span className="text-primary">GHL</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.mega && setActiveMega(link.mega)}
                onMouseLeave={() => setActiveMega(null)}
              >
                {link.href ? (
                  <a href={link.href} className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-primary hover:bg-primary/5 transition-all flex items-center gap-1">
                    {link.name}
                  </a>
                ) : (
                  <button className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-primary hover:bg-primary/5 transition-all flex items-center gap-1">
                    {link.name} <ChevronDown className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform" />
                  </button>
                )}

                {/* Mega Menu Dropdown */}
                {link.mega === "features" && (
                  <AnimatePresence>
                    {activeMega === "features" && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-6 flex gap-6"
                      >
                        <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-2">
                          <div className="col-span-2 text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2 border-b border-gray-100 pb-2">Modules Include</div>
                          
                          <a href="#" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group/link">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                              <PlayCircle className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-gray-900 group-hover/link:text-primary transition-colors">White-label Videos</div>
                              <div className="text-[11px] text-gray-500 mt-0.5">Brand them as your own</div>
                            </div>
                          </a>
                          
                          <a href="#" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group/link">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                              <LayoutDashboard className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-gray-900 group-hover/link:text-primary transition-colors">Setup Dashboards</div>
                              <div className="text-[11px] text-gray-500 mt-0.5">Plug & play templates</div>
                            </div>
                          </a>

                          <a href="#" className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group/link">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                              <Zap className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-gray-900 group-hover/link:text-primary transition-colors">Automations</div>
                              <div className="text-[11px] text-gray-500 mt-0.5">Pre-built workflows</div>
                            </div>
                          </a>
                        </div>
                        
                        <div className="w-[200px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 text-white flex flex-col justify-between shadow-inner">
                          <div>
                            <div className="text-[10px] font-black tracking-widest text-white/50 uppercase mb-3">Featured</div>
                            <div className="text-base font-bold leading-tight mb-2">The Ultimate Agency Snapshot</div>
                            <div className="text-xs text-white/70 line-clamp-3">Everything you need to onboard clients instantly without lifting a finger.</div>
                          </div>
                          <button className="mt-4 bg-white text-gray-900 text-xs font-bold py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-colors self-start">
                            View Snapshot
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors px-4 py-2">Log In</button>
            <button className="bg-primary hover:bg-primary-light text-white text-sm font-bold px-6 py-2.5 rounded-xl shadow-[0_4px_14px_rgba(139,38,53,0.3)] hover:shadow-[0_6px_20px_rgba(139,38,53,0.4)] hover:-translate-y-0.5 transition-all">
              Get Access Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[68px] inset-x-0 bg-white border-b border-gray-100 shadow-xl z-40 md:hidden overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <a key={link.name} href={link.href || "#"} className="text-lg font-bold text-gray-900 py-2 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button className="w-full bg-primary/10 text-primary text-base font-bold px-6 py-3 rounded-xl">Log In</button>
                <button className="w-full bg-primary text-white text-base font-bold px-6 py-3 rounded-xl shadow-lg">Get Access Now</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
