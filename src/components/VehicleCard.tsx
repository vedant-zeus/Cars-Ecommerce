import React from 'react';
import { Heart, MapPin, Fuel, Calendar, Gauge, Phone } from 'lucide-react';
import { Vehicle } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
  onViewDetails: (vehicle: Vehicle) => void;
  onAddToCart: (vehicle: Vehicle) => void;
  onToggleFavorite: (vehicleId: string) => void;
  isFavorite: boolean;
}

export default function VehicleCard({ 
  vehicle, 
  onViewDetails, 
  onAddToCart, 
  onToggleFavorite, 
  isFavorite 
}: VehicleCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.make} ${vehicle.model}`}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => onToggleFavorite(vehicle.id)}
          className={`absolute top-3 right-3 p-2 rounded-full ${
            isFavorite ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600'
          } hover:bg-red-500 hover:text-white transition-colors`}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
        <div className="absolute top-3 left-3 bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {vehicle.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">
            {vehicle.make} {vehicle.model}
          </h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-900">
              ${vehicle.price.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">Best Price</div>
          </div>
        </div>

        {/* Vehicle Info */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Gauge className="h-4 w-4" />
            <span>{vehicle.mileage.toLocaleString()} miles</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Fuel className="h-4 w-4" />
            <span>{vehicle.fuelType}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>{vehicle.transmission}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{vehicle.location}</span>
          </div>
        </div>

        {/* Seller Info */}
        <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
          <div>
            <div className="font-medium text-gray-900">{vehicle.seller.name}</div>
            <div className="flex items-center space-x-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(vehicle.seller.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-600">({vehicle.seller.rating})</span>
            </div>
          </div>
          <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors">
            <Phone className="h-4 w-4" />
            <span className="text-sm">Call</span>
          </button>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button
            onClick={() => onViewDetails(vehicle)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors"
          >
            View Details
          </button>
          <button
            onClick={() => onAddToCart(vehicle)}
            className="flex-1 bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-lg font-medium transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}