import React from "react";
import Button from "./Button";

const ServiceCard = ({ src, title, desc }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      {/* Image */}
      <img
        src={src}
        alt="Service"
        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      {/* Title (Always Visible) */}
      <div className="absolute top-6  right-10 w-full text-center bg-slate-100 text-black text-3xl font-bold font-playfair  px-6 py-2  rounded-lg   z-10">
        {title}
      </div>

      {/* Description (Visible on Hover) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-10">
        <p className="text-white py-6 text-lg font-figtree">{desc}</p>
        <Button text={"View More"} to={"/"} color={"white"} />
      </div>
    </div>
  );
};

export default ServiceCard;
