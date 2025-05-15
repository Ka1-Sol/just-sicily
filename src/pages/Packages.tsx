import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
}

const packages: PackageItem[] = [
  {
    id: 'etna-taormina',
    title: 'Etna & Taormina Experience',
    type: ['adventure', 'cultural'],
    duration: '7 days',
    price: 1299,
    description: 'Explore Europe\'s highest active volcano and the pearl of Sicily.',
    image: 'https://images.unsplash.com/photo-1634979079856-e6516bf0dcc4?q=80&w=800',
    highlights: ['Guided Etna hike', 'Taormina city tour', 'Wine tasting', 'Beach day at Isola Bella'],
  },
  {
    id: 'aeolian-islands',
    title: 'Aeolian Islands Tour',
    type: ['adventure', 'relax'],
    duration: '5 days',
    price: 999,
    description: 'Island hopping in the volcanic archipelago of Aeolian Islands.',
    image: 'https://images.unsplash.com/photo-1564687774856-478b1656f0f0?q=80&w=800',
    highlights: ['Stromboli night eruption', 'Vulcano mud baths', 'Panarea beaches', 'Boat tour'],
  },
  {
    id: 'syracuse-baroque',
    title: 'Syracuse & Baroque Sicily',
    type: ['cultural'],
    duration: '6 days',
    price: 1199,
    description: 'Discover the ancient Greek history and baroque wonders of Sicily.',
    image: 'https://images.unsplash.com/photo-1590577226901-5acb1a19e5c6?q=80&w=800',
    highlights: ['Ortigia island', 'Greek Theatre', 'Baroque towns of Val di Noto', 'Local cuisine'],
  },
  {
    id: 'food-wine',
    title: 'Sicilian Food & Wine Journey',
    type: ['food', 'relax'],
    duration: '8 days',
    price: 1499,
    description: 'A culinary adventure through the best flavors Sicily has to offer.',
    image: 'https://images.unsplash.com/photo-1565954786194-d631ee14bc8f?q=80&w=800',
    highlights: ['Cooking classes', 'Market tours', 'Winery visits', 'Olive oil tastings'],
  },
  {
    id: 'western-sicily',
    title: 'Western Sicily Adventure',
    type: ['adventure', 'cultural'],
    duration: '6 days',
    price: 1099,
    description: 'Explore the unspoiled western part of Sicily, from salt flats to ancient temples.',
    image: 'https://images.unsplash.com/photo-1591014979162-1d75ca7e5e37?q=80&w=800',
    highlights: ['Trapani salt flats', 'Erice medieval town', 'Segesta temple', 'Selinunte archaeological park'],
  },
  {
    id: 'sicily-relax',
    title: 'Sicily Relaxation Retreat',
    type: ['relax'],
    duration: '9 days',
    price: 1799,
    description: 'Unwind and rejuvenate with Sicily\'s best beaches, spas, and wellness experiences.',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800',
    highlights: ['Beach days', 'Spa treatments', 'Yoga sessions', 'Gourmet dining'],
  },
];

const Packages = () => {
  const [filter, setFilter] = useState<PackageType>('all');

  const filteredPackages = filter === 'all' 
    ? packages 
    : packages.filter(pkg => pkg.type.includes(filter));

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] bg-gray-800">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1580594193238-aef23d2a9988?q=80&w=2000&auto=format&fit=crop")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
          }}
        />
        
        {/* Content */}
        <div className="relative z-20 container-custom h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">Our Sicily Packages</h1>
            <p className="text-lg md:text-xl max-w-xl">
              All-inclusive travel packages with expert guides, authentic experiences, and zero hassle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-8 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('adventure')}
              className={`px-6 py-2 rounded-full transition-all ${filter === 'adventure' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Adventure
            </button>
            <button 
              onClick={() => setFilter('cultural')}
              className={`px-6 py-2 rounded-full transition-all ${filter === 'cultural' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Cultural
            </button>
            <button 
              onClick={() => setFilter('relax')}
              className={`px-6 py-2 rounded-full transition-all ${filter === 'relax' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Relax
            </button>
            <button 
              onClick={() => setFilter('food')}
              className={`px-6 py-2 rounded-full transition-all ${filter === 'food' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Food & Wine
            </button>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map(pkg => (
              <motion.div 
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-60 overflow-hidden">
                  <img 
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-sm text-gray-500">{pkg.duration}</p>
                    <p className="text-primary font-bold">€{pkg.price}</p>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Highlights:</h4>
                  <ul className="text-sm text-gray-600 mb-4 ml-5">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="list-disc mb-1">{highlight}</li>
                    ))}
                  </ul>
                  
                  <Link to={`/packages/${pkg.id}`} className="btn-primary w-full block text-center">View Details</Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredPackages.length === 0 && (
            <div className="text-center py-10">
              <h3 className="text-xl font-medium text-gray-800">No packages found</h3>
              <p className="mt-2 text-gray-600">Try a different filter or check back later!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Packages;