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
                <h1 className="font-semibold">Understanding Agentic AI</h1>
                <div className="flex gap-5">
                    <p className="">Speaker:  Ralph Vincent Regalado</p>
                    <p className="">Date: 06/13/2025</p>
                </div>
            </div>



            <Image
                src="/images/seminar13.jpg"
                width={500}
                height={300}
                className="rounded-lg"
                alt="Image"
            />




            <p className="text-justify max-w-[600px] mt-5">
                CEO and Founder of Senti AI, sir Ralph Regalado, shared his insights on Agentic AI, a concept that refers to AI systems capable of making autonomous decisions and taking actions in the real world. He discussed the potential benefits and challenges of such systems, emphasizing the importance of ethical considerations and responsible development.
            </p>


            <DockNav />
        </div>
    );
}
