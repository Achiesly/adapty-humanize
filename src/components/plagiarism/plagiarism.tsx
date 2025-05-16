
import { cva } from "class-variance-authority"; 
import { PlagiarismDetect } from "./plagiarismdetect";
import { PlagiarismChecker } from "./plagiarismchecker";


const container = cva("bg-gray-50 rounded-lg shadow-md max-w-7xl mx-auto mt-1 mb-20");


export function Plagiarism() {
    return (
        <section className={container()}>
                <div className="flex flex-row items-start mt-10 justify-between p-10 space-x-6">
                    <div className="flex-1">
                        <PlagiarismDetect />
                    </div>
                    <div className="flex-1">
                        <PlagiarismChecker />
                    </div>
                </div>

        </section>


    );


}