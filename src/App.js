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
import { useNavigate } from "react-router-dom";



function App() {
  
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const handelNavigate = (e) => {
    navigate('/cart')
  }

  useState(() => {
    const fetchItems = async() => {
      try {
        const response = await api.get('products');
        setProducts(response.data)
      } catch(err) {
        console.log(err)
      }finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async() => fetchItems())()
    }, 3000)
  })

  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
      <Route path='/' element={<Home products={products} isLoading={isLoading} setIsLoading={setIsLoading}/>}></Route>
      <Route path='categories' element={<Categories products={products} isLoading={isLoading} setIsLoading={setIsLoading}/>}></Route>
      <Route path='new arrival' element={<NewArrival/>}></Route>
      <Route path='brand' element={<Brand/>}></Route>
      <Route path='cart' element={<Cart/>}/>
      <Route path='descriptionpage/:id' element={<DescriptionPage
        products={products} handelNavigate={handelNavigate}
      />}></Route>
     </Routes>
    </div>
  );
}

export default App;
