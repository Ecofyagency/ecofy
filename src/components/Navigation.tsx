import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../images/ecofy.png';

interface NavigationProps {
  theme?: 'light' | 'dark';
}

const Navigation: React.FC<NavigationProps> = ({ theme = 'dark' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = theme === 'light';

  const backgroundClass = isScrolled
    ? isLight
      ? 'bg-white/80 backdrop-blur-md shadow-sm'
      : 'bg-black/90 backdrop-blur-md'
    : 'bg-transparent';

  const textClass = isLight ? 'text-black' : 'text-gray-300';
  const hoverClass = isLight ? 'hover:text-green-600' : 'hover:text-green-500';
  const buttonText = isLight ? 'text-white' : 'text-black';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${backgroundClass}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Ecofy Logo"
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 text-lg">
            <a href="#services" className={`${textClass} ${hoverClass} transition-colors duration-200`}>Services</a>
            <a href="#about" className={`${textClass} ${hoverClass} transition-colors duration-200`}>About</a>
            <a href="#case-studies" className={`${textClass} ${hoverClass} transition-colors duration-200`}>Case Studies</a>
            <a href="#team" className={`${textClass} ${hoverClass} transition-colors duration-200`}>Team</a>
            <Link to="/book-a-call" className={`${textClass} ${hoverClass} transition-colors duration-200`}>Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/book-a-call"
              className={`bg-green-500 hover:bg-green-600 ${buttonText} font-semibold text-lg px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105`}
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${textClass} hover:text-green-500`}>
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`${isLight ? 'bg-white/95' : 'bg-black/95'} md:hidden backdrop-blur-md px-6 pt-4 pb-6 space-y-2 text-lg`}>
          <a href="#services" className={`block py-2 ${textClass} ${hoverClass}`}>Services</a>
          <a href="#about" className={`block py-2 ${textClass} ${hoverClass}`}>About</a>
          <a href="#case-studies" className={`block py-2 ${textClass} ${hoverClass}`}>Case Studies</a>
          <a href="#team" className={`block py-2 ${textClass} ${hoverClass}`}>Team</a>
          <Link to="/book-a-call" className={`block py-2 ${textClass} ${hoverClass}`}>Contact</Link>
          <Link
            to="/book-a-call"
            className="block mt-4 bg-green-500 hover:bg-green-600 text-black font-semibold text-lg px-6 py-3 rounded-xl text-center transition duration-300 transform hover:scale-105"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
