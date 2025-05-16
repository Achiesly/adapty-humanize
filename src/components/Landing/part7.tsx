import React from "react";
import { cva } from "class-variance-authority";

const containerStyles = cva([
    "relative",
    "min-h-[500px]",
    "w-full",
    "bg-gradient-to-b",
    "from-blue-900",
    "to-blue-950",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "px-4",
    "py-16",
    "overflow-hidden",
]);

const Part7: React.FC = () => {
    return (
        <section className={containerStyles()}>
            {/* Decorative circle */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                <div className="w-96 h-96 rounded-full bg-yellow-500 opacity-60" />
            </div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2">
                <div className="w-96 h-96 rounded-full bg-blue-400 opacity-20" />
            </div>

            {/* Content */}
            <div className="text-center z-10 max-w-3xl mx-auto">

                <h2 className="text-white text-5xl font-bold mb-6">
                    <span className="block mb-3">Humanize Your AI Text with Our</span>
                    <span className="block">AI Detection Remover</span>
                </h2>
                <p className="text-gray-100 text-lg mb-10">
                Boost your content quality and stay undetectable with Adopty’s advanced AI humanizing tools.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg cursor-pointer">
                    Upgrade Now → 
                </button>
            </div>
        </section>
    );
};

export default Part7;