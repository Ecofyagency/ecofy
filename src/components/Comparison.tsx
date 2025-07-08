import React from "react";
import { X, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Comparison = () => {
  const comparisons = [
    { feature: "Dedicated Account Manager", traditional: false, ecofy: true },
    { feature: "Custom Strategy Development", traditional: false, ecofy: true },
    { feature: "Advanced Automation Setup", traditional: false, ecofy: true },
    { feature: "A/B Testing Everything", traditional: false, ecofy: true },
    { feature: "Revenue Attribution Tracking", traditional: false, ecofy: true },
    { feature: "24/7 Support & Monitoring", traditional: false, ecofy: true },
    { feature: "Guaranteed ROI Improvement", traditional: false, ecofy: true },
    { feature: "Monthly Strategy Calls", traditional: false, ecofy: true },
  ];

  return (
    <div className="bg-gray-950 pt-6 pb-10 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            Not Your Average <span className="text-green-400">Agency</span>
          </h2>
          <p className="text-sm md:text-md text-gray-400">
            Real results. Here's how Ecofy compares.
          </p>
        </div>

        <div className="w-full mb-2">
          <div className="grid grid-cols-3 bg-gray-800 rounded-t-2xl overflow-hidden text-center text-sm sm:text-base">
            <div className="p-4 font-bold text-left sm:text-center text-white">Feature</div>
            <div className="p-4 font-bold border-l border-r border-gray-700 text-white">Traditional</div>
            <div className="p-4 font-bold bg-green-500 text-black">Ecofy</div>
          </div>

          {comparisons.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-center text-center border-t border-gray-800 text-sm sm:text-base bg-gray-900"
            >
              <div className="p-4 text-left sm:text-center font-medium text-white">
                {item.feature}
              </div>
              <div className="p-4 border-l border-r border-gray-800">
                {item.traditional ? (
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                )}
              </div>
              <div className="p-4 bg-gray-800">
                {item.ecofy ? (
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/book-a-call"
            className="inline-block bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-lg transition duration-300"
          >
            Experience the Difference
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
