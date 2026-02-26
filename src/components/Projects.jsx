"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "./sub/Heading";
import Image from "next/image";

const filters = [
  "All",
  "Figma",
  "Photoshop",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "TailwindCSS",
  "NextJS",
  "FramerMotion",
  "ThreeJS",
];

const projectsData = [
  {
    id: 1,
    title: "Web Design Concept",
    category: "Figma",
    image: "/p1.jpeg",
    description:
      "Clean landing page concept designed in Figma, focused on bold typography and soft gradients.",
  },
  {
    id: 2,
    title: "E-Commerce UI",
    category: "ReactJS",
    image: "/p2.jpeg",
    description:
      "Modern React-based shop interface with product cards, filters and smooth interactions.",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    category: "HTML",
    image: "/p3.jpeg",
    description:
      "Responsive dashboard layout built with semantic HTML and reusable layout sections.",
  },
  {
    id: 4,
    title: "Modern Shop Page",
    category: "NextJS",
    image: "/p4.jpeg",
    description:
      "Next.js single-product page with hero section, feature highlights and call-to-action.",
  },
  {
    id: 5,
    title: "Creative Portfolio",
    category: "TailwindCSS",
    image: "/p5.jpeg",
    description:
      "Portfolio grid styled entirely with TailwindCSS utility classes and custom spacing.",
  },
  {
    id: 6,
    title: "Marketing Landing",
    category: "FramerMotion",
    image: "/p6.jpeg",
    description:
      "Animated marketing page using Framer Motion for entrance effects and hover transitions.",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((proj) => proj.category === activeFilter);

  return (
    <div
      id="projects"
      className="
        min-h-screen px-96 py-20 flex flex-col items-center
        bg-white dark:bg-neutral-950
        transition-colors duration-300
      "
    >
      {/* TITLE */}
      <div className="flex flex-col items-center gap-3 mb-8">
        <Heading text={"Projects"} />
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mt-2 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={
              `px-4 py-1 rounded-full text-sm border transition-all duration-200 ` +
              (activeFilter === filter
                ? "bg-yellow-500 text-white border-yellow-500 shadow-[0_0_16px_rgba(250,204,21,0.6)]"
                : "bg-white dark:bg-neutral-900 border-yellow-200 text-gray-700 dark:text-gray-300 hover:bg-yellow-50 dark:hover:bg-neutral-800 hover:border-yellow-400")
            }
          >
            {filter}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <motion.div
        layout
        className="grid grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((proj) => (
            <motion.div
              key={proj.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="
                relative group rounded-2xl overflow-hidden cursor-pointer
                bg-white dark:bg-neutral-900
                border border-yellow-200 dark:border-neutral-700
                shadow-md dark:shadow-none
                transition-all duration-300
              "
            >
              {/* IMAGE */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  className="h-full w-full"
                >
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    width={500}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                {/* HOVER OVERLAY */}
                <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  flex flex-col justify-end p-4
                  bg-gradient-to-t from-black/80 via-black/40 to-transparent
                ">
                  <p className="text-[11px] tracking-[0.25em] text-yellow-300 mb-1">
                    {proj.category}
                  </p>
                  <p className="text-sm text-gray-100 leading-snug">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* TITLE BELOW IMAGE */}
              <div className="px-4 py-3 flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold text-gray-800 dark:text-gray-100">
                    {proj.title}
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {proj.category} · UI Concept
                  </p>
                </div>
                <span className="
                  text-[11px] px-2 py-[3px] rounded-full
                  border border-yellow-300
                  text-yellow-700 dark:text-yellow-400
                  bg-yellow-50 dark:bg-neutral-800
                ">
                  View
                </span>
              </div>

              {/* YELLOW GLOW ON HOVER */}
              <div className="
                pointer-events-none absolute inset-0 rounded-2xl border border-transparent
                group-hover:border-yellow-400
                group-hover:shadow-[0_0_30px_rgba(250,204,21,0.75)]
                transition-all duration-300
              " />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
