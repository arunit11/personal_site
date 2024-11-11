import React from 'react';

// Import assets
import hrm from "../assets/H.png";
import cs from "../assets/C.png";
import boots from "../assets/B.png";
import js from "../assets/J.png";
import rec from "../assets/R.png";
import no from "../assets/N.png";
import my from "../assets/MY.png";
import m from "../assets/M.png";
import full from "../assets/F.png";

import first from "../assets/1.jpg";
import secound from "../assets/2.jpg";
import thead from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";
import seven from "../assets/7.jpg";
import aight from "../assets/8.jpg";

const Gallery = () => {
  return (
    <>
      <div className="m-10">
        {/* Internship Section */}
        <h1 className="text-3xl font-serif text-blue-700 mb-8">
          Internship – Guvi, Mentor – Naan Mudhalvan Program
        </h1>

        {/* Internship Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[first, secound, thead, aight, five, seven].map((imageSrc, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                src={imageSrc}
                alt={`internship-${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Certification Section */}
        <h1 className="text-3xl font-serif text-blue-700 mt-16 mb-8">
          MERN Stack Certified
        </h1>

        {/* Certification Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[full, cs, boots, js, rec, my, m, hrm].map((imageSrc, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                src={imageSrc}
                alt={`certification-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Custom Hover Shadow for Images */
        .hover\:shadow-2xl:hover {
          box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </>
  );
};

export default Gallery;
