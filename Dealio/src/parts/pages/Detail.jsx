import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { useParams } from "react-router-dom";
import Footer from "../component/Footer";
import { Plus } from "lucide-react";
import Ratting from "../component/Ratting";

function detail() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    console.log(id);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error("error fetching data: ", error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="my-40 flex justify-around gap-20 w-full px-20">
        <div className="">
          <img src={data?.image} alt="" className="w-[250px]" />
        </div>
        <div className="flex flex-col gap-3 w-1/2">
          <h1 className="font-bold text-2xl">{data?.title}</h1>
          <h2 className="font-bold">{data?.category}</h2>
          <h2 className="font-bold text-[rgb(87,45,255)] text-2xl">
            ${data?.price}
          </h2>
          <p className="text-justify w-[400px]">{data?.description}</p>
          <div className="flex items-center gap-3">
          <Ratting rattings={data?.rating.rate}/>
        <h2>{data?.rating.rate}</h2>
          </div>
          <button
            className="w-[150px] bg-transparent hover:bg-[#572dff] border-[#572dff] border-[1.5px] rounded-3xl text-[#572dff] hover:text-white font-bold py-2 px-3 text-base flex items-center justify-center gap-2 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              alert('Item added to cart')
              localStorage.setItem(`${id}`, `${JSON.stringify(data)}`);
            }}
          >
            Add to cart
            <Plus size="23px" />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default detail;
