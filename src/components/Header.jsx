import React, { useState } from 'react';
import { Menu, X, Search, Wallet, Github } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <header className="fixed w-full bg-black/30 backdrop-blur-[2px] z-50 border-b border-gray-800/30">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Desktop Navigation combined */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
               Xero
            </span>
            
            {/* Desktop Navigation moved next to logo */}
            <nav className="hidden md:flex items-center ml-16 space-x-12">
              <a href="/" className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-200">Home</a>
              <a href="/creators" className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-200">Creators</a>
              <a href="/FAQs" className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-200">FAQs</a>
            </nav>
          </div>

          {/* Search Bar, GitHub, Aptos and Wallet Button - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <div className={`relative transition-all duration-300 ease-in-out ${isSearchExpanded ? 'w-72' : 'w-56'}`}>
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search creators..."
                className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                onFocus={() => setIsSearchExpanded(true)}
                onBlur={() => setIsSearchExpanded(false)}
              />
            </div>
            <a 
              href="https://github.com/stark0908/Xero" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-800/50 rounded-full transition-all duration-300 
                hover:scale-110 text-gray-400 hover:text-purple-400"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://aptosfoundation.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-800/50 rounded-full transition-all duration-300 
                hover:scale-110 text-gray-400 hover:text-purple-400"
            >
              <img 
                src="../src/public/banner/Aptos Logo Circle.png" 
                alt="Aptos Logo" 
                className="h-6 w-6"
              />
            </a>
            <button className="px-6 py-2.5 bg-purple-600/90 hover:bg-purple-600 text-white rounded-full flex items-center hover:scale-105 transition-all duration-200">
              <Wallet className="mr-2 h-5 w-5" />
              Connect Wallet
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/90">
            <a href="/" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md">Home</a>
            <a href="/creators" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md">Creators</a>
            <a href="/FAQs" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md">FAQs</a>
            <div className="p-2">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search creators..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full"
                />
              </div>
            </div>
            <button className="block w-full px-3 py-2.5 text-base font-medium text-white bg-purple-600/90 hover:bg-purple-600 rounded-full items-center justify-center">
              <Wallet className="mr-2 h-5 w-5" />
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;