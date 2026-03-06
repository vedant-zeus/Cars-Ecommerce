import React from 'react';
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stealth-900 border-t border-white/5 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-neon-cyan p-2 rounded-xl shadow-[0_0_20px_rgba(0,245,255,0.4)]">
                <Car className="h-6 w-6 text-stealth-900" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter italic">
                  Stealth<span className="text-neon-cyan">Drive</span>
                </h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              The world's leading destination for elite automotive acquisitions and custom performance builds.
            </p>
            <div className="flex space-x-6">
              <button className="text-slate-500 hover:text-neon-cyan transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="text-slate-500 hover:text-neon-cyan transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="text-slate-500 hover:text-neon-cyan transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-8">Ecosystem</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">The Showroom</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Custom Lab</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Private Treaty</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-8">Intelligence</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Global Support</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Custom Policy</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Digital Security</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-8">Global HQ</h4>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-4 w-4 text-neon-cyan" />
                <span className="text-xs font-bold">+91 2345678910</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-4 w-4 text-neon-cyan" />
                <span className="text-xs font-bold">ops@stealthdrive.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-4 w-4 text-neon-cyan" />
                <span className="text-xs font-bold">Silicon Valley, CA / Pune, MH</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
              © 2026 StealthDrive Customs. Optimized for Performance.
            </p>
            <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-slate-600">
              <a href="#" className="hover:text-white transition-colors">Privacy Protcol</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Op</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Ledger</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}