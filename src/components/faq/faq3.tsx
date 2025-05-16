"use client";
import React, { useState } from 'react';
import { cva } from 'class-variance-authority';

interface FAQItemProps {
    question: string;
    answer: string;
}

const faqItemStyles = cva(
    "border-b border-gray-300 py-4",
    {
        variants: {
            isOpen: {
                true: "pb-6",
                false: "",
            },
        },
    }
);

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={faqItemStyles({ isOpen })}>
            <button
                className="flex w-full justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-medium text-gray-800">{question}</h3>
                <span className={`transform transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-600">
                        <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </span>
            </button>
            {isOpen && (
                <div className="mt-3 text-gray-700 font-regular text-6sm">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQ3: React.FC = () => {
    const faqData = [
        {
            question: "How does the AI Detector work?",
            answer: "The AI Detector uses advanced algorithms to analyze text patterns and identify characteristics typical of AI-generated content.",
        },
        {
            question: "Can I use the AI Detector for free?",
            answer: "Yes, we offer a free trial that allows you to test our AI detector with limited features.",
        },
        {
            question: "Is my data safe?",
            answer: "Absolutely! We prioritize user privacy and data security. All scans are encrypted and stored securely.",
        },

        {
            question: "How accurate is the AI Detector?",
            answer: "Our AI detector boasts a high accuracy rate, but no system is perfect. We recommend using it as a tool in conjunction with human review.",
        },
        {
            question: "How does the AI Detector work?",
            answer: "Our AI detector uses advanced algorithms and machine learning to analyze text patterns and identify AI-generated content.",
        },
        {  question: "What should I do if someone says my work is AI-written and it’s not?",
          answer: "We get it that’s frustrating. You can use our Humanizer to rewrite parts of it or contact us for tips on how to revise without losing your message.",
        },
        { question: "Is this tool just for students?",
          answer: "Not at all! It’s great for bloggers, professionals, teachers, researchers—basically anyone who writes and wants to make sure their work is original.",
        },
    ];

    return (
        <div className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto py-12">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h2>
            <div className="space-y-2">
                {faqData.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default FAQ3;


