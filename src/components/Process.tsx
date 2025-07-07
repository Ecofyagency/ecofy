import React from 'react';
import { Calendar, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      day: "3 Days",
      icon: <Calendar className="w-8 h-8" />,
      title: "Strategy & Setup",
      description: "We analyze your business, set up tracking, and create your custom email marketing strategy.",
      tasks: [
        "Business audit & competitor analysis",
        "Email platform setup & integration",
        "Segmentation strategy development",
        "Content calendar creation"
      ]
    },
    {
      day: "7 Days",
      icon: <Zap className="w-8 h-8" />,
      title: "Launch & Optimize",
      description: "Your campaigns go live with automated flows and we begin optimization based on initial data.",
      tasks: [
        "First campaigns launched",
        "Automation flows activated",
        "A/B testing implementation",
        "Performance monitoring setup"
      ]
    },
    {
      day: "30 Days",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scale & Grow",
      description: "We optimize performance, scale successful campaigns, and implement advanced strategies.",
      tasks: [
        "Performance analysis & optimization",
        "Advanced automation implementation",
        "List growth acceleration",
        "Revenue scaling strategies"
      ]
    }
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
          Our <span className="text-green-500">Process</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          From strategy to scale, we follow a proven process that delivers results quickly 
          and sustainably grows your email revenue.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-md"
          >
            <div className="text-green-500 mb-4">{step.icon}</div>
            <div className="text-green-500 font-semibold mb-2">{step.day}</div>
            <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
            <p className="text-gray-600 mb-6">{step.description}</p>
            <ul className="space-y-2">
              {step.tasks.map((task, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                  {task}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
