
import { DockNav } from "@/components/dock-nav";
import { LinkPreview } from "@/components/ui/link-preview";
import TiltedCard from '@/components/TiltedCard';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import FadeContent from '@/components/FadeContent';
import { Skeleton } from "@/components/ui/skeleton";
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


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
        font-serif
      "
    >
      <FadeContent blur={true} duration={700} easing="ease-out" initialOpacity={0}>



        <h2
          className={
            ` mt-5 font-thin leading-tight italic 
              text-3xl md:text-4xl text-zinc-800 font-serif dark:text-zinc-100`
          }

        >
          Blogs
        </h2>

      </FadeContent>
      <FadeContent blur={true} duration={700} easing="ease-out" initialOpacity={0}>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          &quot;When a course opens new perspectives, participants gladly shoulder the cost for the benefit it brings. &quot;
        </blockquote>

      </FadeContent>


      <Separator className="my-4" />

      <FadeContent blur={true} duration={800} easing="ease-out" initialOpacity={0}>
        <p className="italic">Seminars & Workshops</p>
      </FadeContent>









      <div className="grid grid-cols-3 gap-x-10 gap-y-10 mt-5">
        <Link href="/blogs/dailylifeofadev" className="flex flex-col items-center">
          <TiltedCard
            imageSrc="images/seminar1.jpeg"
            altText="Navigating Software Development in the Industry"
            captionText="Explore"
            containerHeight="250px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={5}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
          <p className="text-sm mt-5 text-left break-words max-w-[250px]">
            Navigating Software Development in the Industry
          </p>
        </Link>

        <Link href="/blogs/audioprocessing" className="flex flex-col items-center">
          <TiltedCard
            imageSrc="images/seminar11.jpg"
            altText="Enhancing Audio Processing"
            captionText="Explore"
            containerHeight="250px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={5}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
          <p className="text-sm mt-5 text-left break-words max-w-[250px]">
            Enhancing Audio Processing: Development and Evaluation of a Transcriber Tool
          </p>
        </Link>

        <Link href="/blogs/conference" className="flex flex-col items-center">
          <TiltedCard
            imageSrc="images/seminar3_2.jpg"
            altText="Conference"
            captionText="Explore"
            containerHeight="250px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={5}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
          <p className="text-sm mt-5 text-left break-words max-w-[250px]">
            Conference Presentation and Funding Techniques
          </p>
        </Link>

        <Link href="/blogs/therapease" className="flex flex-col items-center">
          <TiltedCard
            imageSrc="/images/seminar12.jpg"
            altText="TherapEase"
            captionText="Explore"
            containerHeight="250px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={5}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
          <p className="text-sm mt-3 text-left break-words max-w-[250px]">
            TherapEase
          </p>
        </Link>

        <Link href="/blogs/theinsandouts" className="flex flex-col items-center">
          <TiltedCard
            imageSrc="images/seminar5.jpg"
            altText="The Ins and Outs of Software Engineering"
            captionText="Explore"
            containerHeight="250px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={5}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
          <p className="text-sm mt-3 text-left break-words max-w-[250px]">
            The Ins and Outs of Software Engineering
          </p>
        </Link>

        <Link href="/blogs/bridgingacademia" className="flex flex-col items-center">
          <TiltedCard
            imageSrc="images/seminar10.jpg"
            altText="Bridging Academia and Startup Innovation"
            captionText="Explore"
            containerHeight="250px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={5}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
          <p className="text-sm mt-3 text-left break-words max-w-[250px]">
            Bridging Academia and Startup Innovation
          </p>
        </Link>

        <Link href="/blogs/prompting" className="flex flex-col items-center">
          <TiltedCard
            imageSrc="images/seminar7.jpg"
            altText="Prompt Engineering"
            captionText="Explore"
            containerHeight="250px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={5}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
          <p className="text-sm mt-3 text-left break-words max-w-[250px]">
            Prompt Engineering
          </p>
        </Link>

        <Link href="/blogs/agenticai" className="flex flex-col items-center">
          <TiltedCard
            imageSrc="images/seminar8.jpg"
            altText="Understanding Agentic AI"
            captionText="Explore"
            containerHeight="250px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={5}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
          <p className="text-sm mt-3 text-left break-words max-w-[250px]">
            Understanding Agentic AI
          </p>
        </Link>

        <Link href="/blogs/blockchain" className="flex flex-col items-center">
          <TiltedCard
            imageSrc="images/seminar9.jpg"
            altText="Exploring Web3: Blockchain, DeFi and the future of the Internet"
            captionText="Explore"
            containerHeight="250px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={12}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
          <p className="text-sm mt-3 text-left break-words max-w-[250px]">
            Exploring Web3: Blockchain, DeFi and the future of the Internet
          </p>
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
            containerHeight="250px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={5}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}

          />
        </Link>
      </div>

      <Separator className="mt-5 mb-5" />
      <p className="italic">Trainings & Certifications</p>


      <Carousel className="w-full max-w-sm">
        <CarouselContent>

          <CarouselItem>
            <div className="p-1">

              <p className="text-center mb-3">Build a Free Website with Wordpress</p>


              <Image
                src="/images/cert1.png"
                width={800}
                height={200}
                alt="pictures"
                className="rounded-lg"
              />


            </div>
          </CarouselItem>


          <CarouselItem >
            <div className="p-1">
              <p className="text-center mb-3">Getting Started with Microsoft Excel</p>

              <Image
                src="/images/cert2.png"
                width={800}
                height={200}
                alt="pictures"
                className="rounded-lg w-[800px] mx-w-[800px]"
              />


            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>





      <DockNav />
    </div >
  );
}
