import React, { useState } from 'react';
import { X, MapPin, Fuel, Calendar, Gauge, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { Vehicle } from '../types';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onAddToCart: (vehicle: Vehicle) => void;
}

export default function VehicleModal({ vehicle, onClose, onAddToCart }: VehicleModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!vehicle) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h2>
            <p className="text-lg text-blue-600 font-semibold">
              ${vehicle.price.toLocaleString()}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {/* Images */}
          <div>
            <div className="relative">
              <img
                src={vehicle.images[currentImageIndex]}
                alt={`${vehicle.make} ${vehicle.model}`}
                className="w-full h-64 lg:h-80 object-cover rounded-xl"
              />
              {vehicle.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Image Thumbnails */}
            {vehicle.images.length > 1 && (
              <div className="flex space-x-2 mt-4">
                {vehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Vehicle Specs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Gauge className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-600">Mileage</div>
                  <div className="font-medium">{vehicle.mileage.toLocaleString()} miles</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Fuel className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-600">Fuel Type</div>
                  <div className="font-medium">{vehicle.fuelType}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-600">Transmission</div>
                  <div className="font-medium">{vehicle.transmission}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-600">Location</div>
                  <div className="font-medium">{vehicle.location}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{vehicle.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <div className="grid grid-cols-1 gap-2">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Seller Info */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold mb-3">Seller Information</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="font-medium text-gray-900">{vehicle.seller.name}</div>
                    <div className="flex items-center space-x-1 mt-1">
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
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>Call Now</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>Message</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onAddToCart(vehicle)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors"
            >
              Add to Cart - ${vehicle.price.toLocaleString()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}