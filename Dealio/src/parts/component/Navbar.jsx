import React from "react";
import { ShoppingCart,Search , CircleUserRound} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-sm  font-bold bg-[#572dff] px-20 py-5 shadow-md flex text-white justify-between items-center fixed top-0 right-0 left-0 z-50">
      <a href="" className="text-3xl">Dealio</a>
      <nav className="flex gap-6 items-center">
        <Link to="/Beranda">
        Home
        </Link>
        <a href="">About Us</a>
        <a href="#foot">Contact</a>
        <div className=" flex gap-7 items-center">
          <div className="flex items-center bg-white p-2 rounded-full px-4 gap-1">
            <input
              type="text"
              className="outline-none rounded-lg text-black font-normal bg-transparent w-80"
              placeholder="Search"
            />
            <Search color="#572dff" />
          </div>
          <Link to="/Keranjang">
            <ShoppingCart />
          </Link>
          <CircleUserRound />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
