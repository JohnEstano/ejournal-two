import Image from "next/image";
import { DockNav } from "@/components/dock-nav"

export default function Gallery() {

    return (<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <p>Gallery</p>

        <div className="columns-1 md:columns-3 sm:column-2 gap-4 space-y-4 ">
            <Image
                src='/images/a1.jpeg'
                width={600}
                height={100}
                alt="pctrs"
                className="rounded-xl"
            />
            <Image
                src='/images/a2.jpeg'
                width={600}
                height={100}
                alt="pctrs"
                className="rounded-xl"
            />
            <Image
                src='/images/a3.jpeg'
                width={600}
                height={100}
                alt="pctrs"
                className="rounded-xl"
            />
              <Image
                src='/images/tours/1.jpg'
                width={600}
                height={100}
                alt="pctrs"
                className="rounded-xl"
            />
             <Image
                src='/images/tours/5.jpg'
                width={600}
                height={100}
                alt="pctrs"
                className="rounded-xl"
            />
             <Image
                src='/images/tours/6.jpg'
                width={600}
                height={100}
                alt="pctrs"
                className="rounded-xl"
            />
                   <Image
                src='/images/tours/7.jpg'
                width={600}
                height={100}
                alt="pctrs"
                className="rounded-xl"
            />
             <Image
                src='/images/tours/8.jpg'
                width={600}
                height={100}
                alt="pctrs"
                className="rounded-xl"
            />

        </div>

        <DockNav />
    </div>
    );

}

