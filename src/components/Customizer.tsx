import React, { useState, useMemo } from 'react';
import { X, Check, ArrowRight, Gauge, Palette, CircleDot } from 'lucide-react';
import { Vehicle, Selection } from '../types';

interface CustomizerProps {
  vehicle: Vehicle;
  onClose: () => void;
  onConfirm: (selections: Selection[], totalPrice: number) => void;
  initialSelections?: Selection[];
}

export default function Customizer({ vehicle, onClose, onConfirm, initialSelections = [] }: CustomizerProps) {
  const [selections, setSelections] = useState<Selection[]>(
    vehicle.modifications?.map(cat => ({
      categoryId: cat.id,
      optionId: initialSelections.find(s => s.categoryId === cat.id)?.optionId || cat.options[0].id
    })) || []
  );

  const totalPrice = useMemo(() => {
    const modsPrice = selections.reduce((sum, sel) => {
      const category = vehicle.modifications?.find(c => c.id === sel.categoryId);
      const option = category?.options.find(o => o.id === sel.optionId);
      return sum + (option?.price || 0);
    }, 0);
    return vehicle.price + modsPrice;
  }, [vehicle, selections]);

  const handleSelect = (categoryId: string, optionId: string) => {
    setSelections(prev => prev.map(s =>
      s.categoryId === categoryId ? { ...s, optionId } : s
    ));
  };

  const currentModPrice = totalPrice - vehicle.price;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-end bg-stealth-900/40 backdrop-blur-md">
      <div className="h-full w-full max-w-2xl bg-stealth-800 border-l border-white/10 shadow-[-50px_0_100px_rgba(0,0,0,0.5)] flex flex-col animate-in slide-in-from-right duration-500">
        {/* Header */}
        <div className="p-8 lg:p-10 border-b border-white/5 flex justify-between items-center bg-stealth-900/50 backdrop-blur-xl">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse"></span>
              <span className="text-[10px] font-black text-neon-cyan uppercase tracking-widest">Configuration Terminal</span>
            </div>
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">
              Elite <span className="text-neon-cyan">Customs</span>
            </h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">
              {vehicle.make} {vehicle.model} Build
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 text-slate-400 hover:text-white transition-all"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Categories & Options */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-10 space-y-12 scrollbar-style">
          {vehicle.modifications?.map((category) => (
            <div key={category.id} className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-neon-cyan/10 p-2 rounded-lg">
                    {category.id === 'perf' ? <Gauge className="h-4 w-4 text-neon-cyan" /> :
                      category.id === 'visual' ? <Palette className="h-4 w-4 text-neon-cyan" /> :
                        <CircleDot className="h-4 w-4 text-neon-cyan" />}
                  </div>
                  <h3 className="font-black text-white uppercase text-xs tracking-[0.2em]">{category.name}</h3>
                </div>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Select One</span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {category.options.map((option) => {
                  const isSelected = selections.find(s => s.categoryId === category.id)?.optionId === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelect(category.id, option.id)}
                      className={`relative flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 overflow-hidden group ${isSelected
                          ? 'border-neon-cyan bg-neon-cyan/5 shadow-[0_0_20px_rgba(0,245,255,0.05)]'
                          : 'border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20'
                        }`}
                    >
                      {isSelected && (
                        <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan shadow-[0_0_10px_rgba(0,245,255,1)]"></div>
                      )}

                      <div className="flex-1 text-left">
                        <div className={`font-black uppercase tracking-wider text-sm ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                          {option.name}
                        </div>
                        {option.description && (
                          <div className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-widest">{option.description}</div>
                        )}
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className={`font-mono font-black text-sm ${option.price > 0 ? (isSelected ? 'text-neon-cyan' : 'text-slate-400') : 'text-slate-600'}`}>
                          {option.price === 0 ? 'STOCK' : `+$${option.price.toLocaleString()}`}
                        </div>
                        <div className={`h-5 w-5 rounded-md border flex items-center justify-center transition-all ${isSelected ? 'bg-neon-cyan border-neon-cyan' : 'border-white/10'
                          }`}>
                          {isSelected && <Check className="h-3.5 w-3.5 text-stealth-900" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Build Summary */}
        <div className="p-8 lg:p-12 border-t border-white/10 bg-stealth-900 text-white">
          <div className="flex justify-between items-end mb-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-12">
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Stock Unit</div>
                  <div className="text-sm font-black">${vehicle.price.toLocaleString()}</div>
                </div>
                {currentModPrice > 0 && (
                  <div className="animate-in slide-in-from-left duration-500">
                    <div className="text-[10px] font-black text-neon-cyan uppercase tracking-widest mb-1">Mod Package</div>
                    <div className="text-sm font-black text-neon-cyan">+${currentModPrice.toLocaleString()}</div>
                  </div>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Final Valuation</div>
              <div className="text-4xl font-black text-white tabular-nums tracking-tighter neon-glow">${totalPrice.toLocaleString()}</div>
            </div>
          </div>

          <button
            onClick={() => onConfirm(selections, totalPrice)}
            className="w-full bg-neon-cyan hover:bg-white text-stealth-900 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all shadow-[0_0_30px_rgba(0,245,255,0.2)] hover:shadow-[0_0_50px_rgba(0,245,255,0.5)] flex items-center justify-center space-x-3 group"
          >
            <span>Finalize Digital Build</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-3 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
