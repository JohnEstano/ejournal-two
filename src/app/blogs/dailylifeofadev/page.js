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
        <h1 className="font-semibold">Navigating Software Development in the Industry</h1>
        <div className="flex gap-5">
          <p className="">Speaker: Ned Palacios</p>
          <p className="">Date: 05/25/2025</p>
        </div>

      </div>

      <p className="text-justify max-w-[600px]">Sir/Kuya Ned Palacios, the man, the myth, the legend himself. The creator of MyUICNeo and also famously known as one of the top 10 performers in TOPCIT during his time.

        He mainly shared about his journey towards the life that he have now. Currently, he is a software developer working on an Australian based company called Norg.ai. I don't really know specific details about this company or on what they do generally. However, what I do know is that they do require authentic skills or qualities that cannot be seen on just about anyone.
        This makes Sir Ned an outstanding software developer, to be able to even land on that particular job. Having this type of credibility, he shares his own "a day in a life of a software developer".

      </p>

      <Image
        src="/images/seminar1.jpeg"
        width={500}
        height={300}
        className="rounded-lg"
        alt="Image"
      ></Image>
      <p className="text-justify max-w-[600px] mt-5">
        He first started off with sharing how he got there. At first he was hesitant to go out and be known. He wanted to have a lowkey life, a peaceful life that is devoid of responsibilites and proactivity.
        However, it seems that destiny isn't really something you could escape from. Eventually, the life of being a proactive leader in the tech community still managed to reach him. He became the lead of UIC Developer Groups, also now known as Google Developer Groups on Campus UIC and also became a founder of DICE.
        This proactivity is what lead him to have the opportunity to be discovered by significant people and ultimately leading him to have his job now.

      </p>

      <p className="text-justify max-w-[600px] mt-5">
        Moving on forward, after being able to grab the opportunity and landing his job. the setup of their work is WFH (work from home). Everyday they wake up in the morning and take like a couple of minutes to do an online meeting, shares updates, distributes tasks, etc. Then the entire day is his to consume.
        He shares tools they used, I dont want to particulary delve deeper to these tools. However, the point is that their work is structured to document everything on the daily basis. No one is left behind, everyone always has something to do and something to offer. And that everything they do undergoes multiple verification/validations before actually being deployed.

      </p>
      <p className="text-justify max-w-[600px] mt-5">
        Sharing my insight to this seminar, it was very inspiring of course. Probably the most inspiring part there is the part where he shares his monthly salary 🤣. Though it really was good to know as early as possible as this, to be knowledgeable about the work environment in the tech industry. His journey towards excellence during his student era is also inspiring. Though, I admit that I am nowhere near that type of life. Perhaps, I merely adopted a lowkey, peaceful life, and not destined to be greater. Life sucks huh.
      </p>


      <DockNav />
    </div>
  );
}
