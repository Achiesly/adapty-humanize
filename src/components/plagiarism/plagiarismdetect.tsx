import { cva } from "class-variance-authority";
import { Button } from "../ui/button";

const container = cva("p-6 bg-white rounded-lg shadow-md max-w-md mx-auto mt-1 mb-10");
const heading = cva("text-2xl font-bold text-center text-gray-800 mb-1 cursor-pointer");
const heading1 = cva("text-xs text-center font-semibold text-blue-500 mt-1 mb-6 cursor-pointer");
const boxStyle = cva("p-4 bg-gray-100 rounded-md mb-4");
const description = cva("text-gray-700 text-sm cursor-pointer");
const buttonStyle = cva("bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer mb-1"); 
const heading2 = cva("text-blue-500 font-medium cursor-pointer text-sm text-right float-right mb-1");

export function PlagiarismDetect() {
    return (
        <section className={container()}>
            <h2 className={heading()}>Plagiarism Detect</h2>
            <h3 className={heading1()}>34 Associated sources found</h3>

            <div className={boxStyle()}>
                <p className={description()}>
                <span className="underline text-orange-700 bg-orange-200 text-black-400 px-1 rounded">Bioluminescence is the natural ability of living organisms
                to produce light through a chemical reaction within their bodies.
                Found in various species such as fireflies deep-sea fish, jellyfish,
                and certain fungi, this glowing effect serves a range of purposes&mdash;from
                attracting mates to deterring predators or luring prey. The light is 
                typically or green, as these wavelengths travel best through water. </span>
                Unlike sunlight or electricity, bioluminescent light is &quot;cold&quot;, meaning 
                it produces little to no heat. The process relies on the interaction between 
                a light-emitting molecule called luciferin and an enzyme known as luciferase. 
                </p>
            </div>

            <h3 className={heading2()}>Open Report</h3>
            <Button className={buttonStyle()}>Remove Plagiarism</Button>
        </section>
    );
}









