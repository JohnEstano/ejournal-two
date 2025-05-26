import Image from "next/image";
import { DockNav } from "@/components/dock-nav"
import FadeContent from '@/components/FadeContent'
import Lanyard from '@/components/Lanyard'
import { Spotlight } from "@/components/ui/spotlight";
export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden ">
        <Spotlight
          className="-top-80 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <Lanyard position={[0, 0, 20]} gravity={[0, -30, 0]} fov={[10]} />

        <FadeContent blur={false} duration={700} easing="ease-out" initialOpacity={0}>
          <h1 className="absolute bottom-25 left-0 m-8 text-6xl md:text-8xl font-bold text-left text-zinc-880 leading-none">
            Hey, Welcome to my Ejournal.
          </h1>
          <h1 className="absolute bottom-10 left-0 m-8 text-2xl text-left text-zinc-880 leading-none">
            Seminars, Workshops, & Tours
          </h1>
        </FadeContent>


      </div>

      <DockNav />
    </>
  );
}
