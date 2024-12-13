import React, { useState } from "react";

import b1 from "../assets/service1.png";
import b2 from "../assets/service2.png";
import b3 from "../assets/service3.png";
import b4 from "../assets/service4.png";
import b5 from "../assets/service5.png";
import b6 from "../assets/service6.png";
import { SlideshowLightbox } from "lightbox.js-react";

const GalleryPosts = [
  { id: 1, imageSrc: b1, category: "Service Sectors" },
  { id: 2, imageSrc: b2, category: "QHSE" },
  { id: 3, imageSrc: b3, category: "Building Contract" },
  { id: 4, imageSrc: b4, category: "Service Sectors" },
  { id: 5, imageSrc: b5, category: "QHSE" },
  { id: 6, imageSrc: b6, category: "QHSE" },

  // Add more blog posts as needed
];

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const tabs = ["all", "Service Sectors", "QHSE", "Building Contract"];

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const filteredPosts = GalleryPosts.filter(
    (post) => selectedTab === "all" || post.category === selectedTab
  );

  return (
    <div>
      <div className="flex flex-wrap gap-4 md:gap-0  mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`  py-1 px-4 text-center text-base font-medium   transition-colors duration-300 ease-in-out ${
              selectedTab === tab
                ? "bg-[#104cba] text-white rounded-md"
                : "border-transparent text-gray-800  "
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Image Grid with Lightbox */}
      <SlideshowLightbox
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        lightboxIdentifier="gallery-lightbox"
        showThumbnails
        modalClose={"clickOutside"}
        framework="tailwind" // Optional: Use Tailwind classes for styling
        images={filteredPosts?.map((image) => image.imageSrc)} // Pass the array of image URLs
      >
        {filteredPosts?.map((image, imageIndex) => (
          <div key={imageIndex} className="photo-card h-[350px] rounded-lg group overflow-hidden">
            <img
              className=" object-cover w-full h-full shadow-md  transition-transform duration-500 group-hover:scale-110 "
              src={image.imageSrc}
              alt={image.id}
              data-lightboxjs="gallery-lightbox" // Identifier for Lightbox images
            />
          </div>
        ))}
      </SlideshowLightbox>
    </div>
  );
};

export default Gallery;
