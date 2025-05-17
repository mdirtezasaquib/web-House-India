import React from 'react';
import { FaBolt, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';

const BusinessBoostSection = () => {
  return (
    <div className="w-full bg-white py-10 px-6 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
        
      <div className="flex-1 max-w-2xl text-center lg:text-left pl-8 lg:pl-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Let's 5x Your Online Business With <br />
          <span className="text-[#002f86]">Webhouseindia!</span>
        </h1>
        <p className="mt-5 text-gray-700 max-w-xl mx-auto lg:mx-0 text-lg tracking-wide">
          Whatever your requirement, it should be a dynamic website, a complex web application,
          an ecommerce website, mobile app (or) digital marketing we have a solution for you. Let's talk!
        </p>
        <h2 className="mt-8 text-3xl font-bold text-orange-600">30 Day Money-Back Guarantee</h2>
        <p className="mt-3 text-gray-600 text-base max-w-md">
          If you're not 100% satisfied with Webhouseindia services, we'll refund your payment.
          No hassle, no risk.
        </p>

        <div className="mt-8 flex flex-nowrap justify-center lg:justify-start gap-4 overflow-x-auto">
          <button className="flex-1 min-w-[120px] flex items-center justify-center gap-3 bg-blue-600 text-white px-3 py-3 rounded-lg shadow-lg hover:bg-white hover:text-[#002f86] border border-blue-600 transition-all font-semibold whitespace-nowrap">
            <FaPaperPlane size={18} /> Get Quote
          </button>
          <button className="flex-1 min-w-[120px] flex items-center justify-center gap-3 bg-orange-500 text-white px-3 py-3 rounded-lg shadow-lg hover:bg-white hover:text-orange-500 border border-orange-500 transition-all font-semibold whitespace-nowrap">
            <FaBolt size={18} /> Contact Us
          </button>
        </div>
      </div>


      <div className="flex-1 bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full flex flex-col justify-center">
        <h3 className="text-xl font-bold text-black mb-1">
          Get Free <span className="text-orange-500">Website Design</span> Proposal Today!
        </h3>
        <p className="text-gray-600 mb-1">Free Consultation</p>
        <p className="text-gray-500 text-sm mb-6">
          Enter your phone number and we'll connect you with the right person
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 text-blue-700"
          />
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 text-blue-700"
          />
          <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-white hover:text-[#002f86] border border-blue-600 transition-all font-semibold">
            Submit
          </button>
        </form>

        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-2">Call For Free Consultancy</p>
          <div className="inline-flex items-center gap-2 bg-[#f0f4ff] text-[#002f86] font-bold px-4 py-2 rounded-lg shadow-md">
            <FaPhoneAlt /> +91 9709796347
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBoostSection;
