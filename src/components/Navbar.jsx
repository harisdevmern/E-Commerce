import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // For icons

const Navbar = ({ cartCount, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);  // Pass the search term to the parent
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [searchTerm]); 
  const handleHomeClick = () => {
    setSearchTerm('');     // Clear the search term when navigating to Home
    onSearch('');          // Notify parent to clear search and show all products
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 text-white z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/" onClick={handleHomeClick}>ChoiceMart</Link>
        </h1>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-400" onClick={handleHomeClick}>
            Home
          </Link>
          <Link to="/cart" className="relative hover:text-gray-400">
            Cart
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by product name..."
            className="p-2 rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <button
            onClick={handleSearchClick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
