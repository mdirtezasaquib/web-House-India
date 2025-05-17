import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Home6 from '../pages/Home6.jsx';
import TrustedBrand from '../pages/TrustedBrand.jsx';
import BusinessBoostSection from '../pages/BusinessBoostSection.jsx';

const RatingsAndReviews = () => {
  return (
    <div>
    <div className="bg-[#002f86] text-white text-center py-20 px-4">
      <h2 className="text-2xl md:text-3xl font-bold">
        Ratings and reviews
      </h2>
      <p className="mt-4 text-base md:text-lg flex flex-col md:flex-row justify-center items-center gap-2">
        <FaCheckCircle className="text-white text-xl" />
        <span>Our Clients reviews &amp; their testimonials</span>
      </p>
    </div>

   <Home6/>
   <TrustedBrand/>

   <BusinessBoostSection/>

</div>

  );
};

export default RatingsAndReviews;
