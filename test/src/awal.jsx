import React from 'react';
import { Link } from 'react-router-dom';

export const awal = () => {
  return (
    <div>
      <h1>Welcome to the Awal Component</h1>
      <Link to="/app">
        <button className="bg-orange-500 p-2 text-white rounded">Go to Dashboard</button>
      </Link>
    </div>
  );
};

export default awal;
