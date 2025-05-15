import React from 'react';
import cement from "../assets/cement.png";
import venus from "../assets/venus.png";
import buland from "../assets/buland.webp";
import cropin from "../assets/cropin.jpg";
import health from "../assets/health.webp";
import lovane from "../assets/lovane.webp";
import sound from "../assets/sound.webp";
import times from "../assets/times.webp";
import secure from "../assets/secure.webp";
import care from "../assets/healthcare.png";
import pavitra from "../assets/pavitra.png";
import seeds from "../assets/seeds.png";
import hempu from "../assets/hempubti.png";
import buxar from "../assets/buxar.webp";
import brand from "../assets/brand.webp";
import aconfim from "../assets/aconfin.webp";

const brands = [
  { id: 1, img: `${cement}` },
  { id: 1, img: `${venus}` },
  { id: 1, img: `${buland}` },
   { id: 1, img: `${cropin}` },
  { id: 1, img: `${health}` },
   { id: 1, img: `${lovane}` },
   { id: 1, img: `${sound}` },
   { id: 1, img: `${times}` },
  { id: 1, img: `${secure}` },
   { id: 1, img: `${care}` },
   { id: 1, img: `${pavitra}` },
   { id: 1, img: `${seeds}` },
  { id: 1, img: `${hempu}` },
   { id: 1, img: `${buxar}` },
  { id: 1, img: `${brand}` },
   { id: 1, img: `${aconfim}` },
];

const TrustedBrand = () => {
  return (
    <div className="bg-gray-50 py-10 px-10 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-2">
        Trusted By Established Business & Brands
      </h2>
      <p className="text-center text-gray-600 mb-8">Powering 180+ Businesses</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition duration-300 flex items-center justify-center"
          >
            <img
              src={brand.img}
              alt={`Brand ${brand.id}`}
              className="object-contain h-16 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBrand;
