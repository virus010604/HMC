import React, { useEffect, useState } from "react";
import Card from "./Card";

export const Cards = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchNow, setFetchNow] = useState(false);

  const handleClick = () => {
    setFetchNow(!fetchNow);
  };

  useEffect(() => {
    if (fetchNow) {
      setIsLoading(true);
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => {
            setData(json);
            setIsLoading(false); 
          })
          .catch((error) => {
            setIsLoading(false);
            console.error("error fetching data: ", error);
          });
      }, 5000); 
    }
  }, [fetchNow]);

  return (
    <main>
      {isLoading ? (
        <h1> LOAD HARAP BERSABAR </h1>
      ) : (
        <>
        <center>
          <button onClick={handleClick} className="p-3 border-black  bg-orange-500 text-white font-black rounded-lg px-5">
            LOAD
          </button>
        </center>
          <div className="flex flex-wrap gap-4 p-4">
            {data?.map((item, index) => (
              <Card
                key={index}
                userId={item?.userId}
                id={item?.id}
                title={item?.title}
                body={item?.body}
                btn="TAMBAHKAN"
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
};
