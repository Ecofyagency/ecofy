import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import service1 from '../images/service1.jpg';
import service2 from '../images/service2.jpg';
import service3 from '../images/service3.jpg';

const services = [
  {
    image: service1,
    title: "Email Marketing Audit",
    description:
      "Get a full breakdown of your current email setup. We'll review your flows, design, copy, segmentation, and deliver a custom roadmap to unlock hidden revenue.",
  },
  {
    image: service2,
    title: "Full Email Marketing Service",
    description:
      "From strategy to execution, we handle copywriting, design, segmentation, analytics, and ongoing optimization—so you can focus on growth.",
  },
  {
    image: service3,
    title: "SMS Marketing Service",
    description:
      "Connect with customers instantly. Our SMS campaigns boost engagement, support your email flows, and deliver ROI—without annoying your audience.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const Services = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/book-a-call');
    window.scrollTo(0, 0); // Scroll to top on navigation
  };

  return (
    <section id="services" className="bg-black pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Our <span className="text-green-500">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Customized solutions to fit your brand’s email marketing goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-base text-gray-300 flex-1 leading-relaxed">{service.description}</p>
                <button
                  onClick={handleNavigate}
                  className="mt-6 flex items-center text-green-500 hover:text-green-400 font-semibold transition duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <button
            onClick={handleNavigate}
            className="bg-green-500 hover:bg-green-600 text-black font-semibold text-base px-6 py-3 rounded-xl transition-all duration-300"
          >
            Book Your Free Email Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
