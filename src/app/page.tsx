import { Detect } from "@/components/detectAI/detect";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Plagiarism } from "@/components/plagiarism/plagiarism";
import { ChatInterface } from "@/components/uidesign/ChatInterface";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-start p-6 bg-gray-50 space-y-12">
            {/* First Section: Hero and ChatInterface */}
            <div className="flex flex-row items-center justify-between w-screen bg-gray-50 w-full mb-12">
                <Hero />
                <ChatInterface />
            </div>

            {/* Second Section: DetectAI */}
            <section className="w-screen mt-5 bg-blue-50">
                <div className="flex flex-col items-center justify-center">
                    <Detect />
                </div>
            </section>


        </main>
    );
}