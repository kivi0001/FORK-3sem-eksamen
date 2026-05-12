"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Gallery from "./Gallery";
import PrimaryButtons from "../../buttons/PrimaryButtons";

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
              className="absolute left-100 text-white text-5xl z-2 hover:text-button-hover"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-100 text-white text-5xl z-2 hover:text-button-hover"
            >
              ›
            </button>
            <button
              onClick={closeLightbox}
              className="relative -top-65 left-180 right-0 text-white text-3xl z-20 hover:text-button-hover"
            >
              X
            </button>

            <motion.div
              key={selectedImage.id}
              layoutId={`img-${selectedImage.id}`}
              className="relative max-w-3xl bg-background pb-5 flex flex-col  overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${selectedImage.asset?.url}`}
                className="max-h-[70vh] object-contain"
                alt=""
              />
              <div className="px-6 py-4">
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
