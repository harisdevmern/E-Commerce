import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col h-full">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-auto"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
