import Image from "next/image";
import { DockNav } from "@/components/dock-nav";
import { motion } from "motion/react";

export default function Blogs() {
  return (
    <div
      className="
        flex
        flex-col
        justify-start
        mt-30
        items-center
        min-h-screen
        p-8 pb-20
        gap-4
        sm:p-20
        font-[family-name:var(--font-geist-sans)]
      "
    >
      <div className="grid grid-cols-1 gap-1 mb-5">
        <h1 className="font-semibold">Prompt Engineering</h1>
        <div className="flex gap-5">
          <p className="">Speaker:  Eric Emberda</p>
          <p className="">Date: 05/28/2025</p>
        </div>
      </div>

      <p className="text-justify max-w-[600px]">
      The past dean of UIC CCS. The one and only sir Eric Emberda conducted this very mind boogling workshop setup presentation.
      </p>

      <Image
        src="/images/seminar7_2.jpg"
        width={500}
        height={300}
        className="rounded-lg"
        alt="Image"
      />

      <p className="text-justify max-w-[600px] mt-5">
       Sir Eric Emberda walked us through the fundamentals of Generative AI models we now so frequently use. What is the logic behind all of those thousands and thousands of prompts you input to ChatGPT, Deepseek, Gemini and the list goes on. How do they selectively come up with these responses that almost always cater your questions. It is quite an interesting subject indeed.
      </p>


      <p className="text-justify max-w-[600px] mt-5">
      It turns out that Generative AI models have this calculations going on in the background that happens real time. During that mere seconds of waiting for that response from ChatGPT. It is actually calculating billions of data and information numerically having them labelled based on the significance score of your input texts. Technically, if you look at it numerically or mathematically. It is not thinking what to respond . It is calculating the best possible significance and relevance of the data that was given to it and compare it to your prompt text. It is merely doing what it is trained to do. But because of it being so advanced now, I think we are so well damned that one would argue that it is actually its own beast. That it makes responses just like what a human really does.
      </p>

       <p className="text-justify max-w-[600px] mt-5">
      It really is interesting but I think I have gotten my own thoughts there. Sir Eric Emberda highlights how we could utilize these tools more efficiently. As was stated, they calculate the best possible response to each and every word you give it. And that the best way to get a better response is of course give a better prompt. Specificity is the highlight of this workshop. The more specific you are, the more these tools become so reliable. By understanding their inner workings, they dont really relate to your thoughts just like what a human does. So if you give ambiguous garbage yap and dont specifiy, it will give you garbage as well.
      </p>

      <DockNav />
    </div>
  );
}
