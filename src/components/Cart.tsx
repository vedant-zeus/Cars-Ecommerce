import React from 'react';
import { X, Minus, Plus, ShoppingCart } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (vehicleId: string, quantity: number) => void;
  onRemoveItem: (vehicleId: string) => void;
}

export default function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }: CartProps) {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + (item.vehicle.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-end">
      <div className="bg-white h-full w-full max-w-md shadow-xl transform transition-transform">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold flex items-center space-x-2">
            <ShoppingCart className="h-6 w-6" />
            <span>Your Cart ({cartItems.length})</span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
              <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>Your cart is empty</p>
              <p className="text-sm mt-2">Add some vehicles to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.vehicle.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex space-x-4">
                    <img
                      src={item.vehicle.images[0]}
                      alt={`${item.vehicle.make} ${item.vehicle.model}`}
                      className="w-20 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">
                        {item.vehicle.year} {item.vehicle.make} {item.vehicle.model}
                      </h3>
                      <p className="text-sm text-gray-500">{item.vehicle.location}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-lg font-semibold text-blue-900">
                          ${item.vehicle.price.toLocaleString()}
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.vehicle.id)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => onUpdateQuantity(item.vehicle.id, Math.max(0, item.quantity - 1))}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.vehicle.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="font-semibold">
                      ${(item.vehicle.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span className="text-blue-900">${total.toLocaleString()}</span>
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
              Proceed to Checkout
            </button>
            <button 
              onClick={onClose}
              className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}