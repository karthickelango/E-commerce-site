import React from 'react'
import CardLayout from './CardLayout'

const Home = ({products}) => {
  return (
    <>
    <div className='center'>
      <div><img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9328952d4685c479.jpg?q=20" /></div>
      <div><img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7fd0e4ab26429926.jpg?q=20" /></div>
      <div><img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/94f080e321d77ebf.jpg?q=20" /></div>
      <div><img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ed12b7707a04473c.jpg?q=20" /></div>
      <div><img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9328952d4685c479.jpg?q=20" /></div>
      <div><img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7fd0e4ab26429926.jpg?q=20" /></div>
    </div>
    <CardLayout products={products}/>
    </>
  )
}

export default Home