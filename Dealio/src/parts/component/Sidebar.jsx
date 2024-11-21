import {  Minus, PanelRightClose } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export default function Sidebar({ isVisible, toggleSidebar, refreshSidebar }) {
  const [data, setData] = useState([]);
  let totalCost = 0;

  useEffect(() => {
    const data = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const isi = JSON.parse(localStorage.getItem(key));
      data.push(isi);
    }
    setData(data);
  }, [refreshSidebar]);

  for (let i = 0; i < data.length; i++) {
    totalCost += data[i].price;
  }

  return (
    <div className='relative space-y-5'>
      <div
        className={`overflow-auto pt-24 pb-10 px-5 shadow-lg h-full w-[400px] bg-white fixed right-0 bottom-24 top-0 z-20 transition-transform duration-300 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
        id='side'
      >
        <div className='flex items-center justify-between'>
          <button onClick={toggleSidebar} className='border p-2 rounded-lg'>
            <PanelRightClose color='#572dff' />
          </button>
          <h1>Your Total: ${totalCost.toFixed(2)}</h1>
        </div>
        {data.map((item, index) => (
          <div key={index} className="">
            <div className="grid grid-flow-row-1 gap-2 p-4 border my-2">
              <div className='flex items-center justify-between gap-2'>
                <h1 className="font-bold text-sm">{item.title.substring(0, 20)}</h1>
                <button onClick={() => {
                  localStorage.removeItem(`${item.id}`);
                  setData(data.filter((_, i) => i !== index));
                }}>
                  <Minus color='red' />
                </button>
              </div>
              <h2 className="font-semibold text-[#572dff] text-sm">${item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}