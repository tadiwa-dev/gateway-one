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
    ChevronRight,
    Bot,
    ShieldCheck,
    LineChart
} from 'lucide-react';

// Import ContainerScroll animation component
import { ContainerScroll } from './components/ui/container-scroll-animation';

// Import all custom screenshot assets
import logoImage from './assets/paNhari Logo.png';
import imgAnalyticsDash from './assets/Integrated Program Analytics Dashboard.png';
import imgAppReview from './assets/Application Review & Selection Governance System.png';
import imgStudentMgmt from './assets/Student Management & Cohort Oversight System.png';
import imgContentFeedback from './assets/Content & Feedback Intelligence System.png';
import imgChatbot from './assets/AI-Powered Data Exploration Chatbot.png';
import imgRbac from './assets/Role-Based Access Control (RBAC) & Data Governance.png';

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
        .delay-600 { animation-delay: 600ms; }
        
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
                        <div className="flex items-center gap-3 cursor-pointer group hover:scale-105 transition-transform duration-300">
                            <img src={logoImage} alt="paNhari Logo" className="w-10 h-10 object-contain drop-shadow-md group-hover:drop-shadow-lg transition-all" />
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
                        Every application is someone's next chapter
                        <ChevronRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                    </div>

                    <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-slate-900 mb-8 max-w-5xl mx-auto leading-[1.05]">
                        See the person behind
                        <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 relative inline-block px-2">
                            every application.
                            <svg className="absolute w-full h-4 -bottom-2 left-0 text-fuchsia-300/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="animate-fade-up delay-200 text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                        Every name in your inbox belongs to someone who stayed up late crafting their application. paNhari helps you give each person the consideration they deserve — without drowning in process.
                    </p>

                    <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-indigo-600 text-white rounded-full text-lg font-bold transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-indigo-200 flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                            Watch a Demo
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-sm hover:bg-white text-slate-700 border border-slate-200 hover:border-slate-300 rounded-full text-lg font-bold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                            Talk to sales
                        </button>
                    </div>
                </div>

                {/* Hero Product Screenshot — ContainerScroll Animation */}
                <ContainerScroll
                    titleComponent={
                        <>
                            <p className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">Built around people, not paperwork</p>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                                Every story, in one place.
                            </h2>
                        </>
                    }
                >
                    <img
                        src={imgAnalyticsDash}
                        alt="Integrated Program Analytics Dashboard"
                        className="mx-auto rounded-2xl object-cover h-full w-full object-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </section>

            {/* Social Proof */}
            <section className="py-14 border-y border-slate-200/40 relative z-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] via-transparent to-[#FAFAFA] z-10 pointer-events-none w-full"></div>
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">Trusted by teams who believe people come first</p>
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
                        Every applicant deserves a fair read.
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        Behind every submission is a person who believed in your program enough to apply. paNhari makes sure no one gets lost because of a cluttered inbox or a missed email thread.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                    {[
                        {
                            icon: <Inbox className="w-8 h-8" />,
                            title: "No One Falls Through the Cracks",
                            desc: "Every application, document, and review note lives in one profile — because each one belongs to a real person who chose to apply to you.",
                            color: "indigo"
                        },
                        {
                            icon: <MessageSquareHeart className="w-8 h-8" />,
                            title: "Keep Every Applicant Informed",
                            desc: "No one should have to wonder about their fate. Automated, warm updates keep applicants in the loop — with the dignity they deserve.",
                            color: "emerald"
                        },
                        {
                            icon: <Users className="w-8 h-8" />,
                            title: "Decide Together, Decide Fairly",
                            desc: "Bring your committee together to review with clarity and empathy, so the right people get through — not just the loudest voices.",
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
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-[#FAFAFA] -z-10"></div>

                <div className="max-w-7xl mx-auto px-4">
                    {/* Deep Dive 1: Application Review */}
                    <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 mb-32 group">
                        <div className="flex-1 space-y-8 animate-fade-up">
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold border border-blue-100/50 shadow-sm">
                                <LayoutDashboard className="w-4 h-4" />
                                Custom Portals
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                                First impressions matter. Make yours count.
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                An applicant's first touch with your program is the application form. Make it feel as thoughtful as your program — beautiful, frictionless, and worthy of the effort they put in.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {['Drag-and-drop form builder', 'Auto-save progress for candidates', 'Holistic Selection Governance System'].map((item, i) => (
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
                            <img src={imgAppReview}
                                alt="Application Review & Selection Governance System"
                                className="relative rounded-[2.5rem] shadow-2xl border border-white w-full object-cover transform group-hover:-rotate-2 transition-transform duration-700 z-10" />

                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 animate-float flex items-center gap-4 group-hover:scale-105 transition-transform">
                                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Application Validated</div>
                                    <div className="text-xs font-semibold text-slate-500">Scored automatically</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Deep Dive 2: Automated Workflows / Student Mgmt */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24 mb-32 group">
                        <div className="flex-1 space-y-8 animate-fade-up">
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-50 text-violet-700 text-sm font-bold border border-violet-100/50 shadow-sm">
                                <Send className="w-4 h-4" />
                                Automated Workflows
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                                Spend your energy on people, not process.
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                When a promising applicant moves forward, paNhari sends the invite before you've poured your coffee. The human work stays human. The administrative weight doesn't.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {['Customizable pipeline stages', 'Trigger-based email templates', 'Cohort Oversight Processing'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-700 text-lg font-medium group-hover:-translate-x-3 transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                                        <div className="w-7 h-7 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 shadow-sm border border-violet-200">
                                            <CheckCircle2 className="w-4 h-4 text-violet-600" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full relative group perspective-1000">
                            <div className="absolute inset-0 bg-gradient-to-tr from-violet-200/50 to-fuchsia-100/50 rounded-[3rem] transform -rotate-3 scale-105 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-700 blur-sm"></div>
                            <img src={imgStudentMgmt}
                                alt="Student Management & Cohort Oversight System"
                                className="relative rounded-[2.5rem] shadow-2xl border border-white w-full object-cover transform group-hover:rotate-2 transition-transform duration-700 z-10" />

                            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 animate-float-delayed flex items-center gap-4 group-hover:scale-105 transition-transform">
                                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                                    <Send className="w-5 h-5 ml-1" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Automation Triggered</div>
                                    <div className="text-xs font-semibold text-slate-500">Interview Invite Sent</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Deep Dive 3: Content Intelligence */}
                    <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 mb-32 group">
                        <div className="flex-1 space-y-8 animate-fade-up">
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-bold border border-amber-100/50 shadow-sm">
                                <LineChart className="w-4 h-4" />
                                Content Intelligence
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                                Understand your people. Build better programs.
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                The words your applicants write tell you more than any spreadsheet ever could. paNhari surfaces the patterns in their stories so you can build programs that serve the next generation of people, not just metrics.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {['Sentiment & feedback analysis', 'Real-time performance metrics', 'Custom dynamic reporting'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-700 text-lg font-medium group-hover:translate-x-3 transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                                        <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 shadow-sm border border-amber-200">
                                            <CheckCircle2 className="w-4 h-4 text-amber-600" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full relative group perspective-1000">
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/50 to-orange-100/50 rounded-[3rem] transform rotate-3 scale-105 group-hover:rotate-6 group-hover:scale-110 transition-all duration-700 blur-sm"></div>
                            <img src={imgContentFeedback}
                                alt="Content & Feedback Intelligence System"
                                className="relative rounded-[2.5rem] shadow-2xl border border-white w-full object-cover transform group-hover:-rotate-2 transition-transform duration-700 z-10" />
                        </div>
                    </div>

                    {/* Deep Dive 4: AI Chatbot */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24 mb-32 group">
                        <div className="flex-1 space-y-8 animate-fade-up">
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-bold border border-teal-100/50 shadow-sm">
                                <Bot className="w-4 h-4" />
                                AI-Powered Exploration
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                                Ask real questions. Get real answers.
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                Ask "Who are our most engaged alumni?" or "What do our strongest cohorts have in common?" in plain English — and get answers that help you make decisions grounded in people, not just numbers.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {['Conversational data queries', 'Instant visualizations', 'Predictive cohort analytics'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-700 text-lg font-medium group-hover:-translate-x-3 transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                                        <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 shadow-sm border border-teal-200">
                                            <CheckCircle2 className="w-4 h-4 text-teal-600" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full relative group perspective-1000">
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal-200/50 to-emerald-100/50 rounded-[3rem] transform -rotate-3 scale-105 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-700 blur-sm"></div>
                            <img src={imgChatbot}
                                alt="AI-Powered Data Exploration Chatbot"
                                className="relative rounded-[2.5rem] shadow-2xl border border-white w-full object-cover transform group-hover:rotate-2 transition-transform duration-700 z-10" />
                        </div>
                    </div>

                    {/* Deep Dive 5: RBAC */}
                    <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 group">
                        <div className="flex-1 space-y-8 animate-fade-up">
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-bold border border-slate-200/50 shadow-sm">
                                <ShieldCheck className="w-4 h-4" />
                                Enterprise Security
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                                Every person's story, protected.
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                Applicants trust you with their personal stories and ambitions. Granular permissions ensure that trust is honoured — with each reviewer seeing only what they need to, nothing more.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {['Role-Based Access Control (RBAC)', 'Audit logging & compliance', 'Strict Data Governance'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-700 text-lg font-medium group-hover:translate-x-3 transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                                        <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-300">
                                            <CheckCircle2 className="w-4 h-4 text-slate-700" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full relative group perspective-1000">
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-200/50 to-gray-100/50 rounded-[3rem] transform rotate-3 scale-105 group-hover:rotate-6 group-hover:scale-110 transition-all duration-700 blur-sm"></div>
                            <img src={imgRbac}
                                alt="Role-Based Access Control (RBAC) & Data Governance"
                                className="relative rounded-[2.5rem] shadow-2xl border border-white w-full object-cover transform group-hover:-rotate-2 transition-transform duration-700 z-10" />
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
                        "We used to miss great people. Not intentionally — just because the process was too broken to give everyone a real shot. paNhari changed that."
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
                            Ready to put<br className="hidden md:block" /> people first?
                        </h2>
                        <p className="text-xl md:text-2xl text-indigo-100/90 mb-12 max-w-3xl mx-auto font-medium">
                            Join the organizations who believe the best decision they ever made was to treat every applicant like the person they are. Set up in minutes. Impact that lasts.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <button className="px-10 py-5 bg-white text-indigo-900 hover:text-indigo-600 hover:bg-slate-50 rounded-full text-lg font-black transition-all duration-300 shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transform hover:-translate-y-1 hover:scale-105 active:scale-95">
                                Watch a Demo
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
                        <div className="flex items-center gap-3 mb-6 group cursor-pointer inline-flex">
                            <img src={logoImage} alt="paNhari Logo" className="w-10 h-10 object-contain drop-shadow-sm group-hover:drop-shadow-md group-hover:rotate-12 transition-transform" />
                            <span className="font-black text-2xl tracking-tight text-slate-900">paNhari</span>
                        </div>
                        <p className="text-slate-500 max-w-sm leading-relaxed text-lg font-medium">
                            Because behind every application is a person with a dream worth seeing clearly.
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
