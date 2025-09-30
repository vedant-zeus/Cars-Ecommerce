import { Vehicle } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: '1',
    make: 'HONDA',
    model: 'X5',
    year: 2023,
    price: 65000,
    mileage: 15000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Black',
    images: [
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'
    ],
    description: 'Luxury SUV with premium features and excellent performance. Well-maintained with full service history.',
    features: ['Leather Seats', 'Navigation System', 'Backup Camera', 'Heated Seats', 'Sunroof'],
    location: 'New York, NY',
    seller: {
      name: 'Premium Auto Sales',
      rating: 4.8,
      phone: '+1 (555) 123-4567'
    }
  },
  {
    id: '2',
    make: 'Tesla',
    model: 'Model S',
    year: 2024,
    price: 89000,
    mileage: 5000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'White',
    images: [
      'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg'
    ],
    description: 'Cutting-edge electric sedan with autopilot capabilities and premium interior.',
    features: ['Autopilot', 'Premium Audio', 'Glass Roof', 'Wireless Charging', 'Over-the-air Updates'],
    location: 'Los Angeles, CA',
    seller: {
      name: 'Electric Motors LLC',
      rating: 4.9,
      phone: '+1 (555) 987-6543'
    }
  },
  {
    id: '3',
    make: 'Ford',
    model: 'Mustang GT',
    year: 2022,
    price: 45000,
    mileage: 25000,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    bodyType: 'Coupe',
    color: 'Red',
    images: [
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg',
      'https://images.pexels.com/photos/1545738/pexels-photo-1545738.jpeg'
    ],
    description: 'Iconic American muscle car with powerful V8 engine and sport-tuned suspension.',
    features: ['V8 Engine', 'Sport Suspension', 'Performance Brakes', 'Racing Stripes', 'Premium Sound'],
    location: 'Chicago, IL',
    seller: {
      name: 'Muscle Car Depot',
      rating: 4.7,
      phone: '+1 (555) 456-7890'
    }
  },
  {
    id: '4',
    make: 'Audi',
    model: 'A4',
    year: 2023,
    price: 42000,
    mileage: 18000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Silver',
    images: [
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg',
      'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg'
    ],
    description: 'Luxury compact sedan with advanced technology and refined interior.',
    features: ['Virtual Cockpit', 'Quattro AWD', 'Bang & Olufsen Audio', 'Adaptive Cruise Control', 'LED Headlights'],
    location: 'Miami, FL',
    seller: {
      name: 'Luxury Auto Group',
      rating: 4.6,
      phone: '+1 (555) 234-5678'
    }
  },
  {
    id: '5',
    make: 'Jeep',
    model: 'Wrangler',
    year: 2022,
    price: 38000,
    mileage: 22000,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    bodyType: 'SUV',
    color: 'Green',
    images: [
      'https://images.pexels.com/photos/1319839/pexels-photo-1319839.jpeg',
      'https://images.pexels.com/photos/1319838/pexels-photo-1319838.jpeg'
    ],
    description: 'Off-road capable SUV with removable doors and roof for ultimate adventure.',
    features: ['4WD', 'Removable Doors', 'Convertible Top', 'Skid Plates', 'Rock Rails'],
    location: 'Denver, CO',
    seller: {
      name: 'Off-Road Specialists',
      rating: 4.5,
      phone: '+1 (555) 345-6789'
    }
  },
  {
    id: '6',
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2024,
    price: 52000,
    mileage: 8000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Blue',
    images: [
      'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg',
      'https://images.pexels.com/photos/1090164/pexels-photo-1090164.jpeg'
    ],
    description: 'Premium luxury sedan with cutting-edge technology and elegant design.',
    features: ['MBUX Infotainment', 'Air Suspension', 'Ambient Lighting', 'Wireless CarPlay', 'Safety Assist'],
    location: 'Seattle, WA',
    seller: {
      name: 'European Auto Excellence',
      rating: 4.9,
      phone: '+1 (555) 567-8901'
    }
  }
];