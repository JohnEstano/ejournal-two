import Image from "next/image";
import { DockNav } from "@/components/dock-nav";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import TiltedCard from '@/components/TiltedCard';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';


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
      <h2
        className={
          ` mt-5 font-thin leading-tight italic 
              text-3xl md:text-4xl text-zinc-800 font-serif dark:text-zinc-100`
        }

      >
        Blogs
      </h2>

      <p className="italic">Seminars & Workshops</p>
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
            imageSrc="/images/seminar6.jpg"
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


      <Separator className="my-4" />
      <p className="italic">Tours</p>

      <div className="grid grid-cols-3 gap-x-15 gap-y-10 mt-5">

        <Link href="/tours">
          <TiltedCard
            imageSrc="images/tours/1.jpg"
            altText="Enhancing Audio Processing"
            captionText="PTV DAVAO"
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

      <Separator className="mt-5 mb-5" />
      <p className="italic">Trainings & Certifications</p>








      <DockNav />
    </div>
  );
}
