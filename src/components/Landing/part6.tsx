import React from 'react';
import { cva } from 'class-variance-authority';

const stepsContainer = cva([
    'w-full',
    'max-w-7xl',
    'mx-auto',
    'px-4',
    'py-24', // Increased padding
    'text-center'
    
]);

const StepsSection: React.FC = () => {
    const steps = [
        {
            number: '',
            title: 'STEP 1',
            description: 'Paste your text into our AI to human text converter.'
        },
        {
            number: '',
            title: 'STEP 2',
            description: 'Click Humanize to start to humanize AI text.'
        },
        {
            number: '3',
            title: 'STEP 3',
            description: 'Wait a few seconds and get the humanized output.'
        }
    ];

    return (
        <section className={stepsContainer()}>
            <div className="max-w-3xl mx-auto mb-16 mt-[-2rem]">
                <h1 className="text-4xl font-bold mb-6 text-gray-900">
                    How to Humanize AI With Adopty
                </h1>
                <p className="text-gray-700 text-lg">
                    Readyhese to make AI content sound human and pass AI detection? With Adopty, just follow these simple steps to transform your text instantly
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connection lines between steps */}
            

                
                {steps.map((step, index) => (
                    <div 
                        key={index} 
                        className="relative bg-black rounded-2xl p-8 backdrop-blur-sm border border-gray-700 hover:border-[#4ade80] transition-all duration-300 hover:transform hover:-translate-y-2"
                    >
                        <div className="">
                            {step.number}
                        </div>
                        <h2 className="text-2xl font-bold mt-4 mb-4 text-gray-100">{step.title}</h2>
                        <p className="text-gray-200 leading-relaxed">{step.description}</p>
                    </div>
                ))}
                
            </div>
            

            <button className="mt-16 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-color cursor-pointer">
                Upgrade Now →
            </button>
        </section>
    );
};

export default StepsSection;

