"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  User,
  Clock,
  Briefcase,
  Image as ImageIcon,
  Mail,
  Star,
  MessageSquare,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Clock },
  { label: "Skills", href: "#skills", icon: Briefcase },
  { label: "Reviews", href: "#reviews", icon: Star },
  { label: "Projects", href: "#projects", icon: ImageIcon },
  { label: "Contact", href: "#contact", icon: Mail },
  { label: "Questions", href: "#questions", icon: MessageSquare },
];

export default function SideNav() {
  const [active, setActive] = useState("Home");

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "Home";

      for (let item of navLinks) {
        const section = document.querySelector(item.href);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = item.label;
        }
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section from URL hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = navLinks.find((item) => item.href === hash);
      if (section) setActive(section.label);
    }
  }, []);

  return (
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="
        fixed left-0 top-0 h-screen w-[70px]
        bg-white dark:bg-neutral-800
        shadow-xl dark:shadow-none
        border-r border-gray-300 dark:border-neutral-700
        z-[9999]
        flex flex-col items-center py-8
        transition-colors duration-300
      "
    >
      {/* NAME SECTION */}
      <div className="flex flex-col items-center gap-y-1 mb-10 mt-4">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-extrabold text-yellow-500"
        >
          T
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] tracking-widest text-gray-700 dark:text-gray-300"
          style={{ writingMode: "vertical-rl" }}
        >
          Talha Tariq
        </motion.span>
      </div>

      {/* NAV ITEMS */}
      <div className="flex flex-col gap-y-6 mt-3">
        {navLinks.map((item, i) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className="relative group flex flex-col items-center"
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.2 }}
                className={`
                  relative p-3 rounded-xl transition-colors
                  ${
                    active === item.label
                      ? "text-red-500"
                      : "text-yellow-600 dark:text-yellow-400"
                  }
                `}
              >
                {/* Hover Glow */}
                <motion.span
                  className="
                    absolute inset-0 bg-yellow-300 dark:bg-yellow-500
                    rounded-xl opacity-0 group-hover:opacity-20 
                    transition-all
                  "
                />

                <Icon size={23} className="relative z-10" />
              </motion.div>

              {/* TOOLTIP */}
              <span
                className="
                  absolute left-12 top-1/2 -translate-y-1/2
                  bg-black dark:bg-neutral-800
                  text-white dark:text-gray-200 
                  text-[10px] px-2 py-[2px] rounded
                  opacity-0 group-hover:opacity-100
                  transition-all
                "
              >
                {item.label}
              </span>

              {/* ACTIVE INDICATOR DOT */}
              {active === item.label && (
                <motion.div
                  layoutId="activeDot"
                  className="
                    w-2 h-2 bg-red-500 dark:bg-red-400
                    rounded-full absolute -right-3
                  "
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* YEAR */}
      <div className="absolute bottom-8 flex flex-col items-center z-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] tracking-widest text-gray-600 dark:text-gray-400"
          style={{ writingMode: "vertical-rl" }}
        >
          {new Date().getFullYear()}
        </motion.span>
      </div>
    </motion.div>
  );
}
