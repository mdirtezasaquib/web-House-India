import React from 'react';
import manImage from '../assets/Webhouseindia-banner.png';

const Home2 = () => {
  return (
    <section className="w-full min-h-screen flex items-center bg-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20">

      
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start order-2 lg:order-1 mt-10 lg:mt-0">
          <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
            <img
              src={manImage}
              alt="About"
              className="w-full h-full"
            />
          </div>

          
          <div className="block lg:hidden mt-6">
            <button className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white px-4 py-3 rounded-md hover:opacity-90 transition w-80">
              Let’s talk to grow your business online »
            </button>
          </div>
        </div>

      
        <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
          <h2 className="text-3xl md:text-3xl font-bold text-blue-900 mb-4 lg:text-left text-left">
            One Stop Solution For Website Design,
            Custom Web Application & <span className="text-orange-500">eCommerce Website Design Services</span> in Patna
          </h2>
          <p className='text-lg lg:text-left text-left'><strong>Transforming Brands through Research Driven Web Design !™</strong></p><br />
          <p className="text-gray-600 mb-6 leading-8 lg:text-left text-left">
            <strong className='text-black'>Webhouseindia:</strong> Your Trusted Website Design Company in Patna with Over 6 Years of Expertise. Our flagship services include<strong className='text-black'> Website Design, Ecommerce Website Design, Custom Web Application Development , SEO, & UI/UX Design</strong> services. With all of our services under one roof, we’re able to provide a cohesive approach to your online marketing, driving the marketing results you deserve. We have the ability to market your website through visual appeal, best-practice user-experience design, and SEO expertise to bring traffic to your professional website & online marketing tool, and convert them into customers.
          </p>

          
          <div className="hidden lg:block">
            <button className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition">
              Let’s talk to grow your business online »
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home2;
