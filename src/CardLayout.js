import React from 'react'
import { Link, useParams } from 'react-router-dom'

const CardLayout = ({products}) => {
  const {id} = useParams()
  const product = products.find(product => (product.id).toString() === id)

  return (
    <main>
      <div className=''>
        <div className='row'>
            {products.map(product => (
              <div className="col l14 m4 s12 mb-5 p-3 list-item">
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
                      <a className="btn btn-primary chart-btn ">Shop now !</a> 
                  </div>
              </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
    </main>
  )
}

export default CardLayout