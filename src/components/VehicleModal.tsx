import { useState } from 'react';
import { X, MapPin, Fuel, Calendar, Gauge, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { Vehicle, Selection } from '../types';
import Customizer from './Customizer';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onAddToCart: (vehicle: Vehicle, selections?: Selection[], totalPrice?: number) => void;
}

export default function VehicleModal({ vehicle, onClose, onAddToCart }: VehicleModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCustomizer, setShowCustomizer] = useState(false);

  if (!vehicle) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  return (
    <div className="fixed inset-0 bg-stealth-900/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 lg:p-10">
      <div className="bg-stealth-800 rounded-[2.5rem] max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)] scrollbar-hide">
        {/* Header */}
        <div className="flex items-center justify-between p-8 lg:p-12 border-b border-white/5 sticky top-0 bg-stealth-800/80 backdrop-blur-md z-10">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="px-3 py-1 bg-neon-cyan text-stealth-900 text-[10px] font-black uppercase tracking-widest rounded-lg">
                Model Year {vehicle.year}
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Identifier: {vehicle.id.slice(0, 8)}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter italic">
              {vehicle.make} <span className="text-neon-cyan">{vehicle.model}</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all group"
          >
            <X className="h-6 w-6 text-slate-400 group-hover:text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 lg:p-12">
          {/* Left Column: Visuals */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
              <img
                src={vehicle.images[currentImageIndex]}
                alt={`${vehicle.make} ${vehicle.model}`}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-stealth-900/80 to-transparent">
                <div className="flex justify-between items-center text-white/50 text-[10px] font-black uppercase tracking-[0.2em]">
                  <span>Visual {currentImageIndex + 1} of {vehicle.images.length}</span>
                </div>
              </div>

              {vehicle.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-stealth-900/80 border border-white/10 rounded-2xl text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-neon-cyan hover:text-stealth-900 hover:scale-110"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-stealth-900/80 border border-white/10 rounded-2xl text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-neon-cyan hover:text-stealth-900 hover:scale-110"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {vehicle.images.length > 1 && (
              <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                {vehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all p-0.5 ${index === currentImageIndex
                      ? 'border-neon-cyan bg-neon-cyan/20 scale-105'
                      : 'border-white/5 hover:border-white/20'
                      }`}
                  >
                    <img
                      src={image}
                      alt={`Angle ${index + 1}`}
                      className="w-full h-full object-cover rounded-[0.8rem]"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Features Cloud */}
            <div className="pt-8 border-t border-white/5">
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6">Technical Architecture</h3>
              <div className="flex flex-wrap gap-2">
                {vehicle.features.map((feature, index) => (
                  <span key={index} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-slate-300">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Specs & Logic */}
          <div className="lg:col-span-5 space-y-10">
            {/* Primary Specs */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Gauge, label: 'Velocity Limit', value: `${vehicle.mileage.toLocaleString()} KM` },
                { icon: Fuel, label: 'Energy Source', value: vehicle.fuelType },
                { icon: Calendar, label: 'Control Unit', value: vehicle.transmission },
                { icon: MapPin, label: 'Deployment', value: vehicle.location.split(',')[0] }
              ].map((spec, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <spec.icon className="h-5 w-5 text-neon-cyan mb-3" />
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{spec.label}</div>
                  <div className="text-sm font-black text-white">{spec.value}</div>
                </div>
              ))}
            </div>

            {/* Narrative */}
            <div className="space-y-4">
              <h3 className="text-xs font-black text-white uppercase tracking-widest flex items-center">
                <ShieldCheck className="h-4 w-4 mr-2 text-neon-cyan" />
                Performance Report
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-neon-cyan/30 pl-6 italic">
                "{vehicle.description}"
              </p>
            </div>

            {/* Seller Tech */}
            <div className="p-6 bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Authenticated Vendor</div>
                  <div className="text-lg font-black text-white">{vehicle.seller.name}</div>
                </div>
                <div className="px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/40 rounded-lg text-neon-cyan text-[10px] font-black">
                  LEVEL {vehicle.seller.rating}
                </div>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-white/10 hover:bg-white text-stealth-900 border border-white/10 px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                  Direct Signal
                </button>
                <button className="flex-1 border border-white/10 hover:border-white/30 text-white px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                  Encrypted Intel
                </button>
              </div>
            </div>

            {/* Price & Primary Ops */}
            <div className="space-y-4 pt-4">
              <div className="flex items-end justify-between mb-2">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Base Acquisition Fee</span>
                <span className="text-3xl font-black text-white tabular-nums">${vehicle.price.toLocaleString()}</span>
              </div>

              <button
                onClick={() => onAddToCart(vehicle)}
                className="w-full bg-white hover:bg-slate-200 text-stealth-900 py-5 rounded-2xl text-sm font-black uppercase tracking-[0.2em] transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                Acquire Unit (Stock)
              </button>

              {vehicle.modifications && (
                <button
                  onClick={() => setShowCustomizer(true)}
                  className="w-full bg-neon-cyan hover:bg-white text-stealth-900 py-5 rounded-2xl text-sm font-black uppercase tracking-[0.2em] transition-all shadow-[0_0_30px_rgba(0,245,255,0.2)] hover:shadow-[0_0_50px_rgba(0,245,255,0.4)] flex items-center justify-center space-x-3 group"
                >
                  <ShieldCheck className="h-5 w-5 group-hover:animate-bounce" />
                  <span>Customize & Upgrade</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {showCustomizer && (
          <Customizer
            vehicle={vehicle}
            onClose={() => setShowCustomizer(false)}
            onConfirm={(selections, totalPrice) => {
              onAddToCart(vehicle, selections, totalPrice);
              setShowCustomizer(false);
              onClose();
            }}
          />
        )}
      </div>
    </div>
  );
}