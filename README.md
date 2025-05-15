# JustSicily - Sicilian Travel Experience Website

JustSicily is a comprehensive travel website for a travel agency that offers all-inclusive Sicilian vacation experiences. The site is built with React, TypeScript, and Tailwind CSS, providing a modern and responsive user interface.

## Features

- Responsive design for all devices
- Interactive tour package listings with filtering
- Detailed package pages with itineraries and booking options
- Experience categories with filtering functionality
- Contact form with validation
- About us section with team members
- Animated components using Framer Motion

## Pages

1. **Homepage** - Hero section with featured destinations and packages
2. **Packages** - Grid of available tour packages with filtering
3. **Package Detail** - In-depth information about specific packages with day-by-day itinerary
4. **Experiences** - Various activities and experiences available in Sicily
5. **About Us** - Information about the company, team, and values
6. **Contact** - Contact form and information
7. **404 Page** - Custom error page

## Technologies Used

- **React 18** - Front-end library
- **TypeScript** - Static typing
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - For routing
- **Framer Motion** - Animation library
- **Headless UI** - Accessible UI components

## Getting Started

### Prerequisites

- Node.js 16.0.0 or later
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/just-sicily.git
   cd just-sicily
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
just-sicily/
├── public/           # Static files
├── src/              # Source files
│   ├── assets/       # Assets like images
│   ├── components/   # Reusable components
│   │   ├── layout/   # Layout components
│   │   └── ui/       # UI components
│   ├── contexts/     # React contexts
│   ├── hooks/        # Custom hooks
│   ├── pages/        # Page components
│   ├── App.tsx       # App component
│   ├── index.css     # Global styles
│   └── main.tsx      # Entry point
├── .gitignore        # Git ignore file
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── vite.config.ts    # Vite configuration
```

## Customization

### Changing Colors

The primary and secondary colors can be modified in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: '#0066CC',
      secondary: '#FF6B35',
      lightBlue: '#87CEEB',
    },
    // ...
  }
}
```

### Adding New Pages

1. Create a new component in the `src/pages` directory
2. Add a new route in `src/App.tsx`

```jsx
<Route path="/new-page" element={<NewPage />} />
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Heroicons](https://heroicons.com)