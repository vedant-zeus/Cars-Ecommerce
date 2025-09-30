import React from 'react';
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Car className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Cars Ecommerce</h3>
                <p className="text-sm text-gray-400">Premium Vehicles</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner in finding the perfect vehicle. We connect buyers and sellers nationwide.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Browse Vehicles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sell Your Car</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Financing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Trade-In</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Insurance</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 2345678910</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@CarsEcommerce.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">123 pawan street , Pune , Maharashtra , 411033</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Cars Ecommerce. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}