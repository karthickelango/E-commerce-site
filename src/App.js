import './App.css';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import Categories from './Categories';
import NewArrival from './NewArrival';
import Brand from './Brand';
import Cart from './Cart'
import Home from './Home'
import { useState } from 'react';
import api from './api/products'
import DescriptionPage from './DescriptionPage';


function App() {
  
  const [products, setProducts] = useState([])

  useState(() => {
    const fetchItems = async() => {
      try {
        const response = await api.get('products');
        setProducts(response.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchItems();
  })

  return (
    <div className="App">
     <NavBar></NavBar>
     <Routes>
      <Route path='/' element={<Home products={products}/>}></Route>
      <Route path='categories' element={<Categories/>}></Route>
      <Route path='new arrival' element={<NewArrival/>}></Route>
      <Route path='brand' element={<Brand/>}></Route>
      <Route path='cart' element={<Cart/>}></Route>
      <Route path='descriptionpage/:id' element={<DescriptionPage
        products={products}
      />}></Route>
     </Routes>
    </div>
  );
}

export default App;
