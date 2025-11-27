import React from 'react';
import FadeIn from './ui/FadeIn';

const Currently: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <span className="text-brand-600 font-semibold tracking-wider text-sm uppercase mb-4 block">Currently</span>
          <h3 className="text-2xl md:text-3xl font-medium text-gray-900 leading-normal">
            Studying <span className="font-bold">Business Informatics</span> while building and shipping projects on the side—focused on product execution, community growth, and scalable systems.
          </h3>
        </FadeIn>
      </div>
    </section>
  );
};

export default Currently;