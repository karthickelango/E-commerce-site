import React from 'react'
import { useSelector } from 'react-redux'
import {remove} from './store/cartSlice'
import { useDispatch } from 'react-redux'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const PaymentPage = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart)
  const totalValue = products.map(product => product.price).reduce((a,b) => a+b, 0)
  const removeFromCart = (id) => {
    dispatch(remove(id))
  }

  return (
    <main>
        <div className='row'>
          <div className='col l18 m8 s12 mb-5 p-3 list-item cart-item'>
            <div className='card'>
              <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What harsh truths do you prefer to ignore?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Exercitation in fugiat est ut ad ea cupidatat ut in
                            cupidatat occaecat ut occaecat consequat est minim minim
                            esse tempor laborum consequat esse adipisicing eu
                            reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Is free will real or just an illusion?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            In ad velit in ex nostrud dolore cupidatat consectetur
                            ea in ut nostrud velit in irure cillum tempor laboris
                            sed adipisicing eu esse duis nulla non.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
            </div>
          </div>
          <div className='col l14 m4 s12 sticky-card'>
            <div className='card'>
              <h5 className='br-1 p-3 text-start mt-0 color-secondary'>Price details</h5>
            <div className='p-3 d-f-j'>
              Price of ({products.length} items): <span className='text-end'>$ {totalValue}</span>
            </div>
            <div className='p-3 d-f-j'>
            Discount: <span className='text-color-green'>$ 0</span>
            </div>
            <div className='p-3 d-f-j'>
              Delivery Charges: <span className='text-color-green'>Free</span>
            </div>
            <div className='divider-dashed'></div>
            <div className='p-3 d-f-j fw-700'>
                Total value: <span>$ {totalValue}</span>
            </div>
            <div className='divider-dashed'></div>
            <div className='p-3 d-f-j fw-700'>
            <span className='text-color-green'>You will save ₹0 on this order</span>
            </div>
            </div>
            </div>
        </div>
    </main>
  )
}

export default PaymentPage