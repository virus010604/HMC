import React from "react";
import { Minus } from "lucide-react";

const CardK = ({ judul, harga, gambar, id, quantity, setRefresh, refresh }) => {
  return (
    <div className="border lg:py-4 lg:px-9 flex w-full h-fit gap-9 p-7 lg-0 lg:justify-between">
      <div className="flex gap-9 flex-col lg:flex-row">
        <img
          src={gambar}
          alt={judul}
          className="w-[150px] h-[120px] object-scale-down "
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">{judul}</h2>
          <p className="text-[#572dff]">${harga}</p>
          <p className="text-gray-600">Quantity: {quantity}</p>
        </div>
      </div>
      <button
        className="h-fit"
        onClick={() => {
          if (quantity > 1) {
            quantity -= 1;
            localStorage.setItem(`${id}`,JSON.stringify({ title: judul, price: harga, image: gambar, id,quantity, }));
          } else {
            localStorage.removeItem(`${id}`);
          }
          setRefresh(refresh + 1);
        }}
      >
        <Minus color="red" />
      </button>
    </div>
  );
};

export default CardK;
