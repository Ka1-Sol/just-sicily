import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

interface Itinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
  accommodation: string;
  meals: string[];
}

interface PackageDetails {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  itinerary: Itinerary[];
  included: string[];
  excluded: string[];
}

const packageDetails: Record<string, PackageDetails> = {
  'etna-taormina': {
    id: 'etna-taormina',
    title: 'Etna & Taormina Experience',
    subtitle: 'Volcanic Wonders & Ancient Charm',
    description: 'Experience the perfect blend of natural wonders and historic beauty as you explore Europe\'s highest active volcano and Sicily\'s most charming coastal town. This all-inclusive package combines thrilling adventure, cultural immersion, and relaxation in one unforgettable journey.',
    duration: '7 days',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1634979079856-e6516bf0dcc4?q=80&w=1600',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Catania',
        description: 'Welcome to Sicily! Upon arrival at Catania Airport, you will be greeted by your personal guide and transferred to your hotel in Catania. Enjoy a welcome dinner featuring traditional Sicilian cuisine.',
        activities: ['Airport pickup', 'Hotel check-in', 'Welcome dinner'],
        accommodation: 'Hotel Roma in Catania',
        meals: ['Dinner'],
      },
      {
        day: 2,
        title: 'Etna Volcano Experience',
        description: 'Today is dedicated to exploring Mount Etna, Europe\'s highest active volcano. You\'ll join a guided tour with a certified volcanologist who will lead you through ancient craters, lava caves, and stunning viewpoints.',
        activities: ['Etna guided tour', 'Cable car ride', 'Lava cave exploration', 'Volcanic wine tasting'],
        accommodation: 'Hotel Roma in Catania',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
      },
      {
        day: 3,
        title: 'Journey to Taormina',
        description: 'After breakfast, we travel to the picturesque town of Taormina. Settle into your hotel before embarking on an afternoon walking tour of this ancient town, including the spectacular Greek-Roman Theatre with breathtaking views.',
        activities: ['Transfer to Taormina', 'Walking tour', 'Greek Theatre visit'],
        accommodation: 'Hotel Bel Soggiorno in Taormina',
        meals: ['Breakfast', 'Dinner'],
      },
      {
        day: 4,
        title: 'Isola Bella & Beach Day',
        description: 'Enjoy a relaxing day at the beautiful Isola Bella, a small island connected to the mainland by a narrow path. Swim in the crystal-clear waters and relax on the beach. Optional activities include snorkeling and boat tours.',
        activities: ['Beach time at Isola Bella', 'Optional snorkeling', 'Optional boat tour'],
        accommodation: 'Hotel Bel Soggiorno in Taormina',
        meals: ['Breakfast'],
      },
      {
        day: 5,
        title: 'The Godfather Tour',
        description: 'Visit the charming villages of Savoca and Forza d\'Agrò where scenes from "The Godfather" were filmed. Explore narrow streets, historic churches, and enjoy authentic local food in places made famous by the classic film.',
        activities: ['Savoca village tour', 'Bar Vitelli visit', 'Forza d\'Agrò exploration'],
        accommodation: 'Hotel Bel Soggiorno in Taormina',
        meals: ['Breakfast', 'Lunch'],
      },
      {
        day: 6,
        title: 'Alcantara Gorges',
        description: 'Explore the impressive Alcantara Gorges, a natural canyon formed by ancient lava flows. You can walk along the river, swim in the cool waters (seasonal), and marvel at the unique basalt formations. Afternoon free for shopping in Taormina.',
        activities: ['Alcantara Gorges visit', 'Free time in Taormina', 'Farewell dinner'],
        accommodation: 'Hotel Bel Soggiorno in Taormina',
        meals: ['Breakfast', 'Dinner'],
      },
      {
        day: 7,
        title: 'Departure Day',
        description: 'After breakfast, transfer to Catania Airport for your departure flight. End of our services. We hope you enjoyed your Sicilian adventure!',
        activities: ['Transfer to airport'],
        accommodation: '',
        meals: ['Breakfast'],
      },
    ],
    included: [
      'All accommodations (6 nights in 4-star hotels)',
      'Daily breakfast, 3 lunches, and 4 dinners',
      'Private airport transfers',
      'All transportation during the tour',
      'English-speaking guide throughout',
      'All entrance fees and activities mentioned',
      'Etna cable car and 4x4 jeep experience',
      'Wine tasting on Mount Etna',
      '24/7 emergency assistance',
      'All local taxes and service charges'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Optional activities',
      'Personal expenses',
      'Meals not mentioned in the itinerary',
      'Tips for guides and drivers'
    ]
  },
  // Other packages would be defined here
};

const PackageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [packageData, setPackageData] = useState<PackageDetails | null>(null);
  const [activeDay, setActiveDay] = useState(1);

  useEffect(() => {
    // In a real app, this would be an API call
    if (id && packageDetails[id]) {
      setPackageData(packageDetails[id]);
      setActiveDay(1);
    }
  }, [id]);

  if (!packageData) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-bold">Package not found</h2>
        <p className="mt-4">The package you're looking for doesn't exist or has been removed.</p>
        <Link to="/packages" className="btn-primary mt-8 inline-block">
          View All Packages
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${packageData.image})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="relative z-20 container-custom h-full flex flex-col justify-end pb-16">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-2">{packageData.title}</h1>
            <p className="text-xl md:text-2xl">{packageData.subtitle}</p>
            <div className="flex flex-wrap items-center gap-6 mt-4">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                {packageData.duration}
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                From €{packageData.price}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Description */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                {packageData.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* What's Included */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold font-montserrat text-primary mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    {packageData.included.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* What's Not Included */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold font-montserrat text-primary mb-4">Not Included</h3>
                  <ul className="space-y-2">
                    {packageData.excluded.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Right Column - Booking Form */}
            <div>
              <div className="bg-primary text-white p-6 rounded-lg sticky top-20">
                <h3 className="text-2xl font-bold font-montserrat mb-4">Book This Package</h3>
                <p className="mb-6">From <span className="text-3xl font-bold">€{packageData.price}</span> per person</p>
                
                <form className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm">Travel Date</label>
                    <input type="date" className="w-full p-2 rounded text-gray-800" required />
                  </div>
                  
                  <div>
                    <label className="block mb-1 text-sm">Number of Travelers</label>
                    <select className="w-full p-2 rounded text-gray-800" required>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5+">5+ People</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block mb-1 text-sm">Full Name</label>
                    <input type="text" className="w-full p-2 rounded text-gray-800" placeholder="Your Name" required />
                  </div>
                  
                  <div>
                    <label className="block mb-1 text-sm">Email</label>
                    <input type="email" className="w-full p-2 rounded text-gray-800" placeholder="email@example.com" required />
                  </div>
                  
                  <div>
                    <label className="block mb-1 text-sm">Special Requirements</label>
                    <textarea className="w-full p-2 rounded text-gray-800" rows={3} placeholder="Dietary requirements, accessibility needs, etc."></textarea>
                  </div>
                  
                  <button type="submit" className="w-full py-3 bg-secondary text-white rounded font-bold">
                    Book Now
                  </button>
                </form>
                
                <div className="mt-6 text-center text-sm">
                  <p>Need help? Contact us:</p>
                  <a href="tel:+391234567890" className="block mt-2 text-white">
                    +39 123 456 7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold font-montserrat text-primary mb-10 text-center">
            Your Day-by-Day Itinerary
          </h2>
          
          {/* Day selector */}
          <div className="flex overflow-x-auto mb-8 pb-4">
            <div className="flex space-x-4">
              {packageData.itinerary.map((day) => (
                <button
                  key={day.day}
                  onClick={() => setActiveDay(day.day)}
                  className={`px-5 py-2 rounded-full flex-shrink-0 transition-all ${
                    activeDay === day.day
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Day {day.day}
                </button>
              ))}
            </div>
          </div>
          
          {/* Active day details */}
          {packageData.itinerary.map((day) => (
            <div
              key={day.day}
              className={`${activeDay === day.day ? 'block' : 'hidden'}`}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold font-montserrat text-primary mb-2">
                  Day {day.day}: {day.title}
                </h3>
                
                <p className="text-gray-700 mb-6">{day.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Activities */}
                  <div>
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                      </svg>
                      Activities
                    </h4>
                    <ul className="space-y-2">
                      {day.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Accommodation */}
                  <div>
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                      Accommodation
                    </h4>
                    <p className="text-gray-700">
                      {day.accommodation || 'Departure day (no accommodation)'}
                    </p>
                  </div>
                  
                  {/* Meals */}
                  <div>
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.38a48.474 48.474 0 0 0-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                      </svg>
                      Meals
                    </h4>
                    <div className="flex space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs ${day.meals.includes('Breakfast') ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-400'}`}>
                        Breakfast
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs ${day.meals.includes('Lunch') ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-400'}`}>
                        Lunch
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs ${day.meals.includes('Dinner') ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-400'}`}>
                        Dinner
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-montserrat mb-6">Ready for Your Sicilian Adventure?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Book this package now and let us handle everything. All you need to do is arrive and enjoy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#booking" className="bg-secondary text-white px-8 py-3 rounded font-bold hover:bg-secondary/90 transition-colors">
              Book Now
            </a>
            <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetail;