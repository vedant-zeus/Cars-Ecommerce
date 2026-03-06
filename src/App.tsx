import { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchFilters from './components/SearchFilters';
import VehicleGrid from './components/VehicleGrid';
import VehicleModal from './components/VehicleModal';
import VehicleDetailsPage from './components/VehicleDetailsPage';
import Cart from './components/Cart';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import { vehicles } from './data/vehicles';
import { Vehicle, CartItem, FilterState, Selection } from './types';

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [showVehicleDetails, setShowVehicleDetails] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showCartPage, setShowCartPage] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    make: '',
    priceRange: [0, 150000],
    yearRange: [2010, 2024],
    mileageMax: 200000,
    fuelType: '',
    bodyType: '',
    location: '',
    sortBy: 'price'
  });

  // Filter and search vehicles
  const filteredVehicles = useMemo(() => {
    let filtered = vehicles.filter(vehicle => {
      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (!vehicle.make.toLowerCase().includes(query) &&
          !vehicle.model.toLowerCase().includes(query) &&
          !vehicle.location.toLowerCase().includes(query)) {
          return false;
        }
      }

      // Filters
      if (filters.make && vehicle.make !== filters.make) return false;
      if (vehicle.price < filters.priceRange[0] || vehicle.price > filters.priceRange[1]) return false;
      if (vehicle.year < filters.yearRange[0] || vehicle.year > filters.yearRange[1]) return false;
      if (vehicle.mileage > filters.mileageMax) return false;
      if (filters.fuelType && vehicle.fuelType !== filters.fuelType) return false;
      if (filters.bodyType && vehicle.bodyType !== filters.bodyType) return false;
      if (filters.location && vehicle.location !== filters.location) return false;

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price':
          return a.price - b.price;
        case 'year':
          return b.year - a.year;
        case 'mileage':
          return a.mileage - b.mileage;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, filters]);

  const handleAddToCart = (vehicle: Vehicle, selectedModifications: Selection[] = [], totalPrice?: number) => {
    const finalPrice = totalPrice || vehicle.price;
    const configId = `${vehicle.id}-${selectedModifications.map(m => m.optionId).join('-')}`;

    setCartItems(prev => {
      const existing = prev.find(item => item.id === configId);
      if (existing) {
        return prev.map(item =>
          item.id === configId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, {
        id: configId,
        vehicle,
        quantity: 1,
        selectedModifications,
        totalPrice: finalPrice
      }];
    });
    setSelectedVehicle(null);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleToggleFavorite = (vehicleId: string) => {
    setFavorites(prev =>
      prev.includes(vehicleId)
        ? prev.filter(id => id !== vehicleId)
        : [...prev, vehicleId]
    );
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Show vehicle details page if requested
  if (showVehicleDetails && selectedVehicle) {
    return (
      <VehicleDetailsPage
        vehicle={selectedVehicle}
        onBack={() => {
          setShowVehicleDetails(false);
          setSelectedVehicle(null);
        }}
        onAddToCart={handleAddToCart}
        onToggleFavorite={handleToggleFavorite}
        isFavorite={favorites.includes(selectedVehicle.id)}
      />
    );
  }

  // Show cart page if requested
  if (showCartPage) {
    return (
      <CartPage
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onBack={() => setShowCartPage(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-stealth-900 text-slate-200">
      <Header
        cartCount={cartCount}
        onCartToggle={() => setShowCartPage(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <Hero />

      <SearchFilters
        filters={filters}
        onFilterChange={setFilters}
        isOpen={showFilters}
        onToggle={() => setShowFilters(!showFilters)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">
              Available <span className="text-neon-cyan">Inventory</span>
            </h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">
              {filteredVehicles.length} Elite units ready for deployment
            </p>
          </div>
        </div>

        <VehicleGrid
          vehicles={filteredVehicles}
          onViewDetails={(vehicle) => {
            setSelectedVehicle(vehicle);
            setShowVehicleDetails(true);
          }}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
          favorites={favorites}
        />
      </main>

      <Footer />

      <VehicleModal
        vehicle={selectedVehicle}
        onClose={() => {
          setSelectedVehicle(null);
          setShowVehicleDetails(false);
        }}
        onAddToCart={handleAddToCart}
      />

      <Cart
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;