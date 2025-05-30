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
        <h1 className="font-semibold">Bridging Academia and Startup Innovation</h1>
        <div className="flex gap-5">
          <p className="">Speaker:  Ceasar Ian Benablo</p>
          <p className="">Date: 05/27/2025</p>
        </div>
      </div>

      <p className="text-justify max-w-[600px]">
        The Dean himself provided the remarkable talk.
      </p>

      <Image
        src="/images/seminar6.jpg"
        width={500}
        height={300}
        className="rounded-lg"
        alt="Image"
      />

      <p className="text-justify max-w-[600px] mt-5">
        Sir Ian P. Benablo was an extraordinary speaker. His talk mainly highlights the importance of engaging a research capstone, thesis, or projects with a different mindset and approach. He explicitly highlights the importance of having the mindset of an innovator. That you should restructure your thinking with in regards to doing research. That you are not doing it because it is an academic requirement but because you have something to offer to the community. Something that is actually significant. Something that actually works and that something that people actually use.
      </p>


      <p className="text-justify max-w-[600px] mt-5">
        It is an overly contextualized summary of his presentation but that is where I think the main focal point of his presentation. He also introduced the Marian TBI but I do not want to talk about that in detail. His speech is inspiring, to create something that will live even after you graduate. That is what I aim to create in the near future.
      </p>


      <DockNav />
    </div>
  );
}
