import { SlidersHorizontal, DollarSign, X } from 'lucide-react';
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
    { label: 'All Prices', min: 0, max: 500000 },
    { label: 'Under $50K', min: 0, max: 50000 },
    { label: '$50K - $100K', min: 50000, max: 100000 },
    { label: '$100K - $200K', min: 100000, max: 200000 },
    { label: 'Over $200K', min: 200000, max: 500000 }
  ];

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const handlePriceRangeSelect = (min: number, max: number) => {
    handleFilterChange('priceRange', [min, max]);
  };

  return (
    <div className="bg-stealth-900 border-b border-white/5 mb-8">
      <div className="max-w-7xl mx-auto py-6">
        {/* Filter Toggle Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <button
            onClick={onToggle}
            className={`flex items-center space-x-3 px-8 py-4 rounded-2xl transition-all font-black uppercase tracking-widest text-xs ${isOpen
              ? 'bg-neon-cyan text-stealth-900 shadow-[0_0_20px_rgba(0,245,255,0.4)]'
              : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'
              }`}
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>{isOpen ? 'Close Filters' : 'Fine Tune Search'}</span>
          </button>

          <div className="flex items-center space-x-6 bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Priority Sort</span>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="bg-transparent text-white font-bold text-sm focus:outline-none cursor-pointer"
            >
              <option value="price" className="bg-stealth-800">Market Price</option>
              <option value="year" className="bg-stealth-800">Technical Year</option>
              <option value="mileage" className="bg-stealth-800">Usage Mileage</option>
            </select>
          </div>
        </div>

        {/* Filter Panel */}
        {isOpen && (
          <div className="mt-8 p-8 bg-stealth-800/50 rounded-3xl border border-white/5 animate-in fade-in slide-in-from-top-4 duration-300">
            {/* Quick Price Filters */}
            <div className="mb-10">
              <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-neon-cyan" />
                Investment Range
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                {priceRanges.map((range, index) => (
                  <button
                    key={index}
                    onClick={() => handlePriceRangeSelect(range.min, range.max)}
                    className={`px-4 py-3 rounded-xl border text-[10px] font-black uppercase tracking-wider transition-all ${filters.priceRange[0] === range.min && filters.priceRange[1] === range.max
                      ? 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/50 shadow-[0_0_15px_rgba(0,245,255,0.1)]'
                      : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20'
                      }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand */}
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Marque</label>
                <select
                  value={filters.make}
                  onChange={(e) => handleFilterChange('make', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-neon-cyan/50"
                >
                  {makes.map(make => (
                    <option key={make} value={make === 'All' ? '' : make} className="bg-stealth-800">{make}</option>
                  ))}
                </select>
              </div>

              {/* Vehicle Type */}
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Classification</label>
                <select
                  value={filters.bodyType}
                  onChange={(e) => handleFilterChange('bodyType', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-neon-cyan/50"
                >
                  {bodyTypes.map(type => (
                    <option key={type} value={type === 'All' ? '' : type} className="bg-stealth-800">{type}</option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Territory</label>
                <select
                  value={filters.location || ''}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-neon-cyan/50"
                >
                  {locations.map(location => (
                    <option key={location} value={location === 'All' ? '' : location} className="bg-stealth-800">{location}</option>
                  ))}
                </select>
              </div>

              {/* Fuel Type */}
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Propulsion</label>
                <select
                  value={filters.fuelType}
                  onChange={(e) => handleFilterChange('fuelType', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-neon-cyan/50"
                >
                  {fuelTypes.map(type => (
                    <option key={type} value={type === 'All' ? '' : type} className="bg-stealth-800">{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Range Filters */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-10">
              <div>
                <label className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">
                  <span>Operating Limit</span>
                  <span className="text-neon-cyan">{filters.mileageMax.toLocaleString()} KM</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="5000"
                  value={filters.mileageMax}
                  onChange={(e) => handleFilterChange('mileageMax', parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
                />
              </div>

              <div>
                <label className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">
                  <span>Production Era</span>
                  <span className="text-neon-cyan">{filters.yearRange[0]} - {filters.yearRange[1]}</span>
                </label>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="2010"
                    max="2026"
                    value={filters.yearRange[0]}
                    onChange={(e) => handleFilterChange('yearRange', [parseInt(e.target.value), filters.yearRange[1]])}
                    className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
                  />
                  <input
                    type="range"
                    min="2010"
                    max="2026"
                    value={filters.yearRange[1]}
                    onChange={(e) => handleFilterChange('yearRange', [filters.yearRange[0], parseInt(e.target.value)])}
                    className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
                  />
                </div>
              </div>
            </div>

            {/* Clear Button */}
            <div className="mt-10 flex justify-end">
              <button
                onClick={() => onFilterChange({
                  make: '',
                  priceRange: [0, 500000],
                  yearRange: [2010, 2026],
                  mileageMax: 200000,
                  fuelType: '',
                  bodyType: '',
                  location: '',
                  sortBy: 'price'
                })}
                className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest transition-colors flex items-center space-x-2"
              >
                <X className="h-3 w-3" />
                <span>Reset Parameters</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}