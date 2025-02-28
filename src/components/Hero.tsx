import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-black section-padding min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white leading-tight tracking-tight">
            Education.
            <br />
            Reimagined.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Transform your institution with our revolutionary education management platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="btn-primary group">
              Get Started
              <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary">
              Learn more
            </button>
          </div>
        </div>

        <div className="mt-32">
          <div className="relative">
            <div className="absolute -inset-x-20 -top-20 -bottom-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80"
                alt="Dashboard Preview"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;