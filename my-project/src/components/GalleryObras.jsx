import React from "react";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: "/obra1/embajada.jpg",
    alt: "embajada",
    thumbnail: "/obra1/embajada.jpg",
    description: "Embajada de Portugal",
  },
  {
    original: "/obra1/exterior1.jpg",
    alt: "exterior1",
    thumbnail: "/obra1/exterior1.jpg",
  },
  {
    original: "/obra1/exterior1.2.jpg",
    alt: "exterior1.2",
    thumbnail: "/obra1/exterior1.2.jpg",
  },
  {
    original: "/obra1/exterior1.3.jpg",
    alt: "exterior1",
    thumbnail: "/obra1/exterior1.3.jpg",
  },

  {
    original: "/obra1/exterior2.jpg",
    alt: "exterior2",
    thumbnail: "/obra1/exterior2.jpg",
  },

  {
    original: "/obra1/exterior4.png",
    alt: "exterior4",
    thumbnail: "/obra1/exterior4.png",
  },
  {
    original: "/obra1/exterior3.jpg",
    alt: "exterior3",
    thumbnail: "/obra1/exterior3.jpg",
  },
];
function GalleryObras() {
  return (
    <div
      className="container mx-auto px-2 gallery-wrapper"
      style={{ maxWidth: "40%", maxHeight: "50px" }}
    >
      <h1 className="text-center">Trabajos</h1>
      <ImageGallery
        items={images}
        thumbnailPosition="bottom"
        showFullscreenButton={false}
        showPlayButton={false}
        useBrowserFullscreen={false}
        renderItem={(item) => (
          <div className="w-full h-full">
            <img
              src={item.original}
              alt={item.alt}
              className="w-full h-auto filter"
            />
          </div>
        )}
        renderThumbInner={(item) => (
          <img
            src={item.thumbnail}
            alt={item.alt}
            className="w-full h-auto filter blur-sm hover:blur-none"
          />
        )}
      />
    </div>
  );
}

export default GalleryObras;
