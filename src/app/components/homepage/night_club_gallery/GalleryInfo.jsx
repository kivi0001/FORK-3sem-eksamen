import { cacheLife } from "next/cache";
import GalleryLightbox from "./GalleryLightbox";

export async function GalleryInfo() {
  "use cache";
  cacheLife("hours");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/gallery?_limit=7`,
    );

    const fetchGallery = await response.json();

    return (
      <GalleryLightbox
        initialImages={fetchGallery}
      />
    );
  } catch (error) {
    return (
      <p>Failed to load Night Club gallery...</p>
    );
  }
}
