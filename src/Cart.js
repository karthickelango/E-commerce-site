import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './context/DataContext'

const Cart = () => {
  const {products} = useContext(DataContext)
  const {id} = useParams()
  const product = products.find(product => (product.id).toString() === id)
  return (
    <main>
      <div className="card">
        <div>{product.image}</div>
      </div>
    </main>
  )
}

export default Cart