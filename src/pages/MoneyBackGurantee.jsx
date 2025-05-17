import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const MoneyBackGuarantee = () => {
  return (
    <div className="bg-gray-200 text-center py-20 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-black">
        30-Day Money-Back Guarantee
      </h2>
      <p className="mt-4 text-base md:text-lg text-black">
        If you're not <span className="text-blue-600 font-medium">100% satisfied</span> with our service, we'll refund your payment. No hassle, no risk.
      </p>
      <div className="mt-6 flex justify-center">
        <button className="flex items-center gap-2 bg-orange-500 text-white font-semibold py-3 px-6 rounded shadow-md transition duration-300 hover:bg-white hover:text-blue-600 border border-transparent hover:border-blue-600">
          <FaCheckCircle className="text-white hover:text-blue-600 transition duration-300" />
          Join 180+ Happy Website Owners
        </button>
      </div>
    </div>
  );
};

export default MoneyBackGuarantee;
