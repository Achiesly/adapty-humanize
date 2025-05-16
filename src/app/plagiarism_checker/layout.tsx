// import { Footer } from '@/components/footer';
// Update the import path below if the file is located elsewhere

import FAQ from '@/components/faq';
import FAQ3 from '@/components/faq/faq3';
import Part1 from '@/components/Landing/part1a';
import Part2 from '@/components/Landing/part2';
import Part7 from '@/components/Landing/part7';
import Testimonials from '@/components/Landing/testimonies';
import Plagbox from '@/components/maindashboard/plagbox';
import { Plagiarism } from '@/components/plagiarism/plagiarism';








export default function SubscribeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col size-full bg-white">
      
      
      <Plagbox />
      <Part1 />
      <Part2 />
      <Plagiarism />
      <Testimonials />
      <Part7 />
      <FAQ3 />
      
      
      {/*children*/}


      {/* <Footer /> */}
      

    </main>
  );
}