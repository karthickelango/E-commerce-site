import React, { useContext } from 'react'
import Loader from './loader.gif'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext'
import { useEffect, useState } from 'react'
import api from './api/products'
import { addCat } from './store/pageSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Categories = () => {
  const dispatch = useDispatch()
  const { reqType, setreqType} = useContext(DataContext)
  const  catImages = [
    {id:1, url: "electronics", name: 'electronics', categorie: 'electronics' ,image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'}, 
    {id:2, url: "jewelery", name: 'jewelery', categorie: 'jewelery' ,image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg'},
    {id:3, url: "men's clothing", name: 'menclothings', categorie: "men's clothing" ,image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'},
    {id:4, url: "women's clothing", name: 'womenclothings', categorie: "women's clothing" ,image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'}
  ] 
  const products = useSelector(state => state.page)
   const addItem = (product) => {
      dispatch(addCat(product))
   }

  return (
    <>
      <main>
        <>
        <div className='container'>
          <div className='row'onClick={() => addItem(products)}>
          {catImages.map((catImage) => (
            <Link to={catImage.name} onClick={() => setreqType(catImage.url)}>
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