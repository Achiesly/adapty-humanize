"use client";
import { Pricing } from '@/components/pricing1';
import { useRouter } from 'next/navigation';

export default function PricingPage() {  // Remove async
  const router = useRouter();
  
  const handleNavigation = async (path: string) => {
    // Put async logic here instead
    await router.push(path);
  };
  
  return (
    <div className="flex flex-col size-full items-center justify-center">
      <button onClick={() => handleNavigation("/Pricing")}>Pricing</button>
      <Pricing
        //className="mb-0 mt-32"
        //mode="standalone"
        //subscription={subscription || undefined}
      />
    </div>
  );
}
