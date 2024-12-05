import React from "react";
import c from "../assets/img/c.webp";
import d from "../assets/img/d.webp";
import e from "../assets/img/e.webp";
import g from "../assets/img/g.webp";
import f from "../assets/img/f.webp";
import widec from "../assets/img/widec.webp";
import widea from "../assets/img/widea.webp";

const gambar = [g, f, e, widec, d, widea, c];

function Gallery() {
  return (
    <div className="w-full mx-auto px-10 lg:px-20 p-5 pb-10 gap-5 lg:columns-4 lg:mt-7 columns-2">
      {gambar.map((src, index) => (
        <div key={index} className="mb-4 ">
          <img src={src} alt="" className="w-full object-cover rounded-lg " loading="lazy"/>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
