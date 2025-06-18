import Image from "next/image";
import { DockNav } from "@/components/dock-nav";
import FadeContent from '@/components/FadeContent';
import Lanyard from '@/components/Lanyard';
import { Playfair_Display } from 'next/font/google';


const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">

        <Lanyard position={[0, 0, 20]} gravity={[0, -30, 0]} fov={[13]} />

        <FadeContent blur={false} duration={700} easing="ease-out" initialOpacity={0}>
          <h1
            className={
              `absolute bottom-40 left-0 ml-8 font-thin leading-none max-w-lg 
            text-7xl md:text-8xl text-zinc-900 font-serif ${playfair.variable}
            dark:text-zinc-300`
            }
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Hey<span className="text-green-500">, </span>Welcome to my  Ejournal<span className="text-green-500">. </span>
          </h1>

          <h2
            className={
              `absolute bottom-20 left-0 ml-8 font-thin leading-tight italic 
              text-3xl md:text-4xl text-zinc-800 font-serif dark:text-zinc-300`
            }

          >
            Seminars, Workshops, & Tours
          </h2>
        </FadeContent>
        <div className="relative overflow-visible">
          <FadeContent blur={false} duration={700} easing="ease-out" initialOpacity={0}>
            <Image
              src="/uic1.webp"
              alt="UIC Campus"
              width={600}
              height={500}
              className="absolute top-20 right-30  translate-x-1/2 rounded-xl z-1"
            />
          </FadeContent>

        </div>


      </div>


      <DockNav />
    </>
  );
}
