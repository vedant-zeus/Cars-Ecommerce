import { Heart, MapPin, Fuel, Gauge } from 'lucide-react';
import { Vehicle, Selection } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
  onViewDetails: (vehicle: Vehicle) => void;
  onAddToCart: (vehicle: Vehicle, selections?: Selection[], totalPrice?: number) => void;
  onToggleFavorite: (id: string) => void;
  isFavorite: boolean;
}

export default function VehicleCard({ vehicle, onViewDetails, onAddToCart, onToggleFavorite, isFavorite }: VehicleCardProps) {
  return (
    <div className="group bg-stealth-800 rounded-3xl overflow-hidden border border-white/5 hover:border-neon-cyan/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,245,255,0.1)] flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.make} ${vehicle.model}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stealth-900/80 via-transparent to-transparent opacity-60"></div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-stealth-900/80 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-black text-white uppercase tracking-widest">
            {vehicle.year}
          </span>
          {vehicle.featured && (
            <span className="px-3 py-1 bg-neon-cyan text-stealth-900 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(0,245,255,0.4)]">
              Elite Stock
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(vehicle.id);
          }}
          className={`absolute top-4 right-4 p-2.5 rounded-xl backdrop-blur-md border transition-all ${isFavorite
            ? 'bg-red-500 border-red-400 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]'
            : 'bg-stealth-900/80 border-white/10 text-white hover:bg-white/10'
            }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-xl font-black text-white uppercase tracking-tighter italic select-none">
              {vehicle.make} <span className="text-neon-cyan">{vehicle.model}</span>
            </h3>
          </div>
          <div className="flex items-center text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            <MapPin className="h-3 w-3 mr-1 text-neon-cyan" />
            {vehicle.location}
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white/5 rounded-xl p-3 border border-white/5">
            <div className="flex items-center text-slate-500 text-[9px] font-bold uppercase tracking-widest mb-1">
              <Gauge className="h-3 w-3 mr-1.5 text-neon-cyan/60" />
              Mileage
            </div>
            <div className="text-sm font-black text-white">{vehicle.mileage.toLocaleString()} KM</div>
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/5">
            <div className="flex items-center text-slate-500 text-[9px] font-bold uppercase tracking-widest mb-1">
              <Fuel className="h-3 w-3 mr-1.5 text-neon-cyan/60" />
              Propulsion
            </div>
            <div className="text-sm font-black text-white">{vehicle.fuelType}</div>
          </div>
        </div>

        {/* Price and Actions */}
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-0.5">Investment</div>
            <div className="text-2xl font-black text-white tabular-nums tracking-tighter">
              ${vehicle.price.toLocaleString()}
            </div>
          </div>
          <button
            onClick={() => onViewDetails(vehicle)}
            className="flex-1 bg-white hover:bg-neon-cyan text-stealth-900 h-12 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]"
          >
            Configure
          </button>
        </div>
      </div>
    </div>
  );
}