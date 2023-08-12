import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api/products'


const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
  
    const handelNavigate = (e) => {
      navigate('/cart')
    }
  
    useEffect(() => {
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
    <DataContext.Provider value={{
        products, isLoading, setIsLoading, handelNavigate
    }}>
        {children}
    </DataContext.Provider>
 )
}

export default DataContext