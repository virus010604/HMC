import React from "react";
import { Plus } from "lucide-react";
import Ratting from "./Ratting";
import Swal from "sweetalert2";

const Card = ({ id, title, price, btn, img, onclick, data, rattings, onAddToCart }) => {
  const handleAddToCart = () => {
    const existingItem = JSON.parse(localStorage.getItem(id));
    if (existingItem) {
      existingItem.quantity += 1;
      localStorage.setItem(id , JSON.stringify(existingItem));
    } else {
      const newItem = { ...data, quantity: 1 };
      localStorage.setItem(id, JSON.stringify(newItem));
    }
    Swal.fire({
      position: "bottom-end",
      icon: false,
      text: "Item added to cart",
      showConfirmButton: false,
      backdrop: false,
      timer: 1500,
    });
    onAddToCart();
  };

  return (
    <div
      className="hover:shadow-md border rounded-md p-7 flex  w-[100%] lg:w-80 lg:h-[25rem] h-[20rem] text-black relative cursor-pointer hover:-translate-y-3 transition-all"
      onClick={onclick}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "30%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-10 flex flex-col justify-between w-full">
        <div className="lg:text-base text-gray-800 text-sm">
          <strong>{title}</strong>
        </div>
        <div className="space-y-4">
          <div className=" items-center gap-3  hidden lg:flex">
            <Ratting rattings={rattings} />
            <h2>{rattings}/5</h2>
          </div>
          <div className="flex justify-between items-center flex-col lg:flex-row gap-2">
            <h1 className="lg:text-base text-gray-600 text-sm">
              <strong>${price.toFixed(2)}</strong>
            </h1>
            <button
              className="bg-transparent hover:bg-[#572dff] border-[#572dff] border-[1.5px] rounded-3xl text-[#572dff] hover:text-white font-bold lg:py-2 px-3 flex items-center justify-center gap-2 transition-all text-sm lg:text-base py-1"
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
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