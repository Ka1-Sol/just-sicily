import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div>
      <SEO 
        title="Home" 
        description="Discover Sicily with JustSicily - Your complete travel experience in Sicily with expertly curated packages, accommodation, transport, and unique experiences."
        canonicalUrl="https://justsicily.com/"
        ogImage="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2000&auto=format&fit=crop"
      />
    
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center" style={{ 
        backgroundImage: `url("https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2000&auto=format&fit=crop")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content */}
        <div className="relative container-custom h-full flex flex-col justify-between pt-24 pb-12 min-h-screen">
          <div className="text-white max-w-3xl mt-20">
            <h1 className="text-6xl md:text-8xl font-bold leading-none mb-8 text-shadow-lg">
              <span className="block">WORLD</span>
              <span className="block">OF <span className="text-blue-300 font-extrabold">PARADISE</span>,</span>
              <span className="block text-white">SICILY</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl text-shadow-sm">
              Let's explore one of the most beautiful islands in the Mediterranean.
              Enjoy 3 vacation packages at competitive prices and a strong soul.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/packages" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded">
                Explore Packages
              </Link>
              <Link to="/about" className="border-2 border-white text-white hover:bg-white hover:text-primary font-medium py-3 px-6 rounded transition-colors">
                About Us
              </Link>
            </div>
          </div>
          
          {/* Popular Features Section - now inside hero */}
          <div className="text-white border-t border-white/20 pt-8 mt-auto">
            <div className="flex flex-wrap items-end justify-between">
              {/* Most requested package */}
              <div className="w-full sm:w-auto mb-6 sm:mb-0">
                <p className="text-white/80 text-sm uppercase">Most popular activity</p>
                <h3 className="text-xl font-bold text-white">
                  <Link to="/experiences" className="hover:underline">Etna Volcano Hiking</Link>
                </h3>
              </div>
              
              {/* Most popular place */}
              <div className="w-full sm:w-auto mb-6 sm:mb-0">
                <p className="text-white/80 text-sm uppercase">Most excited place</p>
                <h3 className="text-xl font-bold text-white">
                  <Link to="/experiences" className="hover:underline">Taormina & Beaches</Link>
                </h3>
              </div>
              
              {/* Travel style */}
              <div className="w-full sm:w-auto">
                <p className="text-white/80 text-sm uppercase">Culture style</p>
                <h3 className="text-xl font-bold text-white">
                  <Link to="/about" className="hover:underline">Authentic Sicilian</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;