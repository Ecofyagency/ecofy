import React, { useState, useEffect } from "react";
import exampleBefore from "../images/before.jpeg";
import exampleAfter from "../images/after.jpeg";
import case2larger from "../images/largerimage2.jpeg";
import case3 from "../images/before3.jpg";
import case3after from "../images/after3.jpg";
import case4 from "../images/fourthlarger.png";

const caseStudies = [
  {
    id: 1,
    tag: "Example #1",
    highlight: "+£7,146 from One Campaign",
    summary: "18x engagement jump, now making £2.9k to £6.8k per campaign from email alone.",
    bullets: [
      "Strategic segmentation and content",
      "One campaign: £7,146",
      "Consistent performance now",
    ],
    before: null,
    after: case2larger,
  },
  {
    id: 2,
    tag: "Example #2",
    highlight: "+£270,000 in 2.5 Months",
    summary: "42% of sales from email, £270,065 revenue, 40000% email growth — all without SMS.",
    bullets: [
      "Rebuilt all core flows in Klaviyo",
      "Segmented lists for engagement",
      "£270,065 from email alone",
    ],
    before: exampleBefore,
    after: exampleAfter,
  },
  {
    id: 3,
    tag: "Example #3",
    highlight: "+£311k Attributed Revenue",
    summary: "Apparel brand sees 47252% increase in email revenue. Total revenue £714k.",
    bullets: [
      "Flows generated 94% of email sales",
      "43.5% of all revenue from email",
      "£714k total rev, £311k from email",
    ],
    before: case3,
    after: case3after,
  },
  {
    id: 4,
    tag: "Example #4",
    highlight: "+£89,000 in 5 Weeks",
    summary: "Brand had no email in March and made £89k by April 5 with email only growth.",
    bullets: [
      "Started with zero email setup",
      "Achieved £89,000 in under 5 weeks",
      "Focused only on email, no SMS",
    ],
    before: null,
    after: case4,
  },
];

const CaseStudies = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % caseStudies.length);
    }, 4000); // 4-second auto scroll
    return () => clearInterval(timer);
  }, []);

  const current = caseStudies[index];

  const imageWrapperClass =
    current.id === 4
      ? "flex flex-col gap-6 w-full md:w-[50%] md:mt-32"
      : "flex flex-col gap-6 w-full md:w-[50%] md:mt-10";

  return (
    <section id="case-studies" className="w-full px-4 py-10 md:py-20 bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 md:px-10 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Case Studies
        </h2>
        <p className="text-green-700 text-base md:text-lg">
          Real results we've delivered for brands
        </p>
      </div>

      {/* Case Study Block */}
      <div className="flex justify-center">
        <div className="max-w-6xl w-full bg-[#F9F9F9] rounded-2xl shadow-sm p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-10 transition-all duration-500">
          {/* Text Column */}
          <div className="flex-1 w-full">
            <div className="inline-block px-4 py-1 border border-black rounded-full text-sm font-medium mb-4">
              {current.tag}
            </div>

            <div className="bg-[#69F065] px-4 py-3 rounded-md text-xl md:text-2xl font-bold italic text-black mb-6 max-w-max">
              {current.highlight}
            </div>

            <p className="text-gray-700 text-base md:text-lg mb-6">{current.summary}</p>

            <h4 className="font-bold text-lg md:text-xl mb-3">After working with us:</h4>

            <ul className="space-y-3">
              {current.bullets.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-800">
                  <span className="text-yellow-500 text-xl">⚡</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Column */}
          <div className={imageWrapperClass}>
            {current.before ? (
              <>
                <div className="border rounded-xl overflow-hidden shadow-sm">
                  <img
                    src={current.before}
                    alt="Before"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="border rounded-xl overflow-hidden shadow-sm">
                  <img
                    src={current.after}
                    alt="After"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </>
            ) : (
              <div className="border rounded-xl overflow-hidden shadow-sm max-w-[500px] w-full">
                <img
                  src={current.after}
                  alt="Case Visual"
                  className="w-full h-auto object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
