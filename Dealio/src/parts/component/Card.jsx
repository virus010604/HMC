import React from "react";
import { BaggageClaim } from "lucide-react";
import { Plus } from "lucide-react";

const Card = ({ category, id, title, price, btn, img, description , onclick, data}) => {
  return (
    <div
      className="hover:shadow-md border rounded-md p-7 flex  w-72 h-[25rem] text-black relative cursor-pointer hover:-translate-y-3 transition-all"
      onClick={onclick}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "30%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-10 flex flex-col justify-between w-full">
        <div className="text-base text-gray-800">
          <strong>{title}</strong>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h1 className="text-base text-gray-600">
              <strong>${price}</strong>
            </h1>
            <button className="bg-transparent hover:bg-[#572dff] border-[#572dff] border-[1.5px] rounded-3xl text-[#572dff] hover:text-white font-bold py-2 px-3 text-base flex items-center justify-center gap-2 transition-all"
            onClick={(e)=>{
              e.stopPropagation()
              localStorage.setItem(`${id}`,`${JSON.stringify(data)}`)
            }}>
              {btn}
              <Plus size="23px" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;