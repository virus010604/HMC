import React from "react";

const Card = ({ category, id, title, price, btn ,img ,description}) => {
  return (
    <div className="shadow-md border rounded-md p-4 flex  w-96 h-[25rem] text-black relative" style={{
      backgroundImage: `url(${img})`,
      backgroundSize: '40%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="z-10 flex flex-col justify-between w-full">
      <div className="text-base"><strong>{title}</strong></div>
      <div className="space-y-2">
      <div className="flex justify-between items-center">
      <h1 className="text-xl font-semibold text-orange-500">${price}</h1>
      <button className="bg-orange-500 border-none rounded-xl text-white font-bold p-2">
        {btn}
      </button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Card;
