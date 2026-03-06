import { Vehicle, ModificationCategory } from '../types';

const defaultModifications: ModificationCategory[] = [
  {
    id: 'perf',
    name: 'Performance',
    options: [
      { id: 'perf-stock', name: 'Stock Engine', price: 0 },
      { id: 'perf-stage1', name: 'Stage 1 Tune', price: 2500, description: '+50 HP, Improved response' },
      { id: 'perf-stage2', name: 'Stage 2 Tune + Intake', price: 5000, description: '+120 HP, High-flow induction' },
      { id: 'perf-race', name: 'Race Spec Engine', price: 15000, description: '+300 HP, Track ready' }
    ]
  },
  {
    id: 'visual',
    name: 'Visuals',
    options: [
      { id: 'vis-stock', name: 'Factory Paint', price: 0 },
      { id: 'vis-matte', name: 'Matte Black Wrap', price: 3000 },
      { id: 'vis-carbon', name: 'Carbon Fiber Body Kit', price: 8500 },
      { id: 'vis-custom', name: 'Custom Livery', price: 4500 }
    ]
  },
  {
    id: 'wheels',
    name: 'Wheels',
    options: [
      { id: 'wheel-stock', name: 'OEM Wheels', price: 0 },
      { id: 'wheel-sport', name: '19" Sport Alloys', price: 2000 },
      { id: 'wheel-forged', name: '20" Forged Racing Wheels', price: 6000 }
    ]
  }
];

export const vehicles: Vehicle[] = [
  {
    id: '1',
    make: 'BMW',
    model: 'M4 Competition',
    year: 2024,
    price: 82000,
    mileage: 500,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    color: 'Isle of Man Green',
    images: [
      'https://images.unsplash.com/photo-1617814071742-1329241f8680?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1619330091314-934d4444df48?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'The ultimate driving machine. This M4 Competition features the xDrive system and a 503-hp twin-turbo inline-six.',
    features: ['Twin-Turbo', 'xDrive', 'Carbon Bucket Seats', 'Harmon Kardon Sound'],
    location: 'Munich, DE',
    seller: { name: 'BMW Premium Selection', rating: 4.9, phone: '+49 89 123456' },
    modifications: defaultModifications
  },
  {
    id: '2',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2024,
    price: 89000,
    mileage: 1200,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Ultra Red',
    images: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Beyond Ludicrous. 0-60 in 1.99s. The fastest accelerating production car in the world.',
    features: ['Tri-Motor', 'Yoke Steering', 'Autopilot', '21" Arachnid Wheels'],
    location: 'Palo Alto, CA',
    seller: { name: 'Tesla Direct', rating: 4.8, phone: '+1 650 555-0199' },
    modifications: [
      {
        id: 'tech',
        name: 'Full Self-Driving',
        options: [
          { id: 'fsd-no', name: 'Standard Autopilot', price: 0 },
          { id: 'fsd-yes', name: 'Full Self-Driving Capability', price: 12000 }
        ]
      },
      ...defaultModifications.filter(m => m.id !== 'perf')
    ]
  },
  {
    id: '3',
    make: 'Porsche',
    model: '911 GT3 RS',
    year: 2023,
    price: 241000,
    mileage: 150,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    color: 'GT Silver Metallic',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'A street-legal race car. Aerodynamics taken to the extreme.',
    features: ['PDK', 'Rear-Axle Steering', 'Weissach Package', 'Ceramic Brakes'],
    location: 'Stuttgart, DE',
    seller: { name: 'Porsche Centre', rating: 5.0, phone: '+49 711 911-0' },
    modifications: defaultModifications
  },
  {
    id: '4',
    make: 'Lamborghini',
    model: 'Huracán STO',
    year: 2024,
    price: 330000,
    mileage: 0,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    color: 'Arancio Xanto',
    images: [
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Super Trofeo Omologata. Road-homologated super sports car inspired by the racing heritage.',
    features: ['V10 Natural Aspirated', 'Carbon Fiber Exterior', 'Racing Seats'],
    location: 'Sant\'Agata Bolognese, IT',
    seller: { name: 'Lambo Roma', rating: 4.9, phone: '+39 06 1234567' },
    modifications: defaultModifications
  },
  {
    id: '5',
    make: 'Ford',
    model: 'F-150 Raptor R',
    year: 2024,
    price: 109000,
    mileage: 10,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Truck',
    color: 'Code Orange',
    images: [
      'https://images.unsplash.com/photo-1591866421634-c240907a3461?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'The most powerful Raptor ever. 700-hp supercharged V8.',
    features: ['Supercharged V8', '37-inch Tires', 'Fox Live Valve Shocks'],
    location: 'Detroit, MI',
    seller: { name: 'Ford Performance', rating: 4.7, phone: '+1 313 555-0100' },
    modifications: [
      {
        id: 'offroad',
        name: 'Off-Road Gear',
        options: [
          { id: 'off-stock', name: 'Standard Raptor Kit', price: 0 },
          { id: 'off-lift', name: '6" Lift Kit', price: 4500 },
          { id: 'off-winch', name: 'Heavy Duty Winch & Bumper', price: 3200 }
        ]
      },
      ...defaultModifications
    ]
  },
  {
    id: '6',
    make: 'Audi',
    model: 'RS6 Avant',
    year: 2024,
    price: 125000,
    mileage: 2000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Nardo Gray',
    images: [
      'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'The ultimate family wagon. High performance met with practicality.',
    features: ['Quattro', 'Dynamic All-Wheel Steering', 'RS Adaptive Air Suspension'],
    location: 'Ingolstadt, DE',
    seller: { name: 'Audi Sport Center', rating: 4.8, phone: '+49 841 89-0' },
    modifications: defaultModifications
  },
  {
    id: '7',
    make: 'Nissan',
    model: 'GT-R NISMO',
    year: 2024,
    price: 220000,
    mileage: 0,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    color: 'Ultimate Silver',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Godzilla. Refined to perfection by NISMO engineers.',
    features: ['Hand-built VR38DETT', 'ATTESA E-TS AWD', 'Carbon Fiber Aero'],
    location: 'Tokyo, JP',
    seller: { name: 'Nissan Performance', rating: 4.9, phone: '+81 3 1234 5678' },
    modifications: defaultModifications
  }
];