import React from 'react'

import a from "../assets/img/a.jpg";
import wideb from "../assets/img/wideb.jpg";
import b from "../assets/img/b.jpg";
import c from "../assets/img/c.jpg";
import d from "../assets/img/d.jpg";
import e from "../assets/img/e.jpg";
import g from "../assets/img/g.jpg";
import f from "../assets/img/f.jpg";
import widec from "../assets/img/widec.jpg";
import widea from "../assets/img/widea.jpg";

const gambar = [g,f, e, widec,d, widea,c];

function Gallery() {


  return (
    <div className='w-full mx-auto  px-20 p-5 pb-10 gap-5 columns-4 mt-7'>
        {gambar.map((src , index)=>
        <div key={index} className='mb-4 '>
            <img src={src} alt="" className='w-full object-cover rounded-lg'/>
        </div>
        )}

    </div>
  )
}

export default Gallery