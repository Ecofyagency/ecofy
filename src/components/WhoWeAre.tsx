import React from 'react';
import { motion } from 'framer-motion';
import about from '../images/about.jpeg';

const WhoWeAre = () => {
  return (
    <section id='about' className="bg-white py-12 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Animated Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
          About Us
        </h2>
        <p className="mt-3 text-lg text-green-700">
          How Ecofy Agency was founded
        </p>
      </motion.div>

      {/* Content: Image Left, Text Right on Desktop */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={about}
            alt="Ecofy Team"
            className="w-full h-auto rounded-2xl shadow-xl object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 mb-4">
            Ecofy was founded by Zuxriddin, a former copywriter who saw the opportunity to build something better in email and SMS marketing.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            He brought together a team of like-minded people who care about results, creativity, and meaningful communication.
          </p>
          <p className="text-lg text-gray-700">
            Today, Ecofy helps eCommerce brands grow by turning emails and texts into real sales. We write messages that feel human, look good, and make people click.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
