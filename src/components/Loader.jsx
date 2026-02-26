"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2300);
    return () => clearTimeout(t);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.8 }}
      className="
        fixed inset-0 z-[99999] flex items-center justify-center 
        bg-gradient-to-b 
        from-[#fff5df] to-[#ffeccd]
        dark:from-neutral-900 dark:to-neutral-950
        transition-colors duration-300
      "
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="
          flex flex-col items-center p-10 
          bg-white/70 dark:bg-neutral-900/80 
          backdrop-blur-md 
          shadow-2xl dark:shadow-md 
          rounded-2xl 
          border border-yellow-200 dark:border-neutral-700
          transition-colors duration-300
        "
      >
        <Image
          src="/loader/skater.gif"
          width={200}
          height={200}
          alt="Loading..."
          unoptimized
          className="rounded-xl shadow-lg dark:shadow-none"
        />

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="
            text-gray-700 dark:text-gray-300 
            text-lg mt-6 tracking-wide
          "
        ></motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
