


// import { Footer } from '@/components/footer';
//import Chatbox from '@/components/inputbox';
import FAQ3 from '@/components/faq/faq3';
import Part1 from '@/components/Landing/part1';
import Part2 from '@/components/Landing/part2';
import Part3 from '@/components/Landing/part3';
import Part4 from '@/components/Landing/part4';
import Part7 from '@/components/Landing/part7';
import Testimonials from '@/components/Landing/testimonies';
import Detectorbox from '@/components/maindashboard/detectorbox';



export default function AiDetectorPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col size-full ">
      <Detectorbox />
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Testimonials />
      <Part7 />
      <FAQ3 />
      
      {/*children*/}

      {/* <Footer /> */}
      

    </main>
  );
}