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
import { MdClose } from "react-icons/md";

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
            className="gallery-lightbox fixed inset-0 bg-background/95 flex items-center justify-center z-2 p-4 top-20"
            onClick={closeLightbox}
          >
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
              className="lightbox-wrapper bg-background pb-5 flex flex-col overflow-hidden object-cover"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={prevImage}
                className="button-left text-white z-2 hover:text-button-hover border p-2 hover:border-button-hover hover:cursor-pointer text-2xl"
              >
                <BiSolidLeftArrow />
              </button>
              <button
                onClick={nextImage}
                className="button-right text-white z-2 hover:text-button-hover border p-2 hover:border-button-hover hover:cursor-pointer text-2xl"
              >
                <BiSolidRightArrow />
              </button>
              <button
                onClick={closeLightbox}
                className="button-exit text-white z-20 hover:text-button-hover hover:cursor-pointer text-3xl"
              >
                <MdClose />
              </button>

              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${selectedImage.asset?.url}`}
                className="object-cover"
                alt={
                  selectedImage.asset?.alt ||
                  selectedImage.asset.description
                }
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
