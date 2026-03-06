export interface ModificationOption {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface ModificationCategory {
  id: string;
  name: string;
  options: ModificationOption[];
}

export interface Selection {
  categoryId: string;
  optionId: string;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Manual' | 'Automatic';
  bodyType: 'Sedan' | 'SUV' | 'Hatchback' | 'Coupe' | 'Truck' | 'Convertible';
  color: string;
  images: string[];
  description: string;
  features: string[];
  location: string;
  seller: {
    name: string;
    rating: number;
    phone: string;
  };
  modifications?: ModificationCategory[];
  featured?: boolean;
}

export interface CartItem {
  id: string; // Unique ID for each specific configuration
  vehicle: Vehicle;
  quantity: number;
  selectedModifications: Selection[];
  totalPrice: number;
}

export interface FilterState {
  make: string;
  priceRange: [number, number];
  yearRange: [number, number];
  mileageMax: number;
  fuelType: string;
  bodyType: string;
  location?: string;
  sortBy: 'price' | 'year' | 'mileage';
}