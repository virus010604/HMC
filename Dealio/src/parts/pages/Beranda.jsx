import React from "react";
import { Cards } from "../component/Cards"; // Import Cards
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
// import { BaggageClaim } from 'lucide-react';
// import { Search } from 'lucide-react';
// import { CircleUserRound } from 'lucide-react';

function App() {
  return (
    <>
    <div>
      <Navbar />
    </div>
      <div className="flex p-20 justify-center mt-24 items-center w-full">
        <Cards />
      </div>

      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
