import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CardK from "../component/CardK";

const Keranjang = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const data = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const isi = JSON.parse(localStorage.getItem(key));
      data.push(isi);
    }
    setData(data);
  }, [refresh]);

  let totalCost = 0;
  for (let i = 0; i < data.length; i++) {
    totalCost += data[i].price;
  }
  useEffect(() => {
    scroll(0, 0);
  },[])

  return (
    <>
      <Navbar />
      <div className="mt-16 p-20 space-y-10 ">
        <div className="grid grid-flow-row gap-5 w-full">
          {data.map((item, index) => (
            <CardK
              key={index}
              judul={item.title}
              harga={item.price}
              gambar={item.image}
              id={item.id}
              setRefresh={setRefresh}
              refresh={refresh}
            />
          ))}
        </div>
        <div className="flex justify-center items-end flex-col gap-4">
          <h2 className="text-2xl font-bold">Total Cost: ${totalCost.toFixed(2)}</h2>
          <button className="py-2 px-4 rounded-full text-[#572dff] font-bold border border-[#572dff]  hover:bg-[#572dff] hover:text-white transition-all">Checkout</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Keranjang;