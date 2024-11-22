import React, { useState } from "react";
import { ShoppingCart, Search, LogOut, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div className="text-sm font-bold bg-[#572dff] p-10 lg:px-20 py-5 shadow-md flex text-white justify-between items-center fixed top-0 right-0 left-0 z-50">
      <a href="" className="text-3xl">Dealio</a>
      <div className="lg:hidden flex items-center gap-4">
      <Link to="/Keranjang">
            <ShoppingCart/>
          </Link>
          <Link to="/">
            <LogOut />
            </Link>
      <button onClick={toggleNav} className="">
        <Menu />
      </button>
      </div>
      <nav className={`transition-all flex gap-6 items-center ${navVisible ? 'top-16' : '-top-[300%]'} lg:static lg:flex-row lg:top-0 absolute bg-[#572dff] right-0 left-0 flex-col p-5 border-t lg:border-none lg:p-0`} id="navb">
        <Link to="/Beranda">Home</Link>
        <a href="">About Us</a>
        <a href="#foot">Contact</a>
        <div className="flex gap-7 items-center">
          <div className="lg:flex items-center bg-white p-2 rounded-full px-4 gap-1 hidden">
            <input
              type="text"
              className="outline-none rounded-lg text-black font-normal bg-transparent w-80 hid"
              placeholder="Search"
            />
            <Search color="#572dff" />
          </div>
          <div className="hidden lg:flex items-center gap-6">
          <Link to="/Keranjang">
            <ShoppingCart />
          </Link>
          <Link to="/">
            <LogOut />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
