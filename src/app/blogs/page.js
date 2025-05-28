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
      <div className="grid grid-cols-3 gap-x-15 gap-y-10 mt-5">

        <Link href="/blogs/audioprocessing">
          <TiltedCard
            imageSrc="/profile.png"
            altText="Enhancing Audio Processing"
            captionText="Navigating Software Development in the Industry"
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
         
          />
           

        </Link>

        <Link href="/blogs/audioprocessing">
          <TiltedCard
            imageSrc="/profile.png"
            altText="Enhancing Audio Processing"
            captionText="Enhancing Audio Processing"
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
           
          />
        </Link>

        <Link href="/blogs/audioprocessing">
          <TiltedCard
            imageSrc="/profile.png"
            altText="Enhancing Audio Processing"
            captionText="Conference Presentation and Funding Techniques"
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
           
          />
        </Link>

         <Link href="/blogs/audioprocessing">
          <TiltedCard
            imageSrc="/profile.png"
            altText="Enhancing Audio Processing"
            captionText="TherapEase"
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          
         />
          
        </Link>
         <Link href="/blogs/audioprocessing">
          <TiltedCard
            imageSrc="/profile.png"
            altText="Enhancing Audio Processing"
            captionText="The Ins and Outs of Software Engineering Research Project"
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          
          />
        </Link>
        
         <Link href="/blogs/audioprocessing">
          <TiltedCard
            imageSrc="/profile.png"
            altText="Enhancing Audio Processing"
            captionText="Bridging Academia and Startup Innovation"
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
           
          />
        </Link>

          <Link href="/blogs/audioprocessing">
          <TiltedCard
            imageSrc="/profile.png"
            altText="Enhancing Audio Processing"
            captionText="Prompt Engineering"
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
           
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
