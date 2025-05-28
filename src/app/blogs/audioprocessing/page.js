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
        <h1 className="font-semibold">Enhancing Audio Processing: Development and Evaluation of a Transcriber Tool </h1>
        <div className="flex gap-5">
          <p className="">Speaker:  Carlos Castro</p>
          <p className="">Date: 05/21/2025</p>
        </div>
      </div>

      <p className="text-justify max-w-[600px]">
      Sir Carlos Castro, or also more known as Sir Lucas mainly discussed about his experience in conducting the output they have during their Technical Writing course. It is aligned with the fourth year college students capstone project SultiWag at that time and they have contributed to the project by increasing its accuracy by 80%+ which is actually significantly higher than of SultiWags 70%+ accuracy.
      </p>

      <Image
        src="/images/seminar2.jpg"
        width={500}
        height={300}
        className="rounded-lg"
        alt="Image"
      />

      <p className="text-justify max-w-[600px] mt-5">
      I do not want to delve deeper on the technicalities of their research paper to be exact. I will summarize the entire thing. It os 
      </p>

      <p className="text-justify max-w-[600px] mt-5">
        Moving forward, after being able to grab the opportunity and land his job, the setup of their work is WFH (work from home). Every day, they wake up in the morning and take a couple of minutes to do an online meeting, share updates, distribute tasks, etc. Then the entire day is his to consume.
        He shares tools they use I don&apos;t want to particularly delve deeper into these tools. However, the point is that their work is structured to document everything on a daily basis. No one is left behind; everyone always has something to do and something to offer. Everything they do undergoes multiple verifications/validations before actually being deployed.
      </p>

      <p className="text-justify max-w-[600px] mt-5">
        Sharing my insight into this seminar, it was very inspiring of course. Probably the most inspiring part there is the part where he shares his monthly salary 🤣. Though it really was good to know as early as possible, to be knowledgeable about the work environment in the tech industry. His journey toward excellence during his student era is also inspiring. Though, I admit that I am nowhere near that type of life. Perhaps I merely adopted a lowkey, peaceful life and am not destined to be greater. Life sucks, huh.
      </p>

      <DockNav />
    </div>
  );
}
