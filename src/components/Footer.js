import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg md:text-xl mb-4">&copy; {new Date().getFullYear()} Snook Champ. All rights reserved.</p>
        <div className="social-links mb-4">
          <a href="#" className="text-white hover:text-red-500 mx-4 text-2xl">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white hover:text-red-500 mx-4 text-2xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-red-500 mx-4 text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="links">
          <a href="/terms" className="text-sm text-gray-400 hover:text-white mx-2">Terms of Service</a>
          <a href="/privacy" className="text-sm text-gray-400 hover:text-white mx-2">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
