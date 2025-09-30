import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect
              <span className="text-orange-400 block">Vehicle Today</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              Discover premium cars, trucks, and SUVs from trusted dealers nationwide. 
              Your dream vehicle is just a click away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                Browse Vehicles
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Sell Your Car
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-4 mb-2 inline-flex">
                  <Shield className="h-8 w-8 text-orange-400" />
                </div>
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-blue-200">Verified Dealers</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-4 mb-2 inline-flex">
                  <Award className="h-8 w-8 text-orange-400" />
                </div>
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-blue-200">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-4 mb-2 inline-flex">
                  <Users className="h-8 w-8 text-orange-400" />
                </div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-blue-200">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg"
                alt="Premium Vehicle"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-2xl">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Certified Pre-Owned</div>
                  <div className="text-sm text-gray-500">Quality Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}