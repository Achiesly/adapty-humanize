"use client";
import React, { useState, useEffect } from 'react';
import { LightbulbIcon, ChartBarIcon, ShieldCheckIcon } from 'lucide-react';

export default function Part1B() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 font-sans mb-[-2rem]">


      <main className="container mx-auto px-4 py-16 text-center mt-[-3rem]">
        {/* Hero Section */}
        <div className={`max-w-4xl mx-auto mb-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-5xl md:text-5xl font-bold mb-6 text-gray-900">
            Make AI Content
            <br className="md:block" /> 
            Sound Human
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Effortlessly transform AI-generated text into natural,
            <span className="relative inline-block px-1">
              <span className="absolute inset-0 bg-blue-100 rounded-md transform -rotate-1"></span>
              <span className="relative text-blue-800 font-medium">human-like content</span>
            </span> 
            that smoothly passes detection tools.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-500 rounded-lg mb-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3 text-gray-800">Advanced AI Algorithms</h2>
            <p className="text-gray-700 grow font-regular text-9sm">
              Our state-of-the-art AI technology enhances AI-generated text, crafting content that is not only natural and engaging but also deeply resonates with your audience, creating an authentic human-like experience.

            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-red-400 rounded-lg mb-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3 text-gray-800">SEO-friendly content</h2>
            <p className="text-gray-700 grow font-regular text-9sm">
              AI Humanizer effortlessly blends keywords into your content, enhancing search engine optimization without compromising its natural flow, boosting your rankings.

            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-900 rounded-lg mb-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3 text-gray-800">Bypass AI Detection</h2>
            <p className="text-gray-700 grow font-regular text-9sm">
              Harness advanced technology to produce natural, human-like content that reads seamlessly, effortlessly bypassing AI detectors without raising any suspicion.

            </p>
          </div>
        </div>

        {/* CTA Section */}

      </main>
    </div>
  );
}