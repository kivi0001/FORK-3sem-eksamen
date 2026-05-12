import { cacheLife } from "next/cache";
import Gallery from "./Gallery";

export async function GalleryInfo() {
  "use cache";
  cacheLife("hours");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/gallery?_limit=7`,
    );

    const FetchGallery = await response.json();

    return FetchGallery.map((gallery) => {
      return (
        <Gallery
          key={gallery.id}
          imagesrc={`${process.env.NEXT_PUBLIC_API_URL}${gallery.asset?.url}`}
          description={gallery.alt}
          alt={
            gallery.asset?.alt ||
            gallery.asset.description
          }
        />
      );
    });
  } catch (error) {
    return <p>Failed to load club gallery...</p>;
  }
}
