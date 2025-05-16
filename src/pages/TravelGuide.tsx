import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BackgroundImage, Image } from '../components/ui';

// Interfacce per i dati
interface GuideCard {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  ctaPackage: string;
}

// Dati delle guide
const guideCards: GuideCard[] = [
  {
    id: 'best-time',
    title: 'Best Time to Visit Sicily',
    description: 'Sicily enjoys a Mediterranean climate with over 300 days of sunshine per year. Spring (April-May) and Fall (September-October) offer perfect weather and fewer crowds. Summer is ideal for beaches but can be hot. Winter is mild and perfect for cultural exploration. Our packages are designed to make the most of each season\'s unique offerings.',
    image: 'https://images.unsplash.com/photo-1523365280197-dbf36cc288c8?q=80&w=800',
    ctaText: 'Plan your perfect trip with our packages',
    ctaLink: '/packages',
    ctaPackage: 'seasonal'
  },
  {
    id: 'beaches',
    title: 'Sicily\'s Most Beautiful Beaches',
    description: 'From the white sands of San Vito Lo Capo to the crystal waters of Scala dei Turchi, Sicily\'s coastline offers some of the Mediterranean\'s most stunning beaches. Discover hidden coves only accessible by boat, popular resort beaches with full amenities, and dramatic rocky shores with turquoise waters. Our coastal packages include visits to the most spectacular beaches.',
    image: 'https://images.unsplash.com/photo-1516091877740-fde016699f2c?q=80&w=800',
    ctaText: 'Included in our coastal packages',
    ctaLink: '/packages',
    ctaPackage: 'coastal'
  },
  {
    id: 'etna',
    title: 'Mount Etna: Europe\'s Most Active Volcano',
    description: 'Towering at 3,326 meters, Mount Etna is Europe\'s tallest active volcano and one of Sicily\'s most iconic natural wonders. Visit lunar-like landscapes, hike along ancient craters, or take a cable car to higher elevations for breathtaking views. The fertile volcanic soil supports excellent vineyards and agriculture. Our guided Etna tours offer safe and informative experiences on this majestic volcano.',
    image: 'https://images.unsplash.com/photo-1639158397551-5e17deb618e4?q=80&w=800',
    ctaText: 'Explore Etna with our guided tours',
    ctaLink: '/packages/etna-taormina',
    ctaPackage: 'adventure'
  },
  {
    id: 'food',
    title: 'Sicilian Food You Must Try',
    description: 'From arancini to cannoli, Sicilian cuisine blends Italian, Arabic, and Greek influences into something uniquely delicious. Must-try dishes include pasta alla Norma, caponata, and fresh seafood. Street markets in Palermo and Catania offer authentic tastings. Experience these authentic flavors with our food & wine packages that include cooking classes, market tours, and dining at local trattorias.',
    image: 'https://images.unsplash.com/photo-1606855637555-1e292168a1b7?q=80&w=800',
    ctaText: 'Taste Sicily with our food & wine packages',
    ctaLink: '/packages',
    ctaPackage: 'food'
  },
  {
    id: 'unesco',
    title: 'UNESCO Sites & Ancient History',
    description: 'Sicily boasts an impressive collection of UNESCO World Heritage sites, including the Valley of the Temples in Agrigento, the Villa Romana del Casale with its extraordinary mosaics, and the late Baroque towns of the Val di Noto. These sites showcase Sicily\'s extraordinary 3,000-year history influenced by Greeks, Romans, Arabs, Normans and more. Our cultural packages include expert guided tours of these historical treasures.',
    image: 'https://images.unsplash.com/photo-1588394912026-1ee67109fb92?q=80&w=800',
    ctaText: 'Discover history in our cultural packages',
    ctaLink: '/packages',
    ctaPackage: 'cultural'
  },
  {
    id: 'traditions',
    title: 'Local Traditions & Festivals',
    description: 'Experience Sicily\'s vibrant culture through its colorful festivals and traditions. From the elaborate Holy Week processions to summer food festivals celebrating local specialties, there\'s always a celebration happening somewhere on the island. Folk traditions, puppet theaters, and artisan crafts offer glimpses into Sicily\'s rich cultural heritage. Our packages often coincide with major festivals to enhance your cultural experience.',
    image: 'https://images.unsplash.com/photo-1574694413671-41a9651cdc5e?q=80&w=800',
    ctaText: 'Experience traditions with JustSicily',
    ctaLink: '/packages',
    ctaPackage: 'cultural'
  }
];

// Animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const TravelGuide = () => {
  return (
    <div>
      <SEO 
        title="Sicily Travel Guide" 
        description="Complete guide to Sicily: best time to visit, beaches, Etna, food, and culture. Plan your perfect Sicily trip with JustSicily."
        canonicalUrl="https://justsicily.com/travel-guide"
      />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] bg-gray-800">
        {/* Background Image */}
        <BackgroundImage 
          src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 z-0"
          fallbackSrc="https://placehold.co/1200x800/0066CC/FFFFFF?text=Discover+Sicily" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 container-custom h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-4">Discover Sicily</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Your comprehensive guide to Sicily's best experiences, from ancient temples to volcanic adventures
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guide Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold font-montserrat text-primary mb-4 text-center">Sicily Travel Guide</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-center text-lg">
              Everything you need to know about planning your perfect Sicilian getaway, from seasonal tips to cultural insights
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guideCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      duration: 0.5,
                      delay: index * 0.1 
                    } 
                  }
                }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-52 overflow-hidden">
                  <Image 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{card.title}</h3>
                  <p className="text-gray-700 mb-6 min-h-[160px]">{card.description}</p>
                  
                  <Link 
                    to={card.ctaLink}
                    className="text-primary font-medium flex items-center hover:underline"
                  >
                    {card.ctaText}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-montserrat mb-6">Ready to Experience All of Sicily?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Our carefully crafted packages include everything mentioned above and more. Let us handle the details while you create unforgettable memories.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/packages" className="bg-white text-primary px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
              View All Packages
            </Link>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelGuide;