import React from 'react'
import { useState, useEffect, useParams } from 'react'
import api from './api/products'
import Loader from './loader.gif'



const MenClothing = () => {
    const [categories, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async() => {
      try {
        const response = await api.get("products/category/men's%20clothing");
        setProducts(response.data)
      } catch(err) {
        console.log(err)
      }finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async() => fetchItems())()
    })
  })
  return (
        <>
    {isLoading && 
      <div className='alignCenter'>
        <img src={Loader}/>
      </div>
      } {!isLoading &&
        <main>
      <div className=''>
        <div className='row'>
            {categories.map(product => (
              <div className="col l13 m3 s12 mb-5 p-3 list-item">
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
                      <a className="shop-btn ">Shop now !</a> 
                  </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    </main>
      }
    </>
  )
}

export default MenClothing