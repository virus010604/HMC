import React, { useState } from "react";
import { Cards } from "../component/Cards"; // Import Cards
import Sidebar from "../component/Sidebar";
import Sidebtn from "../component/Sidebtn";
import Gallery from "../component/Gallery";
import Layout from "../component/Layout";

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
    <Layout>

      <div className="mt-28 mx-auto flex w-full items-center justify-center gap-10 lg:p-20 flex-col lg:flex-row p-10">
        <h1 className="lg:text-right text-5xl lg:text-7xl text-center">
          Welcome To <strong className="text-[#572dff]">Dealio</strong>
        </h1>
        <p className="lg:max-w-[600px] lg:text-left text-justify text-sm lg:text-base">
          Dealio adalah platform{" "}
          <strong className="text-[#572dff]">e-commerce inovatif</strong> yang
          dirancang untuk memberikan pengalaman belanja online yang mudah,
          cepat, dan aman. Kami hadir dengan misi untuk{" "}
          <strong className="text-[#572dff]">menghubungkan pengguna</strong>{" "}
          dengan berbagai produk berkualitas dari seller terpercaya, menawarkan
          harga terbaik, dan memberikan layanan yang memuaskan di setiap
          transaksi.
        </p>
      </div>
      <div>
        <Gallery />
      </div>
      <div className="flex p-10 lg:p-20 justify-center mt-5 items-center w-full mx-auto relative overflow-x-hidden">
        <Sidebtn toggleSidebar={toggleSidebar} />
        <Cards onAddToCart={handleAddToCart} />
        <Sidebar
          isVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
          refreshSidebar={refreshSidebar}
        />
      </div>
    </Layout>
    </>
  );
}

export default Beranda;
