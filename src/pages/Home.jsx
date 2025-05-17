import React, { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaTelegramPlane, FaPaperPlane, FaBolt, FaTimes, FaPlus } from 'react-icons/fa';
import firstImage from '../assets/webFirst.png';
import Home2 from '../pages/Home2.jsx';
import Home3 from '../pages/Home3.jsx';
import Home4 from '../pages/Home4.jsx';
import Home5 from '../pages/Home5.jsx';
import Home6 from '../pages/Home6.jsx';
import TrustedBrand from '../pages/TrustedBrand.jsx';
import TechnologyStack from '../pages/TechnologyStack.jsx';
import ProposalSection from '../pages/ProposalSection.jsx';
import BusinessBoostSection from '../pages/BusinessBoostSection.jsx';

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleIcons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full bg-[#EBEBEB]">
      
      <div className="fixed right-4 bottom-1/18 flex flex-col space-y-3 z-50 items-end">
        {isOpen && (
          <>
            <a href="https://wa.me/9135595758" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600">
              <FaWhatsapp size={20} />
            </a>
            <a href="tel:+919135595758" className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600">
              <FaPhoneAlt size={20} />
            </a>
            <a href="https://t.me/@saquibcoder" target="_blank" rel="noopener noreferrer" className="bg-sky-500 text-white p-3 rounded-full shadow-lg hover:bg-sky-600">
              <FaTelegramPlane size={20} />
            </a>
          </>
        )}
        <button
          onClick={toggleIcons}
          className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600"
        >
          {isOpen ? <FaTimes size={20} /> : <FaPlus size={20} />}
        </button>
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="w-full pl-0 lg:pl-20 lg:w-1/2 lg:text-left text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 leading-normal">
            Webhouseindia - Your Trusted Website Design Company in Patna, Bihar
          </h1>
          <p className="text-gray-700 text-sm md:text-base mb-6 leading-7 md:leading-8">
            We are <strong>Web Designers, Developers & Digital Marketing Company From Patna</strong> dedicated to creative and results-driven web-based solutions using the latest trends and technologies
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 justify-center lg:justify-start">
            <button className="flex items-center bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 shadow transition w-50">
              <FaPaperPlane className="mr-2" /> Quick Enquiry
            </button>
            <button className="flex items-center bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 shadow transition w-54 ">
              <FaBolt className="mr-2" /> Explore Our Portfolio
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={firstImage}
            alt="growth Chart"
            className="w-full max-w-[500px] md:max-w-[600px] h-auto"
          />
        </div>
      </div>

      <Home2/> 

      <hr className="border-t-2 border-dashed border-gray-300" />

      <Home3/>  

      <Home4/>

      <Home5/>

      <Home6/>

       <hr className="border-t-2 border-dashed border-gray-300" />
      <TrustedBrand/>


        <ProposalSection/>

        <TechnologyStack/> 

       <hr className="border-t-2 border-dashed border-gray-300" /> 

       <BusinessBoostSection/>

    </div>
  );
};

export default Home;
