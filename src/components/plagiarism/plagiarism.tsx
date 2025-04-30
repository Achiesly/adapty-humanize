
import { cva } from "class-variance-authority"; 
import { PlagiarismDetect } from "./plagiarismdetect";
import { PlagiarismChecker } from "./plagiarismchecker";


export function Plagiarism() {
    return (
                <div className="flex flex-row items-start mt-10 justify-between p-10 space-x-6">
                    <div className="flex-1">
                        <PlagiarismDetect />
                    </div>
                    <div className="flex-1">
                        <PlagiarismChecker />
                    </div>
                </div>

    );


}