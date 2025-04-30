import { cva } from "class-variance-authority";
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="flex flex-col items-start justify-center mt-15 p-10 space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight mb-1 text-black">
                Welcome to <span className="text-purple-600">Adapty Humanize</span>
            </h1>
            <p className="text-lg leading-relaxed mb-4">
                Empower your creativity with cutting-edge AI tools. Build, design, and innovate effortlessly with our intuitive platform.
            </p>
            <div>
                <Button 
                    variant="default" 
                    className="bg-black text-white px-6 py-3 hover:bg-black-700 hover:scale-105 transition-transform"
                >
                    Try For Free
                </Button>
            </div>
        </section>
    );
}