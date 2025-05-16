"use client";
import { useState, useEffect } from 'react';
import { Shield, Layers, Code, Zap } from 'lucide-react';

export default function Part1() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50 -mt-20">
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Animated Header Section */}
        <div className="text-center mb-16 mt-12">
          <h2 className={`text-5xl md:text-5xl font-bold mb-6 text-gray-900 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="bg-clip-text mt-8">
              Your tool for confident
            </span>
            <br />
            <span className="mt-2 inline-block">AI detection</span>
          </h2>
          
          <p className={`text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Discover accurate AI content detection,
            <span className="relative inline-block px-1">
              <span className="absolute inset-0 bg-blue-100 rounded-md transform -rotate-1"></span>
              <span className="relative text-blue-800 font-medium">trusted by experts</span>
            </span> 
            and designed for ease.
          </p>
        </div>

        {/* Feature Cards with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Feature 1 */}
           
            
            <div className="relative flex flex-col h-full bg-white rounded-lg shadow-xl p-8 transition duration-300 group-hover:translate-y-[-5px]">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mb-6 p-3 shadow-md">
                <Layers className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">AI-Powered Detection Highlighting</h2>
              <p className="text-gray-700 grow font-regular text-9sm">
                Highlights each AI-written sentence, showing the percentage of AI used in the text with 
                <span className="inline-flex mx-1 items-center">
                  <span className="h-2 w-2 rounded-full bg-blue-400 mr-1"></span>
                  <span className="h-2 w-2 rounded-full bg-blue-500 mr-1"></span>
                  <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                </span>
                precision markers
              </p>

            </div>
          

          {/* Feature 2 */}
          
            
            <div className="relative flex flex-col h-full bg-white rounded-lg shadow-xl p-8 transition duration-300 group-hover:translate-y-[-5px]">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-red-400 to-pink-500 mb-6 p-3 shadow-md">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Unparalleled Detection Accuracy</h2>
              <p className="text-gray-700 grow font-regular text-9sm">
                Designed for exceptional precision, our AI checker detects content with
                <span className="font-semibold text-red-500"> 99.7% </span>
                accuracy, setting a new benchmark in the industry.
              </p>

            </div>
          

          {/* Feature 3 */}
          
            
            <div className="relative flex flex-col h-full bg-white rounded-lg shadow-xl p-8 transition duration-300 group-hover:translate-y-[-5px]">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-indigo-700 to-indigo-900 mb-6 p-3 shadow-md">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">User-Friendly Interface</h2>
              <p className="text-gray-700 grow font-regular text-9sm">
               Crafted for simplicity, our interface turns complex data into
                <span className="relative inline-block mx-1">
                  <span className="absolute bottom-0 left-0 right-0 h-2 bg-indigo-100"></span>
                  <span className="relative">actionable insights</span> 
                </span>
                in seconds
              </p>

            </div>
          
        </div>

      </main>
    </div>
  );
}