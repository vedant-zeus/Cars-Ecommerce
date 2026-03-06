# StealthDrive: Premium Cars E-commerce & Customization

A modern, high-performance car e-commerce application featuring an advanced **Forza-style** vehicle customization system and a premium **Midnight Stealth** design aesthetic. Built with React, TypeScript, and Tailwind CSS.

## 🎨 Midnight Stealth Aesthetic
*A premium, high-octane visual experience.*
- **Deep Spectrum Foundation**: A sophisticated dark theme using `stealth-900` (#0A0B0D) for an immersive high-end feel.
- **Electric Cyan Accents**: High-visibility `neon-cyan` (#00F5FF) highlights for prices, primary actions, and performance metrics.
- **Glassmorphism UI**: High-tech layered interfaces with `backdrop-blur` and surgical white borders (5% opacity).
- **Performance Typography**: Heavy tracking, italicized headers, and black-weighted fonts for an automotive performance vibe.

## 🚀 Key Features

### 🏎️ Forza-Style Customization
*Transform stock vehicles into high-performance machines.*
- **Performance Upgrades**: Stage 1-2 ECU Tunes, Racing Engines, and Exhaust systems.
- **Visual Modifications**: Matte/Metallic wraps, Carbon body kits, and Aero wings.
- **Wheel Customization**: Range of sport, forged, and racing alloy wheels.
- **Real-time Pricing**: See the impact of every modification on the total build value instantly.

### 📑 Intelligent Shopping List (Cart)
*The most detailed checkout experience in e-commerce.*
- **Build Breakdown**: Every item in your cart shows a complete list of selected modifications.
- **Unique Configurations**: Add multiple versions of the same car with different builds; the system tracks them as unique entries.
- **Detailed Summary**: Full pricing breakdown including base price, upgrade costs, taxes, and delivery.

### 🌐 Premium Browsing Experience
- **Expanded Database**: High-detail entries for supercars, SUVs, classic's, and performance wagons.
- **Advanced Filtering**: Filter by Make, Fuel-Source, Classification, and Investment Range.
- **Interactive Technical Modals**: Quick-view any vehicle with full specs and customization options without leaving the grid.

## 🛠️ Tech Stack

- **Frontend**: [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS Transitions & Framer-like micro-interactions

## 🏁 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- npm or yarn

### Installation & Run

> [!IMPORTANT]
> The source code is located in the `project` subdirectory. Always navigate to the `project` folder before running commands.

1. **Navigate to the project directory:**
   ```bash
   cd project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to start exploring.

## 📁 Project Structure

```text
project/
├── src/
│   ├── components/    # Reusable UI components (Customizer, Cart, etc.)
│   ├── data/          # Vehicle database and modification options
│   ├── types/         # TypeScript interfaces and schemas
│   └── App.tsx        # Main application logic and state
├── tailwind.config.js # Styling configuration
└── package.json       # Project dependencies and scripts
```
