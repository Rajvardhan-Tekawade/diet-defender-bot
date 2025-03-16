import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import AddTestProduct from './AddTestProduct';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Allergen Detection
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/how-it-works" className="text-sm font-medium transition-colors hover:text-foreground/80 sm:text-base">
            How it works
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-foreground/80 sm:text-base">
            About
          </Link>
          <div className="flex items-center gap-4">
            <AddTestProduct />
            <a
              href="https://allergen-detection-3ij82gzqteyqiupjuzqqcc.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors hover:text-foreground/80 sm:text-base"
            >
              Streamlit App
            </a>
          </div>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 py-2">
          <div className="container mx-auto flex flex-col gap-4 px-4">
            <Link to="/how-it-works" className="block text-sm font-medium transition-colors hover:text-foreground/80 sm:text-base">
              How it works
            </Link>
            <Link to="/about" className="block text-sm font-medium transition-colors hover:text-foreground/80 sm:text-base">
              About
            </Link>
            <a
              href="https://allergen-detection-3ij82gzqteyqiupjuzqqcc.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-medium transition-colors hover:text-foreground/80 sm:text-base"
            >
              Streamlit App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
