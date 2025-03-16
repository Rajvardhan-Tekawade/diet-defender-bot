
import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-gray-50 mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Diet Defender</h3>
            <p className="text-sm text-gray-600 max-w-md">
              Helping you make safer food choices with AI-powered allergen detection
            </p>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by Diet Defender Team</span>
            </div>
            
            <div className="flex items-center mt-2 gap-4">
              <a 
                href="https://allergen-detection-3ij82gzqteyqiupjuzqqcc.streamlit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-1 text-health-blue hover:underline"
              >
                <span>Streamlit App</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              
              <a 
                href="https://world.openfoodfacts.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-1 text-health-blue hover:underline"
              >
                <span>Open Food Facts</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
