import { motion } from "framer-motion";
import { Play, CheckCircle2, XCircle, Users, Clock, ShieldCheck, Zap, ArrowRight, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { MockDashboard, MockDownloadWidget, MockChat } from "@/components/MockUIs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(139,38,53,0.05),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 bg-white border border-red-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse-ring" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Updated for 2024</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-[1.1]">
              Stop Wasting Time Onboarding <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#d94a5e]">GoHighLevel Clients</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get 40+ professional, entirely unbranded video tutorials that teach your clients how to use the software. You keep the credit, we do the teaching.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-[0_8px_24px_rgba(139,38,53,0.3)] hover:shadow-[0_12px_32px_rgba(139,38,53,0.4)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
                Get Instant Access <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-bold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all">
                View Video List
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative max-w-[800px] mx-auto rounded-2xl overflow-hidden shadow-2xl group cursor-pointer bg-gray-900 aspect-video ring-1 ring-black/5">
              {/* hero meeting collaboration image */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop" 
                alt="Video Preview" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-[0_0_40px_rgba(139,38,53,0.6)] group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                Watch Demo (2:14)
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  // generic user avatar
                  <img key={i} src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&auto=format&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8${i+10}|portrait`} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex text-[#FFB800] mb-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <div className="text-sm font-medium text-gray-600">Trusted by <strong className="text-gray-900 font-bold">1,200+</strong> Agencies</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS TICKER */}
      <div className="bg-primary py-4 overflow-hidden border-y border-primary-light">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex">
              {[
                { n: "40+", l: "HD Videos" },
                { n: "100%", l: "White-labeled" },
                { n: "0", l: "Monthly Fees" },
                { n: "24/7", l: "Lifetime Access" },
                { n: "1,200+", l: "Happy Agencies" },
              ].map((stat, i) => (
                <div key={`${j}-${i}`} className="flex items-center px-12 border-r border-white/20 last:border-0">
                  <span className="text-3xl font-black text-white mr-3">{stat.n}</span>
                  <span className="text-sm font-bold text-white/80 uppercase tracking-wider">{stat.l}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* PAIN POINTS SECTION */}
      <section className="py-24 bg-gray-50 border-b border-gray-200" id="pain">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-xs font-black tracking-widest uppercase text-primary mb-3">The Old Way is Broken</h2>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900">Why are you still doing this manually?</h3>
            </div>
          </Reveal>
          
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  i: <Clock className="w-8 h-8 text-primary mb-4" />,
                  t: "Wasting Hours on Zoom",
                  d: "Repeating the same basic instructions to every new client instead of focusing on fulfillment and sales."
                },
                {
                  i: <Users className="w-8 h-8 text-primary mb-4" />,
                  t: "Clients Churning Early",
                  d: "Overwhelmed clients log in, get confused by the blank interface, and cancel before month 2."
                },
                {
                  i: <ShieldCheck className="w-8 h-8 text-primary mb-4" />,
                  t: "Looking Unprofessional",
                  d: "Sending clients to generic YouTube videos that mention GoHighLevel, destroying your white-label illusion."
                }
              ].map((p, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    {p.i}
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{p.t}</h4>
                    <p className="text-gray-600 leading-relaxed">{p.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Z-BLOCK 1: Dashboard */}
      <section className="py-24">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <div>
              <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">Module 1</div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">Drop them right into a <span className="text-primary">customized experience.</span></h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our videos assume the user is using your white-labeled app. We never say the word "GoHighLevel". It's pure, generic instruction tailored to the platform's core mechanics.
              </p>
              <ul className="space-y-4">
                {[
                  "Navigating the main dashboard",
                  "Understanding the left-side menu",
                  "Basic profile setup and settings"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal direction="left">
            <div className="bg-gray-50 rounded-[2rem] p-8 md:p-12 flex items-center justify-center relative shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-[2rem]" />
              <div className="relative z-10 w-full flex justify-center">
                <MockDashboard />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Z-BLOCK 2: Resources (Reversed) */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <div className="bg-gray-800 rounded-[2rem] p-8 md:p-12 flex items-center justify-center relative shadow-2xl border border-gray-700 order-2 lg:order-1">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-[2rem]" />
               <div className="relative z-10 w-full flex justify-center">
                  <MockDownloadWidget />
               </div>
            </div>
          </Reveal>
          <Reveal direction="left">
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6 border border-white/20">Plug & Play</div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">Not just videos. Get the <span className="text-primary-light">exact resources</span> you need.</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Download the raw video files to host on your own Wistia/Vimeo, or use our pre-built embed codes. We also provide PDF cheat sheets and quick-start guides to complete the portal.
              </p>
              <ul className="space-y-4">
                {[
                  "Raw 1080p MP4 file downloads",
                  "Client-facing PDF checklists",
                  "Course portal structure templates"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-light shrink-0" />
                    <span className="font-medium text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24 bg-white" id="pricing">
        <div className="max-w-[1000px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">The Smart Choice is Obvious</h2>
              <p className="text-lg text-gray-600">See how doing it yourself compares to using our pre-built library.</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                <div className="p-6 text-sm font-bold text-gray-500 uppercase tracking-wider">Features</div>
                <div className="p-6 text-center text-sm font-bold text-gray-700 uppercase tracking-wider border-x border-gray-200 bg-gray-100/50">DIY Recording</div>
                <div className="p-6 text-center text-sm font-black text-white uppercase tracking-wider bg-primary">Josh's GHL Videos</div>
              </div>
              
              {[
                { f: "Time to complete", d: "40+ Hours", j: "5 Minutes" },
                { f: "Production Quality", d: "Amateur / Webcam", j: "Studio HD + Pro Audio" },
                { f: "Updates when UI changes", d: <XCircle className="w-5 h-5 text-red-500 mx-auto" />, j: <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /> },
                { f: "Completely Unbranded", d: "Hard to edit out", j: <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /> },
                { f: "Cost", d: "$1,500+ (Time Value)", j: "One-time low fee" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <div className="p-5 flex items-center font-semibold text-gray-700">{row.f}</div>
                  <div className="p-5 flex items-center justify-center text-gray-500 border-x border-gray-100 font-medium text-center">{row.d}</div>
                  <div className="p-5 flex items-center justify-center font-bold text-gray-900 bg-primary/5 text-center">{row.j}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 bg-gray-50 border-t border-gray-200" id="proof">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-gray-200 bg-white">
               {/* agency dashboard snapshot */}
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop" 
                 alt="Agency Dashboard" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-80" />
               <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-white">
                   <div className="flex items-center gap-2 mb-2">
                     <div className="flex text-[#FFB800]">
                       {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                     </div>
                     <span className="text-xs font-bold">Verified Agency</span>
                   </div>
                   <p className="text-sm font-medium italic">"Implemented this in my onboarding flow and support tickets dropped by 80% overnight."</p>
                 </div>
               </div>
            </div>
          </Reveal>
          <Reveal delay={0.2} direction="left">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Built for serious agencies who value their time.</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                You are running a business, not a free tech support hotline. Equip your clients with the knowledge they need to succeed independently.
              </p>
              
              <div className="bg-white border-l-4 border-primary p-6 rounded-r-xl shadow-sm">
                <p className="text-gray-700 italic font-medium mb-4">
                  "I was spending 3 hours a week just explaining how to build a basic workflow. Now I just point them to Module 4. Best investment I've made this year."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    {/* user portrait */}
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="Sarah T." />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Sarah Jenkins</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Growth Agency Owner</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to automate your onboarding?</h2>
            <p className="text-xl text-white/80 mb-10">Get lifetime access to the entire video library, resources, and future updates for one low price.</p>
            
            <button className="px-10 py-5 bg-white text-primary rounded-xl font-black text-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all">
              Unlock The Library Now
            </button>
            <p className="mt-6 text-sm text-white/60 font-medium">100% Risk-Free. 14-Day Money Back Guarantee.</p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
