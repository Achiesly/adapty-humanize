import { cva } from "class-variance-authority";
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="flex flex-col items-start justify-center mt-15 p-10 space-y-6">
            <h1 className="text-5xl font-bold leading-tighter sm:text-5xl md:text-5xl lg:text-6xl/none mt-5 text-gray-800">
              Your Intelligent AI Partner
            </h1>
            <p className="text-lg leading-relaxed mb-5 text-gray-700">
                Empower your creativity with cutting-edge AI tools. Build, design, and innovate effortlessly with our intuitive platform.
            </p>
            <div>
                <Button 
                    variant="default" 
                    className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-transform cursor-pointer"
                >
                    Try For Free
                </Button>
            </div>
        </section>
    );
}