
import React from 'react';
import FadeIn from './ui/FadeIn';
import { AppWindow, Users, BarChart3, Check } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Digital Products",
      icon: <AppWindow className="w-6 h-6 text-brand-600" />,
      description: "Apps, websites, and internal tools built for performance and usability.",
      list: ["Web Applications", "Marketing Sites", "Internal Dashboards", "MVP Development"]
    },
    {
      title: "Community Systems",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      description: "Architecture for engagement, retention, and scaling communities.",
      list: ["Onboarding Flows", "Engagement Loops", "Retention Strategy", "Free-to-Paid Conversion"]
    },
    {
      title: "Growth Infrastructure",
      icon: <BarChart3 className="w-6 h-6 text-green-600" />,
      description: "The technical backbone needed to measure and improve success.",
      list: ["Analytics Tracking", "Automated Workflows", "A/B Testing Setup", "Conversion Optimization"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">What I Do</h2>
          <p className="text-gray-500 text-xl leading-relaxed">
            I’m most effective when I can own a problem end-to-end: <br className="hidden md:block"/>
            Strategy → Execution → Measurement → Iteration.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1} className="h-full">
              <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 h-full flex flex-col hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="mb-8 p-4 bg-white rounded-2xl w-fit border border-gray-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>
                <ul className="mt-auto space-y-4">
                  {service.list.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-gray-600 font-medium">
                      <div className="mt-1 p-0.5 bg-brand-100 rounded-full">
                        <Check className="w-3 h-3 text-brand-600" strokeWidth={4} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
