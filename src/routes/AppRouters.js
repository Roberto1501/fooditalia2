import React from 'react';
import { Route,Routes, BrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Index from '../pages/Index';
import Food from '../pages/Food';


function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Home />} path='/' exact />
          <Route element={<Index />} path= '/index' exact />
          <Route element={<Food />} path= '/food' exact />
      </Routes>
        

    </BrowserRouter>
  );
}

export default AppRouters;
