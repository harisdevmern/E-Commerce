import React from 'react';

const Cart = ({ cart, removeFromCart }) => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="border-b py-2">
            {item.name} - ${item.price}
            <button 
              onClick={() => removeFromCart(item)} 
              className="ml-4 text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Cart;
