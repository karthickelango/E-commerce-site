import React, { useContext } from 'react'
import Loader from './loader.gif'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext'
import { useEffect, useState } from 'react'
import api from './api/products'

const Categories = () => {
  const  catImages = [
    {id:1, name: 'electronics', categorie: 'electronics' ,image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'}, 
    {id:2, name: 'jewelery', categorie: 'jewelery' ,image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg'},
    {id:3, name: 'menclothings', categorie: "men's clothing" ,image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'},
    {id:4, name: 'womenclothings', categorie: "women's clothing" ,image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'}
  ] 

  return (
    <>
      <main>
        <>
        <div className='container'>
          <div className='row'>
          {catImages.map((catImage) => (
            <Link to={catImage.name}>
            <div className='col l16 m6 s12'>
              <div className='card' id={catImage.id}>
                <img className="card-img-top p-5" src={catImage.image}></img>
                <div className='shop-btn p20'>{catImage.categorie}</div>
              </div>
          </div>
            </Link>
            ))}
          </div>
        </div>
          </>
      </main>
    </>
  )
}

export default Categories