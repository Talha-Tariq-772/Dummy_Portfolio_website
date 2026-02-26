"use client";

import Heading from "@/components/sub/Heading";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const imgRef = useRef(null);
  const formRef = useRef(null);

  const imgInView = useInView(imgRef, { once: true });
  const formInView = useInView(formRef, { once: true });

  return (
    <div
      id="contact"
      className="
        px-96 mt-32 mb-20
        bg-white dark:bg-neutral-950
        transition-colors duration-300
      "
    >
      {/* HEADING */}
      <div className="mb-10">
        <Heading text={"Get in touch"} />
      </div>

      {/* CONTENT ROW */}
      <div className="flex items-start gap-0 w-full">

        {/* IMAGE */}
        <motion.div
          ref={imgRef}
          animate={imgInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.6 }}
          className="
            w-[300px] h-[400px] rounded-xl 
            bg-white dark:bg-neutral-900 
             dark:border-neutral-700
            flex items-center justify-center
            transition-colors duration-300
          "
        >
          <Image
            src="/contact.png"
            width={400}
            height={500}
            
            alt="Contact"
            className="object-contain p-3"
          />
        </motion.div>

        {/* FORM */}
        <motion.div
          ref={formRef}
          animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6 }}
          className="
            flex-1
            bg-white dark:bg-neutral-900
            rounded-xl shadow-xl dark:shadow-none
            border border-gray-200 dark:border-neutral-700
            p-6
            transition-colors duration-300
          "
        >
          {/* Inputs */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="
                w-1/2 border border-yellow-500 
                bg-white dark:bg-neutral-800
                text-gray-800 dark:text-gray-200
                px-3 py-2 rounded
                focus:outline-none focus:ring-2 focus:ring-yellow-400
                transition-colors
              "
            />
            <input
              type="email"
              placeholder="Your Email"
              className="
                w-1/2 border border-yellow-500 
                bg-white dark:bg-neutral-800
                text-gray-800 dark:text-gray-200
                px-3 py-2 rounded
                focus:outline-none focus:ring-2 focus:ring-yellow-400
                transition-colors
              "
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="
              mt-4 border border-yellow-500 
              bg-white dark:bg-neutral-800
              text-gray-800 dark:text-gray-200
              px-3 py-2 rounded w-full
              focus:outline-none focus:ring-2 focus:ring-yellow-400
              transition-colors
            "
          />

          <textarea
            rows="6"
            placeholder="Write Me..."
            className="
              mt-4 border border-yellow-500 
              bg-white dark:bg-neutral-800
              text-gray-800 dark:text-gray-200
              px-3 py-3 rounded w-full
              focus:outline-none focus:ring-2 focus:ring-yellow-400
              transition-colors
            "
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-full mt-5
              bg-yellow-600 dark:bg-yellow-500
              text-white dark:text-neutral-900
              py-3 rounded-lg shadow-md dark:shadow-none
              hover:bg-yellow-700 dark:hover:bg-yellow-400
              transition
            "
          >
            Send Message
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
