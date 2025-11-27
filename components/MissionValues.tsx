import React from 'react';
import FadeIn from './ui/FadeIn';
import { Target, CheckCircle2 } from 'lucide-react';

const MissionValues: React.FC = () => {
  const values = [
    "Clear goals and constraints",
    "Simple systems over fragile complexity",
    "High-quality execution and clean documentation",
    "Metrics that reflect reality, not vanity"
  ];

  return (
    <section id="values" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gray-800 rounded-lg">
                <Target className="w-6 h-6 text-brand-400" />
              </div>
              <h2 className="text-3xl font-bold">Why I Build</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I care about building things that compound—systems that get better over time through feedback, data, and iteration.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My goal is to create products and communities that genuinely help people improve their lives or businesses. It's not just about shipping code; it's about shipping value.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Working Style</h3>
              <p className="text-gray-400 mb-8">
                I work fast, but not careless. I prioritize speed of iteration while maintaining structural integrity.
              </p>
              <div className="space-y-4">
                {values.map((value, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0" />
                    <span className="text-gray-200 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default MissionValues;