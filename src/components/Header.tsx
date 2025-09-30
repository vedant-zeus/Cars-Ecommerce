import React from 'react';
import { Car, Search, Heart, ShoppingCart, Menu, User, ChevronDown } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartToggle: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ cartCount, onCartToggle, searchQuery, onSearchChange }: HeaderProps) {
  const [showCartDropdown, setShowCartDropdown] = React.useState(false);

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-900 p-2 rounded-lg">
              <Car className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Cars Ecommerce</h1>
              <p className="text-xs text-gray-500">Premium Vehicles</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by make, model, or location..."
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Heart className="h-6 w-6" />
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setShowCartDropdown(!showCartDropdown)}
                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Cart Dropdown */}
              {showCartDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-900">Cart ({cartCount})</span>
                      <button
                        onClick={() => setShowCartDropdown(false)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ×
                      </button>
                    </div>
                    {cartCount > 0 ? (
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">{cartCount} items in cart</p>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => {
                              setShowCartDropdown(false);
                              // Keep the sidebar functionality for quick view
                            }}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-3 rounded text-sm font-medium transition-colors"
                          >
                            Quick View
                          </button>
                          <button
                            onClick={() => {
                              setShowCartDropdown(false);
                              onCartToggle();
                            }}
                            className="flex-1 bg-blue-900 hover:bg-blue-800 text-white py-2 px-3 rounded text-sm font-medium transition-colors"
                          >
                            View Cart
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">Your cart is empty</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <User className="h-6 w-6" />
            </button>

            <button className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search vehicles..."
            />
          </div>
        </div>
      </div>

      {/* Overlay to close dropdown */}
      {showCartDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowCartDropdown(false)}
        ></div>
      )}
    </header>
  );
}