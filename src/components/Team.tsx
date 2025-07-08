import React from 'react';
import { motion } from 'framer-motion';
import ceo from '../images/ceo.jpeg';
import cmo from '../images/cmo.jpeg';
import lead from '../images/ekeh.jpeg';

const team = [
  {
    name: "Zuxriddin",
    role: "Founder & CEO",
    image: ceo,
    bio: "Zuxriddin is the founder of Ecofy. With a background in copywriting, he leads the team and helps eCommerce brands grow profitably."
  },
  {
    name: "Saeed Abror",
    role: "Chief Marketing Officer",
    image: cmo,
    bio: "Saeed reached over 300k followers organically on Instagram as @saeed.abror by consistently sharing eCommerce tips. At Ecofy, he leads marketing to help brands grow through content and strategy."
  },
  {
    name: "Ekeh",
    role: "Director of Strategy",
    image: lead,
    bio: "Ekeh is the Director of Strategy at Ecofy. He ensures every campaign is aligned with business goals, drives performance, and delivers measurable results."
  }
];

const Team = () => {
  return (
    <section id='team' className="bg-black py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
    
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Meet Our <span className="text-green-500">People</span>
        </h2>
        <p className="text-lg text-gray-400">
          The minds behind your growth.
        </p>
      </motion.div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-green-500 mb-2">{member.role}</p>
            <p className="text-gray-400 text-sm max-w-xs">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
