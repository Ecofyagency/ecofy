import React, { useRef, useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const auditBenefits = [
  "Complete audit of your email flows & campaigns",
  "Revenue opportunity breakdown & growth plan",
  "Deliverability health check to improve inbox rate",
  "Segmentation strategy tailored to your list",
  "List growth and lead capture recommendations",
  "Top performing competitor breakdown",
  "Optimization roadmap built for your brand"
];

const Booking = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const [leftHeight, setLeftHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (leftRef.current) {
        setLeftHeight(leftRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navigation theme="light" />

      <section className="flex-1 max-w-7xl mx-auto px-6 lg:px-12 pt-14 md:pt-32 pb-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 md:mb-8 mt-7">
            Get Your <span className="text-green-600">Free Email Audit</span>
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto mb-2 md:mb-6">
            Let’s look at what’s working, what’s missing, and where you could be making more money with your emails all in one short call.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-[1fr_1.25fr] gap-8 md:gap-16 items-start">
          {/* Benefits */}
          <div ref={leftRef}>
            <h2 className="text-2xl font-semibold mb-4 mt-0 text-center md:text-left">
              Here’s what you’ll get
            </h2>
            <ul className="space-y-4">
              {auditBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 bg-gray-100 border border-gray-300 rounded-xl p-6 shadow-sm">
              <div className="text-sm text-gray-600 text-center md:text-left">
                <p>No forms or fluff, just a real audit call.</p>
                <p className="text-green-700 font-semibold mt-2">
                  Feel free to leave your credit card at home.
                </p>
              </div>
            </div>
          </div>

          {/* Calendly */}
          <div className="w-full">
            <div
              className="rounded-xl overflow-hidden border border-gray-300 shadow-md w-full"
              style={{ height: leftHeight ? `${leftHeight}px` : 'auto' }}
            >
              <iframe
                src="https://calendly.com/zuxriddinmutalibjonov/30min"
                className="w-full h-full"
                frameBorder="0"
                title="Book a Free Email Audit"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* CTA Message */}
          <div className="md:col-span-2 flex justify-center mt-4 md:mt-2">
            <p className="text-center text-green-600 font-semibold text-base max-w-xl">
              Let’s begin your email marketing journey and make the most of your profit from it.
            </p>
          </div>
        </div>
      </section>

      <div className="mb-4" />
      <Footer />
    </div>
  );
};

export default Booking;
