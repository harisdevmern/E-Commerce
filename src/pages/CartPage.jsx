import React, { useState } from 'react';

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  // Calculate subtotal and total price of all products
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleOrderClick = () => {
    setIsOrderDetailsVisible(true);
  };

  const handleConfirmOrder = () => {
    // Logic to handle order confirmation, e.g., sending data to a server
    setIsOrderConfirmed(true);
    setIsOrderDetailsVisible(false);
    // Clear the cart
    removeAllFromCart();
  };

  const removeAllFromCart = () => {
    // Function to clear all items from the cart
    cart.forEach(item => removeFromCart(item));
  };

  if (isOrderConfirmed) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Order Confirmation</h2>
        <p>Your order has been confirmed!</p>
        <button
          onClick={() => setIsOrderConfirmed(false)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4"
        >
          Go back to Cart
        </button>
      </div>
    );
  }

  if (isOrderDetailsVisible) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-2 p-2 border-b">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-right">
          <h3 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h3>
          <button
            onClick={handleConfirmOrder}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-4"
          >
            Confirm Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-2 p-2 border-b">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="bg-gray-300 px-2 py-1 rounded mr-2"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-300 px-2 py-1 rounded mr-2"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right">
            <h3 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h3>
            <button
              onClick={handleOrderClick}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4"
            >
              Order
            </button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
