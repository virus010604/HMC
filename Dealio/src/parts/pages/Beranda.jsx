import React, { useState } from 'react';
import { Cards } from '../component/Cards'; // Import Cards
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Sidebar from '../component/Sidebar';
import Sidebtn from '../component/Sidebtn';
import Gallery from '../component/Gallery';

function Beranda() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [refreshSidebar, setRefreshSidebar] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleAddToCart = () => {
    setRefreshSidebar(refreshSidebar + 1);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="mt-28 mx-auto flex w-full items-center justify-center gap-10 p-20">
        <h1 className="text-right text-7xl">
          Welcome To <strong className="text-[#572dff]">Dealio</strong>
        </h1>
        <p className="max-w-[600px] text-left ">
          Dealio adalah platform e-commerce inovatif yang dirancang untuk
          memberikan pengalaman belanja online yang mudah, cepat, dan aman. Kami
          hadir dengan misi untuk menghubungkan pengguna dengan berbagai produk
          berkualitas dari seller terpercaya, menawarkan harga terbaik, dan
          memberikan layanan yang memuaskan di setiap transaksi.
        </p>
      </div>
      <div>
        <Gallery />
      </div>
      <div className="flex p-20 justify-center mt-5 items-center w-full mx-auto relative overflow-x-hidden">
        <Sidebtn toggleSidebar={toggleSidebar} />
        <Cards onAddToCart={handleAddToCart} />
        <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} refreshSidebar={refreshSidebar} />
      </div>
      <div id='foot'>
        <Footer />
      </div>
    </>
  );
}

export default Beranda;