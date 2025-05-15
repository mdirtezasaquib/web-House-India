import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaBolt, FaStar } from "react-icons/fa";
import googleImg from "../assets/googleStar.png";
import cropin from "../assets/cropin.jpg";
import health from "../assets/health.webp";
import secure from "../assets/secure.webp";
import lovane from "../assets/lovane.webp";
import times from "../assets/times.webp";
import sound from "../assets/sound.webp";


import 'swiper/css';
import 'swiper/css/navigation';

const reviews = [
  {
    id: 1,
    image: `${cropin}`,
    text: 'Looking for web Design, try webhouseindia team only..they are highly professional and cheapest website design company in Bihar..we are fully satisfied...',
    rating: 5,
    website: 'www.cropin.com'
  },
  {
    id: 2,
    image: `${health}`,
    text: 'I would like recommend this Company for Web Designing in patna as well as for ecommerce services. Since 3 years they are taking care of my company web...',
    rating: 5,
    website: 'www.asiapacefichealthcare.in'
  },
  {
    id: 3,
    image: `${secure}`,
    text: 'Webhouseindia is the best website design company ..loved their service and have the lowest budget',
    rating: 5,
    website: 'www.securefree.in'
  },
  {
    id: 4,
    image: `${lovane}`,
    text: 'One of my friend suggested me of Webhouseindia team for website design and development..Our Pharma Company took their help and gets 70% increase in sa...',
    rating: 5,
    website: 'www.levane.in'
  },
  {
    id: 5,
    image: `${times}`,
    text: 'It is a distinct pleasure for me to recommend WebHouseIndia to any and all interested for website development. They have been professional, comprehen...',
    rating: 5,
    website: 'www.example5.com'
  },
  {
    id: 6,
    image: `${sound}`,
    text: 'A highly professional team with exceptional expertise! They’ve significantly elevated my business’s online presence, making it look more polished and...',
    rating: 5,
    website: 'www.example6.com'
  },
];

const Home6 = () => {
  return (
    <div className="py-10 bg-white px-4 md:px-10 relative">
      <h2 className="text-3xl font-bold text-center mb-4">What Our Valuable Customers Say</h2>
      <p className="text-xl text-center mb-8">Rated 4.9 * by Verified Clients</p>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev'
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative text-center mx-2 mt-12">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 overflow-hidden rounded-full w-24 h-24 border-4 border-white shadow-md">
                <img
                  src={review.image}
                  alt="customer"
                  className="w-full h-full object-cover shadow"
                />
              </div>
              <p className="mt-16 text-gray-700 text-sm md:text-base">{review.text}</p>

      
              <div className="flex justify-center text-orange-500 text-xl mt-4">
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <div className="mt-5 flex justify-center items-center gap-2">
                <img
                  src={googleImg}
                  alt="Google"
                  className="w-30 h-12 md:w-30 md:h-12"
                />
              </div>

              <a
                href={`https://${review.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 mt-4 block"
              >
                {review.website}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

  
      <div className="custom-prev absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-200 z-10">
        <span className="text-xl">&#8249;</span>
      </div>
      <div className="custom-next absolute top-1/2 right-2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-200 z-10">
        <span className="text-xl">&#8250;</span>
      </div>

      <div className="flex justify-center mt-10">
        <button className="flex items-center bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 shadow transition">
          <FaBolt className="mr-2" /> Read All Reviews
        </button>
      </div>
    </div>
  );
};

export default Home6;
