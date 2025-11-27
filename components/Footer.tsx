
import React from 'react';
import { Mail, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Large CTA */}
        <div className="bg-brand-600 rounded-[2.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden mb-24">
          
          {/* Background Clouds Overlay - Subtle */}
          <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/682ad6aba40b11e723404591/6830968d666e18681f0d98c1_image_clouds.webp')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready to build?
            </h2>
            <p className="text-brand-100 text-xl mb-12 max-w-2xl mx-auto">
              If you want someone who can execute and optimize end-to-end, let’s talk about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                    href="mailto:hello@example.com" 
                    className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-colors shadow-xl"
                >
                    Get in Touch <ArrowUpRight className="w-5 h-5" />
                </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="grid md:grid-cols-4 gap-12 pt-8">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-gray-900 mb-6">
              Jonas<span className="text-brand-600">.</span>
            </div>
            <p className="text-gray-500 mb-6">
                Turning ideas into systems people actually use.
            </p>
            <div className="flex gap-4">
                <a href="#" className="p-2 bg-gray-50 rounded-lg text-gray-500 hover:text-brand-600 hover:bg-brand-50 transition-all">
                <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-50 rounded-lg text-gray-500 hover:text-brand-600 hover:bg-brand-50 transition-all">
                <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:hello@example.com" className="p-2 bg-gray-50 rounded-lg text-gray-500 hover:text-brand-600 hover:bg-brand-50 transition-all">
                <Mail className="w-5 h-5" />
                </a>
            </div>
          </div>
          
          <div className="md:col-span-1"></div>

          <div className="md:col-span-1">
             <h4 className="font-bold text-gray-900 mb-4">Navigation</h4>
             <ul className="space-y-3 text-gray-500">
                <li><a href="#about" className="hover:text-brand-600 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-brand-600 transition-colors">Services</a></li>
                <li><a href="#skills" className="hover:text-brand-600 transition-colors">Skills</a></li>
             </ul>
          </div>

           <div className="md:col-span-1">
             <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
             <ul className="space-y-3 text-gray-500">
                <li><a href="#" className="hover:text-brand-600 transition-colors">Imprint</a></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">Privacy</a></li>
             </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Jonas Dzaack. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
