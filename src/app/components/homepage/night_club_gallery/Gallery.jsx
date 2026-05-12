"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PrimaryButtons from "../../buttons/PrimaryButtons";

const Gallery = ({
  imagesrc,
  alt,
  descprition,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              &times;
            </button>
            <img
              src={imagesrc}
              alt={descprition}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-white mt-4 text-center">
              {alt}
            </p>
            <div className="mt-4 flex justify-center">
              <PrimaryButtons textInput="read more" />
            </div>
          </div>
        </div>
      )}

      <motion.div
        initial={{
          opacity: 0,
          translateX: "-100%",
        }}
        whileInView={{
          opacity: 1,
          translateX: 0,
        }}
        transition={{ duration: 1 }}
        className="gallery-wrapper gallery-hover relative hover:cursor-pointer"
      >
        <button
          className="h-full w-full"
          onClick={() => setIsOpen(true)}
        >
          <div className="gallery-container">
            <div className="flex flex-col gallery-overlay border-y-(--pink) border-y-2">
              <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-40 border-bs-0 border-e-0 border-be-40"></div>
              <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-40 border-e-40 border-be-0"></div>
            </div>
            <img
              src={imagesrc}
              alt={descprition}
              className="w-full h-full object-cover"
            />
          </div>
        </button>
      </motion.div>
    </>
  );
};

export default Gallery;
