import React from "react";
import { cva } from "class-variance-authority";
import Image from "next/image";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonialVariants = cva(
  "p-6 bg-white rounded-xl shadow-lg transition-all hover:shadow-xl",
  {
    variants: {
      size: {
        default: "max-w-sm",
        large: "max-w-md",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const testimonials: TestimonialProps[] = [
  {
    name: "Lisa C.",
    role: "MBA Student",
    content: "AI Humanizer transforms my writing into clear, natural language with a human touch. Highly recommend!",
    image: "/testimonials/lisa.jpg",
  },
  {
    name: "John D.",
    role: "Engineering Student",
    content: "As a computer science student, the Paraphraser tool is invaluable it helps me express complex technical ideas more clearly and concisely in my research papers.",
    image: "/testimonials/john.jpg",
  },
  {
    name: "Emily R.",
    role: "Student",
    content: "As a law student, originality is crucial. The Plagiarism Detector gives me peace of mind by ensuring my work is authentic, so I can focus on deep legal research. A must-have for anyone serious about academic integrity in law.",
    image: "/testimonials/emily.jpg",
  },
  {
    name: "Wang Y.",
    role: "AI Researcher",
    content: "As a native Spanish speaker, I find this tool incredibly helpful for rewriting my text into proper, fluent English. It really improves clarity and flow.",
    image: "/testimonials/wang.jpg",
  },
  {
    name: "Michael T.",
    role: "Philosophy Student",
    content: "AI Paraphraser is a game-changer for my philosophy papers, it simplifies complex ideas and saves me time. Highly recommend!",
    image: "/testimonials/michael.jpg",
  },
  {
    name: "Sophia L.",
    role: "Geology Student",
    content: "The AI Plagiarism Detector has been a dependable tool for keeping my lab reports and essays completely plagiarism-free.",
    image: "/testimonials/sophia.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={testimonialVariants({ size: "default" })}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden brightness-90">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile picture`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 48px) 100vw"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-base">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

