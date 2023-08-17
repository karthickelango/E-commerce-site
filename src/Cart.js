import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './context/DataContext'
import { useSelector } from 'react-redux'
import {remove} from './store/cartSlice'
import { useDispatch } from 'react-redux'
import Loader from './empty-cart.gif'
import { Link } from 'react-router-dom'



const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart)
  // const {products} = useContext(DataContext)
  const {id} = useParams()
  const removeFromCart = (id) => {
    dispatch(remove(id))
  }
  const totalValue = products.map(product => product.price).reduce((a,b) => a+b, 0)
  return (
    <main>
      <>
       { products.length > 0 ?
       <div className=''>
        <div className='row'>
              <div className="col l18 m8 s12 mb-5 p-3 list-item cart-item">
                <div className="card mh-90">
                {products.map(product => (
                  <div className='row br-1' id={product.id}>
                    <div className='col m4'>
                      <img src={product.image} className="card-img-top p-5" alt="..." />
                    </div>
                  <div className='col m8'>
                  <div className="card-content text-start">
                    <h5 className="card-title text-truncate">{product.title}</h5>
                    <p className="card-text text-truncate">{product.description}</p>
                    <p className="card-text rating">Rating: 
                    <span className='rating-star'>{product.rating.rate} 
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="></img>
                    </span> <span className='rating-count'>({product.rating.count})</span></p>
                    <p className="card-text price">$ {product.price}</p>
                    <button className='waves-effect chart-btn btn remove' onClick={() => removeFromCart(product.id)}>Remove item</button>
                  </div>
                  </div>
                  </div>
                  ))}
              </div>
              <div className='text-end'><button className='waves-effect chart-btn btn buy-btn'>Place order</button></div>
            </div>
            <div className='col l14 m4 s12 sticky-card'>
            <div className='card'>
              <h5 className='br-1 p-3 text-start mt-0 color-secondary'>Price details</h5>
            <div className='p-3 d-f-j'>
              Price of ({products.length} items): <span className='text-end'>$ {totalValue}</span>
            </div>
            <div className='p-3 d-f-j'>
            Discount: <span className='text-color-green'>$ 0</span>
            </div>
            <div className='p-3 d-f-j'>
              Delivery Charges: <span className='text-color-green'>Free</span>
            </div>
            <div className='divider-dashed'></div>
            <div className='p-3 d-f-j fw-700'>
                Total value: <span>$ {totalValue}</span>
            </div>
            <div className='divider-dashed'></div>
            <div className='p-3 d-f-j fw-700'>
            <span className='text-color-green'>You will save ₹0 on this order</span>
            </div>
            </div>
            </div>
      </div>
    </div> : <>
              <div className='alignCenter empty'>
                <img className='emptyCart' src={Loader}/>
                <h5>Your cart is empty!</h5>
                <p>Add items to it now.</p>
                <Link to='/'>
                  <button className='waves-effect chart-btn btn default-btn'>Shop now</button>
                </Link>
              </div>   
            </>
      }
      </>
    </main>
  )
}

export default Cart