import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiCalendar, FiMap, FiSearch, FiTag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BackgroundImage, Image } from '../components/ui';

type PackageType = 'all' | 'adventure' | 'cultural' | 'relax' | 'food';

interface PackageItem {
  id: string;
  title: string;
  type: PackageType[];
  duration: string;
  price: number;
  description: string;
  image: string;
  highlights: string[];
  location: string;
}

const packages: PackageItem[] = [
  {
    id: 'etna-taormina',
    title: 'Etna & Taormina Experience',
    type: ['adventure', 'cultural'],
    duration: '7 days',
    price: 1299,
    description: 'Explore Europe\'s highest active volcano and the pearl of Sicily.',
    image: 'https://cdn.pixabay.com/photo/2017/02/24/07/45/etna-2094251_1280.jpg',
    highlights: ['Guided Etna hike', 'Taormina city tour', 'Wine tasting', 'Beach day at Isola Bella'],
    location: 'Eastern Sicily'
  },
  {
    id: 'aeolian-islands',
    title: 'Aeolian Islands Tour',
    type: ['adventure', 'relax'],
    duration: '5 days',
    price: 999,
    description: 'Island hopping in the volcanic archipelago of Aeolian Islands.',
    image: 'https://cdn.pixabay.com/photo/2019/05/07/13/42/stromboli-4185847_1280.jpg',
    highlights: ['Stromboli night eruption', 'Vulcano mud baths', 'Panarea beaches', 'Boat tour'],
    location: 'Aeolian Islands'
  },
  {
    id: 'syracuse-baroque',
    title: 'Syracuse & Baroque Sicily',
    type: ['cultural'],
    duration: '6 days',
    price: 1199,
    description: 'Discover the ancient Greek history and baroque wonders of Sicily.',
    image: 'https://cdn.pixabay.com/photo/2020/05/28/09/51/sicily-5230269_1280.jpg',
    highlights: ['Ortigia island', 'Greek Theatre', 'Baroque towns of Val di Noto', 'Local cuisine'],
    location: 'Southeastern Sicily'
  },
  {
    id: 'food-wine',
    title: 'Sicilian Food & Wine Journey',
    type: ['food', 'relax'],
    duration: '8 days',
    price: 1499,
    description: 'A culinary adventure through the best flavors Sicily has to offer.',
    image: 'https://cdn.pixabay.com/photo/2017/09/28/19/11/eat-2796740_1280.jpg',
    highlights: ['Cooking classes', 'Market tours', 'Winery visits', 'Olive oil tastings'],
    location: 'Various locations'
  },
  {
    id: 'western-sicily',
    title: 'Western Sicily Adventure',
    type: ['adventure', 'cultural'],
    duration: '6 days',
    price: 1099,
    description: 'Explore the unspoiled western part of Sicily, from salt flats to ancient temples.',
    image: 'https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_1280.jpg',
    highlights: ['Trapani salt flats', 'Erice medieval town', 'Segesta temple', 'Selinunte archaeological park'],
    location: 'Western Sicily'
  },
  {
    id: 'sicily-relax',
    title: 'Sicily Relaxation Retreat',
    type: ['relax'],
    duration: '9 days',
    price: 1799,
    description: 'Unwind and rejuvenate with Sicily\'s best beaches, spas, and wellness experiences.',
    image: 'https://cdn.pixabay.com/photo/2018/07/16/11/34/mondello-3541310_1280.jpg',
    highlights: ['Beach days', 'Spa treatments', 'Yoga sessions', 'Gourmet dining'],
    location: 'Southern Sicily'
  },
];

// Map package types to colors
const typeColors: Record<Exclude<PackageType, 'all'>, string> = {
  adventure: 'bg-blue-500',
  cultural: 'bg-purple-500',
  relax: 'bg-green-500',
  food: 'bg-orange-500'
};

const Packages = () => {
  const [filter, setFilter] = useState<PackageType>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedPackages, setDisplayedPackages] = useState<PackageItem[]>(packages);

  useEffect(() => {
    let results = packages;
    
    // Apply type filter
    if (filter !== 'all') {
      results = results.filter(pkg => pkg.type.includes(filter));
    }
    
    // Apply search filter
    if (searchTerm) {
      const lowercasedSearch = searchTerm.toLowerCase();
      results = results.filter(pkg => 
        pkg.title.toLowerCase().includes(lowercasedSearch) ||
        pkg.description.toLowerCase().includes(lowercasedSearch) ||
        pkg.location.toLowerCase().includes(lowercasedSearch) ||
        pkg.highlights.some(highlight => highlight.toLowerCase().includes(lowercasedSearch))
      );
    }
    
    setDisplayedPackages(results);
  }, [filter, searchTerm]);

  return (
    <div>
      <SEO 
        title="Tour Packages" 
        description="Explore our curated travel packages for Sicily with expert guides, authentic experiences, and unforgettable memories."
        canonicalUrl="https://justsicily.com/packages"
        ogImage="https://cdn.pixabay.com/photo/2019/01/17/08/03/sicily-3937734_1280.jpg"
      />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] bg-gray-800">
        {/* Background Image */}
        <BackgroundImage 
          src="https://cdn.pixabay.com/photo/2019/01/17/08/03/sicily-3937734_1280.jpg"
          className="absolute inset-0 z-0"
          fallbackSrc="https://placehold.co/1200x800/0066CC/FFFFFF?text=Explore+Sicily"
        />
        <div className="absolute inset-0 z-10 bg-black/30" style={{ filter: 'brightness(0.7)' }}></div>
        
        {/* Content */}
        <div className="relative z-20 container-custom h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-4">Discover Sicily</h1>
            <p className="text-xl md:text-2xl max-w-xl mb-8">
              Curated travel packages with expert guides, authentic experiences, and unforgettable memories.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-lg">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search packages, destinations, or activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-8 border-b sticky top-0 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-full transition-all font-medium ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              All Packages
            </button>
            <button 
              onClick={() => setFilter('adventure')}
              className={`px-6 py-3 rounded-full transition-all font-medium ${filter === 'adventure' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Adventure
            </button>
            <button 
              onClick={() => setFilter('cultural')}
              className={`px-6 py-3 rounded-full transition-all font-medium ${filter === 'cultural' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Cultural
            </button>
            <button 
              onClick={() => setFilter('relax')}
              className={`px-6 py-3 rounded-full transition-all font-medium ${filter === 'relax' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Relax
            </button>
            <button 
              onClick={() => setFilter('food')}
              className={`px-6 py-3 rounded-full transition-all font-medium ${filter === 'food' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Food & Wine
            </button>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          {/* Results count */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {displayedPackages.length} {displayedPackages.length === 1 ? 'Package' : 'Packages'} Available
            </h2>
            {searchTerm && (
              <p className="text-gray-600 mt-1">
                Search results for "{searchTerm}"
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPackages.map(pkg => (
              <motion.div 
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Image container with tags */}
                <div className="relative h-64 overflow-hidden group">
                  <Image 
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Type tags */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {pkg.type.map(type => (
                      <span 
                        key={type} 
                        className={`${typeColors[type as Exclude<PackageType, 'all'>]} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </span>
                    ))}
                  </div>
                  
                  {/* Price tag */}
                  <div className="absolute top-4 right-4 bg-white text-gray-900 font-bold px-4 py-2 rounded-full shadow-md">
                    €{pkg.price}
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Package info */}
                  <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="text-primary" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMap className="text-primary" />
                      <span>{pkg.location}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                    <FiTag className="text-primary" />
                    Highlights:
                  </h4>
                  <ul className="text-sm text-gray-600 mb-6 ml-5">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="list-disc mb-1">{highlight}</li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={`/packages/${pkg.id}`} 
                    className="btn-primary w-full block text-center py-3 text-lg font-medium"
                  >
                    View Package
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {displayedPackages.length === 0 && (
            <div className="text-center py-16 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-medium text-gray-800 mb-2">No packages found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or explore our other offerings</p>
              <button 
                onClick={() => {setFilter('all'); setSearchTerm('');}} 
                className="btn-primary px-8 py-3"
              >
                View All Packages
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Packages;