import React, { useState, useEffect } from 'react';
import {
    ArrowRight,
    CheckCircle2,
    Users,
    LayoutDashboard,
    Sparkles,
    Menu,
    X,
    MessageSquareHeart,
    Inbox,
    Send,
    ChevronRight
} from 'lucide-react';

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out 3s infinite;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        
        html { scroll-behavior: smooth; }
        
        .glass-panel {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
      `}} />

            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel shadow-sm py-2' : 'bg-transparent py-4'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2 cursor-pointer group hover:scale-105 transition-transform duration-300">
                            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:shadow-indigo-300 transition-shadow">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-extrabold text-2xl tracking-tight text-slate-900">paNhari</span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
                            <a href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">How it works</a>
                            <a href="#stories" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Stories</a>
                            <button className="bg-slate-900 hover:bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-md shadow-slate-200 hover:shadow-indigo-200">
                                Book a Demo
                            </button>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2 hover:bg-slate-100 rounded-full transition-colors">
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden absolute w-full glass-panel border-b border-white/50 px-4 pt-2 pb-6 space-y-2 shadow-xl transition-all duration-300 origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                    <a href="#features" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-700 hover:bg-indigo-50/50 hover:text-indigo-600 rounded-xl transition-colors">Features</a>
                    <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-700 hover:bg-indigo-50/50 hover:text-indigo-600 rounded-xl transition-colors">How it works</a>
                    <a href="#stories" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-700 hover:bg-indigo-50/50 hover:text-indigo-600 rounded-xl transition-colors">Stories</a>
                    <button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-5 py-3.5 rounded-xl text-base font-semibold shadow-lg shadow-indigo-200 active:scale-95 transition-all">
                        Book a Demo
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-[120px] -z-10 animate-pulse-soft" style={{ animationDuration: '4s' }}></div>
                <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-violet-200/40 rounded-full blur-[100px] -z-10 animate-pulse-soft" style={{ animationDuration: '5s' }}></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-indigo-100 shadow-sm text-indigo-700 text-sm font-semibold mb-8 hover:shadow-md transition-shadow cursor-pointer hover:border-indigo-200 group">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                        </span>
                        A better way to manage programs
                        <ChevronRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                    </div>

                    <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-slate-900 mb-8 max-w-5xl mx-auto leading-[1.05]">
                        Turn application chaos into
                        <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 relative inline-block px-2">
                            clear decisions.
                            <svg className="absolute w-full h-4 -bottom-2 left-0 text-fuchsia-300/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="animate-fade-up delay-200 text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                        From the first submission to the final welcome email, paNhari brings your entire selection process into one peaceful, unified workspace. Focus on the people, not the paperwork.
                    </p>

                    <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-indigo-600 text-white rounded-full text-lg font-bold transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-indigo-200 flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                            Start your free trial
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-sm hover:bg-white text-slate-700 border border-slate-200 hover:border-slate-300 rounded-full text-lg font-bold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                            Talk to sales
                        </button>
                    </div>
                </div>

                {/* Abstract UI Mockup */}
                <div className="mt-24 max-w-5xl mx-auto relative animate-fade-up delay-400">
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent z-20 h-40 pointer-events-none"></div>

                    <div className="absolute -left-10 top-20 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-float"></div>
                    <div className="absolute -right-10 top-40 w-32 h-32 bg-violet-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-float-delayed"></div>

                    <div className="glass-panel rounded-2xl md:rounded-[2.5rem] shadow-2xl shadow-indigo-100/50 p-2 md:p-4 transform hover:-translate-y-2 transition-transform duration-500 relative z-10">
                        <div className="bg-white/80 backdrop-blur-xl rounded-xl md:rounded-[2rem] border border-white/60 h-[400px] md:h-[600px] overflow-hidden flex flex-col shadow-inner">
                            <div className="h-16 border-b border-slate-100/60 bg-white/40 flex items-center px-6 justify-between flex-shrink-0">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-2.5 mr-4 hover:opacity-80 transition-opacity">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>
                                    </div>
                                    <div className="w-32 h-4 bg-slate-100/80 rounded-full"></div>
                                    <div className="w-24 h-4 bg-slate-100/80 rounded-full hidden md:block"></div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-slate-100/80 rounded-full hidden sm:block"></div>
                                    <div className="w-9 h-9 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-full shadow-md shadow-indigo-200 cursor-pointer hover:scale-110 transition-transform"></div>
                                </div>
                            </div>

                            <div className="flex-1 p-6 flex gap-6 overflow-hidden bg-slate-50/30">
                                <div className="flex-1 min-w-[250px] space-y-4">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">New</span>
                                        <span className="text-xs bg-white border border-slate-200 text-slate-700 font-bold px-3 py-1 rounded-full shadow-sm">24</span>
                                    </div>
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="bg-white p-5 rounded-[1.25rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 space-y-4 hover:-translate-y-1 transform cursor-pointer group hover:border-indigo-100">
                                            <div className="flex justify-between items-start">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm border border-indigo-100/50 group-hover:scale-110 transition-transform shadow-inner">
                                                        {String.fromCharCode(64 + i)}
                                                    </div>
                                                    <div className="space-y-2.5">
                                                        <div className="w-20 h-2.5 bg-slate-200 rounded-full"></div>
                                                        <div className="w-12 h-2 bg-slate-100 rounded-full"></div>
                                                    </div>
                                                </div>
                                                <div className="w-16 h-5 bg-emerald-50 rounded-md border border-emerald-100 group-hover:bg-emerald-100 transition-colors"></div>
                                            </div>
                                            <div className="pt-2 space-y-2">
                                                <div className="w-full h-2 bg-slate-50 rounded-full"></div>
                                                <div className="w-2/3 h-2 bg-slate-50 rounded-full"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex-1 min-w-[250px] space-y-4 hidden md:block">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">Reviewing</span>
                                        <span className="text-xs bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-full shadow-sm animate-pulse-soft">12</span>
                                    </div>
                                    {[1, 2].map((i) => (
                                        <div key={i} className="bg-white p-5 rounded-[1.25rem] border border-indigo-100/50 shadow-md shadow-indigo-100/30 space-y-4 relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-200/40 transition-all duration-300 cursor-pointer">
                                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-400 to-violet-500 rounded-l-[1.25rem] group-hover:w-2 transition-all"></div>
                                            <div className="pl-1">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-slate-50 rounded-full border border-slate-100"></div>
                                                    <div className="space-y-2.5">
                                                        <div className="w-24 h-2.5 bg-slate-200/80 rounded-full"></div>
                                                        <div className="w-16 h-2 bg-slate-100 rounded-full"></div>
                                                    </div>
                                                </div>
                                                <div className="mt-4 w-full h-2 bg-slate-50 rounded-full"></div>
                                                <div className="flex justify-between items-center pt-4">
                                                    <div className="flex -space-x-2">
                                                        <div className="w-7 h-7 rounded-full bg-indigo-100 border-2 border-white relative z-20"></div>
                                                        <div className="w-7 h-7 rounded-full bg-violet-100 border-2 border-white relative z-10"></div>
                                                    </div>
                                                    <div className="w-16 h-2 bg-slate-100 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex-1 min-w-[250px] space-y-4 hidden lg:block opacity-60 grayscale-[0.2]">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">Accepted</span>
                                        <span className="text-xs bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full shadow-sm">8</span>
                                    </div>
                                    <div className="bg-white p-5 rounded-[1.25rem] border border-slate-100 shadow-sm space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-slate-50 rounded-full"></div>
                                            <div className="w-20 h-2.5 bg-slate-200 rounded-full"></div>
                                        </div>
                                        <div className="mt-2 w-full h-2 bg-slate-50 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-14 border-y border-slate-200/40 relative z-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] via-transparent to-[#FAFAFA] z-10 pointer-events-none w-full"></div>
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">Empowering forward-thinking teams</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                        <div className="text-2xl font-black font-serif hover:text-indigo-900 transition-colors duration-300 transform hover:scale-105">Acme</div>
                        <div className="text-xl font-black tracking-tight hover:text-indigo-900 transition-colors duration-300 transform hover:scale-105">GLOBAL <span className="font-light">CO</span></div>
                        <div className="text-3xl font-bold italic font-serif hover:text-indigo-900 transition-colors duration-300 transform hover:scale-105">Nexus</div>
                        <div className="text-xl font-bold tracking-widest hover:text-indigo-900 transition-colors duration-300 transform hover:scale-105">ELEVATE</div>
                        <div className="text-xl font-extrabold hidden sm:block hover:text-indigo-900 transition-colors duration-300 transform hover:scale-105">Founders</div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section id="features" className="py-24 md:py-32 px-4 max-w-7xl mx-auto relative">
                <div className="absolute top-40 right-10 w-64 h-64 bg-amber-50 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
                <div className="absolute bottom-40 left-10 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10 animate-pulse-soft delay-500"></div>

                <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 animate-fade-up">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                        Reviewing shouldn't be exhausting.
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        We built paNhari because we were tired of losing great candidates in messy email threads and giant spreadsheets. It's designed to give your team breathing room.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                    {[
                        {
                            icon: <Inbox className="w-8 h-8" />,
                            title: "One Unified Inbox",
                            desc: "Every application, document, and review note lives in a single, perfectly organized profile. Stop searching for that one email.",
                            color: "indigo"
                        },
                        {
                            icon: <MessageSquareHeart className="w-8 h-8" />,
                            title: "Respectful Workflow",
                            desc: "Automate personalized updates so applicants are never left in the dark. Send acceptances or rejections with one elegant click.",
                            color: "emerald"
                        },
                        {
                            icon: <Users className="w-8 h-8" />,
                            title: "Joyful Collaboration",
                            desc: "Invite your committee to score and comment in an interface so intuitive, they won't need a single training session to use it.",
                            color: "amber"
                        }
                    ].map((feature, i) => (
                        <div key={i} className={`animate-fade-up delay-${(i + 1) * 100} group bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-${feature.color}-100/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm`}>
                            <div className={`absolute -top-10 -right-10 w-40 h-40 bg-${feature.color}-50/50 rounded-full blur-2xl -z-10 transition-transform duration-500 group-hover:scale-150`}></div>
                            <div className={`w-16 h-16 bg-${feature.color}-50 text-${feature.color}-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm border border-${feature.color}-100/50`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium text-lg">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Deep Dive Features */}
            <section className="py-24 bg-white/40 border-y border-slate-100 overflow-hidden relative" id="how-it-works">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white -z-10"></div>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 mb-32 group">
                        <div className="flex-1 space-y-8 animate-fade-up">
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold border border-blue-100/50 shadow-sm">
                                <LayoutDashboard className="w-4 h-4" />
                                Custom Portals
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                                Roll out the red carpet for your applicants.
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                Create beautifully branded, mobile-friendly application forms in minutes. Gather files, long-form answers, and portfolios effortlessly.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {['Drag-and-drop form builder', 'Auto-save progress for candidates', 'Mobile-optimized out of the box'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-700 text-lg font-medium group-hover:translate-x-3 transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                                        <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-200">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full relative group perspective-1000">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/50 to-indigo-100/50 rounded-[3rem] transform rotate-3 scale-105 group-hover:rotate-6 group-hover:scale-110 transition-all duration-700 blur-sm"></div>
                            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
                                alt="Person smiling at laptop"
                                className="relative rounded-[2.5rem] shadow-2xl border border-white w-full object-cover h-[450px] transform group-hover:-rotate-2 transition-transform duration-700 z-10" />

                            {/* Floating UI Element */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 animate-float flex items-center gap-4 group-hover:scale-105 transition-transform">
                                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Application Submitted</div>
                                    <div className="text-xs font-semibold text-slate-500">Just now</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24 group">
                        <div className="flex-1 space-y-8 animate-fade-up">
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-50 text-violet-700 text-sm font-bold border border-violet-100/50 shadow-sm">
                                <Send className="w-4 h-4" />
                                Automated Workflows
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                                Let the system do the heavy lifting.
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                Move candidates from "Review" to "Interview" and let paNhari automatically trigger invites. You maintain the human touch; we handle the mechanics.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {['Customizable pipeline stages', 'Trigger-based email templates', 'Bulk actions for fast processing'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-700 text-lg font-medium group-hover:-translate-x-3 transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                                        <div className="w-7 h-7 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 shadow-sm border border-violet-200">
                                            <CheckCircle2 className="w-4 h-4 text-violet-600" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-violet-200/50 to-fuchsia-100/50 rounded-[3rem] transform -rotate-3 scale-105 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-700 blur-sm"></div>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                alt="Team collaborating"
                                className="relative rounded-[2.5rem] shadow-2xl border border-white w-full object-cover h-[450px] transform group-hover:rotate-2 transition-transform duration-700 z-10" />

                            {/* Floating UI Element */}
                            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 animate-float-delayed flex items-center gap-4 group-hover:scale-105 transition-transform">
                                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                                    <Send className="w-5 h-5 ml-1" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Email Triggered</div>
                                    <div className="text-xs font-semibold text-slate-500">Interview Invite Sent</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-32 bg-slate-900 text-white relative overflow-hidden" id="stories">
                <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-indigo-500/40 to-transparent rounded-full blur-[80px] transform translate-x-1/3 -translate-y-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-fuchsia-500/30 to-transparent rounded-full blur-[80px] transform -translate-x-1/3 translate-y-1/3"></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 text-center relative z-10 animate-fade-up">
                    <div className="mb-10 flex justify-center gap-1.5 hover:scale-105 transition-transform duration-300">
                        {[1, 2, 3, 4, 5].map((star, i) => (
                            <svg key={star} className={`w-8 h-8 text-amber-400 fill-current drop-shadow-xl animate-fade-up delay-${i * 100}`} viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                    </div>
                    <blockquote className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-14 tracking-tight text-white/95">
                        "Before paNhari, our accelerator applications were a nightmare. Now, we select better cohorts because we can finally see the big picture."
                    </blockquote>
                    <div className="flex items-center justify-center gap-5">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center text-xl font-black shadow-xl shadow-indigo-500/20 border-2 border-white/20 hover:scale-110 transition-transform cursor-pointer">
                            SJ
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-xl text-white tracking-wide">Sarah Jenkins</div>
                            <div className="text-indigo-300 font-semibold">Program Director, Global Innovators</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-[#FAFAFA] relative">
                <div className="max-w-6xl mx-auto glass-panel border border-slate-200/60 bg-white/60 rounded-[3rem] p-10 md:p-24 text-center shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-violet-950 z-0 opacity-100 transition-opacity duration-1000"></div>

                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-500/40 rounded-full blur-[80px] group-hover:scale-125 group-hover:translate-x-10 transition-all duration-1000 ease-in-out z-0"></div>
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-fuchsia-500/30 rounded-full blur-[80px] group-hover:scale-125 group-hover:-translate-x-10 transition-all duration-1000 ease-in-out z-0"></div>

                    <div className="relative z-10 text-white">
                        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-[1.05]">
                            Ready to humanize your<br className="hidden md:block" /> application process?
                        </h2>
                        <p className="text-xl md:text-2xl text-indigo-100/90 mb-12 max-w-3xl mx-auto font-medium">
                            Join hundreds of organizations using paNhari to run stress-free programs. Set up takes minutes, not weeks.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <button className="px-10 py-5 bg-white text-indigo-900 hover:text-indigo-600 hover:bg-slate-50 rounded-full text-lg font-black transition-all duration-300 shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transform hover:-translate-y-1 hover:scale-105 active:scale-95">
                                Start your free trial
                            </button>
                            <button className="px-10 py-5 bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95">
                                Request a Demo
                            </button>
                        </div>
                        <p className="mt-8 text-sm text-indigo-200/70 font-bold uppercase tracking-widest">No credit card required • 14-day free trial</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#FAFAFA] pt-20 pb-12 px-4 border-t border-slate-200/50">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-12 gap-12 mb-20 animate-fade-up">
                    <div className="col-span-2 md:col-span-4">
                        <div className="flex items-center gap-2 mb-6 group cursor-pointer inline-flex">
                            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-md">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-black text-2xl tracking-tight text-slate-900">paNhari</span>
                        </div>
                        <p className="text-slate-500 max-w-sm leading-relaxed text-lg font-medium">
                            Making program management human-centered, clear, and perfectly organized for everyone involved.
                        </p>
                    </div>

                    <div className="md:col-span-2 md:col-start-7">
                        <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wider">Product</h4>
                        <ul className="space-y-4 text-slate-500 font-medium">
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Changelog</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wider">Resources</h4>
                        <ul className="space-y-4 text-slate-500 font-medium">
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Best Practices</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Community</a></li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-2">
                        <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wider">Company</h4>
                        <ul className="space-y-4 text-slate-500 font-medium">
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms</a></li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto border-t border-slate-200/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-bold">
                    <p>© {new Date().getFullYear()} paNhari Inc. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-indigo-600 transition-colors hover:-translate-y-1 transform inline-block">Twitter</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors hover:-translate-y-1 transform inline-block">LinkedIn</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors hover:-translate-y-1 transform inline-block">GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
