import React from 'react';

const CardK = ({ judul, harga, gambar, id }) => {
  return (
    <div className="border py-4 px-9 flex w-full h-fit gap-9">
      <img src={gambar} alt={judul} className="w-[150px] h-[120px] object-scale-down" />
      <div className='flex flex-col gap-2'>
      <h2 className="text-lg font-bold">{judul}</h2>
      <p className="text-gray-600">${harga}</p>
      </div>
    </div>
  );
};

export default CardK;