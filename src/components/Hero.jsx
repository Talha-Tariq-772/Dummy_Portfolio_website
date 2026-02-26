"use client";
import Image from "next/image";
import { heroIcons } from "@/assests";
import { motion } from "framer-motion";
import { useState } from "react";

function Hero() {
  const [buttonHover, setButtonHover] = useState(false);

  return (
    <div
      id="home"
      className="
        h-screen grid place-items-center
        bg-white dark:bg-neutral-950
        transition-colors duration-300
      "
    >
      <div>
        {/* TOP SECTION */}
        <div className="flex flex-col items-center justify-center gap-y-3 capitalize font-light text-gray-700 dark:text-gray-300">
          <motion.div className="flex items-center justify-center">
            <Image
              src={"/Talha5.png"}
              alt="Person Image"
              width={400}
              height={400}
              priority={true}
              className="h-auto w-[250px]"
            />

            {/* Floating “Hi” Animation */}
            <motion.span
              className="text-3xl font-semibold absolute text-white dark:text-gray-200"
              initial={{ scale: 0 }}
              animate={{
                scale: buttonHover ? 2 : 0,
                opacity: buttonHover ? 0 : 1,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 0.4 } }}
            >
              Hi
            </motion.span>
          </motion.div>

          {/* HEADINGS */}
          <h1
            className="
              text-3xl font-bold text-center 
              text-gray-500 dark:text-gray-300 
              tracking-wider sm:text-2xl
            "
          >
            My name is Talha Tariq &
          </h1>

          <p className="text-gray-700 dark:text-gray-300 tracking-wider text-lg">
            I'm a full stack developer 💻
          </p>
        </div>

        {/* ICONS ROW */}
        <div className="flex items-center justify-center gap-x-10 mt-8 text-3xl text-yellow-600 sm:text-2xl">
          {heroIcons.map((icon, index) => (
            <a
              key={index}
              href="#"
              className="
                hover:bg-red-400 dark:hover:bg-yellow-600
                rounded-lg hover:text-white 
                transition-colors
              "
            >
              {icon}
            </a>
          ))}
        </div>

        {/* BUTTON */}
        <a
          href="#"
          className="
            mx-auto mt-7 block w-max rounded-lg 
            bg-red-400 dark:bg-yellow-600 
            px-3 py-1 font-light tracking-wider capitalize
            text-white dark:text-neutral-900
            hover:bg-red-500 dark:hover:bg-yellow-500
            transition-colors
          "
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Talk to me
        </a>
      </div>
    </div>
  );
}

export default Hero;
