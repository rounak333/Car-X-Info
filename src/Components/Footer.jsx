import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-10 px-5 md:px-20">
      {/* Holographic Floating Shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 opacity-40 rounded-full blur-3xl"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Company Info Section */}
        <div className="md:w-full flex flex-col justify-center items-start">
          <h2 className="text-2xl font-extrabold text-blue-400 tracking-wider mb-4">CAR X INFO</h2>
          <p className="text-gray-300 mb-4">
            The future of automobiles is here. Explore the latest tech, cars, and innovations in the automotive industry.
          </p>
          <p className="text-gray-500 text-sm">&copy; 2024 Car X Info. All rights reserved.</p>
        </div>

        {/* Futuristic Links Section */}
        <div className="md:w-full">
          <h4 className="text-xl font-semibold text-blue-400 mb-4">Quick Access</h4>
          <ul className="text-gray-400 space-y-3 text-sm tracking-wider">
            <li className="transition-all hover:text-blue-300 hover:translate-x-2">
              <a href="/">Home</a>
            </li>
            <li className="transition-all hover:text-blue-300 hover:translate-x-2">
              <a href="/carsforsale">Cars for Sale</a>
            </li>
            <li className="transition-all hover:text-blue-300 hover:translate-x-2">
              <a href="/newcars">New Cars</a>
            </li>
            <li className="transition-all hover:text-blue-300 hover:translate-x-2">
              <a href="/research">Research & Reviews</a>
            </li>
          </ul>
        </div>

        {/* Social Media and Updates */}
        <div className="md:w-full">
          <h4 className="text-xl font-semibold text-blue-400 mb-4">Stay Connected</h4>
          <p className="text-gray-400 mb-4">Follow us on social media for the latest updates.</p>
          <div className="flex space-x-6 mb-6">
            <a href="#" className="text-white hover:text-blue-500 transition-transform transform hover:scale-110">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" className="text-white hover:text-blue-500 transition-transform transform hover:scale-110">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="#" className="text-white hover:text-blue-500 transition-transform transform hover:scale-110">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/rounak-choubey-81a289278/" className="text-white hover:text-blue-500 transition-transform transform hover:scale-110">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
          <button className="text-black bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500 transition-all">
            Subscribe for Updates
          </button>
        </div>
      </div>

      {/* Bottom futuristic glowing line */}
      <div className="mt-10 border-t border-gray-700 pt-5 relative">
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;
