import Image from "next/image";
import { DockNav } from "@/components/dock-nav"
import FadeContent from "@/components/FadeContent";
import Link from 'next/link';
import { Github, Instagram } from 'lucide-react';


export default function About() {
    return (
        <div>

            <div className="min-h-screen flex flex-col items-center justify-start px-4 pt-50 ">


                <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
                    <p className="text-center text-lg">@Me</p>
                </FadeContent>


                <div className="flex flex-row items-center gap-8 mb-5 max-w-4xl mt-3">
                    <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
                        <Image
                            src="/profile.png"
                            alt="profile image"
                            width={54}
                            height={54}
                            className="rounded-xl"
                        />
                    </FadeContent>



                    <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
                        <div className="grid grid-cols-1 gap-5">
                            <p className="text-justify text-lg max-w-md">
                                Hello, I am John Estano. I am a 2nd year Computer Science student studying at the University of the Immaculate Conception. I like birds and the color <span className="text-emerald-500">green</span>.
                            </p>
                        </div>

                    </FadeContent>



                </div>
                <div className="flex gap-5">
                    <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
                        <Link href="https://github.com/JohnEstano"><Github /></Link>
                    </FadeContent>

                    <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
                        <Link href="https://www.instagram.com/iiferaligatr/"><Instagram /></Link>
                    </FadeContent>
                </div>

            </div>

            <div className="min-h-screen flex flex-col items-center justify-start px-4 pt-50 ">

                <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
                    <p className="text-center text-lg">About  This Page</p>
                </FadeContent>


                <div className="flex flex-row items-center gap-8 max-w-4xl mt-3">

                    <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
                        <p className="text-justify text-lg max-w-md">
                            This page is created in partial fulfillment of the course Seminars, Workshops, & Tours. This course gives students exposure to the real world and more specifically the tech industry. Here, I gather insights of my experiences in each activity. This page is created with ReactJs, using Next.js as the framework. It is hosted on Vercel and uses Tailwind CSS for styling. The source code is available on my Github.
                        </p>


                    </FadeContent>
                </div>
            </div>

            <DockNav />
        </div>
    );
}
