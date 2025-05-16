"use client"
import { useState } from 'react';
import { Shield, Search, CheckCircle } from 'lucide-react';

export default function Part3() {
  const [percentage, setPercentage] = useState(95);
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-12 px-4 md:px-8 gap-8 mt-12">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <div className="bg-blue-600 text-white p-3 rounded-lg inline-flex items-center justify-center">
          <Shield size={30} />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800">
          Powerful AI Detection for Accurate Content Identification
        </h1>
        
        <p className="text-gray-700 text-9sm font-regular letter-spacing-4 leading-6 mr-20">
        Our AI checker accurately identifies content generated
        by leading models such as ChatGPT, Gemini, Jasper, Claude,
        and others. Continuously updated and trained on the latest
        technologies, it stays ahead by detecting new models like 
        GPT-4 as they emerge.
        </p>
        
        <p className="text-gray-700 text-9sm font-regular letter-spacing-4 leading-6 mr-20">
        Our advanced algorithms accurately detect even the most complex 
        AI-generated content, providing strong protection against deceptive
        or harmful material. With regular updates and training, our system
        stays current with the latest AI developments to keep your business
        secure.
        </p>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mt-4 cursor-pointer">
          Try Our AI Detector
        </button>
      </div>
      
      {/* Right Content - Illustration */}
      <div className="w-full md:w-1/2 relative">
        <div className="relative z-10">
          {/* Main detection window */}
          <div className="bg-white rounded-lg shadow-xl p-6 mb-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            {/* Content lines */}
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="h-2 bg-blue-100 rounded w-full">
                  <div className="h-2 bg-green-400 rounded" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-2 bg-blue-100 rounded w-full">
                  <div className="h-2 bg-red-400 rounded" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-2 bg-blue-100 rounded w-full">
                  <div className="h-2 bg-green-400 rounded" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-2 bg-blue-100 rounded w-full">
                  <div className="h-2 bg-red-400 rounded" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Accuracy meter */}
          <div className="absolute -right-4 top-1/3 transform -translate-y-1/2">
            <div className="relative w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
              <svg width="100%" height="100%" viewBox="0 0 120 120">
                <circle 
                  cx="60" 
                  cy="60" 
                  r="54" 
                  fill="none" 
                  stroke="#e2e8f0" 
                  strokeWidth="10" 
                />
                <circle 
                  cx="60" 
                  cy="60" 
                  r="54" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="10"
                  strokeDasharray="339.3"
                  strokeDashoffset={339.3 * (1 - percentage/100)}
                  transform="rotate(-90 60 60)"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute text-2xl font-bold text-gray-800">{percentage}%</div>
            </div>
          </div>
          
          {/* Magnifier */}
          <div className="absolute -right-4 -bottom-4 transform translate-x-1/4 translate-y-1/4">
            <div className="relative">
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-4 border-blue-500 relative">
                  <div className="absolute w-6 h-1 bg-blue-500 -right-5 top-8 transform rotate-45 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Secondary window */}
          <div className="absolute right-0 bottom-0 transform translate-y-1/4">
            <div className="bg-white rounded-lg shadow-xl p-4 w-64">
              <div className="space-y-2">
                <div className="h-2 bg-blue-100 rounded w-full">
                  <div className="h-2 bg-green-400 rounded" style={{ width: '80%' }}></div>
                </div>
                <div className="h-2 bg-blue-100 rounded w-full">
                  <div className="h-2 bg-red-400 rounded" style={{ width: '30%' }}></div>
                </div>
                <div className="h-2 bg-blue-100 rounded w-full">
                  <div className="h-2 bg-green-400 rounded" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 'Aa' badge */}
          <div className="absolute left-8 bottom-4">
            <div className="w-12 h-12 bg-red-400 text-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold">Aa</span>
            </div>
          </div>
          
          {/* Heart icon */}
          <div className="absolute right-8 top-4">
            <div className="w-8 h-8 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}