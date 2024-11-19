import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./parts/pages/Login.jsx";
import Beranda from "./parts/pages/Beranda.jsx";
import "./index.css";
import Keranjang from "./parts/pages/Keranjang.jsx";
import Detail from "./parts/pages/Detail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Beranda" element={<Beranda />} />
        <Route path="/Keranjang" element={<Keranjang />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
