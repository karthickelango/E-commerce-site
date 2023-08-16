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
import Electronics from './Electronics';
import Jewelery from './Jewelery';
import MenClothing from './MenClothing';
import WomenClothing from './WomenClothing';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <NavBar></NavBar>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='category' element={<Categories />}></Route>
        <Route path='brand' element={<Brand/>}></Route>
        <Route path='wishlist' element={<Wishlist/>}></Route>
        <Route path='cart' element={<Cart />}/>
        <Route path='descriptionpage/:id' element={<DescriptionPage />}></Route>
        <Route path='category/electronics' element={<Electronics />}></Route>
        <Route path='category/jewelery' element={<Jewelery />}></Route>
        <Route path='category/menclothings' element={<MenClothing />}></Route>
        <Route path='category/womenclothings' element={<WomenClothing />}></Route>
      </Routes>
     </DataProvider>
    </div>
  );
}

export default App;
