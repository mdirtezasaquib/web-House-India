import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <div className="bg-[#002f86] text-white py-20 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Contact Us Today!
        </h2>

        
        <div className="mt-6 flex items-start w-full max-w-6xl mx-auto text-base md:text-lg px-2">
          <FaCheckCircle className="text-white text-xl mt-1 flex-shrink-0" />
          <span className="ml-2 text-left">
            Need help with your website design, web development, Ecommerce, social media apps or other digital media solutions?  Contact us for a free consultation   and quotation. Let us make the vision of your company’s web presence a reality.
          </span>
        </div>

      </div>


    </div>
  );
};

export default Contact;
