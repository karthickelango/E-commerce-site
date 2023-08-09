import React from 'react'
import { useParams } from 'react-router-dom'

const DescriptionPage = ({products}) => {
  const {id} = useParams()
  const product = products.find(product => (product.id).toString() === id)
  return (
    <main classNameName='list-item mt-3'>
      
<div className="nav-margin">
         <div className="row">
            <div className="col m12 l12 s12">
               <div className="card">
                  <div className="row">
                     <div className="col l7 m12 s12 my-board">
                        <div className="my-board-position ">
                           <a className="myboard-trigger" href="#myboard"><span className="product-badge"><span className="icon-heart"></span>&nbsp;ADD TO MY BOARD</span></a> 
                           <div class="slider-for " id="product-img-view">
                              <div><img  class="responsive-img"  src={product.image} /></div>
                           </div>
                           <div className="col m12">
                              <div className="viewed-items">
                                 <div className="row">
                                    <div className="col m4">
                                       <span className="icon-eye viewed-col">&nbsp;<span className="viewed-col">Viewed:</span><span className="view-col">40 items</span></span>
                                    </div>
                                    <div className="col m4">
                                       <span className="icon-heart viewed-col">&nbsp;<span className="viewed-col">Add to Boards:</span><span className="view-col">40 items</span></span>
                                    </div>
                                    <div className="col m4">
                                       <span className="icon-shopping-cart viewed-col">&nbsp;<span className="viewed-col">Last Purchased:</span><span className="view-col">4 Days ago</span></span>
                                    </div>
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
                                          </span> <span className='rating-count'>({product.rating.count})</span></p>
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
                                       <a href="cart.html" className="waves-effect chart-btn btn lg">BUY NOW</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col l12 m12 s12">
                              <ul className="query-part">
                                 <li><span className="icon-headphone-alt">&nbsp;&nbsp;</span>CALL +9999999999 TO QUERY
                                 </li>
                                 <li><span className="icon-truck">&nbsp;&nbsp;</span>USUALLY SHIPS IN 10-15 WORKING DAYS
                                 </li>
                                 <li><span className="icon-reload">&nbsp;&nbsp;</span>EASY RETURN
                                 </li>
                              </ul>
                              <ul className="mebel-pay product-container">
                                 <li><span className="icon-cc-paypal">&nbsp;</span>
                                 </li>
                                 <li><span className="icon-cc-visa">&nbsp;</span>
                                 </li>
                                 <li><span className="icon-cc-mastercard">&nbsp;</span>
                                 </li>
                                 <li><span className="icon-cc-stripe">&nbsp;</span>
                                 </li>
                                 <li><span className="icon-cc-amex">&nbsp;</span>
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
                                 <li className="">
                                    <span className="icon-facebook fb-icon"></span>
                                 </li>
                                 <li className="">
                                    <span className=" icon-twitter-alt fb-tw"></span>
                                 </li>
                                 <li className="">
                                    <span className="icon-google fb-go"></span>
                                 </li>
                                 <li className="">
                                    <span className="icon-pinterest fb-pi"></span>
                                 </li>
                                 <li className="">
                                    <span className="icon-printer fb-pr"></span>
                                 </li>
                                 <li className="">
                                    <a href="" data-target="email-modal" className="modal_1-trigger"><span className="icon-email fb-em">&nbsp;&nbsp;MAIL TO FRIEND</span></a>
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