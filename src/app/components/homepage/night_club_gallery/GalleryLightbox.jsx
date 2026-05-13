"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Gallery from "./Gallery";
import PrimaryButtons from "../../buttons/PrimaryButtons";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

export default function GalleryLightBox({
  initialImages,
}) {
  const [currentIndex, setCurrentIndex] =
    useState(null);

  const openLightbox = (index) =>
    setCurrentIndex(index);
  const closeLightbox = () =>
    setCurrentIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex(
      (prev) => (prev + 1) % initialImages.length,
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex(
      (prev) =>
        (prev - 1 + initialImages.length) %
        initialImages.length,
    );
  };

  const selectedImage =
    currentIndex !== null
      ? initialImages[currentIndex]
      : null;

  return (
    <div className="gallery-img-wrapper">
      {initialImages.map((gallery, index) => (
        <Gallery
          key={gallery.id}
          id={gallery.id}
          imagesrc={`${process.env.NEXT_PUBLIC_API_URL}${gallery.asset?.url}`}
          alt={
            gallery.asset?.alt ||
            gallery.asset.description
          }
          onClick={() => openLightbox(index)}
        />
      ))}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 flex items-center justify-center z-2 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={prevImage}
              className="absolute left-50 text-white text-3xl z-2 hover:text-button-hover border p-2 hover:border-button-hover hover:cursor-pointer"
            >
              <BiSolidLeftArrow />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-50 text-white text-3xl z-2 hover:text-button-hover border p-2 hover:border-button-hover hover:cursor-pointer"
            >
              <BiSolidRightArrow />
            </button>
            <button
              onClick={closeLightbox}
              className="absolute top-25 right-85 text-white text-3xl z-20 hover:text-button-hover hover:cursor-pointer"
            >
              X
            </button>

            <motion.div
              key={currentIndex}
              initial={{
                opacity: 0,
                translateX: "100%",
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              exit={{
                opacity: 0,
                translateX: "-100%",
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.4,
              }}
              className="relative max-w-full h-fit bg-background pb-5 flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${selectedImage.asset?.url}`}
                className=" object-cover"
                alt=""
              />
              <div className="flex-1 flex flex-col justify-between p-6">
                <p className="text-bodyfont text-xl font-semibold">
                  {selectedImage.asset?.alt ||
                    selectedImage.asset
                      .description}
                </p>
                <div className="mt-6 flex justify-end">
                  <PrimaryButtons textInput="read more" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
