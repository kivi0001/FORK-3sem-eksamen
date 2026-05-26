"use client";
import { motion } from "motion/react";

const PrimaryButtons = ({ textInput }) => {
  return (
    <motion.button
      className="relative inline-block w-fit overflow-hidden uppercase py-2 px-4.5 place-items-center cursor-pointer"
      initial="initial"
      whileHover="hovered"
      variants={{
        hovered: { color: "var(--pink)" },
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className=" grid grid-cols-1">
        <motion.span
          className="absolute top-0 left-0 w-full h-0.5 border-t-2 border-t-button inline-block"
          variants={{
            initial: { x: 0 },
            hovered: {
              x: "-100%",
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
        <motion.span
          className="absolute top-0 left-0 w-full h-0.5 border-t-2 border-t-button-hover inline-block"
          variants={{
            initial: { x: "100%" },
            hovered: { x: 0 },
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
        {textInput}
        <motion.span
          className="absolute bottom-0 left-0 w-full -h-0.5 border-t-2 border-t-button inline-block rotate-180"
          variants={{
            initial: { x: 0 },
            hovered: { x: "-100%" },
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
        <motion.span
          className="absolute bottom-0 left-0 w-full -h-0.5 border-b-2 border-b-button-hover inline-block rotate-180"
          variants={{
            initial: { x: "100%" },
            hovered: { x: 0 },
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.button>
  );
};

export default PrimaryButtons;
