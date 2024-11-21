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
          <div className="w-full h-[100vh] flex justify-center items-center">
            <h1 className="text-center">Loading...</h1>
          </div>
        </>
      ) : (
        <>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            className="p-2 border rounded mb-4 outline-none"
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

          <div className="grid  gap-11 w-full grid-cols-3">
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