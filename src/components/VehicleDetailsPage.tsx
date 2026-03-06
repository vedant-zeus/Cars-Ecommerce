import { useState } from 'react';
import { ArrowLeft, Heart, Share2, MapPin, Fuel, Calendar, Gauge, Phone, Mail, Star, ChevronLeft, ChevronRight, Shield, Award, Clock, CheckCircle, ShieldCheck } from 'lucide-react';
import { Vehicle, Selection } from '../types';
import Customizer from './Customizer';

interface VehicleDetailsPageProps {
  vehicle: Vehicle;
  onBack: () => void;
  onAddToCart: (vehicle: Vehicle, selections?: Selection[], totalPrice?: number) => void;
  onToggleFavorite: (vehicleId: string) => void;
  isFavorite: boolean;
}

export default function VehicleDetailsPage({ vehicle, onBack, onAddToCart, onToggleFavorite, isFavorite }: VehicleDetailsPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [showCustomizer, setShowCustomizer] = useState(false);

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
    <div className="min-h-screen bg-stealth-900 text-slate-200">
      {/* Header */}
      <div className="bg-stealth-900/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-neon-cyan hover:text-white transition-all uppercase font-black tracking-widest text-[10px]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Command Center</span>
            </button>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => onToggleFavorite(vehicle.id)}
                className={`p-2.5 rounded-xl border transition-all ${isFavorite
                  ? 'bg-red-500 border-red-400 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                  }`}
              >
                <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2.5 bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 rounded-xl transition-all">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Image Gallery */}
            <div className="bg-stealth-800 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl relative">
              <div className="relative aspect-video">
                <img
                  src={vehicle.images[currentImageIndex]}
                  alt={`${vehicle.make} ${vehicle.model}`}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stealth-900/40 to-transparent"></div>

                {vehicle.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-6 top-1/2 -translate-y-1/2 bg-stealth-900/80 hover:bg-neon-cyan hover:text-stealth-900 p-4 rounded-2xl border border-white/10 shadow-lg transition-all"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-6 top-1/2 -translate-y-1/2 bg-stealth-900/80 hover:bg-neon-cyan hover:text-stealth-900 p-4 rounded-2xl border border-white/10 shadow-lg transition-all"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
                <div className="absolute bottom-6 left-6 bg-stealth-900/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10">
                  Angle {currentImageIndex + 1} / {vehicle.images.length}
                </div>
              </div>

              {/* Image Thumbnails */}
              {vehicle.images.length > 1 && (
                <div className="p-6 bg-stealth-900/50">
                  <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
                    {vehicle.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-24 h-20 rounded-2xl overflow-hidden border-2 transition-all p-0.5 ${index === currentImageIndex ? 'border-neon-cyan scale-105 shadow-[0_0_15px_rgba(0,245,255,0.2)]' : 'border-white/5 grayscale hover:grayscale-0'
                          }`}
                      >
                        <img
                          src={image}
                          alt={`View ${index + 1}`}
                          className="w-full h-full object-cover rounded-[0.8rem]"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="bg-stealth-800 rounded-[2.5rem] border border-white/5 overflow-hidden">
              <div className="border-b border-white/5 bg-stealth-900/30">
                <nav className="flex space-x-12 px-10">
                  {[
                    { id: 'overview', label: 'Tech Overview' },
                    { id: 'specifications', label: 'Data Sheet' },
                    { id: 'reviews', label: 'User Reports' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-8 px-2 border-b-2 font-black text-[10px] uppercase tracking-[0.2em] transition-all ${activeTab === tab.id
                        ? 'border-neon-cyan text-neon-cyan'
                        : 'border-transparent text-slate-500 hover:text-slate-300'
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-10 lg:p-12">
                {activeTab === 'overview' && (
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] flex items-center">
                        <ShieldCheck className="h-4 w-4 mr-2 text-neon-cyan" />
                        Asset Narrative
                      </h3>
                      <p className="text-slate-400 leading-relaxed italic border-l-2 border-neon-cyan/30 pl-8">
                        {vehicle.description}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xs font-black text-white uppercase tracking-[0.2em]">Integrated Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {vehicle.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                            <CheckCircle className="h-4 w-4 text-neon-cyan" />
                            <span className="text-sm font-bold text-slate-300 uppercase tracking-wide">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        { icon: Shield, label: 'Certified', sub: 'Elite Grade', color: 'text-neon-cyan' },
                        { icon: Award, label: 'Warranty', sub: 'Full Protocol', color: 'text-green-500' },
                        { icon: Clock, label: 'History', sub: 'Verified', color: 'text-orange-500' },
                        { icon: CheckCircle, label: 'Inspected', sub: '200+ Points', color: 'text-purple-500' }
                      ].map((item, i) => (
                        <div key={i} className="bg-white/5 p-6 rounded-[2rem] text-center border border-white/5">
                          <item.icon className={`h-8 w-8 ${item.color} mx-auto mb-3`} />
                          <div className="text-sm font-black text-white uppercase tracking-tighter">{item.label}</div>
                          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{item.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'specifications' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] border-b border-white/5 pb-4">Digital Identity</h3>
                      <div className="space-y-6">
                        {[
                          { label: 'Manufacturer', value: vehicle.make },
                          { label: 'Variant', value: vehicle.model },
                          { label: 'Production', value: vehicle.year },
                          { label: 'Form Factor', value: vehicle.bodyType },
                          { label: 'Finishing', value: vehicle.color }
                        ].map((spec, i) => (
                          <div key={i} className="flex justify-between items-center group">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-neon-cyan transition-colors">{spec.label}</span>
                            <span className="text-sm font-black text-white uppercase tracking-tighter">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] border-b border-white/5 pb-4">Performance Metrics</h3>
                      <div className="space-y-6">
                        {[
                          { label: 'Engagement', value: `${vehicle.mileage.toLocaleString()} KM` },
                          { label: 'Propulsion', value: vehicle.fuelType },
                          { label: 'Transmission', value: vehicle.transmission },
                          { label: 'Core Unit', value: 'V8 Bi-Turbo 4.0L' },
                          { label: 'Efficiency', value: '18 City / 24 Hwy' }
                        ].map((spec, i) => (
                          <div key={i} className="flex justify-between items-center group">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-neon-cyan transition-colors">{spec.label}</span>
                            <span className="text-sm font-black text-white uppercase tracking-tighter">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-black text-white uppercase tracking-[0.2em]">Pilot Testimonials</h3>
                      <div className="flex items-center space-x-4 bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
                        <div className="flex text-neon-cyan">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-xl font-black text-white">4.9</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">({reviews.length} Active)</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="bg-white/5 border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-neon-cyan/10 transition-all"></div>
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-6">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-neon-cyan text-stealth-900 rounded-2xl flex items-center justify-center font-black text-sm">
                                {review.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className="font-black text-white uppercase text-xs tracking-wider">{review.name}</span>
                                  {review.verified && (
                                    <ShieldCheck className="h-3 w-3 text-neon-cyan" />
                                  )}
                                </div>
                                <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mt-1">{review.date}</div>
                              </div>
                            </div>
                            <div className="flex text-neon-cyan/40">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-3 w-3 ${i < review.rating ? 'text-neon-cyan fill-current' : ''}`} />
                              ))}
                            </div>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed italic border-l-border-neon-cyan/20 pl-6">"{review.comment}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-stealth-800 rounded-[2.5rem] border border-white/10 p-10 sticky top-32 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>

              {/* Price and Discount */}
              <div className="mb-10">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-4xl lg:text-5xl font-black text-white tracking-tighter tabular-nums neon-glow">
                    ${vehicle.price.toLocaleString()}
                  </span>
                  {discount > 0 && (
                    <span className="bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest">
                      SAVE {discountPercentage}%
                    </span>
                  )}
                </div>
                {discount > 0 && (
                  <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest">
                    <span className="text-slate-600 line-through">
                      LIST: ${originalPrice.toLocaleString()}
                    </span>
                    <span className="text-white">
                      DELTA: -${discount.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: Gauge, label: 'Mileage', val: vehicle.mileage.toLocaleString() },
                  { icon: Fuel, label: 'Energy', val: vehicle.fuelType },
                  { icon: Calendar, label: 'Gearbox', val: vehicle.transmission },
                  { icon: MapPin, label: 'Deployment', val: vehicle.location.split(',')[0] }
                ].map((spec, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all group/spec">
                    <spec.icon className="h-4 w-4 text-neon-cyan mb-2 group-hover/spec:scale-110 transition-transform" />
                    <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">{spec.label}</div>
                    <div className="text-xs font-black text-white uppercase tracking-tighter">{spec.val}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 mb-10">
                <button
                  onClick={() => onAddToCart(vehicle)}
                  className="w-full bg-white hover:bg-slate-200 text-stealth-900 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                  Acquire Stock Unit
                </button>
                {vehicle.modifications && (
                  <button
                    onClick={() => setShowCustomizer(true)}
                    className="w-full bg-neon-cyan hover:bg-white text-stealth-900 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-[0_0_30px_rgba(0,245,255,0.2)] hover:shadow-[0_0_50px_rgba(0,245,255,0.4)] flex items-center justify-center space-x-3 group"
                  >
                    <ShieldCheck className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                    <span>Customize Build</span>
                  </button>
                )}
                <button className="w-full border border-white/10 text-slate-400 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white/5 hover:text-white transition-all">
                  Sync Test Drive
                </button>
              </div>

              {showCustomizer && (
                <Customizer
                  vehicle={vehicle}
                  onClose={() => setShowCustomizer(false)}
                  onConfirm={(selections, totalPrice) => {
                    onAddToCart(vehicle, selections, totalPrice);
                    setShowCustomizer(false);
                  }}
                />
              )}

              {/* Seller Technology */}
              <div className="border-t border-white/5 pt-8">
                <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6">Authorized Vendor Intel</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div>
                      <div className="text-sm font-black text-white">{vehicle.seller.name}</div>
                      <div className="flex items-center space-x-1 mt-1">
                        <div className="flex text-neon-cyan">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-3 w-3 ${i < Math.floor(vehicle.seller.rating) ? 'fill-current' : 'text-white/10'}`} />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-slate-500">[{vehicle.seller.rating}]</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-white/10 text-slate-300 rounded-xl hover:bg-white hover:text-stealth-900 transition-all font-black uppercase text-[10px] tracking-widest">
                      <Phone className="h-4 w-4" />
                      <span>Comms</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 border border-white/10 text-slate-400 rounded-xl hover:border-white/30 transition-all font-black uppercase text-[10px] tracking-widest">
                      <Mail className="h-4 w-4" />
                      <span>Signal</span>
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