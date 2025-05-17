import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; 
import TrustedBrand from '../pages/TrustedBrand.jsx';
import MoneyBackGuarantee from '../pages/MoneyBackGurantee.jsx';
import Home5 from '../pages/Home5';
import Home4 from '../pages/Home4';

const Work = () => {
  return (
    <div>
    <div className="bg-[#002f86] text-white text-center py-20 px-4 md:px-20">
      <h1 className="text-2xl md:text-4xl font-bold leading-snug">
        The Glimpse of our Creative Work | Trusted by{' '}
        <span className="text-white">180+ Businesses & Startups</span>
      </h1>
      <p className="mt-6 text-base md:text-lg flex flex-col md:flex-row justify-center items-center gap-2">
        <FaCheckCircle className="text-white text-xl" />
        <span>
          Go through our recent projects and discover how we&apos;ve made difference for several businesses!
        </span>
      </p>

      
    </div>

    <Home4/>
    <TrustedBrand/>

    <MoneyBackGuarantee/>

    <Home5/>

    </div>

    
  );
};



export default Work;
