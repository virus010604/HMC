import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Plus } from "lucide-react";
import Ratting from "../component/Ratting";
import Swal from "sweetalert2"; 
import Layout from "../component/Layout";

function detail() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    console.log(id);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    scroll(0, 0);
  });
  return (
    <Layout>
      {isLoading ? (
        <>
        <div className="w-full flex justify-center p-10  my-24 lg:my-40">
          <div className="h-[100vh] flex lg:justify-center gap-4 animate-pulse flex-col lg:flex-row">
            <div className="lg:w-[360px] lg:h-[400px] bg-slate-200 rounded-lg w-[180px] h-[200px]">
            </div>
            <div className="space-y-2">
            <div className="lg:w-[500px] w-[150px] lg:h-[50px]  h-[20px] bg-slate-200 rounded-lg"></div>
            <div className="lg:w-[200px] w-[50px] lg:h-[50px]  h-[20px] bg-slate-200 rounded-lg"></div>
            </div>
          </div>
        </div>
        </>
      ) : (
        <>
          <div className="lg:my-40 my-24 flex lg:justify-around gap-20 lg:w-full lg:px-20 flex-col lg:flex-row p-10 justify-center">
            <div className="">
              <img src={data?.image} alt="" className="w-[250px]" />
            </div>
            <div className="flex flex-col gap-3 lg:w-1/2">
              <h1 className="font-bold lg:text-2xl">{data?.title}</h1>
              <h2 className="font-bold">Category: {data?.category}</h2>
              <h2 className="font-bold text-[rgb(87,45,255)] text-2xl">
                ${data?.price}
              </h2>
              <p className="text-justify lg:w-[400px] text-sm lg:text-base">
                {data?.description}
              </p>
              <div className="flex items-center gap-3">
                <Ratting rattings={data?.rating.rate} />
                <h2> {data?.rating.rate} out of 5</h2>
              </div>
              <button
                className="w-[150px] bg-transparent hover:bg-[#572dff] border-[#572dff] border-[1.5px] rounded-3xl text-[#572dff] hover:text-white font-bold py-2 px-3 text-base flex items-center justify-center gap-2 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  Swal.fire({
                    position: "bottom-end",
                    icon: false,
                    text: "Item added to cart",
                    showConfirmButton: false,
                    backdrop: false,
                    timer: 1500,
                  });
                  localStorage.setItem(`${id}`, `${JSON.stringify(data)}`);
                }}
              >
                Add to cart
                <Plus size="23px" />
              </button>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}

export default detail;
