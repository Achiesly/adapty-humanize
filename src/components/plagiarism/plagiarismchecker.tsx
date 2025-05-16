import { cva } from "class-variance-authority";
import { Button } from "../ui/button";


const heading = cva("text-4xl font-bold text-gray-800 mb-1 leading-tight");
const description = cva("text-lg leading-relaxed font-regular mt-3 text-gray-700 mb-4 justify-center");
const buttonStyle = cva("bg-blue-600 text-white px-6 mt-2 py-3 hover:bg-blue-700 rounded transition-transform cursor-pointer");
export function PlagiarismChecker() {
    return (
        <section className="flex flex-col items-start justify-center p-10 space-y-6 -mb-40">
            <h2 className={heading()}>
                Remove Plagiarism
            </h2>

            <p className={description()}>
            Maintain academic integrity with our advanced
            
        
                <span> plagiarism detection system and refine your work using our  </span>
                <br />
                
                <span>precise paraphrasing tool.</span>              
            </p>

            <Button className={buttonStyle()}>Try Plagiarism Checker</Button>
        </section>
    );
}
