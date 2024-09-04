import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} Pakistan online Shopping Store</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-green-500"
            aria-label="Contact Us"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
