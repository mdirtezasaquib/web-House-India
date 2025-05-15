import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaBolt ,FaArrowRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "www.venusstarindia.com",
    img: "https://www.webhouseindia.com/public/images/portfolio/venus-star-construction-private-limited-foy0RVMD8-webhouseindai_mockup.webp",
    link: "https://www.venusstarindia.com/",
  },
  {
    id: 2,
    title: "www.jpbulandcement.com",
    img: "https://www.webhouseindia.com/public/images/portfolio/Jpbulandcement-patna-bihar-mF1m28SxK-webhouseindai_mockup.webp",
    link: "https://www.rajkumarseeds.com",
  },
  {
    id: 3,
    title: "www.levane.com",
    img: "https://www.webhouseindia.com/public/images/portfolio/levane-pharmaceutical-company-Updlnrq8a-webhouseindai_mockup.webp",
    link: "https://levane.in/",
  },
  { id: 4, title: "www.sunilsoundservice.com", img: "https://www.webhouseindia.com/public/images/portfolio/SunilSoundService-driSOznU9-webhouseindai_mockup.webp", link: "https://sunilsoundservice.com/" },
  { id: 5, title: "www.securefree.in", img: "https://www.webhouseindia.com/public/images/portfolio/securefree-sanitary-brand-nQeOvX45a-webhouseindai_mockup.webp", link: "https://securefree.in/" },
  { id: 6, title: "www.bbmnf.org", img: "https://www.webhouseindia.com/public/images/portfolio/buxar-foundation-bbnmf-1IQykI8bbnmf-org.webp", link: "https://www.bbnmf.org/" },
  { id: 7, title: "www.rajkumarseeds.com", img: "https://www.webhouseindia.com/public/images/portfolio/raj-kumar-seeds-leading-seed-company-in-india-6If76Sta4-webhouseindai_mockup.webp", link: "https://rajkumarseeds.com/" },
  { id: 8, title: "www.asiapacefichealthcare.in", img: "https://www.webhouseindia.com/public/images/portfolio/Asiapacifichealthcare-buxar-HYWmiFH2F-webhouseindai_mockup.webp", link: "https://www.asiapacifichealthcare.in/" },
  { id: 9, title: "www.hariyalihub.com", img: "https://www.webhouseindia.com/public/images/portfolio/hariyalihub.com-startup-company-HnH5Wov1P-webhouseindai_mockup.webp", link: "https://nehashiinternational.com/" },
];

const Home4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCardsCount = 3;

  const slideLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const slideRight = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideRight();
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < visibleCardsCount; i++) {
      visibleCards.push(projects[(currentIndex + i) % projects.length]);
    }
    return visibleCards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="bg-gray-50 py-20">
    <div className="relative max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">The Proof is in The Work</h2>
      <p className="text-center text-black mb-8 font-medium">
        Go through our recent projects and discover how we’ve made difference for several businesses!
      </p>

      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="flex gap-6 transition-transform duration-500 ease-in-out">
          {visibleCards.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="transform transition-all duration-500 w-72 flex-shrink-0"
            >
              <div className="bg-white shadow-md hover:shadow-xl rounded-md overflow-hidden border-2 border-gray-400 border-dotted hover:bg-[#EBFDFD]">
                <img src={project.img} alt={project.title} className="w-full h-54 object-cover p-3 " />
                <div className="p-4 text-center">
                  <h3 className="text-m mb-2 text-gray-500">{project.title}</h3>
                 <a
                href={project.link}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
               >
               Visit Site <FaArrowRight className="ml-2" />
                </a>


                </div>
              </div>
            </div>
          ))}
        </div>

    
        <button
          onClick={slideLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-blue-600 hover:text-white p-2 rounded-full shadow-md"
        >
          <FaChevronLeft />
        </button>

        
        <button
          onClick={slideRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-blue-600 hover:text-white p-2 rounded-full shadow-md"
        >
          <FaChevronRight />
        </button>
      </div>

    
      <div className="flex justify-center mt-8">
        <button className="flex items-center bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 shadow transition">
          <FaBolt className="mr-2" /> Explore Our Portfolio
        </button>
      </div>
    </div>
    </div>
  );
};

export default Home4;
