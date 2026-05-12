"use client";
import { useState } from "react";
import PrimaryButtons from "../../buttons/PrimaryButtons";

export default function Lightbox({
  images,
  initialIndex,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] =
    useState(initialIndex);

  const currentImage = images[currentIndex];

  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1,
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl"
        >
          &times;
        </button>

        <img
          src={currentImage.imagesrc}
          alt={currentImage.descprition}
          className="max-w-full max-h-[80vh] object-contain"
        />
        <p className="text-white mt-4 text-center">
          {currentImage.alt}
        </p>

        <div className="mt-4 flex justify-center">
          <PrimaryButtons textInput="read more" />
        </div>

        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl"
        >
          &#10094;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
