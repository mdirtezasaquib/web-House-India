import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const profiles = [
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/3.jpg',
  'https://randomuser.me/api/portraits/women/4.jpg',
  'https://randomuser.me/api/portraits/men/5.jpg'
];

const Home5 = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 flex flex-col items-center text-center">
    
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
        alt="Google" 
        className="w-20 md:w-30 mb-4"
      />

    
      <div className="flex flex-col md:flex-row md:items-center md:space-x-3">
        <span className="text-4xl font-bold text-orange-500">4.9</span>
        <div className="flex text-orange-500 text-3xl mt-2 md:mt-0">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
      </div>

      
      <a href="#" className="mt-3 text-gray-800 underline text-base md:text-lg">
        Read All Google Reviews
      </a>

    
      <div className="mt-5 text-xl md:text-2xl font-medium">
        4.9/5 Rating by <span className="font-bold">170+</span>
        <span className="text-blue-600 font-semibold ml-2">
          Clients on Google, Glassdoor, Clutch & GoodFirms
        </span>
      </div>

    
      <div className="mt-5 flex -space-x-3">
        {profiles.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt="profile" 
            className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Home5;
