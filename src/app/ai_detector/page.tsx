

"use client";
import Chatbox from '@/components/inputbox';

// import { auth } from '@/auth';


//import { prisma } from '@/lib/prisma';

export default function AIDetector() {
    // const { user } = await auth();
    // const subscription = await prisma.subscription.findFirst({

    return (
        
            <div className="flex flex-col size-full items-center justify-center">
        
                <Chatbox
                    //className="mb-0 mt-32"
                    //mode="standalone"
                    //subscription={subscription || undefined}
                />
                
                
            </div>
        
    );
}


