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
        <h1 className="font-semibold">Exploring Web3: Blockchain, DeFI, and the future of the internet</h1>
        <div className="flex gap-5">
          <p className="">Speakers: Mr. Ferdie James Nervida, Mr Rod Albores, Mr. Ejay Bastes, Mr. Ken Berds Berry </p>
          <p className="">Date: 06/14/2025</p>
        </div>
      </div>


      <Image
        src="/images/seminar20.png"
        width={500}
        height={300}
        className="rounded-lg"
        alt="Image"
      />

      <p className="text-justify max-w-[600px] mt-5">
      The seminar was all about a comprehensive overview of Web3, focusing on blockchain technology, decentralized finance (DeFi), and the future of the internet. The speakers, Mr. Ferdie James Nervida, Mr. Rod Albores, Mr. Ejay Bastes, and Mr. Ken Berds Berry, shared their insights on how these technologies are transforming various industries and shaping the digital landscape.
      </p>




      <DockNav />
    </div>
  );
}
