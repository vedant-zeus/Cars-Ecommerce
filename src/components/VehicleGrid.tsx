import { Vehicle, Selection } from '../types';
import VehicleCard from './VehicleCard';

interface VehicleGridProps {
  vehicles: Vehicle[];
  onViewDetails: (vehicle: Vehicle) => void;
  onAddToCart: (vehicle: Vehicle, selections?: Selection[], totalPrice?: number) => void;
  onToggleFavorite: (vehicleId: string) => void;
  favorites: string[];
}

export default function VehicleGrid({
  vehicles,
  onViewDetails,
  onAddToCart,
  onToggleFavorite,
  favorites
}: VehicleGridProps) {
  if (vehicles.length === 0) {
    return (
      <div className="text-center py-24 bg-stealth-800 rounded-[3rem] border border-white/5">
        <div className="text-slate-500 text-lg font-black uppercase tracking-widest">No units detected</div>
        <div className="text-slate-600 mt-2 text-xs font-bold uppercase tracking-[0.2em]">Adjust parameters to reset inventory</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          onViewDetails={onViewDetails}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.includes(vehicle.id)}
        />
      ))}
    </div>
  );
}