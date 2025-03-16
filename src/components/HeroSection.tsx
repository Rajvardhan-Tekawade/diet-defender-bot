
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 p-3 rounded-full bg-health-light-blue inline-flex items-center">
            <Shield className="h-8 w-8 text-health-blue" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Your <span className="text-health-blue">AI-Powered</span> Food Safety Assistant
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mb-8">
            Scan food products, identify allergens, and get personalized recommendations
            to ensure your food choices match your dietary needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#chatbot" className="no-underline">
              <Button className="bg-health-blue hover:bg-health-blue/90 text-white">
                Try the Chatbot
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            
            <Link to="/streamlit">
              <Button variant="outline" className="border-health-blue text-health-blue hover:bg-health-light-blue">
                Launch Streamlit App
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
