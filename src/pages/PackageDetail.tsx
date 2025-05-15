import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiArrowLeft, FiCalendar, FiCheckCircle, FiClock, FiMap, FiXCircle } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { BackgroundImage } from '../components/ui';

type PackageType = 'adventure' | 'cultural' | 'relax' | 'food';

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
  type: PackageType[];
  location: string;
  itinerary: Itinerary[];
  included: string[];
  excluded: string[];
}

// Map package types to colors
const typeColors: Record<PackageType, string> = {
  adventure: 'bg-blue-500',
  cultural: 'bg-purple-500',
  relax: 'bg-green-500',
  food: 'bg-orange-500'
};

const packageDetails: Record<string, PackageDetails> = {
  'etna-taormina': {
    id: 'etna-taormina',
    title: 'Etna & Taormina Experience',
    subtitle: 'Volcanic Wonders & Ancient Charm',
    description: 'Experience the perfect blend of natural wonders and historic beauty as you explore Europe\'s highest active volcano and Sicily\'s most charming coastal town. This all-inclusive package combines thrilling adventure, cultural immersion, and relaxation in one unforgettable journey.',
    duration: '7 days',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1615147342761-9238e15d8b96?q=80&w=2000',
    type: ['adventure', 'cultural'],
    location: 'Eastern Sicily',
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
  'aeolian-islands': {
    id: 'aeolian-islands',
    title: 'Aeolian Islands Tour',
    subtitle: 'Volcanic Paradise in the Mediterranean Sea',
    description: 'Explore the magical Aeolian archipelago, a UNESCO World Heritage site featuring seven unique volcanic islands. Experience breathtaking landscapes, crystal-clear waters, active volcanoes, and the laid-back island lifestyle in this Mediterranean paradise.',
    duration: '5 days',
    price: 999,
    image: 'https://cdn.pixabay.com/photo/2019/05/07/13/42/stromboli-4185847_1280.jpg',
    type: ['adventure', 'relax'],
    location: 'Aeolian Islands',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Milazzo & Ferry to Lipari',
        description: 'Welcome to Sicily! Meet your guide at Catania Airport and transfer to Milazzo port. Take the hydrofoil to Lipari, the largest of the Aeolian Islands. Check in at your hotel and enjoy a welcome dinner with orientation briefing.',
        activities: ['Airport pickup', 'Transfer to Milazzo', 'Ferry to Lipari', 'Welcome dinner'],
        accommodation: 'Hotel Mea in Lipari',
        meals: ['Dinner'],
      },
      {
        day: 2,
        title: 'Lipari Island Exploration',
        description: 'Discover the charming island of Lipari with a guided tour. Visit the Archaeological Museum, the old town, and the Castle. In the afternoon, relax at one of the beautiful beaches or explore the local shops.',
        activities: ['Lipari archaeological park visit', 'Old town tour', 'Beach time'],
        accommodation: 'Hotel Mea in Lipari',
        meals: ['Breakfast', 'Lunch'],
      },
      {
        day: 3,
        title: 'Vulcano Island Day Trip',
        description: 'Take a short boat ride to Vulcano Island, famous for its natural mud baths and thermal springs. Climb to the Gran Cratere for impressive views of the archipelago. Relax in the therapeutic mud baths and hot springs before returning to Lipari.',
        activities: ['Boat to Vulcano', 'Crater hike (optional)', 'Mud bath experience', 'Hot springs'],
        accommodation: 'Hotel Mea in Lipari',
        meals: ['Breakfast'],
      },
      {
        day: 4,
        title: 'Stromboli Night Eruption',
        description: 'Embark on an unforgettable boat excursion to Stromboli. Visit the charming village of Stromboli in the late afternoon. After sunset, witness the spectacular "Sciara del Fuoco" from the boat - the natural fireworks of the continuously erupting volcano.',
        activities: ['Boat to Stromboli', 'Village visit', 'Night eruption viewing from boat'],
        accommodation: 'Hotel Mea in Lipari',
        meals: ['Breakfast', 'Dinner on boat'],
      },
      {
        day: 5,
        title: 'Panarea Island & Departure',
        description: 'Visit the exclusive island of Panarea, the smallest and most chic of the Aeolian Islands. Enjoy its beautiful beaches and elegant atmosphere. In the afternoon, return to Lipari and take the ferry back to Milazzo. Transfer to Catania Airport for departure.',
        activities: ['Boat to Panarea', 'Beach time', 'Return to mainland', 'Airport transfer'],
        accommodation: '',
        meals: ['Breakfast'],
      }
    ],
    included: [
      'All accommodations (4 nights in boutique hotels)',
      'Daily breakfast, 1 lunch, and 2 dinners',
      'Airport transfers',
      'Ferry tickets between islands',
      'English-speaking guide',
      'Stromboli night excursion',
      'Entrance to mud baths in Vulcano',
      'All local taxes'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Optional activities & tours',
      'Personal expenses',
      'Meals not mentioned in the itinerary',
      'Tips for guides'
    ]
  },
  'syracuse-baroque': {
    id: 'syracuse-baroque',
    title: 'Syracuse & Baroque Sicily',
    subtitle: 'Ancient Greek History & UNESCO Baroque Towns',
    description: 'Discover the ancient Greek history and baroque wonders of Sicily. This cultural journey takes you from the impressive Greek ruins of Syracuse to the stunning baroque towns of Val di Noto, all UNESCO World Heritage sites.',
    duration: '6 days',
    price: 1199,
    image: 'https://cdn.pixabay.com/photo/2020/05/28/09/51/sicily-5230269_1280.jpg',
    type: ['cultural'],
    location: 'Southeastern Sicily',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Catania & Transfer to Syracuse',
        description: 'Welcome to Sicily! Upon arrival at Catania Airport, meet your driver and transfer to Syracuse. Check into your hotel in Ortigia, the historic island center of Syracuse. Evening orientation walk and welcome dinner.',
        activities: ['Airport pickup', 'Transfer to Syracuse', 'Evening orientation walk', 'Welcome dinner'],
        accommodation: 'Hotel Gutkowski in Ortigia',
        meals: ['Dinner'],
      },
      {
        day: 2,
        title: 'Ancient Syracuse Exploration',
        description: 'Full day exploring the archaeological wonders of Syracuse. Visit the Greek Theater, the Roman Amphitheater, the Ear of Dionysius, and the Archaeological Museum. Afternoon walking tour of Ortigia, including the Cathedral and Arethusa Fountain.',
        activities: ['Archaeological Park tour', 'Ortigia walking tour', 'Cathedral visit'],
        accommodation: 'Hotel Gutkowski in Ortigia',
        meals: ['Breakfast', 'Lunch'],
      },
      {
        day: 3,
        title: 'Noto: Baroque Marvel',
        description: 'Today we visit Noto, the most spectacular of Sicily\'s baroque towns. Explore its golden limestone buildings, elegant churches, and palaces along the Corso Vittorio Emanuele. Optional visit to a local pastry shop to taste the famous Sicilian sweets.',
        activities: ['Noto guided tour', 'Cathedral visit', 'Palazzo Nicolaci', 'Sweet tasting'],
        accommodation: 'Hotel Gutkowski in Ortigia',
        meals: ['Breakfast'],
      },
      {
        day: 4,
        title: 'Ragusa & Modica Day Trip',
        description: 'Full-day excursion to the baroque towns of Ragusa and Modica. In Ragusa, explore the enchanting Ibla district with its stunning baroque architecture. Continue to Modica, famous for its chocolate, where you\'ll enjoy a chocolate tasting and demonstration.',
        activities: ['Ragusa Ibla tour', 'Modica tour', 'Chocolate tasting'],
        accommodation: 'Cambiocavallo Countryside Resort',
        meals: ['Breakfast', 'Lunch'],
      },
      {
        day: 5,
        title: 'Scicli & Rural Sicily',
        description: 'Visit the charming baroque town of Scicli, with its beautiful churches and palaces. After lunch, enjoy a relaxing afternoon at your countryside resort. Optional cooking class to learn traditional Sicilian recipes, followed by dinner with the food you prepared.',
        activities: ['Scicli tour', 'Free time at resort', 'Optional cooking class'],
        accommodation: 'Cambiocavallo Countryside Resort',
        meals: ['Breakfast', 'Dinner'],
      },
      {
        day: 6,
        title: 'Return to Catania & Departure',
        description: 'After breakfast, transfer to Catania Airport for your departure flight. End of our services.',
        activities: ['Transfer to airport'],
        accommodation: '',
        meals: ['Breakfast'],
      }
    ],
    included: [
      'All accommodations (5 nights in boutique hotels)',
      'Daily breakfast, 2 lunches, and 2 dinners',
      'Private airport transfers',
      'All transportation by private van',
      'Professional English-speaking guide',
      'Entrance fees to all sites mentioned',
      'Chocolate tasting in Modica',
      'All local taxes'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Optional cooking class (€85 per person)',
      'Personal expenses',
      'Meals not mentioned in the itinerary',
      'Tips for guides and drivers'
    ]
  },
  'food-wine': {
    id: 'food-wine',
    title: 'Sicilian Food & Wine Journey',
    subtitle: 'A Gastronomic Adventure Through Sicily',
    description: 'A culinary adventure through the best flavors Sicily has to offer. This journey will take you from street food to fine dining, from local wineries to bustling markets, all while exploring the diverse landscapes and cultural sites of Sicily.',
    duration: '8 days',
    price: 1499,
    image: 'https://cdn.pixabay.com/photo/2017/09/28/19/11/eat-2796740_1280.jpg',
    type: ['food', 'relax'],
    location: 'Various locations',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Palermo',
        description: 'Welcome to Sicily! Upon arrival at Palermo Airport, transfer to your hotel in the city center. Meet your guide for an evening street food tour, experiencing the vibrant Ballarò and Capo markets, tasting Palermo\'s famous street food like arancini, panelle, and sfincione.',
        activities: ['Airport pickup', 'Hotel check-in', 'Evening street food tour'],
        accommodation: 'Palazzo Brunaccini in Palermo',
        meals: ['Street food dinner'],
      },
      {
        day: 2,
        title: 'Palermo Markets & Cooking Class',
        description: 'Morning visit to Palermo\'s historic markets to select fresh ingredients. Participate in a hands-on cooking class where you\'ll learn to prepare traditional Sicilian dishes like pasta alla Norma, caponata, and cannoli. Enjoy the meal you\'ve prepared for lunch.',
        activities: ['Market visit', 'Cooking class', 'City center walking tour'],
        accommodation: 'Palazzo Brunaccini in Palermo',
        meals: ['Breakfast', 'Lunch'],
      },
      {
        day: 3,
        title: 'Marsala Wine Region',
        description: 'Travel to the western coast and the famous Marsala wine region. Visit two premier wineries for guided tours and tastings of different Marsala styles, from dry to sweet. Learn about the traditional production methods and enjoy a pairing lunch with local specialties.',
        activities: ['Transfer to Marsala', 'Two winery visits', 'Wine tastings', 'Wine pairing lunch'],
        accommodation: 'Baglio Oneto Resort in Marsala',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
      },
      {
        day: 4,
        title: 'Trapani Salt Pans & Erice',
        description: 'Visit the picturesque salt pans of Trapani and learn about traditional salt harvesting. Continue to the medieval hilltop town of Erice for a pastry demonstration and tasting at Maria Grammatico\'s famous pasticceria. Free afternoon to explore Erice\'s cobblestone streets.',
        activities: ['Salt pans visit', 'Erice tour', 'Pastry demonstration'],
        accommodation: 'Baglio Oneto Resort in Marsala',
        meals: ['Breakfast', 'Sweet tasting'],
      },
      {
        day: 5,
        title: 'Agrigento & Transfer to Etna Wine Region',
        description: 'Morning visit to the Valley of the Temples in Agrigento. After lunch, transfer to the Mount Etna region, known for its distinctive volcanic wines. Check into your wine resort nestled among vineyards on the slopes of Mount Etna.',
        activities: ['Valley of the Temples visit', 'Transfer to Etna region'],
        accommodation: 'Tenuta San Michele Wine Resort',
        meals: ['Breakfast', 'Lunch'],
      },
      {
        day: 6,
        title: 'Etna Wines & Volcano',
        description: 'Full day dedicated to the wines of Etna. Visit three boutique wineries on different slopes of the volcano, tasting their unique expressions of Nerello Mascalese and Carricante grapes. Learn how volcanic soil affects wine characteristics. Lunch at a winery with spectacular views.',
        activities: ['Three winery visits', 'Multiple wine tastings', 'Volcano views'],
        accommodation: 'Tenuta San Michele Wine Resort',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
      },
      {
        day: 7,
        title: 'Catania Fish Market & Cooking',
        description: 'Morning visit to Catania\'s famous fish market, "La Pescheria", a colorful and lively display of Sicily\'s incredible seafood. Participate in a seafood cooking class with a local chef, learning to prepare traditional dishes like pasta con le sarde and fish couscous.',
        activities: ['Fish market visit', 'Seafood cooking class', 'Catania city tour'],
        accommodation: 'Tenuta San Michele Wine Resort',
        meals: ['Breakfast', 'Lunch', 'Farewell dinner'],
      },
      {
        day: 8,
        title: 'Departure',
        description: 'After breakfast, transfer to Catania Airport for your departure flight.',
        activities: ['Transfer to airport'],
        accommodation: '',
        meals: ['Breakfast'],
      }
    ],
    included: [
      '7 nights accommodation in boutique hotels and wine resorts',
      'Daily breakfast, 5 lunches, and 3 dinners',
      'All wine tastings and food tastings mentioned',
      'Two cooking classes with meal',
      'Private transportation throughout',
      'Professional foodie guide',
      'Entrance fees to all sites',
      'Airport transfers'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Additional wines or drinks not included in tastings',
      'Personal expenses',
      'Gratuities for guides and drivers'
    ]
  },
  'western-sicily': {
    id: 'western-sicily',
    title: 'Western Sicily Adventure',
    subtitle: 'From Ancient Temples to Pristine Beaches',
    description: 'Explore the unspoiled western part of Sicily, from salt flats to ancient temples. This diverse adventure combines archaeological wonders, natural reserves, and charming coastal towns in the less-visited but equally stunning western region of Sicily.',
    duration: '6 days',
    price: 1099,
    image: 'https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_1280.jpg',
    type: ['adventure', 'cultural'],
    location: 'Western Sicily',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Palermo & Transfer to Trapani',
        description: 'Welcome to Sicily! Upon arrival at Palermo Airport, meet your driver and transfer to your hotel in Trapani. Orientation walk along the historic center and seafront promenade. Welcome dinner featuring local specialties.',
        activities: ['Airport pickup', 'Transfer to Trapani', 'Orientation walk', 'Welcome dinner'],
        accommodation: 'Hotel San Michele in Trapani',
        meals: ['Dinner'],
      },
      {
        day: 2,
        title: 'Segesta & Erice',
        description: 'Morning visit to the archaeological site of Segesta, home to a perfectly preserved Greek temple and theater. Continue to the medieval hilltop town of Erice, where you\'ll enjoy panoramic views over the coast and visit the historic center with its castle and churches.',
        activities: ['Segesta archaeological site', 'Erice walking tour', 'Castle visit'],
        accommodation: 'Hotel San Michele in Trapani',
        meals: ['Breakfast', 'Lunch'],
      },
      {
        day: 3,
        title: 'Trapani Salt Pans & Mozia Island',
        description: 'Explore the scenic salt pans of Trapani with their iconic windmills. Learn about traditional salt harvesting methods at the Salt Museum. Take a boat to Mozia Island, an ancient Phoenician settlement, and visit its archaeological museum with the famous "Giovinetto di Mozia" statue.',
        activities: ['Salt pans visit', 'Boat to Mozia', 'Archaeological museum'],
        accommodation: 'Hotel San Michele in Trapani',
        meals: ['Breakfast'],
      },
      {
        day: 4,
        title: 'Zingaro Nature Reserve & San Vito Lo Capo',
        description: 'Spend the day at the beautiful Zingaro Nature Reserve, Sicily\'s first protected area. Hike along coastal trails with breathtaking views and swim in secluded coves with crystal-clear water. In the afternoon, visit the beach town of San Vito Lo Capo, famous for its white sand beach.',
        activities: ['Zingaro hiking', 'Swimming in coves', 'Beach time in San Vito'],
        accommodation: 'Hotel Cala Marina in Castellammare del Golfo',
        meals: ['Breakfast', 'Picnic lunch'],
      },
      {
        day: 5,
        title: 'Selinunte Archaeological Park',
        description: 'Visit Europe\'s largest archaeological park at Selinunte, once a powerful Greek city. Explore its impressive acropolis, temples, and sanctuaries. In the afternoon, enjoy free time at Castellammare del Golfo, a picturesque fishing town with a beautiful harbor and castle.',
        activities: ['Selinunte guided tour', 'Free time in Castellammare', 'Farewell dinner'],
        accommodation: 'Hotel Cala Marina in Castellammare del Golfo',
        meals: ['Breakfast', 'Dinner'],
      },
      {
        day: 6,
        title: 'Departure Day',
        description: 'After breakfast, transfer to Palermo Airport for your departure flight.',
        activities: ['Transfer to airport'],
        accommodation: '',
        meals: ['Breakfast'],
      }
    ],
    included: [
      'All accommodations (5 nights in boutique hotels)',
      'Daily breakfast, 2 lunches, and 2 dinners',
      'Private airport transfers',
      'Transportation by private minivan',
      'English-speaking guide throughout the trip',
      'Entrance fees to all sites mentioned',
      'Boat trip to Mozia Island',
      'Zingaro Nature Reserve entry fee'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Optional activities',
      'Personal expenses',
      'Meals not mentioned',
      'Tips for guides and drivers'
    ]
  },
  'sicily-relax': {
    id: 'sicily-relax',
    title: 'Sicily Relaxation Retreat',
    subtitle: 'Beaches, Spas, and Sicilian Serenity',
    description: 'Unwind and rejuvenate with Sicily\'s best beaches, spas, and wellness experiences. This relaxing journey combines beautiful coastal settings, thermal spas, gentle activities, and plenty of free time for personal relaxation.',
    duration: '9 days',
    price: 1799,
    image: 'https://cdn.pixabay.com/photo/2018/07/16/11/34/mondello-3541310_1280.jpg',
    type: ['relax'],
    location: 'Southern Sicily',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Palermo & Transfer to Cefalù',
        description: 'Welcome to Sicily! Upon arrival at Palermo Airport, meet your driver and transfer to the charming coastal town of Cefalù. Check in to your beachfront hotel and enjoy a relaxing evening. Welcome dinner at a seaside restaurant.',
        activities: ['Airport pickup', 'Transfer to Cefalù', 'Welcome dinner'],
        accommodation: 'Hotel Le Calette in Cefalù',
        meals: ['Dinner'],
      },
      {
        day: 2,
        title: 'Cefalù Relaxation',
        description: 'Start your morning with an optional gentle yoga session on the beach. After breakfast, enjoy a brief walking tour of Cefalù\'s historic center, including its magnificent Norman cathedral. The rest of the day is yours to relax on the beautiful beach or explore at your own pace.',
        activities: ['Optional morning yoga', 'Short town tour', 'Free beach time'],
        accommodation: 'Hotel Le Calette in Cefalù',
        meals: ['Breakfast'],
      },
      {
        day: 3,
        title: 'Spa Day at Parco delle Madonie',
        description: 'Visit a luxury spa in the Madonie Mountains for a full day of wellness treatments. Enjoy the thermal pools, sauna, and a relaxing massage (included). The peaceful mountain setting provides the perfect backdrop for complete relaxation.',
        activities: ['Luxury spa day', 'Thermal pools', 'Included massage treatment'],
        accommodation: 'Hotel Le Calette in Cefalù',
        meals: ['Breakfast', 'Light spa lunch'],
      },
      {
        day: 4,
        title: 'Transfer to Sciacca Thermal Resort',
        description: 'After a leisurely morning, transfer to the southern coast and the thermal town of Sciacca. Check in to your thermal resort and enjoy the spa facilities, including natural thermal pools, steam caves, and mud treatments. Dinner at the hotel\'s restaurant.',
        activities: ['Transfer to Sciacca', 'Thermal spa facilities', 'Evening relaxation'],
        accommodation: 'Verdura Resort near Sciacca',
        meals: ['Breakfast', 'Dinner'],
      },
      {
        day: 5,
        title: 'Wellness Day at Verdura Resort',
        description: 'Full day to enjoy the extensive facilities of your luxury wellness resort. Choose from multiple pools, spa treatments, fitness classes, or simply relax on the private beach. Optional activities include golf, tennis, or cooking classes.',
        activities: ['Resort activities', 'Beach time', 'Optional spa treatments'],
        accommodation: 'Verdura Resort near Sciacca',
        meals: ['Breakfast'],
      },
      {
        day: 6,
        title: 'Valley of the Temples & Farm Experience',
        description: 'Morning visit to the impressive Valley of the Temples in Agrigento. In the afternoon, visit a countryside estate for a relaxing farm-to-table experience, including olive oil tasting and a leisurely lunch featuring fresh local ingredients.',
        activities: ['Valley of the Temples', 'Farm visit', 'Olive oil tasting'],
        accommodation: 'Verdura Resort near Sciacca',
        meals: ['Breakfast', 'Farm lunch'],
      },
      {
        day: 7,
        title: 'Transfer to Syracuse & Ortigia Island',
        description: 'Transfer to Syracuse and check in to your boutique hotel on the historic island of Ortigia. Afternoon at leisure to explore the charming streets and piazzas of this beautiful baroque island. Evening sunset aperitivo by the sea.',
        activities: ['Transfer to Syracuse', 'Free time in Ortigia', 'Sunset drinks'],
        accommodation: 'Ortea Palace Hotel in Syracuse',
        meals: ['Breakfast', 'Aperitivo snacks'],
      },
      {
        day: 8,
        title: 'Vendicari Nature Reserve & Beach Day',
        description: 'Visit the beautiful Vendicari Nature Reserve, home to pristine beaches, lagoons, and wildlife. Spend the day relaxing on the unspoiled Calamosche Beach, frequently rated among Italy\'s most beautiful beaches. Return to Syracuse for a farewell dinner.',
        activities: ['Vendicari Reserve', 'Beach time', 'Farewell dinner'],
        accommodation: 'Ortea Palace Hotel in Syracuse',
        meals: ['Breakfast', 'Picnic lunch', 'Dinner'],
      },
      {
        day: 9,
        title: 'Departure Day',
        description: 'After breakfast, transfer to Catania Airport for your departure flight.',
        activities: ['Transfer to airport'],
        accommodation: '',
        meals: ['Breakfast'],
      }
    ],
    included: [
      '8 nights in luxury and boutique accommodations',
      'Daily breakfast, 3 lunches, and 3 dinners',
      'One full massage treatment',
      'Access to spa facilities at hotels',
      'Private airport transfers',
      'Transportation by luxury minivan',
      'English-speaking guide and wellness coordinator',
      'All entrance fees mentioned',
      'All local taxes'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Additional spa treatments',
      'Optional activities',
      'Personal expenses',
      'Meals not mentioned',
      'Tips for guides and staff'
    ]
  }
};

const PackageDetail = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const [packageData, setPackageData] = useState<PackageDetails | null>(null);
  const [activeDay, setActiveDay] = useState(1);

  useEffect(() => {
    // In a real app, this would be an API call
    if (packageId && packageDetails[packageId]) {
      setPackageData(packageDetails[packageId]);
      setActiveDay(1);
      // Scroll to top on new package load
      window.scrollTo(0, 0);
    }
  }, [packageId]);

  if (!packageData) {
    return (
      <div className="container-custom py-20 text-center">
        <SEO 
          title="Package Not Found" 
          description="The travel package you're looking for doesn't exist or has been removed."
          canonicalUrl={`https://justsicily.com/packages/${packageId || ''}`}
        />
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
      <SEO 
        title={packageData.title} 
        description={packageData.description}
        canonicalUrl={`https://justsicily.com/packages/${packageData.id}`}
        ogImage={packageData.image}
        ogType="product"
      />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[65vh]">
        <BackgroundImage 
          src={packageData.image}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 z-10"></div>
        
        <div className="relative z-20 container-custom h-full flex flex-col justify-end pb-16">
          {/* Back button */}
          <Link 
            to="/packages" 
            className="inline-flex items-center text-white mb-8 hover:text-primary transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to all packages
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            {/* Type tags */}
            <div className="flex gap-3 mb-4">
              {packageData.type.map(type => (
                <span 
                  key={type} 
                  className={`${typeColors[type]} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-2">{packageData.title}</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6">{packageData.subtitle}</p>
            
            <div className="flex flex-wrap items-center gap-6 mt-4 text-gray-200">
              <p className="flex items-center">
                <FiCalendar className="w-5 h-5 mr-2" />
                {packageData.duration}
              </p>
              <p className="flex items-center">
                <FiMap className="w-5 h-5 mr-2" />
                {packageData.location}
              </p>
              <p className="flex items-center text-white font-bold text-xl">
                <span className="mr-2">€{packageData.price}</span>
                <span className="text-sm font-normal text-gray-300">per person</span>
              </p>
            </div>
          </motion.div>
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
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold font-montserrat text-primary mb-4 flex items-center">
                    <FiCheckCircle className="mr-2 text-green-500" />
                    What's Included
                  </h3>
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
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold font-montserrat text-primary mb-4 flex items-center">
                    <FiXCircle className="mr-2 text-red-500" />
                    Not Included
                  </h3>
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
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg sticky top-24">
                <div className="bg-primary text-white p-5 -mt-10 rounded-lg shadow-md mb-6">
                  <h3 className="text-2xl font-bold font-montserrat mb-2">Book This Package</h3>
                  <p className="mb-0">From <span className="text-3xl font-bold">€{packageData.price}</span> per person</p>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium">Travel Date</label>
                    <input type="date" className="w-full p-3 border rounded focus:ring-2 focus:ring-primary focus:outline-none" required />
                  </div>
                  
                  <div>
                    <label className="block mb-1 text-sm font-medium">Number of Travelers</label>
                    <select className="w-full p-3 border rounded focus:ring-2 focus:ring-primary focus:outline-none" required>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5+">5+ People</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block mb-1 text-sm font-medium">Full Name</label>
                    <input type="text" className="w-full p-3 border rounded focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Your Name" required />
                  </div>
                  
                  <div>
                    <label className="block mb-1 text-sm font-medium">Email</label>
                    <input type="email" className="w-full p-3 border rounded focus:ring-2 focus:ring-primary focus:outline-none" placeholder="email@example.com" required />
                  </div>
                  
                  <div>
                    <label className="block mb-1 text-sm font-medium">Special Requirements</label>
                    <textarea className="w-full p-3 border rounded focus:ring-2 focus:ring-primary focus:outline-none" rows={3} placeholder="Dietary requirements, accessibility needs, etc."></textarea>
                  </div>
                  
                  <button type="submit" className="w-full py-3 bg-secondary text-white rounded-lg font-bold shadow-md hover:bg-secondary/90 transition-colors">
                    Book Now
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-600 text-sm">Need help? Contact us:</p>
                  <a href="tel:+391234567890" className="block mt-2 text-primary font-bold text-lg">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold font-montserrat text-primary mb-10 text-center flex items-center justify-center">
              <FiClock className="mr-3" />
              Your Day-by-Day Itinerary
            </h2>
            
            {/* Day selector */}
            <div className="flex overflow-x-auto mb-8 pb-4">
              <div className="flex space-x-4">
                {packageData.itinerary.map((day) => (
                  <button
                    key={day.day}
                    onClick={() => setActiveDay(day.day)}
                    className={`px-5 py-3 rounded-full flex-shrink-0 transition-all font-medium ${
                      activeDay === day.day
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    Day {day.day}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Active day details */}
            {packageData.itinerary.map((day) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: activeDay === day.day ? 1 : 0,
                  y: activeDay === day.day ? 0 : 10,
                  display: activeDay === day.day ? 'block' : 'none'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold font-montserrat text-primary mb-3">
                    Day {day.day}: {day.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-8 text-lg">{day.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Activities */}
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-bold text-lg mb-4 flex items-center text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                        </svg>
                        Activities
                      </h4>
                      <ul className="space-y-3">
                        {day.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Accommodation */}
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-bold text-lg mb-4 flex items-center text-gray-800">
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
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-bold text-lg mb-4 flex items-center text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.38a48.474 48.474 0 0 0-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                        </svg>
                        Meals
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${day.meals.includes('Breakfast') ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-400'}`}>
                          Breakfast
                        </span>
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${day.meals.includes('Lunch') ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-400'}`}>
                          Lunch
                        </span>
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${day.meals.includes('Dinner') ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-400'}`}>
                          Dinner
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold font-montserrat mb-6">Ready for Your Sicilian Adventure?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-10 text-white/90">
              Book this package now and let us handle everything. All you need to do is arrive and enjoy.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="#booking" 
                className="bg-secondary text-white px-10 py-4 rounded-lg font-bold hover:bg-secondary/90 transition-colors shadow-lg"
              >
                Book Now
              </a>
              <Link 
                to="/contact" 
                className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Ask a Question
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetail;