import React from "react";
import { Facebook, Instagram, Twitter,Youtube, Linkedin } from "lucide-react";
function Footer() {
  return (
    <footer className="w-full flex justify-center flex-col bg-[#572dff0a] p-20 gap-20 pb-9">
        <div className="flex justify-center gap-28">
      <div className="flex ">
        <img
          src="../../src/parts/assets/img/footpic.png"
          alt=""
          className="w-[300px] object-cover"
        />
      <div className="flex flex-col gap-4 w-[350px]">
        <h1 className="font-bold text-[#572Dff] text-lg">Delio Indonesia</h1>
        <p className="text-justify">
          Dealio adalah platform e-commerce inovatif yang dirancang untuk
          memberikan pengalaman belanja online yang mudah, cepat, dan aman. Kami
          hadir dengan misi untuk menghubungkan pengguna dengan berbagai produk
          berkualitas dari seller terpercaya, menawarkan harga terbaik, dan
          memberikan layanan yang memuaskan di setiap transaksi.
        </p>
      <div className="flex flex-col gap-4 ">
        <button className="py-2 px-4 rounded-full text-[#572dff] font-bold border border-[#572dff] w-[200px] hover:bg-[#572dff] hover:text-white transition-all">Download IOS</button>
        <button className="py-2 px-4 rounded-full text-[#572dff] font-bold border border-[#572dff] w-[200px] hover:bg-[#572dff] hover:text-white transition-all">Download Android</button>
      </div>
      </div>
      </div>
      <div className="flex flex-col gap-4">
      <h1 className="font-bold text-[#572Dff] text-lg">Navigasi</h1>
      <div className="flex gap-3">

        <div className="flex flex-col">
      <a href="">Home</a>
      <a href="">Keranjang</a>
      <a href="">About us</a>
      <a href="">FAQs</a>
      <a href="">Lorem ipsum dolor</a>
      <a href="">Lorem ipsum dolor</a>
      <a href="">Lorem ipsum dolor</a>
        </div>
        <div className="flex flex-col">
      <a href="">Lorem ipsum dolor</a>
      <a href="">Lorem ipsum dolor</a>
      <a href="">Lorem ipsum dolor</a>
      <a href="">Lorem ipsum dolor</a>
      <a href="">Lorem ipsum dolor</a>
      <a href="">Lorem ipsum dolor</a>
      <a href="">Lorem ipsum dolor</a>
        </div>
      </div>
      </div>
        </div>
        <div className="flex justify-between items-center padding">
            <div className="flex justify-center items-start gap-5">
            <a href="" className="hover:-translate-y-1 transition-all"><Facebook color="#572dff" /></a>
            <a href="" className="hover:-translate-y-1 transition-all"><Instagram color="#572dff" /></a>
            <a href="" className="hover:-translate-y-1 transition-all"><Twitter color="#572dff"/></a>
            <a href="" className="hover:-translate-y-1 transition-all"><Youtube color="#572dff"/></a>
            <a href="" className="hover:-translate-y-1 transition-all"><Linkedin color="#572dff"/></a>
            </div>
            <div>
                <h1>&copy;Designed by <strong className="text-[#572dff]">Juan</strong> | 2024</h1>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
