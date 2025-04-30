import { Texthumanizer } from "./texthumanizer";
import { cva } from "class-variance-authority";
import { Texthumanizerbox } from "./texthumanizerbox";

export function Detect() {
    return (
        <div className="flex flex-row items-start mt-10 justify-between p-10 space-x-6">
            <div className="flex-1">
                <Texthumanizer />
            </div>
            <div className="flex-1">
                <Texthumanizerbox text={""} status={"aiGenerated"} />
            </div>
        </div>
    );
}