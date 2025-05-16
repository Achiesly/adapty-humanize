"use client"
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Part4() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-12 px-4 md:px-8 gap-8 mt-[-2rem]">
      <div>
        {/* AI Detector Feature Section */}
        <section className="py-6 px-4">
          <div>
            <div className="flex flex-col md:flex-row">
              {/* Left side illustration */}
              <div className="w-full md:w-1/2 p-8 relative mt-13 mr-6">
                <div className="relative h-96 w-full">
                  {/* Main blue panel with plus icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-xl h-64 w-full max-w-md grid place-items-center z-10 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105">
                    <div className="text-white text-5xl font-bold">+</div>
                  </div>
                  
                  {/* Document images with animations */}
                  <div className={`absolute top-12 left-12 bg-white rounded-md p-3 shadow-lg w-40 h-52 rotate-[-5deg] z-20 transition-all duration-700 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'}`}>
                    <div className="h-2 w-12 bg-red-300 mb-2 rounded"></div>
                    <div className="h-2 w-32 bg-gray-200 mb-2 rounded"></div>
                    <div className="h-2 w-28 bg-green-400 mb-4 rounded"></div>
                    <div className="h-2 w-20 bg-gray-200 mb-2 rounded"></div>
                    <div className="h-2 w-32 bg-green-400 mb-2 rounded"></div>
                    <div className="h-2 w-28 bg-gray-200 mb-2 rounded"></div>
                    <div className="h-2 w-24 bg-red-300 mb-2 rounded"></div>
                  </div>
                  
                  <div className={`absolute top-4 left-28 bg-white rounded-md p-3 shadow-lg w-44 h-56 z-30 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'}`}>
                    <div className="h-3 w-8 text-gray-300 font-light mb-3">TX</div>
                    <div className="h-2 w-36 bg-gray-200 mb-2 rounded"></div>
                    <div className="h-2 w-32 bg-green-400 mb-4 rounded"></div>
                    <div className="h-2 w-20 bg-gray-200 mb-2 rounded"></div>
                    <div className="h-2 w-36 bg-red-300 mb-2 rounded"></div>
                    <div className="h-2 w-28 bg-green-400 mb-2 rounded"></div>
                    <div className="h-2 w-32 bg-gray-200 mb-2 rounded"></div>
                  </div>
                  
                  {/* Email icon */}
                  <div className={`absolute top-0 right-20 bg-white rounded-md p-3 shadow-lg w-20 h-16 z-20 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'}`}>
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="w-12 h-8 border-2 border-gray-200 rounded-md flex items-center justify-center">
                        <div className="border-t-2 border-gray-200 w-8"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* User icon */}
                  <div className={`absolute top-48 right-36 bg-white rounded-full p-3 shadow-lg w-16 h-16 z-20 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'}`}>
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Document icon */}
                  <div className={`absolute bottom-16 right-16 bg-white rounded-md p-1 shadow-lg w-40 h-16 z-20 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'}`}>
                    <div className="h-2 w-32 bg-gray-200 mb-2 rounded mt-2"></div>
                    <div className="h-2 w-24 bg-gray-200 mb-2 rounded"></div>
                    <div className="h-2 w-28 bg-gray-200 rounded"></div>
                  </div>
                  
                  {/* Attachment icon */}
                  <div className={`absolute bottom-24 right-8 bg-teal-400 rounded-full p-3 shadow-lg w-14 h-14 z-30 transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white rounded-md transform rotate-45"></div>
                    </div>
                  </div>
                  
                  {/* Folder icon */}
                  <div className={`absolute bottom-0 left-8 bg-orange-400 rounded-full p-3 shadow-lg w-16 h-16 z-20 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="w-8 h-6 bg-white rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center mr-8 ">
                <div className={`space-y-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                  {/* Logo/icon */}
                  <div className="bg-[#0A1029] p-3 rounded-lg w-16 h-16 flex items-center justify-center mx-auto md:mx-0 shadow-md">
                    <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 border-t-2 border-l-2 border-white transform rotate-45"></div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-4xl font-bold text-gray-800 leading-tight">In-Depth, Detailed Analysis</h2>
                  
                  {/* Description */}
                  <div className="">
                    <p className="text-gray-700 text-9sm font-regular letter-spacing-4 leading-6">
                    AI Detector is a powerful content analysis tool that delivers
                    detailed insights into your document. Using advanced algorithms,
                     it examines each paragraph and sentence to determine the percentage
                    of AI-generated content, offering a clear and accurate breakdown
                    throughout the text.

                    </p>
                    <br />
                    
                    <p className="text-gray-700 text-9sm font-regular letter-spacing-4 leading-6">
                    The AI checker visually highlights AI-generated content using different
                     colors, making it easy to spot at a glance. It also generates detailed
                      reports, showing the percentage of AI-generated text in each sentence
                      and paragraph for thorough analysis.
                    </p>

                  </div>
                  
                  {/* Action button */}
                  <div className="pt-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg -mt-16 cursor-pointer">
                      Try For Free
                    </button>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-8 mt-[-2rem]">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">99.8%</div>
                      <div className="text-sm text-gray-700">Accuracy</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">30K+</div>
                      <div className="text-gray-700 text-sm">Daily Scans</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">5 Sec</div>
                      <div className="text-sm text-gray-700">Analysis Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

