import React from 'react';
import { Minus } from 'lucide-react'; 

const CardK = ({ judul, harga, gambar, id, setRefresh, refresh }) => {
  return (
    <div className="border py-4 px-9 flex w-full h-fit gap-9 items-center justify-between">
      <div className="flex gap-9">
        <img src={gambar} alt={judul} className="w-[150px] h-[120px] object-scale-down" />
        <div className='flex flex-col gap-2'>
          <h2 className="text-lg font-bold">{judul}</h2>
          <p className="text-[#572dff]">${harga}</p>
        </div>
      </div>
      <button onClick={() => {
        localStorage.removeItem(`${id}`);
        setRefresh(refresh + 1);
      }}>
        <Minus color='red' />
      </button>
    </div>
  );
};

export default CardK;