import React, { useContext, useEffect } from 'react'
import Context from '../../context/MyContext';
import BottomNav from '../bottomNav/BottomNav';
import { addToCart } from '../helpers/addToCart';
import { reduceQuantity } from '../helpers/reduceQuantity';
import calculateGrandTotal from '../helpers/calcGrandTotal'
import Paypal from '../payPal/PayPal'
import './cartStyle.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Cart = () => {
  const context = useContext(Context);
  const { cartItems, setCartItems, userId } = context

  const cart = cartItems.map((item) => {
    return {
      "productId": item.id,
      "qty": item.qty,
      "price": item.price
    }
  })

  useEffect(() => {
    let reqOptions = {
      _id: userId,
      headers: {
        'authorization': localStorage.getItem('token'),
      },
      cart: JSON.stringify(cart),

    }
    axios.post("http://localhost:8000/users/addcart", reqOptions).then(function (response) {
      console.log(response.data);

    })
  }, [cart,userId])



  return (
    <div className='cart-container'>
      <h2 className="Cartheader">Cart</h2>

      <div className="product">
        {cartItems.length === 0 && <div className='empty'>Cart is Empty!</div>}
        {cartItems.map((item) => {
          return (
            <li className='item' key={item.id}>
              <Link to={`/plantDetails`} state={item}>
                <img className='image' src={item.imagUrl} alt="" />
              </Link>
              <div className='name-price-box'>
                <div className='item-box'>
                  <p>{item.name}</p>
                  <p>€{item.price}</p>
                </div>
                <div className='btnHolder'>
                  <button className='btn' onClick={() => reduceQuantity(item, cartItems, setCartItems)}>-</button>
                  <p>{item.qty} </p>
                  <button className='btn' onClick={() => addToCart(item, cartItems, setCartItems)}>+</button>
                </div>
              </div>
            </li>)
        })}
        {cartItems.length > 0 && <div className='checkOut'>
          <div className='order-box'>
            <div className="title-order">
              <p>Order Total Price: </p>
              <p>Shipping:</p>
              <p>Vat:</p>
            </div>
            <div className="prices-order">
            <p>€{calculateGrandTotal(cartItems)}</p>
            <p>€0.00</p>
            <p>€0.00</p>
            </div>

          </div>

          {<div className='payment-box'>
            <p className='payment-text'>We Accept Only</p>
            <span className='payment-paypal'>{Paypal()}</span>
          </div>}
        </div>}
      </div>

      <BottomNav />
    </div>
  )
}

export default Cart