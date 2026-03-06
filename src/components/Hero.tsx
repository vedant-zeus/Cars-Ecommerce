import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-stealth-900 overflow-hidden py-20 lg:py-32">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-neon-cyan animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-neon-cyan">Edition 2026 Live</span>
            </div>
            <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-[0.9] text-white uppercase italic tracking-tighter">
              DRIVE THE <br />
              <span className="neon-glow text-neon-cyan">FUTURE</span>
            </h1>
            <p className="text-lg lg:text-xl mb-10 text-slate-400 leading-relaxed max-w-xl">
              Experience the pinnacle of automotive engineering.
              Custom-built performance vehicles delivered to your private garage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="bg-neon-cyan hover:bg-white text-stealth-900 px-10 py-5 rounded-2xl text-lg font-black uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(0,245,255,0.3)] hover:shadow-[0_0_50px_rgba(0,245,255,0.5)] flex items-center justify-center group">
                Enter Showroom
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="bg-white/5 border border-white/10 text-white hover:bg-white/10 px-10 py-5 rounded-2xl text-lg font-black uppercase tracking-widest transition-all">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-12 border-t border-white/5 pt-12">
              <div>
                <div className="text-3xl font-black text-white">$240M+</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Stock Value</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">2.4s</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Avg 0-60 Time</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">100%</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Carbon Fiber</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:scale-110">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
              <img
                src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg"
                alt="Premium Vehicle"
                className="w-full h-full object-cover grayscale-[0.2] contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stealth-900 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Speed Overlay */}
            <div className="absolute -top-10 -right-10 bg-stealth-800/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl hidden xl:block">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-1.5 bg-neon-cyan rounded-full"></div>
                <div>
                  <div className="text-[10px] font-black text-neon-cyan uppercase tracking-widest mb-1">Current Velocity</div>
                  <div className="text-3xl font-black text-white tabular-nums">142<span className="text-sm ml-1 text-slate-500">MPH</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}