import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Keranjang = () => {
  const [data,setData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("2")
    const parsedata =  JSON.parse(data)
    setData(parsedata)
  },[])



  return (
    <>
    <Navbar />
    <div className="m-96">
    <h1>{data?.title}</h1>
    <img src={data?.image} alt="" />
    </div>
    <Footer />
    </>
  );
};

export default Keranjang;
