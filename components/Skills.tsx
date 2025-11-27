import React from 'react';
import FadeIn from './ui/FadeIn';
import { Code2, LineChart, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Work</h2>
          <p className="text-gray-600 text-lg">I mix Product + Growth + Engineering.</p>
        </FadeIn>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 gap-12">
            
            <FadeIn delay={0.1} className="relative">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center h-full">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Layers className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Product</h3>
                <p className="text-gray-600 text-sm">UX-minded features, roadmap planning, and rapid "ship and learn" cycles.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center h-full">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <LineChart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Growth</h3>
                <p className="text-gray-600 text-sm">Onboarding, activation, retention, conversion, offers, and messaging.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="relative">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center h-full">
                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Code2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Engineering</h3>
                <p className="text-gray-600 text-sm">Practical implementation, clean structure, robust testing, and performance.</p>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;