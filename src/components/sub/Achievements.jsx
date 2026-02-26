"use client";
import { motion, useMotionValue } from "framer-motion";

const Achievements = ({ title, amount, icon }) => {
  const number = useMotionValue(0);

  const count = (amount) => {
    let i = 0;
    const updateCount = () => {
      let timeOut;
      if (i <= amount) {
        number.set(i++);
        timeOut = setTimeout(updateCount, 0);
      } else {
        clearTimeout(timeOut);
      }
    };
    updateCount();
  };

  return (
    <div className="flex items-end gap-x-3 transition-colors duration-300">
      {/* ICON */}
      <span className="text-4xl lg:text-2xl text-gray-300 dark:text-gray-600">
        {icon}
      </span>

      <h1 className="flex flex-col gap-y-2">
        {/* NUMBER */}
        <motion.span
          className="text-2xl lg:text-xl font-light text-yellow-500 dark:text-yellow-400"
          whileInView={() => count(amount)}
          viewport={{ once: true }}
        >
          {number}
        </motion.span>

        {/* TITLE */}
        <span className="text-sm text-gray-500 dark:text-gray-300 tracking-wide">
          {title}
        </span>
      </h1>
    </div>
  );
};

export default Achievements;
