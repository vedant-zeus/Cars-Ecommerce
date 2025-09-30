import React from 'react';
import { ArrowLeft, Minus, Plus, Trash2, ShoppingCart, CreditCard, Shield, Truck } from 'lucide-react';
import { CartItem } from '../types';

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (vehicleId: string, quantity: number) => void;
  onRemoveItem: (vehicleId: string) => void;
  onBack: () => void;
}

export default function CartPage({ cartItems, onUpdateQuantity, onRemoveItem, onBack }: CartPageProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.vehicle.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const shipping = 0; // Free shipping
  const total = subtotal + tax + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Continue Shopping</span>
          </button>

          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 mx-auto mb-6 text-gray-300" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any vehicles to your cart yet. 
              Browse our collection and find your perfect ride!
            </p>
            <button
              onClick={onBack}
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse Vehicles
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Continue Shopping</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <div className="w-32"></div> {/* Spacer for centering */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.vehicle.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                  {/* Vehicle Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.vehicle.images[0]}
                      alt={`${item.vehicle.make} ${item.vehicle.model}`}
                      className="w-full md:w-48 h-32 object-cover rounded-lg"
                    />
                  </div>

                  {/* Vehicle Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.vehicle.year} {item.vehicle.make} {item.vehicle.model}
                        </h3>
                        <p className="text-gray-600">{item.vehicle.location}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>{item.vehicle.mileage.toLocaleString()} miles</span>
                          <span>•</span>
                          <span>{item.vehicle.fuelType}</span>
                          <span>•</span>
                          <span>{item.vehicle.transmission}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.vehicle.id)}
                        className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Price and Quantity */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">Quantity:</span>
                        <div className="flex items-center space-x-3 border border-gray-300 rounded-lg px-3 py-2">
                          <button
                            onClick={() => onUpdateQuantity(item.vehicle.id, Math.max(1, item.quantity - 1))}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.vehicle.id, item.quantity + 1)}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-900">
                          ${(item.vehicle.price * item.quantity).toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          ${item.vehicle.price.toLocaleString()} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                  <span className="font-medium">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-blue-900">${total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2 mb-4">
                <CreditCard className="h-5 w-5" />
                <span>Proceed to Checkout</span>
              </button>

              {/* Security Features */}
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>Secure checkout with SSL encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="h-4 w-4 text-blue-500" />
                  <span>Free nationwide delivery</span>
                </div>
              </div>

              {/* Continue Shopping */}
              <button
                onClick={onBack}
                className="w-full mt-4 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}