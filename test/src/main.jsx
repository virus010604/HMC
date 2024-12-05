import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Awal from './awal.jsx'; 
import App from './App.jsx'; 
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Awal />} /> 
        <Route path="/app" element={<App />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
