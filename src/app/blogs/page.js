import Image from "next/image";
import { DockNav } from "@/components/dock-nav"
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

        Started off, with the{" "}
        <LinkPreview url="https://tailwindcss.com" className="font-semibold">
           very first seminar 
        </LinkPreview>{" "}. Which was led by Kuya Ned Palacios. The man, the myth, the legend himself. The creator of  <LinkPreview url="https://github.com/nedpals/myuic-neo" className="font-semibold">MyUICNeo </LinkPreview>{" "}
        and the one who achieved remarkable success by earning a coveted position as one of the top 10 performers in TOPCIT. In this seminar, he shares "the daily life of a developer" where he reveals the in's and out's of a working dev. He explains how he got his job and what they do there.{" "}
        {" "}
        <LinkPreview url="https://framer.com/motion" className="font-semibold">
          Framer Motion
        </LinkPreview>{" "}
        are a great way to build modern websites.
      </p>

      <p
        className="
          text-neutral-500 dark:text-neutral-400
          text-base md:text-lg
          max-w-xl
          text-center
        "
      >
        Visit{" "}
        <LinkPreview
          url="https://youtube.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Aceternity UI
        </LinkPreview>{" "}
        for amazing Tailwind and Framer Motion components.
      </p>

      <DockNav />
    </div>
  );
}

