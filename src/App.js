import './App.css';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import Categories from './Categories';
import NewArrival from './NewArrival';
import Brand from './Brand';
import Cart from './Cart'
import Home from './Home'
import Wishlist from './Wishlist';
import DescriptionPage from './DescriptionPage';
import { DataProvider } from './context/DataContext';
import Footer from './Footer';
import Page from './Page';

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
        <Route path='category/electronics' element={<Page />}></Route>
        <Route path='category/jewelery' element={<Page />}></Route>
        <Route path='category/menclothings' element={<Page />}></Route>
        <Route path='category/womenclothings' element={<Page />}></Route>
      </Routes>
      {/* <Footer></Footer> */}
     </DataProvider>
    </div>
  );
}

export default App;
