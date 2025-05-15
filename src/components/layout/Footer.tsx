import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div className="md:col-span-1">
            <Link to="/" className="font-montserrat font-bold text-xl mb-4 inline-block">
              JUSTSICILY
            </Link>
            <p className="text-sm mt-4">
              Your complete travel experience in Sicily. Accommodation, transport, and unique experiences all handled for you.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/packages" className="text-sm hover:underline">Tour Packages</Link></li>
              <li><Link to="/experiences" className="text-sm hover:underline">Experiences</Link></li>
              <li><Link to="/about" className="text-sm hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:underline">Contact</Link></li>
            </ul>
          </div>
          
          {/* Popular Destinations */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Popular Places</h3>
            <ul className="space-y-2">
              <li><Link to="/packages" className="text-sm hover:underline">Taormina</Link></li>
              <li><Link to="/packages" className="text-sm hover:underline">Etna Volcano</Link></li>
              <li><Link to="/packages" className="text-sm hover:underline">Aeolian Islands</Link></li>
              <li><Link to="/packages" className="text-sm hover:underline">Syracuse</Link></li>
              <li><Link to="/packages" className="text-sm hover:underline">Agrigento</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Via Roma, 123, Catania, Sicily
              </li>
              <li className="text-sm flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                info@justsicily.com
              </li>
              <li className="text-sm flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                +39 123 456 7890
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-white/20">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} JustSicily. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 