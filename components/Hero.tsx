
import React from 'react';
import FadeIn from './ui/FadeIn';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-40 pb-32 lg:pt-52 lg:pb-48 overflow-hidden">
      
      {/* Sky Background Layer */}
      <div 
        className="absolute inset-0 bg-relay-hero z-[-2]"
        style={{
            backgroundPosition: '50% 0, 0 0',
            backgroundRepeat: 'no-repeat, repeat',
            backgroundSize: 'cover, cover',
            backgroundAttachment: 'scroll, fixed'
        }}
      />
      
      {/* Gradient Fade Out Layer (Bottom) - Matches Reference exactly */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[250px] z-[-1]" 
        style={{
            background: 'linear-gradient(180deg, transparent, #ffffff 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm mb-8 text-sm font-medium text-white">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for new projects
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-sm">
            Building products & communities <br className="hidden md:block" />
            at the intersection of tech & business.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm">
            I’m a Business Informatics student and entrepreneur focused on building practical software and high-retention communities.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-xl bg-white text-brand-600 font-bold hover:bg-gray-50 transition-all shadow-xl flex items-center gap-2"
          >
            Start a Project <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="#about" 
            className="px-8 py-4 rounded-xl bg-brand-700/30 backdrop-blur-md border border-white/30 text-white font-bold hover:bg-brand-700/40 transition-all"
          >
            More about me
          </a>
        </FadeIn>

        {/* Dashboard Mockup / Visual Element */}
        <FadeIn delay={0.6} className="mt-20 relative mx-auto max-w-6xl">
          <div className="rounded-2xl overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] border-4 border-white/20 bg-white aspect-[16/10] relative">
             {/* Abstract UI Representation - Mimicking a dashboard */}
             <div className="absolute inset-0 bg-gray-50 flex flex-col">
                {/* Fake Header */}
                <div className="h-16 border-b border-gray-200 bg-white flex items-center px-8 justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="w-32 h-2 bg-gray-100 rounded-full"></div>
                </div>
                
                <div className="flex-1 flex overflow-hidden">
                    {/* Fake Sidebar */}
                    <div className="w-64 border-r border-gray-200 bg-white hidden md:flex flex-col p-6 gap-4">
                        <div className="w-full h-8 bg-brand-50 rounded-lg mb-4"></div>
                        <div className="w-3/4 h-4 bg-gray-100 rounded-full"></div>
                        <div className="w-1/2 h-4 bg-gray-100 rounded-full"></div>
                        <div className="w-2/3 h-4 bg-gray-100 rounded-full"></div>
                        <div className="mt-auto w-full h-24 bg-gray-100 rounded-xl"></div>
                    </div>
                    
                    {/* Main Content Area */}
                    <div className="flex-1 p-8 overflow-hidden relative">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <div className="w-48 h-8 bg-gray-800 rounded-lg mb-2"></div>
                                <div className="w-64 h-4 bg-gray-300 rounded-full"></div>
                            </div>
                            <div className="w-32 h-10 bg-brand-600 rounded-lg"></div>
                        </div>

                        {/* Charts/Stats Grid */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <div className="w-8 h-8 bg-blue-100 rounded-full mb-4"></div>
                                <div className="w-16 h-6 bg-gray-800 rounded-md mb-1"></div>
                                <div className="w-full h-2 bg-gray-100 rounded-full"></div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <div className="w-8 h-8 bg-purple-100 rounded-full mb-4"></div>
                                <div className="w-16 h-6 bg-gray-800 rounded-md mb-1"></div>
                                <div className="w-full h-2 bg-gray-100 rounded-full"></div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <div className="w-8 h-8 bg-green-100 rounded-full mb-4"></div>
                                <div className="w-16 h-6 bg-gray-800 rounded-md mb-1"></div>
                                <div className="w-full h-2 bg-gray-100 rounded-full"></div>
                            </div>
                        </div>

                        {/* Big Chart Mockup */}
                        <div className="w-full h-64 bg-white rounded-xl border border-gray-200 shadow-sm p-6 relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-50 to-transparent opacity-50"></div>
                            <svg className="w-full h-full absolute bottom-0 left-0" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0,20 L0,10 C10,15 20,5 30,12 C40,18 50,8 60,14 C70,18 80,10 90,15 L100,20 Z" fill="#eff6ff" />
                                <path d="M0,10 C10,15 20,5 30,12 C40,18 50,8 60,14 C70,18 80,10 90,15" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
                            </svg>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
