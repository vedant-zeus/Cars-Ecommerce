import { X, Minus, Plus, ShoppingCart, Package, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }: CartProps) {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-end bg-stealth-900/40 backdrop-blur-md">
      <div className="bg-stealth-800 h-full w-full max-w-lg border-l border-white/10 shadow-[-50px_0_100px_rgba(0,0,0,0.5)] flex flex-col animate-in slide-in-from-right duration-500">
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-white/5 bg-stealth-900/50 backdrop-blur-xl">
          <div className="flex items-center space-x-3">
            <div className="bg-neon-cyan/20 p-2 rounded-xl">
              <ShoppingCart className="h-5 w-5 text-neon-cyan" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white uppercase tracking-tighter italic">
                Active <span className="text-neon-cyan">Acquisitions</span>
              </h2>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{cartItems.length} configurations locked</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 text-slate-400 hover:text-white transition-all"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 bg-white/5 rounded-[2rem] border border-dashed border-white/10">
              <Package className="h-16 w-16 mx-auto mb-6 text-white/5" />
              <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Garage is empty</p>
              <button
                onClick={onClose}
                className="mt-6 text-neon-cyan text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors"
              >
                Enter Showroom
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="relative bg-white/5 border border-white/5 rounded-3xl p-6 transition-all hover:bg-white/10 group">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/10">
                      <img
                        src={item.vehicle.images[0]}
                        alt={`${item.vehicle.make} ${item.vehicle.model}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-black text-white uppercase text-xs tracking-wider">
                          {item.vehicle.make} <span className="text-neon-cyan">{item.vehicle.model}</span>
                        </h3>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="opacity-0 group-hover:opacity-100 text-slate-600 hover:text-red-500 transition-all"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      {item.selectedModifications.length > 0 && (
                        <div className="text-[9px] font-bold text-neon-cyan/60 uppercase tracking-widest mb-3">
                          Custom Specification Active
                        </div>
                      )}

                      <div className="text-lg font-black text-white tabular-nums">
                        ${item.totalPrice.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                    <div className="flex items-center space-x-4 bg-stealth-900 px-3 py-1.5 rounded-xl border border-white/5">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-1 text-slate-500 hover:text-white transition-all"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="font-black text-sm w-6 text-center text-white">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-slate-500 hover:text-white transition-all"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <div className="text-sm font-black text-neon-cyan tabular-nums">
                      ${(item.totalPrice * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-white/10 p-10 space-y-8 bg-stealth-900 text-white">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 block">Total Asset Valuation</span>
                <span className="text-4xl font-black text-white tabular-nums tracking-tighter neon-glow">${total.toLocaleString()}</span>
              </div>
            </div>

            <button className="w-full bg-neon-cyan hover:bg-white text-stealth-900 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-[0_0_30px_rgba(0,245,255,0.2)] hover:shadow-[0_0_50px_rgba(0,245,255,0.5)]">
              Initialize Checkout Flow
            </button>

            <button
              onClick={onClose}
              className="w-full text-[10px] font-black text-slate-600 hover:text-white uppercase tracking-widest transition-colors"
            >
              Continue Configuration
            </button>
          </div>
        )}
      </div>
    </div>
  );
}