import React from 'react';
import { Link } from 'react-router-dom';

export const awal = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
      <h1>Welcome to Doelio</h1>
      <Link to="/Beranda">
        <button className="bg-[#572dff] p-2 text-white rounded">Get Started</button>
      </Link>
    </div>
  );
};

export default awal;