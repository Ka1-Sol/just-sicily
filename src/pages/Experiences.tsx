import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type ExperienceCategory = 'all' | 'etna' | 'coastal' | 'food' | 'cultural';

interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: number;
  category: ExperienceCategory[];
  location: string;
}

const experiences: Experience[] = [
  // Etna Tours
  {
    id: 'etna-summit-trek',
    title: 'Etna Summit Trek',
    description: 'A challenging hike to the summit craters of Europe\'s most active volcano with expert volcanologist guides.',
    image: 'https://images.unsplash.com/photo-1639158397551-5e17deb618e4?q=80&w=800',
    duration: '8 hours',
    price: 120,
    category: ['etna'],
    location: 'Mount Etna',
  },
  {
    id: 'etna-sunset-jeep',
    title: 'Etna Sunset Jeep Tour',
    description: 'Experience the magic of sunset on Mount Etna with a 4x4 jeep tour and wine tasting at a local vineyard.',
    image: 'https://images.unsplash.com/photo-1565561805062-4066ba1b7166?q=80&w=800',
    duration: '6 hours',
    price: 95,
    category: ['etna', 'food'],
    location: 'Mount Etna',
  },
  {
    id: 'etna-caves-exploration',
    title: 'Etna Lava Caves Exploration',
    description: 'Discover the hidden lava caves beneath Mount Etna with helmet and torch, led by expert geology guides.',
    image: 'https://images.unsplash.com/photo-1510279931157-4ca63af8a363?q=80&w=800',
    duration: '4 hours',
    price: 75,
    category: ['etna'],
    location: 'Mount Etna',
  },
  
  // Coastal Experiences
  {
    id: 'taormina-boat-tour',
    title: 'Taormina Coast Boat Tour',
    description: 'Cruise along the stunning Taormina coastline with stops for swimming in the crystal-clear waters of the Blue Grotto.',
    image: 'https://images.unsplash.com/photo-1505881502353-a1986add4762?q=80&w=800',
    duration: '5 hours',
    price: 85,
    category: ['coastal'],
    location: 'Taormina',
  },
  {
    id: 'aeolian-islands-day',
    title: 'Aeolian Islands Day Trip',
    description: 'Visit the stunning volcanic Aeolian Islands of Lipari and Vulcano with time for mud baths, beaches, and local cuisine.',
    image: 'https://images.unsplash.com/photo-1567343141251-a3eeee0d2795?q=80&w=800',
    duration: 'Full day',
    price: 150,
    category: ['coastal'],
    location: 'Aeolian Islands',
  },
  {
    id: 'syracuse-sailing',
    title: 'Syracuse Harbor Sailing',
    description: 'Sail around the historic Syracuse harbor and the island of Ortigia aboard a traditional wooden sailing boat.',
    image: 'https://images.unsplash.com/photo-1569263900347-06b1e8c825ab?q=80&w=800',
    duration: '3 hours',
    price: 70,
    category: ['coastal', 'cultural'],
    location: 'Syracuse',
  },
  
  // Food & Wine Experiences
  {
    id: 'catania-market-cooking',
    title: 'Catania Market Tour & Cooking Class',
    description: 'Visit the historic fish market of Catania followed by a hands-on cooking class to prepare traditional Sicilian dishes.',
    image: 'https://images.unsplash.com/photo-1484659619207-9165d119dafe?q=80&w=800',
    duration: '6 hours',
    price: 110,
    category: ['food'],
    location: 'Catania',
  },
  {
    id: 'etna-wine-tasting',
    title: 'Etna Wine Tasting Tour',
    description: 'Sample the unique volcanic wines of the Etna region with visits to three premier wineries and vineyard tours.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800',
    duration: '7 hours',
    price: 125,
    category: ['food', 'etna'],
    location: 'Mount Etna',
  },
  {
    id: 'street-food-palermo',
    title: 'Palermo Street Food Tour',
    description: 'Taste your way through Palermo\'s historic center and markets with local street food specialties and cultural insights.',
    image: 'https://images.unsplash.com/photo-1560781065-18a87193ab46?q=80&w=800',
    duration: '4 hours',
    price: 65,
    category: ['food'],
    location: 'Palermo',
  },
  
  // Cultural Experiences
  {
    id: 'valley-temples-tour',
    title: 'Valley of the Temples Tour',
    description: 'Guided walk through the UNESCO World Heritage Valley of the Temples with an archaeology expert.',
    image: 'https://images.unsplash.com/photo-1612208654387-c4fafc804598?q=80&w=800',
    duration: '5 hours',
    price: 85,
    category: ['cultural'],
    location: 'Agrigento',
  },
  {
    id: 'baroque-towns-day',
    title: 'Baroque Towns Day Trip',
    description: 'Explore the stunning baroque architecture of Noto, Modica, and Ragusa Ibla with a local art historian.',
    image: 'https://images.unsplash.com/photo-1592679959750-78e1c5377069?q=80&w=800',
    duration: 'Full day',
    price: 130,
    category: ['cultural'],
    location: 'Val di Noto',
  },
  {
    id: 'godfather-tour',
    title: 'The Godfather Tour',
    description: 'Visit the authentic Sicilian villages where The Godfather was filmed, with stories and local traditions.',
    image: 'https://images.unsplash.com/photo-1564417947365-8dbc9d0e718e?q=80&w=800',
    duration: '6 hours',
    price: 90,
    category: ['cultural'],
    location: 'Savoca & Forza d\'Agrò',
  },
];

const Experiences = () => {
  const [activeCategory, setActiveCategory] = useState<ExperienceCategory>('all');
  
  const filteredExperiences = activeCategory === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category.includes(activeCategory));
  
  const categories: { id: ExperienceCategory; name: string }[] = [
    { id: 'all', name: 'All Experiences' },
    { id: 'etna', name: 'Etna Tours' },
    { id: 'coastal', name: 'Coastal Experiences' },
    { id: 'food', name: 'Food & Wine' },
    { id: 'cultural', name: 'Cultural Sites' },
  ];
  
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh] bg-gray-800">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1495573258723-2c7be7a646ce?q=80&w=2000&auto=format&fit=crop")', 
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
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">Sicily Experiences</h1>
            <p className="text-lg md:text-xl max-w-xl">
              Unforgettable authentic activities led by local experts and passionate guides.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-0 z-40 bg-white shadow-md">
        <div className="container-custom py-4">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl font-bold font-montserrat text-primary mb-4">
              {categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <p className="text-gray-700">
              {activeCategory === 'all' && 'Discover the best experiences Sicily has to offer, from volcanic adventures to cultural treasures.'}
              {activeCategory === 'etna' && 'Explore Europe\'s most active volcano with expert guides. Trek to the summit, ride jeeps across lunar landscapes, or discover hidden lava caves.'}
              {activeCategory === 'coastal' && 'Experience Sicily\'s stunning coastline with boat tours, island hopping, and sailing adventures along crystal-clear waters.'}
              {activeCategory === 'food' && 'Savor authentic Sicilian flavors with cooking classes, market tours, wine tastings, and street food adventures.'}
              {activeCategory === 'cultural' && 'Immerse yourself in Sicily\'s rich history and culture with guided tours of ancient sites, baroque towns, and iconic filming locations.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map(experience => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
                    <span className="text-primary font-bold">€{experience.price}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span>{experience.location}</span>
                    <span className="mx-2">•</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>{experience.duration}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{experience.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <button className="text-primary font-medium hover:underline">View Details</button>
                    <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors">Book Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredExperiences.length === 0 && (
            <div className="text-center py-10">
              <h3 className="text-xl font-medium text-gray-800">No experiences found</h3>
              <p className="mt-2 text-gray-600">Try a different category or check back later!</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action - Custom Experience */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-montserrat mb-6">Looking for something specific?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            We can create custom experiences tailored to your interests. Let us design the perfect Sicilian adventure for you.
          </p>
          <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
            Request Custom Experience
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Experiences;