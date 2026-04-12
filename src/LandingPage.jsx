import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiArrowRight, FiLogIn, FiDollarSign, 
  FiTwitter, FiLinkedin, FiFacebook, FiInstagram,
  FiChevronLeft, FiChevronRight, FiGrid
} from "react-icons/fi";

const LandingPage = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  // Sample data for the carousel on the right
  const slides = [
    { id: 1, title: "Micro-loans", desc: "For small traders" },
    { id: 2, title: "SME Support", desc: "Scaling your business" },
    { id: 3, title: "Agro-Credit", desc: "For farmers & producers" }
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900 font-poppins">
      
      {/* 1. Base Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/monie.jpg" 
          className="h-full w-full object-cover opacity-50 mix-blend-luminosity grayscale-40" 
          alt="Market Monie Background" 
        />
        {/* Gradients for readability and depth */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-gray-900/60 to-gray-900/90" />
      </div>

      {/* 2. Main Content Layout Container */}
      <div className="relative z-10 h-full w-full flex flex-col px-6 md:px-12 py-6">
        
        {/* Top Navigation */}
        <nav className="flex justify-between items-center z-20">
          <div className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105">
            <img 
              src="/market-monie.png" 
              alt="Market Monie Logo" 
              className="h-10 md:h-12 w-auto drop-shadow-2xl" 
            />
          </div>
          <button 
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold hover:bg-white hover:text-gray-900 shadow-xl transition-all active:scale-95"
          >
            <FiLogIn /> Sign In
          </button>
        </nav>

        {/* 3-Column Grid Layout */}
        <div className="flex-1 grid grid-cols-12 items-center gap-4 py-8">
          
          {/* Left Column: Social Media (Vertical/Horizontal floating) */}
          <div className="hidden lg:col-span-1 lg:flex flex-col items-center gap-8 animate-in slide-in-from-left duration-1000">
             <div className="h-20 w-[1px] bg-white/20" />
             <div className="flex flex-col gap-6 text-white/40">
                <FiTwitter className="hover:text-emerald-500 cursor-pointer transition-colors" size={18} />
                <FiLinkedin className="hover:text-emerald-500 cursor-pointer transition-colors" size={18} />
                <FiFacebook className="hover:text-emerald-500 cursor-pointer transition-colors" size={18} />
                <FiInstagram className="hover:text-emerald-500 cursor-pointer transition-colors" size={18} />
             </div>
             <div className="h-20 w-[1px] bg-white/20" />
             <p className="[writing-mode:vertical-lr] text-[10px] uppercase font-bold tracking-[4px] text-white/20">Follow Us</p>
          </div>

          {/* Center Column: Centralized Hero + CTAs */}
          <div className="col-span-12 lg:col-span-7 flex flex-col items-center lg:items-center text-center px-4">
            
            <div className="max-w-xl flex flex-col items-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tighter mb-8 animate-in zoom-in duration-1000">
                Empower Your <br />
                <span className="text-emerald-500 italic">Business</span> Growth
              </h1>

              {/* Main Action Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full animate-in slide-in-from-bottom-10 duration-1000 delay-300">
                
                {/* CTA 1: Request for Loan */}
                <button 
                  onClick={() => navigate("/register")}
                  className="group relative overflow-hidden p-8 rounded-3xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-2xl shadow-emerald-900/40 hover:-translate-y-2 text-left"
                >
                  <div 
                    className="absolute inset-0 opacity-90 bg-white pointer-events-none mix-blend-overlay"
                    style={{ 
                      WebkitMaskImage: 'url(/Pattern.svg)',
                      WebkitMaskSize: '120px',
                      WebkitMaskRepeat: 'repeat',
                      maskImage: 'url(/Pattern.svg)',
                      maskSize: '120px',
                      maskRepeat: 'repeat'
                    }}
                  />
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 h-32 w-32 rounded-full bg-white/10 blur-3xl group-hover:bg-white/20" />
                  
                  <div className="relative z-10 flex flex-col h-full items-start">
                    <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                      <FiDollarSign className="text-2xl group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 tracking-tight">Request for Loan</h3>
                    <p className="text-white/70 text-xs mb-8 leading-relaxed font-medium">
                      Seamless business financing in a few easy steps.
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-black/20 backdrop-blur-md w-fit px-4 py-2 rounded-full">
                      Get Started <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>

                {/* CTA 2: Login */}
                <button 
                  onClick={() => navigate("/login")}
                  className="group relative overflow-hidden p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-emerald-500/50 text-white transition-all shadow-2xl hover:-translate-y-2 text-left"
                >
                  <div 
                    className="absolute inset-0 opacity-90 bg-emerald-500 pointer-events-none mix-blend-overlay"
                    style={{ 
                      WebkitMaskImage: 'url(/Pattern.svg)',
                      WebkitMaskSize: '120px',
                      WebkitMaskRepeat: 'repeat',
                      maskImage: 'url(/Pattern.svg)',
                      maskSize: '120px',
                      maskRepeat: 'repeat'
                    }}
                  />
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20" />
                  
                  <div className="relative z-10 flex flex-col h-full items-start">
                    <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10">
                      <FiLogIn className="text-2xl group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 tracking-tight">Return to Account</h3>
                    <p className="text-gray-400 text-xs mb-8 leading-relaxed font-medium">
                      Access your active loan application.
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-white/10 w-fit px-4 py-2 rounded-full group-hover:bg-white group-hover:text-gray-900 transition-all">
                      Login <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>

              </div>
            </div>
          </div>

          {/* Right Column: Carousel + Switcher */}
          <div className="hidden lg:col-span-4 lg:flex flex-col items-end gap-12 animate-in slide-in-from-right duration-1000">
            
            {/* Carousel Widget */}
            <div className="w-full max-w-[280px] p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl group">
               <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Products</span>
                  <div className="flex gap-2">
                     <button 
                      onClick={() => setActiveSlide(prev => (prev > 0 ? prev - 1 : slides.length - 1))}
                      className="h-6 w-6 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white transition-colors"
                     >
                        <FiChevronLeft size={12} />
                     </button>
                     <button 
                      onClick={() => setActiveSlide(prev => (prev < slides.length - 1 ? prev + 1 : 0))}
                      className="h-6 w-6 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white transition-colors"
                     >
                        <FiChevronRight size={12} />
                     </button>
                  </div>
               </div>
               <div className="overflow-hidden relative h-24">
                  {slides.map((slide, i) => (
                    <div 
                      key={slide.id}
                      className={`absolute inset-0 transition-all duration-700 transform ${
                        i === activeSlide ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                      }`}
                    >
                       <h4 className="text-lg font-bold text-white mb-1 tracking-tight">{slide.title}</h4>
                       <p className="text-xs text-gray-500 font-medium">{slide.desc}</p>
                    </div>
                  ))}
               </div>
               <div className="flex gap-2 mt-4">
                  {slides.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 rounded-full transition-all duration-300 ${i === activeSlide ? "w-6 bg-emerald-500" : "w-2 bg-white/10"}`} 
                    />
                  ))}
               </div>
            </div>

            {/* BG Switcher Accent */}
            <div className="flex flex-col items-end gap-4">
               <span className="text-[9px] font-bold uppercase tracking-[2px] text-white/30">Select View</span>
               <div className="flex gap-3">
                  <button className="h-10 w-10 rounded-2xl border-2 border-emerald-500/50 p-1 bg-white/10 overflow-hidden group">
                     <img src="/monie.jpg" className="h-full w-full object-cover rounded-lg group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="h-10 w-10 rounded-2xl border border-white/10 p-1 bg-white/5 hover:border-white/30 overflow-hidden group">
                     <div className="h-full w-full bg-gray-800 rounded-lg flex items-center justify-center">
                        <FiGrid className="text-white/20" />
                     </div>
                  </button>
               </div>
            </div>

          </div>
        </div>

        {/* 4. Global Footer */}
        <footer className="mt-auto py-6 border-t border-white/5 grid grid-cols-12 items-center gap-4 text-gray-500 text-[10px] uppercase font-bold tracking-[2px]">
          <p className="col-span-12 md:col-span-4">© 2026 Market Monie. Finance Your Future.</p>
          <div className="col-span-12 md:col-span-8 flex justify-end gap-10">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-white cursor-pointer transition-colors">Support</span>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default LandingPage;
