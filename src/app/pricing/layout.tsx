
import FAQ2 from '@/components/faq/faq2';
import { Pricing } from '@/components/pricing1';
import TopPart from '@/components/pricing1/toppart';



export default function SubscribeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col size-full bg-gray-50">
      <TopPart />
      <Pricing />
      <FAQ2 />
      {/*children*/}

      {/* <Footer /> */}
    </main>
  );
}