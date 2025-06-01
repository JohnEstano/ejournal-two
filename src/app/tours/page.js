import Image from "next/image";
import { DockNav } from "@/components/dock-nav";
import { motion } from "motion/react";

export default function Blogs() {
    return (
        <div
            className="
        flex
        flex-col
        justify-start
        mt-30
        items-center
        min-h-screen
        p-8 pb-20
        gap-4
        sm:p-20
        font-[family-name:var(--font-geist-sans)]
      "
        >
            <div className="grid grid-cols-1 gap-1 mb-5">
                <h1 className="font-semibold">Mindanao Media Hub Davao</h1>
                <div className="flex gap-5">
                    <p className="">Date: 05/30/2025</p>
                </div>
            </div>

            <p className="text-justify max-w-[600px]">
                The construction of the Mindanao Media Hub began with the groundbreaking ceremony held on May 3, 2018. It was intended to host the Philippine government's media agencies and was initially projected to be finished by January 2019. - from wikipedia
            </p>

            <Image
                src="/images/tours/1.jpg"
                alt="photo"
                width={600}
                height={100}
                className="rounded-xl"
            />

              <p className="text-justify max-w-[600px]">
              1, 2, 3, ... 
            </p>
            <Image
                src="/images/tours/2.jpg"
                alt="photo"
                width={600}
                height={100}
                className="rounded-xl"
            />
            
            <Image
                src="/images/tours/3.jpg"
                alt="photo"
                width={600}
                height={100}
                className="rounded-xl"
            />
            <p className="text-justify max-w-[600px]">
                An extremely fun tour — it was such an honor to witness live newscasting with my own eyes.
            </p>

            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                <Image
                    src="/images/tours/6.jpg"
                    alt="photo"
                    width={400}
                    height={400}
                    className="rounded-xl w-full mb-4"
                />
                <Image
                    src="/images/tours/5.jpg"
                    alt="photo"
                    width={400}
                    height={300}
                    className="rounded-xl w-full mb-4"
                />
                <Image
                    src="/images/tours/4.jpg"
                    alt="photo"
                    width={400}
                    height={500}
                    className="rounded-xl w-full mb-4"
                />
                <Image
                    src="/images/tours/8.jpg"
                    alt="photo"
                    width={400}
                    height={250}
                    className="rounded-xl w-full mb-4"
                />
            </div>
            <p className="text-justify max-w-[600px]">
                An extremely fun tour — it was such an honor to witness live newscasting with my own eyes.
            </p>


            <DockNav />
        </div>
    );
}
