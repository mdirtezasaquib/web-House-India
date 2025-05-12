import React, { useState } from 'react';
import { FaBars, FaTimes, FaPaperPlane, FaHome } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/webhouseindia-logo.png';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMobileServices = () => setIsMobileServicesOpen(!isMobileServicesOpen);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Work Portfolio', to: '/portfolio' },
    { name: 'Client Reviews', to: '/reviews' },
    { name: 'Contact us', to: '/contact' },
  ];

  const servicesLinks = [
    'Website Design',
    'E-commerce Website',
    'Web Application',
    'Mobile App Development',
    'Graphic Designing',
    'SEO / SEM',
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-white">
      
      <div className="bg-blue-700 text-white text-center text-sm py-2 font-semibold">
        Start Your Online Journey Today ! 
      </div>

      <div className="flex items-center justify-between px-4 py-5 md:px-10">
        
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Webhouse India" className="w-60 lg:w-76 h-11.5 pl-0 lg:pl-20" />
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`flex items-center text-black font-medium hover:text-orange-500 transition duration-200 ${isActive(link.to) ? 'text-orange-500' : ''}`}
            >
              {link.name === 'Home' && <FaHome className="mr-1" />}
              {link.name}
            </Link>
          ))}

          
          <div className="relative group">
            <button className="text-black font-medium flex items-center hover:text-orange-500">
              Services <span className="ml-1">▼</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md w-40">
              {servicesLinks.map((item) => (
                <Link
                  key={item}
                  to="/services"
                  className="block px-4 py-2 text-sm hover:text-orange-500 transition"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

    
          <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-600 transition">
            <FaPaperPlane className="mr-2" /> Let's Talk
          </button>
        </nav>


        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

    
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`block text-black font-medium hover:text-orange-500 ${isActive(link.to) ? 'text-orange-500' : ''}`}
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                {link.name === 'Home' && <FaHome className="mr-2" />} {link.name}
              </div>
            </Link>
          ))}

          
          <div className="mt-2">
            <button onClick={toggleMobileServices} className="text-black font-medium flex items-center justify-between w-full">
              Services <span>{isMobileServicesOpen ? '▲' : '▼'}</span>
            </button>
            {isMobileServicesOpen && (
              <div className="mt-1 space-y-1">
                {servicesLinks.map((item) => (
                  <Link
                    key={item}
                    to="/services"
                    className="block text-sm text-gray-700 hover:text-orange-500"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

        
          <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-600 mt-3 w-30 justify-center ">
            <FaPaperPlane className="mr-2" /> Let's Talk
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
