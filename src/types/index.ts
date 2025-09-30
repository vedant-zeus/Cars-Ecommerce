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
}

export interface CartItem {
  vehicle: Vehicle;
  quantity: number;
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