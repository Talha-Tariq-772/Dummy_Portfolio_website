"use client";
import Heading from "@/components/sub/Heading";
import Image from "next/image";
import { experienceData, arrowLeftIcon } from "@/assests";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"],
  });

  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

  const date = new Date().getFullYear();

  return (
    <div
      className="
        relative py-20 px-96
        bg-white dark:bg-neutral-950
        transition-colors duration-300
      "
      id="experience"
    >
      <Heading text={"Experience & Education"} />

      {/* SIDE IMAGE */}
      <Image
        src={"/education.png"}
        alt={"Education Image"}
        width={250}
        height={250}
        className="
          absolute -top-4 right-96 opacity-80 
          lg:hidden
          dark:opacity-50
        "
      />

      {/* TIMELINE CONTAINER */}
      <div
        ref={containerRef}
        className="
          w-full h-full flex flex-col justify-center items-center 
          gap-y-10 lg:gap-y-20 py-10
        "
      >
        {experienceData.map((data, i) => (
          <div
            key={`id-${i}`}
            className={`
              w-[600px] xl:w-[480px] sm:w-full 
              px-12 sm:px-0 relative
              ${
                i % 2 === 0
                  ? "-left-[300px] xl:-left-[240px] lg:left-0"
                  : "left-[300px] xl:left-[240px] lg:left-0"
              }
            `}
          >
            {/* CARD */}
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
              className="
                relative flex flex-col gap-y-3 rounded-md 
                border border-red-300 dark:border-red-500/30
                bg-white dark:bg-neutral-900
                p-4 tracking-wide sm:text-sm
                shadow-md dark:shadow-none
                transition-colors duration-300
              "
            >
              <h1 className="text-xl sm:text-lg font-light text-gray-700 dark:text-gray-200">
                {data.education}
              </h1>

              <p className="text-gray-800 dark:text-gray-300">
                <span className="block font-light">Education:</span>
                <span className="block pl-2 font-extralight">
                  {data.education}
                </span>
              </p>

              <div className="text-gray-800 dark:text-gray-300">
                <span className="font-light">Experience:</span>
                <ul className="pl-2">
                  {data.experience.map((exp, j) => (
                    <li key={j} className="my-1 font-extralight">
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ARROW */}
              <span
                className={`
                  absolute top-20 text-red-300 dark:text-red-500
                  -translate-y-1/2
                  ${i % 2 === 0 ? "left-full rotate-180" : "right-full"}
                `}
              >
                {arrowLeftIcon}
              </span>
            </motion.div>

            {/* YEAR CIRCLE */}
            <div
              className={`
                w-14 absolute top-20 aspect-square grid place-items-center
                rounded-full font-light
                border border-gray-300 dark:border-neutral-700
                bg-white dark:bg-neutral-900
                text-red-400 dark:text-red-300
                -translate-y-1/2 z-10
                ${
                  i % 2 === 0
                    ? "left-full -translate-x-1/2 lg:left-1/2"
                    : "right-full translate-x-1/2 lg:right-1/2"
                }
              `}
            >
              {date - experienceData.length + i + 1}
            </div>
          </div>
        ))}

        {/* TIMELINE LINE */}
        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY }}
          className="
            w-1 absolute rounded-full h-full 
            bg-gray-300 dark:bg-neutral-700
            origin-top
            transition-colors duration-300
          "
        ></motion.div>
      </div>
    </div>
  );
};

export default Experience;
