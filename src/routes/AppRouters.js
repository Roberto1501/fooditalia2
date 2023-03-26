import React from 'react';
import { Route,Routes, BrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Index from '../pages/Index';
import Food from '../pages/Food';
import Darco from '../pages/Darco';
import Containers from '../pages/Containers';



function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Home />} path='/' exact />
          <Route element={<Index />} path= '/index' exact />
          <Route element={<Food />} path= '/food' exact />
          <Route element={<Darco />} path= '/darco' exact />
          <Route element={<Containers />} path= '/containers' exact />

      </Routes>
        

    </BrowserRouter>
  );
}

export default AppRouters;
