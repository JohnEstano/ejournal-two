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
        src="/images/seminar2.jpg"
        width={500}
        height={300}
        className="rounded-lg"
        alt="Image"
      />

      <p className="text-justify max-w-[600px] mt-5">
        I do not want to delve deeper on the technicalities of their research paper to be exact. I will summarize the entire thing.
        Their paper was entitled Ugop Bridge: Improving Indigenous Language Classification. They are like building upon the tools, methods, and even the datasets done by the UGOP Bridge team with the intention to improve the system and add on to the steps. These steps include re-sampling the audio, fixing the duration of the recordings, and augmenting the audio data in the datasets.
      </p>


      <p className="text-justify max-w-[600px] mt-5">
      His speech was inspiring in itself because he shared that this paper gave them the opportunity to travel to Manila and share their paper their at De lasalle University.
      </p>


      <DockNav />
    </div>
  );
}
