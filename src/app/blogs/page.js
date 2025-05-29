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

        <Link href="/blogs/dailylifeofadev">
          <TiltedCard
            imageSrc="images/seminar1.jpeg"
            altText="Navigating Software Development in the Industry"
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
            imageSrc="images/seminar2.jpg"
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

        <Link href="/blogs/conference">
          <TiltedCard
            imageSrc="images/seminar3_2.jpg"
            altText="Conference"
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

         <Link href="/blogs/therapease">
          <TiltedCard
            imageSrc="/images/seminar4.jpg"
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
         <Link href="/blogs/theinsandouts">
          <TiltedCard
            imageSrc="images/seminar5.jpg"
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
        
         <Link href="/blogs/bridgingacademia">
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

          <Link href="/blogs/prompting">
          <TiltedCard
            imageSrc="images/seminar7.jpg"
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
