import React, { useState } from 'react';
import { ArrowLeft, Heart, Share2, MapPin, Fuel, Calendar, Gauge, Phone, Mail, Star, ChevronLeft, ChevronRight, Shield, Award, Clock, CheckCircle } from 'lucide-react';
import { Vehicle } from '../types';

interface VehicleDetailsPageProps {
  vehicle: Vehicle;
  onBack: () => void;
  onAddToCart: (vehicle: Vehicle) => void;
  onToggleFavorite: (vehicleId: string) => void;
  isFavorite: boolean;
}

export default function VehicleDetailsPage({ vehicle, onBack, onAddToCart, onToggleFavorite, isFavorite }: VehicleDetailsPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      date: "2024-01-15",
      comment: "Excellent vehicle! Very well maintained and exactly as described. The seller was professional and helpful throughout the process.",
      verified: true
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 4,
      date: "2024-01-10",
      comment: "Great car with good performance. Minor wear on interior but overall in excellent condition. Would recommend!",
      verified: true
    },
    {
      id: 3,
      name: "Mike Wilson",
      rating: 5,
      date: "2024-01-05",
      comment: "Perfect transaction. Vehicle was exactly as advertised. Fast delivery and great customer service.",
      verified: false
    }
  ];

  const originalPrice = Math.round(vehicle.price * 1.15);
  const discount = originalPrice - vehicle.price;
  const discountPercentage = Math.round((discount / originalPrice) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Listings</span>
            </button>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => onToggleFavorite(vehicle.id)}
                className={`p-2 rounded-full ${
                  isFavorite ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'
                } hover:bg-red-500 hover:text-white transition-colors`}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={vehicle.images[currentImageIndex]}
                  alt={`${vehicle.make} ${vehicle.model}`}
                  className="w-full h-96 object-cover"
                />
                {vehicle.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {vehicle.images.length}
                </div>
              </div>

              {/* Image Thumbnails */}
              {vehicle.images.length > 1 && (
                <div className="p-4">
                  <div className="flex space-x-3 overflow-x-auto">
                    {vehicle.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
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
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-lg">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'specifications', label: 'Specifications' },
                    { id: 'reviews', label: 'Reviews' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Description</h3>
                      <p className="text-gray-600 leading-relaxed">{vehicle.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {vehicle.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="font-semibold">Certified</div>
                        <div className="text-sm text-gray-600">Pre-Owned</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="font-semibold">Warranty</div>
                        <div className="text-sm text-gray-600">Included</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <div className="font-semibold">History</div>
                        <div className="text-sm text-gray-600">Clean Record</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <div className="font-semibold">Inspected</div>
                        <div className="text-sm text-gray-600">150+ Points</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'specifications' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Basic Information</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Make</span>
                          <span className="font-medium">{vehicle.make}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Model</span>
                          <span className="font-medium">{vehicle.model}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Year</span>
                          <span className="font-medium">{vehicle.year}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Body Type</span>
                          <span className="font-medium">{vehicle.bodyType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Color</span>
                          <span className="font-medium">{vehicle.color}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Performance</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Mileage</span>
                          <span className="font-medium">{vehicle.mileage.toLocaleString()} miles</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Fuel Type</span>
                          <span className="font-medium">{vehicle.fuelType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Transmission</span>
                          <span className="font-medium">{vehicle.transmission}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Engine</span>
                          <span className="font-medium">V6 3.0L</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">MPG</span>
                          <span className="font-medium">25 city / 32 hwy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Customer Reviews</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-current" />
                          ))}
                        </div>
                        <span className="font-medium">4.7</span>
                        <span className="text-gray-500">({reviews.length} reviews)</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {reviews.map((review) => (
                        <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="font-medium text-blue-600">
                                  {review.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium">{review.name}</span>
                                  {review.verified && (
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                  )}
                                </div>
                                <div className="text-sm text-gray-500">{review.date}</div>
                              </div>
                            </div>
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              {/* Price and Discount */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl font-bold text-blue-900">
                    ${vehicle.price.toLocaleString()}
                  </span>
                  {discount > 0 && (
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-medium">
                      -{discountPercentage}%
                    </span>
                  )}
                </div>
                {discount > 0 && (
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 line-through">
                      ${originalPrice.toLocaleString()}
                    </span>
                    <span className="text-green-600 font-medium">
                      Save ${discount.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Gauge className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                  <div className="text-sm text-gray-600">Mileage</div>
                  <div className="font-medium">{vehicle.mileage.toLocaleString()}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Fuel className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                  <div className="text-sm text-gray-600">Fuel</div>
                  <div className="font-medium">{vehicle.fuelType}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                  <div className="text-sm text-gray-600">Transmission</div>
                  <div className="font-medium">{vehicle.transmission}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                  <div className="text-sm text-gray-600">Location</div>
                  <div className="font-medium text-xs">{vehicle.location}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => onAddToCart(vehicle)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Add to Cart
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Schedule Test Drive
                </button>
              </div>

              {/* Seller Info */}
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3">Seller Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{vehicle.seller.name}</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(vehicle.seller.rating) ? 'fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({vehicle.seller.rating})</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>Call</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <Mail className="h-4 w-4" />
                      <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}