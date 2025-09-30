import React from 'react';
import { Vehicle } from '../types';
import VehicleCard from './VehicleCard';

interface VehicleGridProps {
  vehicles: Vehicle[];
  onViewDetails: (vehicle: Vehicle) => void;
  onAddToCart: (vehicle: Vehicle) => void;
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
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">No vehicles found matching your criteria</div>
        <div className="text-gray-400 mt-2">Try adjusting your filters</div>
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