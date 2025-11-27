import React from 'react';
import FadeIn from './ui/FadeIn';
import { Lightbulb, Settings, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text */}
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                A builder with a <br/><span className="text-brand-600">business mindset.</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  I design, ship, and iterate on products, tools, and communities. My background sits between software engineering and business strategy, which means I’m equally comfortable discussing user experience, systems architecture, and monetization.
                </p>
                <p className="mb-6">
                  I like working on projects where execution matters—clear metrics, fast feedback loops, and a strong focus on reliability. If it can be measured, improved, automated, or scaled, I’m interested.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-8">
              <div className="p-6 bg-brand-50 rounded-2xl border border-brand-100">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-brand-900">
                  <span className="p-1 bg-brand-200 rounded-md"><Settings className="w-4 h-4 text-brand-700"/></span>
                  The Optimizer
                </h3>
                <p className="text-brand-800 leading-relaxed">
                  I’m the kind of person who can’t stop optimizing—flows, funnels, onboarding, retention, and the product itself. I enjoy building things that feel premium, run smoothly, and make people come back.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Visual Cards */}
          <div className="relative">
            <div className="grid gap-6">
                <FadeIn delay={0.2} direction="left">
                    <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-start gap-4">
                        <div className="p-3 bg-blue-100 rounded-xl text-blue-600 shrink-0">
                            <Lightbulb />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Clarity</h3>
                            <p className="text-gray-600 text-sm">Whether shipping features or refining community experience, clarity is the goal.</p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.3} direction="left">
                    <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 ml-0 lg:ml-8">
                        <div className="p-3 bg-purple-100 rounded-xl text-purple-600 shrink-0">
                            <Settings />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Consistency</h3>
                            <p className="text-gray-600 text-sm">Systems that work reliably without constant manual intervention.</p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.4} direction="left">
                    <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-start gap-4">
                        <div className="p-3 bg-green-100 rounded-xl text-green-600 shrink-0">
                            <TrendingUp />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">User Value</h3>
                            <p className="text-gray-600 text-sm">Real utility over vanity metrics. Building things people actually use.</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;