import Image from "next/image";
import { DockNav } from "@/components/dock-nav";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Blogs() {
  return (
    <div
      className="
        flex
        flex-col
        justify-center
        items-center
        min-h-screen
        p-8 pb-20
        gap-4
        sm:p-20
        font-[family-name:var(--font-geist-sans)]
      "
    >
      <p
        className="
          text-neutral-500 dark:text-neutral-400
          text-base md:text-lg
          max-w-xl
          text-justify
        "
      >
        Starting the{" "}
        <LinkPreview url="" className="font-semibold">
          very first seminar
        </LinkPreview>
        , which was led by Kuya Ned Palacios the man, the myth, the legend himself. He’s the creator of{" "}
        <LinkPreview
          url="https://ejrnl.vercel.app/blogs/dailylifeofadev"
          className="font-semibold"
        >
          MyUICNeo
        </LinkPreview>{" "}
        and one of the top 10 performers in  <LinkPreview
          url="https://www.sunstar.com.ph/topic/ned-palacios"
          className="font-semibold"
        >TOPCIT</LinkPreview>. In this seminar, he shares “the daily life of a developer,” revealing the ins and outs of a working dev, how he got his job and what they do there.{" "}

      </p>

    

      <DockNav />
    </div>
  );
}
