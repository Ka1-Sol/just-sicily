import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Footer minimale solo per la home page
  if (isHomePage) {
    return (
      <footer className="bg-transparent text-gray-300 absolute bottom-0 w-full z-10">
        <div className="container-custom py-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="text-sm">
              JustSicily © {new Date().getFullYear()}
            </div>
            
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-sm hover:text-white">Privacy</Link>
              <Link to="/terms" className="text-sm hover:text-white">Terms</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  // Footer standard per le altre pagine
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