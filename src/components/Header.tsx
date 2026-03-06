import React from 'react';
import { Car, Search, Heart, ShoppingCart, User, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartToggle: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ cartCount, onCartToggle, searchQuery, onSearchChange }: HeaderProps) {
  const [showCartDropdown, setShowCartDropdown] = React.useState(false);

  return (
    <header className="bg-stealth-900/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="bg-neon-cyan p-2 rounded-xl shadow-[0_0_20px_rgba(0,245,255,0.4)] group-hover:scale-110 transition-transform">
              <Car className="h-8 w-8 text-stealth-900" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tighter uppercase neon-glow">
                Stealth<span className="text-neon-cyan">Drive</span>
              </h1>
              <p className="text-[10px] font-bold text-neon-cyan/60 uppercase tracking-widest">Elite Customs</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-neon-cyan/40" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 bg-stealth-800 border border-white/10 rounded-2xl leading-5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan transition-all"
                placeholder="Search premium inventory..."
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <Heart className="h-6 w-6" />
            </button>

            <div className="relative">
              <button
                onClick={() => setShowCartDropdown(!showCartDropdown)}
                className="relative p-2 text-slate-400 hover:text-neon-cyan transition-colors flex items-center space-x-1"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-neon-cyan text-stealth-900 text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center shadow-[0_0_10px_rgba(0,245,255,0.5)]">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Cart Dropdown */}
              {showCartDropdown && (
                <div className="absolute right-0 mt-4 w-72 bg-stealth-800 rounded-2xl shadow-2xl border border-white/10 z-50 overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-black text-white uppercase text-xs tracking-widest">Your Garage</span>
                      <button
                        onClick={() => setShowCartDropdown(false)}
                        className="text-slate-500 hover:text-white"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    {cartCount > 0 ? (
                      <div className="space-y-4">
                        <p className="text-sm text-slate-400">{cartCount} customized vehicles</p>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => {
                              setShowCartDropdown(false);
                              onCartToggle();
                            }}
                            className="flex-1 bg-neon-cyan hover:bg-white text-stealth-900 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all"
                          >
                            Enter Garage
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-slate-500 italic py-4">Garage is currently empty</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>

            <button className="hidden md:flex items-center space-x-3 bg-stealth-800 hover:bg-stealth-700 border border-white/5 p-1 pr-4 rounded-full transition-all">
              <div className="bg-stealth-700 p-2 rounded-full">
                <User className="h-5 w-5 text-neon-cyan" />
              </div>
              <span className="text-xs font-bold text-slate-300">Member</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay to close dropdown */}
      {showCartDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowCartDropdown(false)}
        ></div>
      )}
    </header>
  );
}