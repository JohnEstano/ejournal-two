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
        <h1 className="font-semibold">Research101: the ins and outs of software engineering research project. </h1>
        <div className="flex gap-5">
          <p className="">Speaker:  Shenna Cloribel</p>
          <p className="">Date: 05/26/2025</p>
        </div>
      </div>

      <p className="text-justify max-w-[600px]">
        Maam Shen delved deeper into the fundamentals of Systems Analysis and Design. A key point highlighted was the importance of accurately completing the routing form, which is essential for the approval of project proposals. This form acts as a formal representation of the researchs scope, schedule, and methodology. Mrs. Shenna stressed that it should be completed thoughtfully and precisely, as it demonstrates the research teams level of preparation and organization.
      </p>

      <Image
        src="/images/seminar5_2.jpg"
        width={500}
        height={300}
        className="rounded-lg"
        alt="Image"
      />

      <p className="text-justify max-w-[600px] mt-5">
      Maam Shen fleshed out the processes of conducting a proper software engineering research project. Which is a continuation for the course Systems Analysis and Design. She reintroduced the processes of SDLC etc. She also talked about properly doing user acceptance testing. From doing the consent forms, explaining to the users etc. It was more technical stuff.
      </p>


      <p className="text-justify max-w-[600px] mt-5">
        The insight I would give to her presentation is that it really prepares us to what is about to come. Software engineering course might either break or make us. 
      </p>


      <DockNav />
    </div>
  );
}
