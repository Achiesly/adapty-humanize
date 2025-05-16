import React from 'react';

const TopPart: React.FC = () => {
  return (
    <section className="relative bg-[rgb(0,31,101)] text-white py-40 px-4">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6">
          Ensure Originality, Earn Trust
        </h1>
        <p className="text-xl text-gray-300">
          Choose a plan designed to preserve academic integrity, protect your reputation, and deliver top-quality content every time.

        </p>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-800/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
      
      {/* Optional Dot Pattern Overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '20px 20px'
      }}></div>
    </section>
  );
};

export default TopPart;