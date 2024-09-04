import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CartPage from './pages/CartPage';


const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);


  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== product.id));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Navbar cartCount={cartCount} onSearch={handleSearch} />
      <main className="flex-grow mt-16"> {/* Ensure content is not hidden behind fixed navbar */}
          <Routes>
            <Route 
              path="/" 
              element={<Home addToCart={addToCart} searchTerm={searchTerm} />} 
            />
            <Route 
              path="/cart" 
              element={<CartPage cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
