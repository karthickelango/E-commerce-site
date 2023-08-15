import './App.css';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import Categories from './Categories';
import NewArrival from './NewArrival';
import Brand from './Brand';
import Cart from './Cart'
import Home from './Home'
import Wishlist from './Wishlist';
import { useState } from 'react';
import api from './api/products'
import DescriptionPage from './DescriptionPage';
import { useNavigate } from "react-router-dom";
import { DataProvider } from './context/DataContext';


function App() {
  return (
    <div className="App">
      <DataProvider>
        <NavBar></NavBar>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='categories' element={<Categories />}></Route>
        <Route path='brand' element={<Brand/>}></Route>
        <Route path='wishlist' element={<Wishlist/>}></Route>
        <Route path='cart' element={<Cart />}/>
        <Route path='descriptionpage/:id' element={<DescriptionPage />}></Route>
      </Routes>
     </DataProvider>
    </div>
  );
}

export default App;
