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
        <h1 className="font-semibold">TherapEase: Bridging & Fostering Therapy Collaboration for Therapists and Carers</h1>
        <div className="flex gap-5">
          <p className="">Speaker:  Hizon Caja</p>
          <p className="">Date: 05/23/2025</p>
        </div>
      </div>

      <p className="text-justify max-w-[600px]">
        Sir Hizon Caja first started off with introducing himself and what the presentation was all about. He introduced their research capstone project entitled TherapEase: Bridging & Fostering Therapy Collaboration for Therapists and Carers.
      </p>

      <Image
        src="/images/seminar4.jpg"
        width={500}
        height={300}
        className="rounded-lg"
        alt="Image"
      />

      <p className="text-justify max-w-[600px] mt-5">
        It is a project that are mainly targeted to those childrens with developmental delays and that this project was developed to make it significantly easier and more accessible to do therapies. It is quite literally evident in the name itself, TherapEase.
      </p>


      <p className="text-justify max-w-[600px] mt-5">
      Well the main point of the talk was not about the technical terms and features about their documented project. It was mainly about the experience, the journey they have had with in regards to developing the project itself. He shares, being as a student before who have struggled, who have experienced difficulties with his group, that despite having your friends take your back in the group, it is not always a smooth sail. Even having the fact that you have your closest friends to be your group members does not mean that you, they , everyone will not break. He also shared the fact that he had resorted to even asking for external help such as hiring ghost programmers in developing their backend.
      </p>

       <p className="text-justify max-w-[600px] mt-5">
        First off, I would commend sir Hizon Caja for exhibiting such honesty with in regards to academics. My greatest insight to this presentation was that you should always admit when you cannot handle it anymore. Always be truthful and that always ask for help when you need it. Stop owing everything to yourself. The probable reason why there are arguments in groups doing projects is that they are honest to themselves and to their group. And that they wanted to have the betterment for everyone by doing efficient work. I think that it is what a real friend does.
      </p>


      <DockNav />
    </div>
  );
}
