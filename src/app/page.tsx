

import FAQ3 from "@/components/faq/faq3";
import Part1B from "@/components/Landing/part1b";
import Part2 from "@/components/Landing/part2";
import Part3 from "@/components/Landing/part3";
import Part6 from "@/components/Landing/part6";
import Part7 from "@/components/Landing/part7";
import Testimonials from "@/components/Landing/testimonies";
import Mainbox from "@/components/maindashboard/mainbox";
import { Navbar } from "@/components/navbar";



export default function Home() {
    return (
        <main> 
            <Mainbox />
            <Part1B />
            <Part2 />
            <Part3 />
            <Part6 />
            <Part7 />
            <Testimonials />
            <FAQ3 />
            


        </main>
    );
}