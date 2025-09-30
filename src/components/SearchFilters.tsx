import React from 'react';
import { SlidersHorizontal, X, MapPin, Car, DollarSign } from 'lucide-react';
import { FilterState } from '../types';

interface SearchFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export default function SearchFilters({ filters, onFilterChange, isOpen, onToggle }: SearchFiltersProps) {
  const makes = ['All', 'BMW', 'Tesla', 'Ford', 'Audi', 'Jeep', 'Mercedes-Benz', 'Toyota', 'Honda', 'Chevrolet', 'Nissan'];
  const fuelTypes = ['All', 'Gasoline', 'Diesel', 'Electric', 'Hybrid'];
  const bodyTypes = ['All', 'Sedan', 'SUV', 'Hatchback', 'Coupe', 'Truck', 'Convertible'];
  const locations = ['All', 'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Miami, FL', 'Denver, CO', 'Seattle, WA', 'Austin, TX', 'Boston, MA'];
  const priceRanges = [
    { label: 'All Prices', min: 0, max: 200000 },
    { label: 'Under $25K', min: 0, max: 25000 },
    { label: '$25K - $50K', min: 25000, max: 50000 },
    { label: '$50K - $75K', min: 50000, max: 75000 },
    { label: '$75K - $100K', min: 75000, max: 100000 },
    { label: 'Over $100K', min: 100000, max: 200000 }
  ];

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const handlePriceRangeSelect = (min: number, max: number) => {
    handleFilterChange('priceRange', [min, max]);
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Toggle Button */}
        <div className="flex items-center justify-between py-4">
          <button
            onClick={onToggle}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-lg transition-colors font-medium"
          >
            <SlidersHorizontal className="h-5 w-5" />
            <span>Advanced Filters</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="price">Price</option>
              <option value="year">Year</option>
              <option value="mileage">Mileage</option>
            </select>
          </div>
        </div>

        {/* Filter Panel */}
        {isOpen && (
          <div className="pb-8 border-t border-gray-200 pt-8">
            {/* Quick Price Filters */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
                Price Range
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {priceRanges.map((range, index) => (
                  <button
                    key={index}
                    onClick={() => handlePriceRangeSelect(range.min, range.max)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      filters.priceRange[0] === range.min && filters.priceRange[1] === range.max
                        ? 'bg-blue-900 text-white border-blue-900'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Make */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <Car className="h-4 w-4 mr-2 text-blue-600" />
                  Brand
                </label>
                <select
                  value={filters.make}
                  onChange={(e) => handleFilterChange('make', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {makes.map(make => (
                    <option key={make} value={make === 'All' ? '' : make}>{make}</option>
                  ))}
                </select>
              </div>

              {/* Body Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Vehicle Type</label>
                <select
                  value={filters.bodyType}
                  onChange={(e) => handleFilterChange('bodyType', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {bodyTypes.map(type => (
                    <option key={type} value={type === 'All' ? '' : type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                  Location
                </label>
                <select
                  value={filters.location || ''}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {locations.map(location => (
                    <option key={location} value={location === 'All' ? '' : location}>{location}</option>
                  ))}
                </select>
              </div>

              {/* Fuel Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Fuel Type</label>
                <select
                  value={filters.fuelType}
                  onChange={(e) => handleFilterChange('fuelType', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {fuelTypes.map(type => (
                    <option key={type} value={type === 'All' ? '' : type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Mileage */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Max Mileage: {filters.mileageMax.toLocaleString()} miles
                </label>
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="10000"
                  value={filters.mileageMax}
                  onChange={(e) => handleFilterChange('mileageMax', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0</span>
                  <span>200K+</span>
                </div>
              </div>
            </div>

            {/* Advanced Filters */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Filters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Year Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Year Range: {filters.yearRange[0]} - {filters.yearRange[1]}
                  </label>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="2010"
                      max="2024"
                      value={filters.yearRange[0]}
                      onChange={(e) => handleFilterChange('yearRange', [parseInt(e.target.value), filters.yearRange[1]])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <input
                      type="range"
                      min="2010"
                      max="2024"
                      value={filters.yearRange[1]}
                      onChange={(e) => handleFilterChange('yearRange', [filters.yearRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>2010</span>
                      <span>2024</span>
                    </div>
                  </div>
                </div>

                {/* Custom Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Custom Price Range: ${filters.priceRange[0].toLocaleString()} - ${filters.priceRange[1].toLocaleString()}
                  </label>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="200000"
                      step="5000"
                      value={filters.priceRange[0]}
                      onChange={(e) => handleFilterChange('priceRange', [parseInt(e.target.value), filters.priceRange[1]])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <input
                      type="range"
                      min="0"
                      max="200000"
                      step="5000"
                      value={filters.priceRange[1]}
                      onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>$0</span>
                      <span>$200K+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clear Filters Button */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => onFilterChange({
                    make: '',
                    priceRange: [0, 200000],
                    yearRange: [2010, 2024],
                    mileageMax: 200000,
                    fuelType: '',
                    bodyType: '',
                    location: '',
                    sortBy: 'price'
                  })}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}