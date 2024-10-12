import React from "react";

const Card = ({ userId, id, title, body, btn }) => {
  return (
    <div className="shadow-md border rounded-md p-4 flex flex-col gap-5 max-w-96">
      <div className="text-lg">User ID: {userId}</div>
      <div className="text-lg">ID: {id}</div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="text-xs">{body}</div>
      <button className="bg-orange-500 border-none rounded-xl text-white font-bold p-2">
        {btn}
      </button>
    </div>
  );
};

export default Card;
