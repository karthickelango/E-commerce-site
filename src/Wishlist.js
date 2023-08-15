import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from './empty-cart.gif'
import { removeWishlist } from './store/wishlistSlice'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Wishlist = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.wishlist)
    const removeFromCart = (id) => {
        dispatch(removeWishlist(id))
      }
  return (
    <main>
         <>
       { products.length > 0 ?
       <div className=''>
        <div className='row'>
              <div className="col l13 m3 s12 mb-5 p-3 list-item cart-item">
                <div className="card">
                    <FavoriteIcon className='favIcon'></FavoriteIcon>
                {products.map(product => (
                  <div className='row br-1' id={product.id}>
                      <img src={product.image} className="card-img-top p-5" alt="..." />                  
                  <div className="card-content">
                    <h5 className="card-title text-truncate">{product.title}</h5>
                    <p className="card-text text-truncate">{product.description}</p>
                    <p className="card-text rating">Rating: 
                    <span className='rating-star'>{product.rating.rate} 
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="></img>
                    </span> <span className='rating-count'>({product.rating.count})</span></p>
                    <p className="card-text price">$ {product.price}</p>
                    <button className='waves-effect chart-btn btn remove' onClick={() => removeFromCart(product.id)}>Remove</button>
                  </div>
                  </div>
                  ))}
              </div>
            </div>
      </div>
    </div> : <>
              <div className='alignCenter empty'>
                <img className='emptyCart' src={Loader}/>
                <h5>Your wishlist is empty!</h5>
                {/* <p>Add items to it now.</p> */}
                <Link to='/'>
                  <button className='waves-effect chart-btn btn default-btn'>Go to home</button>
                </Link>
              </div>   
            </>
      }
      </>
    </main>
  )
}

export default Wishlist