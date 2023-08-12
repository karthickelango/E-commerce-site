import { Button } from '@mui/material';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './context/DataContext';

const sociaoIcons = ['icon-facebook fb-icon',' icon-twitter-alt fb-tw', 'icon-google fb-go', 'icon-pinterest fb-pi', 'icon-printer fb-pr', 'icon-email fb-em'];
const payIcon = ['icon-cc-paypal', 'icon-cc-visa', 'icon-cc-mastercard', 'icon-cc-stripe', 'icon-cc-amex']
const contactOptions = [{id: 0, icon: 'icon-headphone-alt', text: 'CALL +9999999999 TO QUERY'}, {id: 1, icon: 'icon-truck', text: 'USUALLY SHIPS IN 10-15 WORKING DAYS'}, {id: 2, icon: 'icon-reload', text: 'EASY RETURN'}]
const views = [{id: 0, icon: 'icon-eye viewed-col', text: 'Viewed:', item: '40 items'}, {id: 1, icon: 'icon-heart viewed-col', text: 'Add to Boards:', item: '40 items'}, {id: 2, icon: 'icon-shopping-cart viewed-col', text: 'Last Purchased:', item: '4 Days ago'}]

const DescriptionPage = () => {
   const {products, handelNavigate} = useContext(DataContext)
  const {id} = useParams()
  const product = products.find(product => (product.id).toString() === id)

  return (
<main className='list-item mt-3'>
   <div className="nav-margin">
      <div className="row">
         <div className="col m12 l12 s12">
            <div className="card">
               <div className="row">
                  <div className="col l7 m12 s12 my-board">
                     <div className="my-board-position ">
                        <a className="myboard-trigger" href="#myboard"><span className="product-badge"><span className="icon-heart"></span>&nbsp;ADD TO MY BOARD</span></a> 
                        <div className="slider-for " id="product-img-view">
                           <div><img  className="responsive-img"  src={product.image} /></div>
                        </div>
                        <div className="col m12">
                           <div className="viewed-items">
                              <div className="row">
                                 {views.map((view) => (
                                    <div className="col m4" key={view.id}>
                                       <span className={view.icon}>&nbsp;<span className="viewed-col">{view.text}</span><span className="view-col">{view.item}</span></span>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col l5 m12 s12 product-detail detail">
                     <div className="row">
                        <div className="col l12 m12 s12">
                           <div className="row">
                              <div className="col l12 m12 s12 ">
                                 <div className="col l12 m12 s12">
                                    <p className="pro-code product-container">Product Code:<span className="code-id">SH{product.id}</span></p>
                                 </div>
                                 <div className="col l12 m12 s12 list-item">
                                    <h4 className="product-container prod_name">{product.title}</h4>
                                    <p className="card-text rating">Rating: 
                                       <span className='rating-star'>{product.rating.rate} 
                                       <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="></img>
                                       </span> <span className='rating-count'>({product.rating.count})</span>
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col l12 m12 s12">
                           <div className="col l12 m12 s12">
                              <div className="product-text product-container">
                                 <p><span className="old-price product-price">$ 50</span>&nbsp;&nbsp;&nbsp;<span className="new-price">$ {product.price} </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="cupon-badge">&nbsp;&nbsp;Use<span className="cupon_col">"SALE20"</span>to get extra <br></br>&nbsp;&nbsp;20% off at check-out</span></p>
                                 <a href="" data-target="emi-modal" className="modal_1-trigger">
                                    <p className="emi-opt"><span className="icon-pie-chart">&nbsp;</span>EMI starting $ 10</p>
                                 </a>
                              </div>
                           </div>
                           <div className="col l12 m12 s12 buy_margin">
                              <div className="row">
                                 <div className="col l6 m6 s12 hide-on-small-only">
                                    <Button onClick={handelNavigate} products={products}>
                                       <div className="waves-effect chart-btn btn lg">Add to cart</div>
                                    </Button>
                                 </div>
                                 <div className="col l6 m6 s12 hide-on-small-only">
                                    <a href="cart.html" className="waves-effect chart-btn btn lg">BUY NOW</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col l12 m12 s12">
                           <ul className="query-part">
                           {contactOptions.map((cOption) => (
                              <li key={cOption.id}>
                                 <span className={cOption.icon}>&nbsp;&nbsp; {cOption.text}</span>     
                              </li>
                              ))} 
                           </ul>
                           <ul className="mebel-pay product-container">
                              <li>
                                 {payIcon.map((pIcon) => (
                                 <span className={pIcon}>&nbsp;</span>
                                 ))}
                              </li>
                           </ul>
                        </div>
                        <div className="col l10 m10 s12">
                           <div className="file-field input-field">
                              <div className="btn cupon_btn">
                                 <span>CHECK</span>
                              </div>
                              <div className="file-path-wrapper">
                                 <input className="file-path validate" placeholder="Enter Pincode" type="text" />
                                 <label>Availibility and Shipping Detailss</label>
                              </div>
                           </div>
                        </div>
                        <div className="col m12 l12 social-mar">
                           <ul className="social-row">
                              <li>
                                 {sociaoIcons.map((sicons) => (
                                 <span className={sicons}></span>
                                 ))}
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</main>
  )
}

export default DescriptionPage