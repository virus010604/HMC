import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

export const Cards = ({ onAddToCart }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const arah = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error("error fetching data: ", error);
        });
    }, 1000);
  }, [selectedCategory]);

  const filteredData = selectedCategory
    ? data.filter((item) => item.category === selectedCategory)
    : data;

  return (
    <main className="w-full flex flex-col items-start justify-center">
      {isLoading ? (
        <>
            <div className="grid lg:grid-cols-3 gap-5 w-full md:grid-cols-2 grid-cols-1 mx-auto">
          {filteredData.map((_, index) => {
            return (
        <div key={index}> 
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-lg bg-slate-200 h-60 w-72 p-7 flex flex-col justify-between">
              <div className="w-28 bg-slate-50 h-5 rounded-lg"></div>
              <div className="space-y-4">
              <div className="w-48 bg-slate-50 h-5 rounded-lg"></div>
              <div className="w-48 bg-slate-50 h-5 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
            );
          })}
          </div>
        </>
      ) : (
        <>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            className="p-2 border rounded mb-4 outline-none text-sm lg:text-base"
          >
            <option value="" className="">
              Show All
            </option>
            <option value="electronics" className="">
              Electronics
            </option>
            <option value="jewelery" className="">
              Jewelery
            </option>
            <option value="men's clothing" className="">
              Men's Clothing
            </option>
            <option value="women's clothing" className="">
              Women's Clothing
            </option>
          </select>

          <div className="grid  gap-11 w-[100%] lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {filteredData.map((item, index) => (
              <Card
                data={item}
                key={index}
                img={item.image}
                category={item.category}
                description={item.description}
                title={item.title}
                price={item.price}
                id={item.id}
                rattings={item.rating.rate}
                btn="Add to cart"
                onclick={() => {
                  arah(`/Detail/${item.id}`);
                }}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
};
