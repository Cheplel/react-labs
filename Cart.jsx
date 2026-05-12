import React from 'react'

function Cart({ cartItems }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.length === 0 ? (
          <li>Your cart is empty.</li>
        ) : (
          cartItems.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              {item.name} is in your cart.
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Cart
