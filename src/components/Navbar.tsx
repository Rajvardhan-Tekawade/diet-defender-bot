
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertCircle, Info } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-health-blue">
          <Shield className="h-6 w-6" />
          <h1 className="text-xl font-bold tracking-tight">Diet Defender</h1>
        </Link>
        
        <div className="flex gap-6">
          <Link to="/" className="text-sm font-medium hover:text-health-blue transition-colors">
            Home
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:text-health-blue transition-colors">
            How It Works
          </Link>
          <Link to="/streamlit" className="text-sm font-medium hover:text-health-blue transition-colors">
            Streamlit App
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-health-blue transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
