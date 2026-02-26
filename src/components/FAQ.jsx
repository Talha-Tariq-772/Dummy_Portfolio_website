"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "./sub/Heading";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How much do you charge for a website?",
    a: "Pricing depends on the complexity, design, features, and number of pages. Every project gets a customized quote.",
  },
  {
    q: "Why are you so expensive?",
    a: "Because I build fully custom websites — no templates — with premium UI/UX, animations, SEO, and industry-grade code.",
  },
  {
    q: "How long does it take to build a website?",
    a: "The average time is 1–4 weeks depending on content delivery and project complexity.",
  },
  {
    q: "How do we communicate during the build?",
    a: "Communication happens through WhatsApp, email, Zoom, video calls, or whichever medium you prefer.",
  },
  {
    q: "What will you need from me?",
    a: "Brand identity, content, goals, preferences, references, and timely communication.",
  },
  {
    q: "What if I don’t like the website?",
    a: "You get multiple revisions — your satisfaction is always the priority.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggleAll = () => {
    setOpen(open === "all" ? null : "all");
  };

  return (
    <div
      id="questions"
      className="
        relative w-full px-96 py-28 
        bg-white dark:bg-neutral-950
        transition-colors duration-300
      "
    >
      {/* ⭐ Gradient Background (dark mode version added) */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-b from-yellow-50/40 to-white 
          dark:from-neutral-900/40 dark:to-neutral-950 
          -z-10 blur-[1px]
          transition-colors
        "
      />

      <Heading text={"Question & Answers"} />

      {/* Expand / Collapse Button */}
      <div className="flex justify-center mt-4 mb-8">
        <button
          onClick={toggleAll}
          className="
            px-5 py-2 text-sm font-semibold 
            bg-yellow-500 dark:bg-yellow-600 
            hover:bg-yellow-600 dark:hover:bg-yellow-500
            text-white rounded-lg shadow-md 
            transition-all
          "
        >
          {open === "all" ? "Collapse All" : "Expand All"}
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-6 w-[75%] mx-auto">
        {faqs.map((item, index) => {
          const isOpen = open === index || open === "all";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`
                rounded-xl border bg-white dark:bg-neutral-900
                shadow-md dark:shadow-none 
                transition-all duration-300 cursor-pointer
                ${
                  isOpen
                    ? "border-yellow-500"
                    : "border-yellow-300 dark:border-yellow-700"
                }
                hover:shadow-[0_6px_18px_rgba(255,193,7,0.25)]
                hover:border-yellow-500
              `}
            >
              {/* QUESTION ROW */}
              <button
                onClick={() =>
                  setOpen(isOpen && open !== "all" ? null : index)
                }
                className="
                  w-full px-6 py-4 flex items-center justify-between
                  text-gray-800 dark:text-gray-200
                "
              >
                <div className="flex items-center gap-3">
                  <HelpCircle
                    size={20}
                    className="text-yellow-600 dark:text-yellow-500"
                  />
                  <span className="text-[16px] font-medium tracking-wide">
                    {item.q}
                  </span>
                </div>

                {/* Animated Arrow */}
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    size={22}
                    className="text-yellow-600 dark:text-yellow-500"
                  />
                </motion.div>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="
                      px-6 pb-5 text-gray-600 dark:text-gray-300 
                      leading-relaxed
                    "
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
