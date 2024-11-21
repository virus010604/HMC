import React from "react";
import { Plus } from "lucide-react";
import Ratting from "./Ratting";

const Card = ({ category, id, title, price, btn, img, description, onclick, data, rattings, onAddToCart }) => {
  return (
    <div
      className="hover:shadow-md border rounded-md p-7 flex  w-80 h-[25rem] text-black relative cursor-pointer hover:-translate-y-3 transition-all"
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
          <div className="flex items-center gap-3">
            <Ratting rattings={rattings} />
            <h2>{rattings} out of 5</h2>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-base text-gray-600">
              <strong>${price.toFixed(2)}</strong>
            </h1>
            <button
              className="bg-transparent hover:bg-[#572dff] border-[#572dff] border-[1.5px] rounded-3xl text-[#572dff] hover:text-white font-bold py-2 px-3 text-base flex items-center justify-center gap-2 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                alert('Item added to cart');
                localStorage.setItem(`${id}`, `${JSON.stringify(data)}`);
                onAddToCart();
              }}
            >
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