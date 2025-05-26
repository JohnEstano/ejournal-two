import Image from "next/image";
import { DockNav } from "@/components/dock-nav"
import FadeContent from "@/components/FadeContent";

export default function About() {

    return (
        <div>

            <div className=" h-screen width-full flex items-center justify-center h-screen w-full">


                <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
                    <p className="text-center text-lg">
                        About
                    </p>

                </FadeContent>
            </div>
            <div className=" h-screen width-full flex  items-center align-center justify-center w-full">
                <Image
                    src="/profile.png"
                    alt="profile image"
                    width={84}
                    height={84}
                    className="rounded-lg "
                />

            </div>


            <div className=" h-screen width-full  items-center align-center justify-center h-screen  w-full">




                <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>

                    <p className="text-justify block text-lg m-[400px]" >

                        Hello, I am John Estano. I am a 2nd year Computer Science student studying at the University of the Immaculate Conception
                    </p>

                </FadeContent>
            </div>

            <DockNav />
        </div>
    );

}

