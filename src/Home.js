import React from 'react'
import CardLayout from './CardLayout'
import Loader from './loader.gif'
import { Rerousel } from 'rerousel'
import { useRef } from 'react'

const Home = ({products, isLoading}) => {
  const ref = useRef(null);

  return (
    <main>
    {isLoading && 
    <div className='alignCenter'>
      <img src={Loader}/>
    </div>
    }
    {
      !isLoading &&
      <>
     <Rerousel itemRef={ref} className='rerousel'>
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/41fac6f59554c679.jpg?q=20" ref={ref} />
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/a13590e0362f7e20.jpg?q=20" />
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/af0b63005dd9f57f.jpg?q=20" />
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/41fac6f59554c679.jpg?q=20" />
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/a13590e0362f7e20.jpg?q=20" />
    </Rerousel>
    <CardLayout products={products}/>
    </>
    }
    </main>
  )
}

export default Home

