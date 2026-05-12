"use client";
import { motion } from "framer-motion";

const Gallery = ({
  imagesrc,
  alt,
  id,
  onClick,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: "-100%",
      }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="gallery-wrapper gallery-hover relative cursor-pointer"
      onClick={onClick}
    >
      <div className="gallery-container relative">
        <div className="flex flex-col gallery-overlay border-y-(--pink) border-y-2">
          <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-40 border-bs-0 border-e-0 border-be-40"></div>
          <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-40 border-e-40 border-be-0"></div>
        </div>

        <motion.img
          layoutId={`img-${id}`}
          src={imagesrc}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default Gallery;
