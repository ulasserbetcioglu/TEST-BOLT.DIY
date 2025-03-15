import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Customers from './pages/Customers';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </div>
  );
};

export default App;
