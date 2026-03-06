import { ArrowLeft, Minus, Plus, Trash2, ShoppingCart, CreditCard, Shield, Truck, MapPin } from 'lucide-react';
import { CartItem } from '../types';

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onBack: () => void;
}

export default function CartPage({ cartItems, onUpdateQuantity, onRemoveItem, onBack }: CartPageProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const shipping = 0; // Free shipping
  const total = subtotal + tax + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-stealth-900 text-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-neon-cyan hover:text-white mb-12 transition-colors uppercase font-black tracking-widest text-xs"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Showroom</span>
          </button>

          <div className="text-center py-20 bg-stealth-800 rounded-[3rem] border border-white/5">
            <ShoppingCart className="h-24 w-24 mx-auto mb-8 text-white/5" />
            <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter italic">Garage is Empty</h2>
            <p className="text-slate-500 mb-10 max-w-md mx-auto font-bold uppercase tracking-widest text-xs">
              No elite configurations detected.
              Deploy to showroom to begin acquisition.
            </p>
            <button
              onClick={onBack}
              className="bg-neon-cyan hover:bg-white text-stealth-900 px-12 py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(0,245,255,0.2)]"
            >
              Browse Showroom
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stealth-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-neon-cyan hover:text-white transition-colors uppercase font-black tracking-widest text-xs"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Showroom</span>
          </button>
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter italic">
              Your <span className="text-neon-cyan neon-glow">Garage</span>
            </h1>
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em] mt-2">Active Acquisitions: {cartItems.length}</p>
          </div>
          <div className="w-32 hidden lg:block"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-8">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-stealth-800 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-white/10 transition-all group">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Vehicle Image */}
                  <div className="md:w-72 relative">
                    <img
                      src={item.vehicle.images[0]}
                      alt={`${item.vehicle.make} ${item.vehicle.model}`}
                      className="w-full h-full object-cover min-h-[250px] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-stealth-800"></div>
                  </div>

                  {/* Vehicle Details */}
                  <div className="flex-1 p-8 lg:p-10 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="text-[10px] font-black text-neon-cyan uppercase tracking-widest mb-1">Stock ID: {item.vehicle.id.slice(0, 8)}</div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">
                          {item.vehicle.year} {item.vehicle.make} <span className="text-neon-cyan">{item.vehicle.model}</span>
                        </h3>
                        <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">
                          <MapPin className="h-3 w-3 text-neon-cyan" />
                          <span>{item.vehicle.location}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-slate-600 hover:text-red-500 p-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Modification Shopping List */}
                    {item.selectedModifications.length > 0 && (
                      <div className="mb-8 p-6 bg-stealth-900 rounded-3xl border border-white/5">
                        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Modification Manifest</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                          {item.selectedModifications.map((sel) => {
                            const category = item.vehicle.modifications?.find(c => c.id === sel.categoryId);
                            const option = category?.options.find(o => o.id === sel.optionId);
                            if (!option || option.price === 0) return null;
                            return (
                              <div key={sel.categoryId} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
                                <span className="text-slate-400">{option.name}</span>
                                <span className="text-neon-cyan">+${option.price.toLocaleString()}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Price and Quantity */}
                    <div className="mt-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex items-center space-x-6 bg-stealth-900 px-4 py-2 rounded-2xl border border-white/5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="p-2 text-slate-500 hover:text-white transition-all"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-black text-lg w-8 text-center text-white tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-2 text-slate-500 hover:text-white transition-all"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Configuration Value</div>
                        <div className="text-3xl font-black text-white tabular-nums tracking-tighter">
                          ${(item.totalPrice * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-stealth-800 rounded-[2.5rem] p-10 sticky top-32 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-neon-cyan/5 rounded-full blur-[80px]"></div>

              <h2 className="text-2xl font-black text-white mb-10 uppercase tracking-tighter italic">Asset <span className="text-neon-cyan">Valuation</span></h2>

              <div className="space-y-6 mb-10">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-slate-500">Gross Value</span>
                  <span className="text-white">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-slate-500">Acquisition Tax (8%)</span>
                  <span className="text-white">${tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-slate-500">Secure Transport</span>
                  <span className="text-neon-cyan">ENCRYPTED/FREE</span>
                </div>

                <div className="border-t border-white/5 pt-8 mt-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Total Investment</div>
                      <div className="text-4xl font-black text-white tabular-nums tracking-tighter neon-glow">${total.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-neon-cyan hover:bg-white text-stealth-900 py-6 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-[0_0_30px_rgba(0,245,255,0.2)] flex items-center justify-center space-x-3 group">
                <CreditCard className="h-5 w-5" />
                <span>Authorize Acquisition</span>
              </button>

              {/* Security Features */}
              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex items-center space-x-4 px-4 py-3 bg-white/5 rounded-2xl border border-white/5">
                  <Shield className="h-4 w-4 text-neon-cyan" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Bulletproof Protection</span>
                </div>
                <div className="flex items-center space-x-4 px-4 py-3 bg-white/5 rounded-2xl border border-white/5">
                  <Truck className="h-4 w-4 text-neon-cyan" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Stealth Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}