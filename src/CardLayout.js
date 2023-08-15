import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {add} from './store/cartSlice'

const CardLayout = ({products}) => {
  const dispatch = useDispatch()
  const {id} = useParams()
  // const product = products.find(product => (product.id).toString() === id)
  const addToCart = (product) => {
    dispatch(add(product))
  }

  return (
    <>
      <div className=''>
        <div className='row'>
            {products.map(product => (
              <div className="col l13 m3 s12 mb-5 p-3 list-item" key={product.id}>
                <Link to={`descriptionpage/${product.id}`}>
                <div className="card" id={product.id}>
                <img src={product.image} className="card-img-top p-5" alt="..." />
                  <div className="card-content">
                    <h5 className="card-title text-truncate">{product.title}</h5>
                    <p className="card-text text-truncate">{product.description}</p>
                    <p className="card-text rating">Rating: 
                    <span className='rating-star'>{product.rating.rate} 
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="></img>
                    </span> <span className='rating-count'>({product.rating.count})</span></p>
                    <p className="card-text price">$ {product.price}</p>
                      <span className="shop-btn ">Shop now !</span> 
                  </div>
              </div>
              </Link>
              {/* <button onClick={() => addToCart(product)}>Add to cart</button> */}
            </div>
          ))}
      </div>
    </div>
    </>
  )
}

export default CardLayout