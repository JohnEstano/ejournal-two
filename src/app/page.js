import Image from "next/image";
import { DockNav } from "@/components/dock-nav";
import FadeContent from '@/components/FadeContent';
import Lanyard from '@/components/Lanyard';
import { Spotlight } from "@/components/ui/spotlight";
// Import a professional serif font from Google Fonts
import { Playfair_Display } from 'next/font/google';

// Configure the Playfair Display font
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <Spotlight
          className="-top-80 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <Lanyard position={[0, 0, 20]} gravity={[0, -30, 0]} fov={[10]} />

        <FadeContent blur={false} duration={700} easing="ease-out" initialOpacity={0}>
          <h1
            className={
              `absolute bottom-40 left-0 ml-8 font-thin leading-none max-w-lg 
            text-7xl md:text-8xl text-zinc-900 font-serif ${playfair.variable}`
            }
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Hey, Welcome to <span className="dark:text-zinc-100">my</span>  <span className="dark:text-zinc-100">Ejournal.</span>
          </h1>

          <h2
            className={
              `absolute bottom-20 left-0 ml-8 font-thin leading-tight italic 
              text-3xl md:text-4xl text-zinc-800 font-serif dark:text-zinc-600` 
            }
        
          >
            Seminars, Workshops, & Tours
          </h2>
        </FadeContent>
      </div>

      <DockNav />
    </>
  );
}
