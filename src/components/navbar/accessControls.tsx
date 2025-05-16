import { cva } from "class-variance-authority"
import { Button } from "@/components/ui/button"
const buttonsContainer = cva ("flex gap-x-3 items-center")


export function AccessControls(){

    return <div className={buttonsContainer()}>
        <Button 
        variant="outline"
        className="bg-white text-black px-5 py-3 hover:bg-gray-50 transition-transform cursor-pointer"
        >Login
        </Button>
        <Button 
                    variant="default" 
                    className="bg-blue-600 text-white px-5 py-3 hover:bg-blue-700 cursor-pointer transision-transform"
                >
                    Try For Free
                </Button>

    </div>

}