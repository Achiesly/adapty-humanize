import { cva } from "class-variance-authority";
import { Button } from "@/components/ui/button";

const container = cva("bg-gray-50 p-6 rounded-lg mr-5 shadow-md justify-center text-center");
const heading = cva("text-3xl font-bold text-gray-800 mb-7 mt-14 text-center");
const description = cva("text-lg text-gray-800 mb-7 font-regular text-center");
const buttonStyle = cva("bg-blue-600 text-white px-6 py-3 mb-6 rounded hover:bg-blue-700 start-center");

export function Texthumanizer() {
    return (
        <section className={container()}>
            <h2 className={heading()}>Detect AI Content & Humanize It</h2>
            <p className={description()}>
                Ensure that your text is indistinguishable from
                <br />
                
                <span> human writing while retaining its original meaning </span>
                <br />
                
                <span>with our AI Detector and Humanizator tool.</span>
                  
            </p>
            <Button className={buttonStyle()}>Try AI Text Humanizer</Button>
        </section>
    );
}



