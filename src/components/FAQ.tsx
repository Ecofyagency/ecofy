import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What's included in the free audit?",
      answer:
        "Our free audit reviews your current email marketing strategy, benchmarks you against competitors, and outlines actionable steps to increase revenue and deliverability."
    },
    {
      question: "How soon can I expect results?",
      answer:
        "Most brands see improvements in open rates, click-throughs, and sales within the first 30 days of working with us."
    },
    {
      question: "Do you work with my email platform?",
      answer:
        "We support all major platforms including Klaviyo, Mailchimp, ConvertKit, and others. We also help with migrations if needed."
    },
    {
      question: "Can you help grow my email list?",
      answer:
        "Yes — we use lead magnets, pop-ups, referral systems, and more to grow your list with engaged subscribers."
    },
    {
      question: "What makes Ecofy different?",
      answer:
        "We’re laser-focused on ROI. No fluff. Just real strategy, performance tracking, and consistent revenue growth."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Frequently Asked <span className="text-green-500">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl transition hover:border-green-500"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <h3 className="text-md sm:text-lg font-semibold text-black">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 mb-4">
          <p className="text-gray-600 mb-3">Still have questions?</p>
          <a
            href="/book-a-call"
            className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Book a Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
