import React from 'react'
import { useSelector } from 'react-redux'
import {remove} from './store/cartSlice'
import { useDispatch } from 'react-redux'

const Brand = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.brand)
  console.log(products)
  // const {products} = useContext(DataContext)
  // const {id} = useParams()
  const removeFromCart = (id) => {
    dispatch(remove(id))
  }
  return (
    <main>
    <h2>Brand</h2>
    {JSON.stringify(products)}
    </main>
  )
}

export default Brand