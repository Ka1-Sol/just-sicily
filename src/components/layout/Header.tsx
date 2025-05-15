import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  return (
    <header className="bg-transparent text-white absolute w-full z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl tracking-widest">
            JUSTSICILY
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link 
              to="/experiences" 
              className="text-white hover:text-white/90 py-2"
            >
              Explore
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-white/90 py-2"
            >
              Discover
            </Link>
            <Link 
              to="/packages" 
              className="text-white hover:text-white/90 py-2"
            >
              Tour Package
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <Link to="/contact" aria-label="Contact" className="text-white hover:text-white/90">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </Link>
            <Link to="/about" aria-label="About Us" className="text-white hover:text-white/90">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Shorter white line beneath nav */}
        <div className="w-24 h-[1px] bg-white/20 mx-auto mt-1"></div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-700 absolute w-full z-50`}
      >
        <div className="container-custom py-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/experiences" className="text-white" onClick={() => setIsOpen(false)}>
              Explore
            </Link>
            <Link to="/about" className="text-white" onClick={() => setIsOpen(false)}>
              Discover
            </Link>
            <Link to="/packages" className="text-white" onClick={() => setIsOpen(false)}>
              Tour Package
            </Link>
            <Link to="/contact" className="text-white" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 