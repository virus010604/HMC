import React from "react";
import { Cards } from "./pertemuansekian/component/Cards";

function App() {
  return (
    <>
      <div className="text-5xl text-center font-bold bg-orange-500 p-5 shadow-xl">
        <h1 className="text-white">DASHBOARD</h1>
      </div>
      <div className="flex gap-2 p-4 justify-center">
        <Cards />
      </div>
    </>
  );
}

export default App;
