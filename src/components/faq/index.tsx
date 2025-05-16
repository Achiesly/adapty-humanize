import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import React from "react";
import { cva } from "class-variance-authority";

const faqItems = [
    {
        question: "Will the humanized content lose its original meaning?",
        answer: "Not at all! Our Humanizer is designed to retain the intent and message of your content while making it sound more natural and authentically human—free from robotic phrasing or awkward structure.",
    },
    {
        question: "Will the humanized content lose its original meaning?",
        answer:  "Not at all! Our Humanizer is designed to retain the intent and message of your content while making it sound more natural and authentically human—free from robotic phrasing or awkward structure.",
    },
    {
        question: "How does your platform work with AI detectors like Turnitin or GPTZero?",
        answer: "Our system uses advanced transformation models to restructure AI-generated text in ways that bypass detection by popular tools such as Originality AI, GPTZero, Winston AI, ZeroGPT, and Turnitin—without compromising clarity or readability.",
    },
    {
    question: "Can I adjust or refine the humanized output?",
    answer: "Yes! You can interact with specific sections of the text to view and apply alternate phrasings. This allows full control over tone, structure, and voice to match your preferences or brand style.",
    },

    {
    question: "Will using the Humanizer affect my SEO performance?",
    answer: "No worries—our tool intelligently preserves important keywords and SEO-friendly structure while making your content sound natural. This means your content stays optimized for search engines without losing effectiveness.",
    },
    {
    question: "Is the plagiarism checker reliable and accurate?",
    answer: "Yes, our plagiarism checker scans against an extensive database of web and academic content to identify any potential duplication, ensuring your writing is original and citation-safe.",
    },
    {
    question: "Will I be able to detect AI content before humanizing it?",
    answer: "Absolutely. Our integrated AI Detector helps you identify which parts of your content may appear machine-written, so you can selectively refine those areas for a more human tone.",
    },
];

export const FAQ = () => {
    return (
        <div className="flex flex-col md:flex-row gap-8 bg-white">
            {/* Left Container */}
            <div className="md:w-1/3">
                <h2 className="text-4xl font-bold mr-10 text-gray-700 mx-22">Frequently Asked Questions</h2>
            </div>

            {/* Right Container */}
            <div className="md:w-2/3">
                <Accordion.Root type="single" collapsible className="space-y-4">
                    {faqItems.map((item, index) => (
                        <Accordion.Item
                            key={index}
                            value={`item-${index}`}
                            className="overflow-hidden w-full"
                        >
                            <Accordion.Header>
                                <Accordion.Trigger className="flex items-center w-full p-4 cursor-pointer text-4lg font-bold text-gray-800">
                                    <ChevronDown className="h-5 w-5 transition-transform duration-200 mr-2" />
                                    <span className="text-lg font-medium">{item.question}</span>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="p-4 text-gray-700 text-sm">
                                {item.answer}
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </div>
        </div>
    );
};

export default FAQ;
