import React from "react";

const Heading = ({ text }) => {
  return (
    <div
      className="
        text-3xl sm:text-2xl 
        font-bold mb-14 self-start
        text-gray-600 dark:text-gray-200
        transition-colors duration-300
      "
    >
      {text}
    </div>
  );
};

export default Heading;
