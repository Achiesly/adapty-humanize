import { Shield, Zap, Search, Lock } from "lucide-react";

export default function FeatureCards() {
  return (
    <div className="px-30 py-30 bg-gray-50 mb-[-2rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[-2rem]">
        {/* First Card - Detection */}
        <div className="bg-blue-200 rounded-2xl p-10 flex flex-col md:flex-row items-center shadow-lg">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Instant Detection, No Sign-Up Needed
            </h2>
            <p className="text-gray-700 text-9sm font-regular">
              Start detecting AI-generated content instantly no account setup required.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:ml-6 flex-shrink-0">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -left-4 top-0 bg-blue-400 opacity-20 rounded-lg w-32 h-6"></div>
                  <div className="absolute -left-2 top-6 bg-blue-400 opacity-30 rounded-lg w-28 h-6"></div>
                  <div className="absolute left-0 top-12 bg-blue-400 opacity-40 rounded-lg w-24 h-6"></div>
                  
                  <div className="bg-white/50 backdrop-blur-sm rounded-full p-4 border-2 border-blue-200 shadow-lg">
                    <div className="bg-blue-500 rounded-full p-3">
                      <Search className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-2 -right-4 bg-blue-100 rounded-full p-2">
                    <div className="bg-blue-500 rounded-full p-1">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0">
                <div className="relative">
                  <svg width="80" height="80" viewBox="0 0 100 100">
                    <g transform="translate(50, 50)">
                      <circle cx="0" cy="-15" r="5" fill="#3B82F6" />
                      <rect x="-15" y="5" width="30" height="25" rx="2" fill="#3B82F6" />
                      <line x1="-12" y1="15" x2="12" y2="15" stroke="#fff" strokeWidth="2" />
                      <line x1="-12" y1="20" x2="0" y2="20" stroke="#fff" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Card - Privacy */}
        <div className="bg-pink-100 rounded-2xl p-10 flex flex-col md:flex-row items-center shadow-lg">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Guaranteed Privacy
            </h2>
            <p className="text-gray-700 text-9sm font-regular">
              Your privacy is our priority. Your submissions remain confidential and are never shared.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:ml-6 flex-shrink-0">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/50 backdrop-blur-sm rounded-full p-4 border-2 border-indigo-200 shadow-lg">
                  <div className="bg-indigo-500 rounded-full p-3">
                    <Lock className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-2">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="25" fill="#DBEAFE" />
                  <path d="M20,30 C20,20 25,15 30,15 C35,15 40,20 40,30" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="30" cy="35" r="8" fill="#6366F1" />
                  <path d="M30,35 L30,45" stroke="#DBEAFE" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              
              <div className="absolute -bottom-2 left-0">
                <svg width="65" height="65" viewBox="0 0 65 65">
                  <circle cx="32.5" cy="32.5" r="22.5" fill="#E0E7FF" />
                  <path d="M32.5,22.5 L32.5,42.5 M22.5,32.5 L42.5,32.5" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}