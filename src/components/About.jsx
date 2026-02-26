"use client";
import Heading from "@/components/sub/Heading";
import Achievements from "@/components/sub/Achievements";
import Image from "next/image";
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "@/assests";

const About = () => {
  return (
    <div
      id="about"
      className="
        min-h-screen px-96 flex flex-col items-center justify-center
        bg-white dark:bg-neutral-950
        transition-colors duration-300
      "
    >
      <Heading text={"About Me"} />

      <div className="w-full flex items-center justify-between md:justify-center">
        {/* IMAGE — shifted up slightly */}
        <Image
          src={"/Talha6.png"}
          alt="About Image"
          width={400}
          height={400}
          className="w-[300px] lg:w-[250px] md:w-[200px] lg:hidden -mt-6"
        />

        <div
          className="
            relative max-w-[800px] rounded-xl p-5 text-justify
            bg-zinc-100 dark:bg-neutral-900
            border border-transparent dark:border-neutral-800
            shadow-md dark:shadow-none
            transition-colors duration-300
          "
        >
          <span className="absolute -left-5 text-zinc-100 dark:text-neutral-900 top-20 scale-[2.5]">
            {arrowLeftIcon}
          </span>

          <p
            className="
              text-lg font-light first-letter:pl-3
              text-gray-700 dark:text-gray-200
              lg:text-[16px] sm:text-[14px]
              transition-colors duration-300
            "
          >
            {aboutText}
          </p>

          <a
            href="/Talha_Tariq_CV_.pdf"
            download=""
            className="
              w-max flex items-center gap-x-2 mt-6 rounded-full
              border border-gray-300 dark:border-yellow-500/60
              bg-red-400 dark:bg-yellow-500
              px-3 py-2 font-light text-white
              hover:bg-red-500 dark:hover:bg-yellow-400
              transition-colors
            "
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
          </a>
        </div>
      </div>

      {/* ACHIEVEMENTS — layout & gaps unchanged */}
      <div className="mt-4 w-full flex items-center justify-between flex-wrap gap-x-7 gap-y-10">
        {aboutData.map((items, i) => (
          <Achievements
            key={i}
            title={items.title}
            icon={items.icon}
            amount={items.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
