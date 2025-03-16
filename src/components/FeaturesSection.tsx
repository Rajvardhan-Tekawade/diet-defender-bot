
import React from 'react';
import FeatureCard from './FeatureCard';
import { Scan, Database, AlertTriangle, ListFilter } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <div className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Diet Defender Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered system helps you identify potential allergens in food products
            and provides safer alternatives based on your dietary needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={Scan}
            title="Scan Products"
            description="Scan food barcodes using your camera or enter the code manually to identify products."
          />
          
          <FeatureCard 
            icon={Database}
            title="AI Analysis"
            description="Our ML model processes ingredients to detect potential allergens that might affect you."
            className="border-l-4 border-health-blue"
          />
          
          <FeatureCard 
            icon={AlertTriangle}
            title="Get Alerts"
            description="Receive instant alerts if a product contains ingredients that don't match your dietary needs."
          />
          
          <FeatureCard 
            icon={ListFilter}
            title="Find Alternatives"
            description="Get personalized recommendations for safer alternative products you can enjoy."
            className="border-l-4 border-health-green"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
