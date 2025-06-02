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
        So we had this seminar called Research 101: Conference Presentation and Funding Techniques on May 22, 2025, and honestly, I didnt expect to be this into it. The speaker was Sir Chris John David Manero and man, this guy knows how to present. Not in the boring, robotic way most speakers do, but in a way that actually makes you want to listen.

        Right off the bat, he asked this question: “Who loves research?” And of course, everyone just smiled awkwardly because, let us be real, research sounds like a headache. But that is kind of the point. He knew most of us were intimidated by it. That is why the way he talked made such a big difference. Super chill, relatable, and no nonsense.
      </p>
      <Image
        src="/images/seminar3.jpg"
        width={500}
        height={300}
        className="rounded-lg"
        alt="Image"
      />


      <p className="text-justify max-w-[600px] mt-5">
        He broke down the whole idea of research into something that actually makes sense. One of the first big points he made was do not make a solution if you do not even know the problem. Like, stop building a system just because it is cool and try to fix something that actually matters. That hit hard. So many of us start with an idea and force it into a problem when it should be the other way around.

        He also introduced us to using AI tools like SciSpace. Game changer. Makes research feel way less like climbing Mt Everest. These tools help you organize, find related studies, and make sense of stuff without drowning in PDFs.
      </p>

      <p className="text-justify max-w-[600px] mt-5">
        So yeah, overall, it was a surprisingly good session. Not just about research techniques, but about having the right mindset. That it is okay to be overwhelmed. That research does not have to be scary or boring. And most importantly, that it actually matters.

        Sir Manero made it feel like something doable. Something we can own. He did not just teach us how to make our research presentable. He made us believe we had something worth presenting in the first place.

        10 out of 10 would attend again.    
        </p>



      <DockNav />
    </div>
  );
}
