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
        <h1 className="font-semibold">Research101: Conference Presentation and Funding Techniques </h1>
        <div className="flex gap-5">
          <p className="">Speaker:  Chris John David Manero</p>
          <p className="">Date: 05/22/2025</p>
        </div>
      </div>


      <Image
        src="/images/seminar3_2.jpg"
        width={500}
        height={300}
        className="rounded-lg"
        alt="Image"
      />
      <p className="text-justify max-w-[600px]">
        Discussed about holding a presentation, techniques in conducting a presentation, how to make your presentation accepted for funding, what are the skills needed to do a presentation research.
      </p>
      <Image
        src="/images/seminar3.jpg"
        width={500}
        height={300}
        className="rounded-lg"
        alt="Image"
      />


      <p className="text-justify max-w-[600px] mt-5">
      Sir Chris John David Manero is a professional indeed in doing presentations. He established his credibility by sharing his research works before, amassing I think like about 1 million in total from DOST.
      </p>



      <DockNav />
    </div>
  );
}
