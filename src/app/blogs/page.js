import Image from "next/image";
import { DockNav } from "@/components/dock-nav";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import TiltedCard from '@/components/TiltedCard';
import Link from 'next/link';


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
          dark:text-neutral-400
          text-base md:text-lg
          max-w-xl
          text-justify mt-20
        "
      >
        Blogs
      </p>
      <div className="grid grid-cols-3 gap-x-8 gap-y-4 mt-5">

        <Link href="/blogs/audioprocessing">
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Enhancing Audio Processing"
            captionText="Explore"
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="p-5 text-zinc-600">
                Seminar 1
              </p>
            }
          />
        </Link>

        <Link href="/blogs/audioprocessing">
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Enhancing Audio Processing"
            captionText="Explore"
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="p-5 text-zinc-600">
                Seminar 1
              </p>
            }
          />
        </Link>

        <Link href="/blogs/audioprocessing">
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Enhancing Audio Processing"
            captionText="Explore"
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="p-5 text-zinc-600">
                Seminar 1
              </p>
            }
          />
        </Link>
      </div>


      <div className="grid grid-cols-3 gap-x-8 gap-y-4">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
      </div>



      <ul className="list-decimal ">

        <li>
          Daily life of a developer
        </li>
        <li>
          Enhancing Audio Processing: Development and Evaluation of a Transcriber Tool
        </li>
        <li>
          Research101: Conference Presentation and Funding Techniques
        </li>
        <li>
          TherapEase: Bridging & Fostering Therapy Collaboration for Therapists and Carers
        </li>
        <li>
          Research101: the ins and outs of software engineering research project.
        </li>
      </ul>



      <DockNav />
    </div>
  );
}
