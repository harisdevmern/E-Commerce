import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Home = ({ addToCart, searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the fake API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); // Initialize with all products
      });
  }, []);

  useEffect(() => {
    // Filter products based on the search term
    if (searchTerm.trim() === '') {
      setFilteredProducts(products); // Show all products if search term is empty
    } else {
      setFilteredProducts(
        products.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, products]);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
          />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default Home;