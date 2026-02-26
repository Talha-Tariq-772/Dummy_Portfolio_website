"use client";

import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      aria-label="Toggle Theme"
      className="
        fixed right-6 top-6 z-50 p-3 rounded-full shadow-lg
        bg-white dark:bg-neutral-900
        border border-gray-300 dark:border-neutral-700
        hover:bg-yellow-50 dark:hover:bg-neutral-800
        transition-all duration-300
      "
    >
      {theme === "light" ? (
        <Sun size={22} className="text-yellow-500" />
      ) : (
        <Moon size={20} className="text-yellow-300" />
      )}
    </motion.button>
  );
}
