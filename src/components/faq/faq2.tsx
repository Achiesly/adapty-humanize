"use client";
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border border-gray-200 rounded-lg mb-4">
    <button
      className="w-full px-6 py-4 text-left flex justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      <span className={`text-lg font-medium cursor-pointer ${isOpen ? 'text-blue-600' : 'text-gray-800'}`}>{question}</span>
      <span className="transform transition-transform duration-200">
        {isOpen ? '−' : '+'}
      </span>
    </button>
    {isOpen && (
      <div className="px-6 pb-4">
        <p className="text-gray-600 font-regular text-6sm cursor-default">{answer}</p>
      </div>
    )}
  </div>
);

const FAQ2: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqData = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a limited free trial so you can test all features before committing to a paid plan.",
  },
  {
    question: "What is included in each pricing plan?",
    answer:
      "Each plan offers access to our AI Humanizer, Plagiarism Checker, and AI Detector tools. Higher-tier plans include more usage credits, faster processing times, and priority support.",
  },
  {
    question: "Do I need to pay separately for each tool?",
    answer:
      "No. All our pricing plans are bundled, giving you access to all three tools under one subscription.",
  },
  {
    question: "What happens if I exceed my monthly usage limit?",
    answer:
      "If you reach your monthly quota, you can either wait until it resets or purchase additional credits as needed.",
  },
  {
    question: "Can I cancel or change my plan at any time?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time through your account dashboard.",
  },

  {
    question: "Is my payment information secure?",
    answer:
      "Yes. We use industry-standard encryption and trusted payment processors to keep your data safe.",
  },
];

  return (
    <section className="py-20 px-4 bg-gray-50 flex justify-center items-center">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-bold mb-2 text--3xl">FAQ</h2>
          <h3 className="text-4xl font-extrabold mb-4 text-gray-900">Frequently Asked Questions</h3>
          <p className="text-gray-600 font-regular text-9sm">
            Find answers to common questions about our AI detection and humanization services.
          </p>
        </div>


        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm w-full max-w-2xl">
              <FAQItem
          question={faq.question}
          answer={faq.answer}
          isOpen={index === openIndex}
          onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ2;