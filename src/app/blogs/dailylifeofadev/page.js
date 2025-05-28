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
          <p className="">Date: 05/17/2025</p>
        </div>
      </div>

      <p className="text-justify max-w-[600px]">
        Sir/Kuya Ned Palacios, the man, the myth, the legend himself. The creator of MyUICNeo and also famously known as one of the top 10 performers in TOPCIT during his time.
        He mainly shared about his journey towards the life that he has now. Currently, he is a software developer working at an Australian-based company called Norg.ai. I don&apos;t really know specific details about this company or what they generally do. However, what I do know is that they require authentic skills or qualities that cannot be seen in just about anyone.
        This makes Sir Ned an outstanding software developer, to be able to even land that particular job. Having this type of credibility, he shares his own &quot;a day in the life of a software developer&quot;.
      </p>

      <Image
        src="/images/seminar1.jpeg"
        width={500}
        height={300}
        className="rounded-lg"
        alt="Image"
      />

      <p className="text-justify max-w-[600px] mt-5">
        He first started off by sharing how he got there. At first, he was hesitant to go out and be known. He wanted to have a lowkey life, a peaceful life that is devoid of responsibilities and proactivity.
        However, it seems that destiny isn&apos;t really something you can escape from. Eventually, the life of being a proactive leader in the tech community still managed to reach him. He became the lead of UIC Developer Groups, also now known as Google Developer Groups on Campus UIC, and also became a founder of DICE.
        This proactivity is what led him to have the opportunity to be discovered by significant people and ultimately land the job he has now.
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
