import React from 'react';
import { Link } from 'react-router-dom';
import hero1 from '../images/hero1.png';
import hero2 from '../images/hero2.png';
import hero3 from '../images/hero3.png';
import hero4 from '../images/hero4.png';
import hero5 from '../images/hero5.jpg';
import hero6 from '../images/hero6.jpg';

const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];

const Hero = () => {
  return (
    <section className="relative bg-black text-white min-h-screen px-6 sm:px-10 lg:px-20 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* Left Text Section */}
      <div className="z-10 max-w-xl space-y-6 text-center lg:text-left pt-20 lg:pt-0">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4 sm:mt-0">
          We make email your <span className="text-green-500">highest-earning</span> channel
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          We handle your email marketing, so you can focus on growing your business.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-4 pt-4 justify-center lg:justify-start flex-wrap">
          <Link to="/book-a-call">
            <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-semibold whitespace-nowrap">
              Get Free Audit
            </button>
          </Link>
          <a href="#case-studies">
            <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:border-green-500 transition whitespace-nowrap">
              See Our Results
            </button>
          </a>
        </div>
      </div>

      {/* Right Carousel */}
      <div className="relative w-full lg:w-[50%] h-[450px] overflow-hidden mt-[-12px] sm:mt-[-32px] lg:mt-0">
        <div className="absolute top-0 left-0 flex animate-slide-x gap-6 items-center h-full mb-0">
          {[...heroImages, ...heroImages].map((img, index) => {
            const position = index % 3;
            const isCenter = position === 1;
            const zIndex = isCenter ? 'z-20' : 'z-10';
            const scale = isCenter ? 'scale-100' : 'scale-[0.93]';

            return (
              <div
                key={index}
                className={`w-48 sm:w-56 md:w-60 h-[360px] flex-shrink-0 transform ${scale} ${zIndex} transition-all duration-500`}
              >
                <img
                  src={img}
                  alt={`Email Visual ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-xl border border-gray-800"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
