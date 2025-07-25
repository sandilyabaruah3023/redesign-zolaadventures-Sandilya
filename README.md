# Zola Adventures - Modern Vehicle Rental Website

A complete redesign of the Zola Adventures website featuring modern UI/UX with glassmorphism, smooth animations, and dynamic content management.

## 🚀 Features

- **Modern Design System**: Adventure-themed color palette with teal, orange, and earth tones
- **Glassmorphism Effects**: Transparent navigation and card components with backdrop blur
- **Smooth Animations**: CSS animations for hover effects, page transitions, and element reveals
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dynamic Content**: All content managed through JSON files for easy updates
- **Interactive Components**: Animated buttons, cards, and form elements

## 📋 Pages & Structure

### Main Pages
- **Home (/)**: Hero section with booking form, vehicle showcase, services overview
- **Motorcycle List (/motorcycle-list)**: Complete bike and scooter catalog with filtering
- **Self Drive Cars (/self-drive-car-rental)**: Car rental services and detailed features
- **Services (/services)**: All transportation services with FAQ section

### Key Components
- **Header**: Transparent navigation with scroll effects
- **Hero**: Full-screen background with glassmorphism booking form
- **VehicleCard**: Interactive cards with hover animations
- **VehicleShowcase**: Carousel display with navigation controls
- **ServicesSection**: Service overview with animated icons
- **AboutSection**: Company information with feature highlights
- **CallToAction**: Contact options and quick booking
- **Footer**: Complete site navigation and contact info

## 🎨 Design System

### Color Palette
```css
--primary: 174 72% 56%        /* Turquoise/Teal */
--accent: 14 91% 65%          /* Orange/Coral */
--adventure-blue: 200 98% 39% /* Deep Blue */
--adventure-green: 145 63% 42% /* Forest Green */
--adventure-orange: 25 95% 53% /* Bright Orange */
```

### Animations
- **Float**: Continuous floating animation for hero elements
- **Slide-in-up**: Entry animation for cards and sections
- **Fade-in-left/right**: Directional fade animations
- **Card-hover**: Scale and shadow effects on interaction
- **Animated-underline**: Progressive underline on links

### Typography
- **Headings**: Inter font family with gradient text effects
- **Body**: Inter font for optimal readability
- **Responsive sizing**: Fluid typography scaling

## 📁 JSON Data Structure

### Site Configuration (`src/data/site-config.json`)
- Site metadata and branding
- Navigation menu structure
- Hero section content
- Booking form options
- Contact information

### Vehicle Data
- **Bikes** (`src/data/bikes.json`): Motorcycle and scooter inventory
- **Cars** (`src/data/cars.json`): Car rental fleet with detailed specs

### Services (`src/data/services.json`)
- Service descriptions and features
- FAQ section content
- Call-to-action buttons

## 🛠️ Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** with custom design system
- **Shadcn/ui** components with custom styling
- **Lucide React** for consistent iconography
- **React Router** for navigation

## 🎯 Content Management

### Easy Updates
All displayed content is stored in JSON files, making updates simple:

1. **Text Changes**: Edit JSON files in `src/data/`
2. **Images**: Replace files in `src/assets/` (maintain file names)
3. **Vehicles**: Add/remove entries in bikes.json or cars.json
4. **Services**: Modify services.json for service updates

### Adding New Vehicles
```json
{
  "id": 999,
  "name": "New Vehicle Name",
  "image": "/src/assets/bikes/new-vehicle.jpg",
  "categories": ["City", "Mileage"],
  "price": 1000,
  "currency": "₹",
  "features": ["Helmet", "GPS"],
  "description": "Vehicle description"
}
```

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large**: > 1400px

## 🎨 Customization

### Colors
Update design tokens in `src/index.css` under `:root` selector.

### Components
Customize Shadcn components in `src/components/ui/` with new variants.

### Animations
Add new animations in `tailwind.config.ts` keyframes section.

## 📞 Contact Integration

- **Phone**: Direct calling functionality
- **WhatsApp**: Web WhatsApp integration
- **Booking**: Form-based booking system

## 🔧 Performance Features

- **Lazy Loading**: Images load on demand
- **Tree Shaking**: Only used components included
- **Optimized Animations**: Hardware-accelerated CSS animations
- **Responsive Images**: Multiple sizes for different devices

---

Built with ❤️ for modern vehicle rental experiences in Guwahati.