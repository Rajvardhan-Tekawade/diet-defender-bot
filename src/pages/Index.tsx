
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import JotformChatbot from '@/components/JotformChatbot';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        
        <div id="chatbot" className="py-16 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Chat with Allie, Your Allergen Detection Specialist</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Share your dietary restrictions, scan food products, and get personalized recommendations.
              </p>
            </div>
            
            <JotformChatbot />
          </div>
        </div>
        
        <div className="py-16 px-4 md:px-6 lg:px-8 bg-health-light-blue">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Try our Streamlit App</h2>
                <p className="text-gray-600 mb-6">
                  For more detailed analysis and additional features, explore our full-featured Streamlit application.
                </p>
                <a 
                  href="https://allergen-detection-3ij82gzqteyqiupjuzqqcc.streamlit.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button className="bg-health-green hover:bg-health-green/90">
                    Launch Streamlit App
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
              
              <div className="relative p-1 border-4 border-health-light-green rounded-lg overflow-hidden">
                <div className="w-full max-w-[320px] aspect-video bg-health-light-green rounded flex items-center justify-center">
                  <span className="text-health-green font-medium animate-pulse-slow">Streamlit App Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
