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
      SEMINAR 1
      </p>

    

      <DockNav />
    </div>
  );
}
