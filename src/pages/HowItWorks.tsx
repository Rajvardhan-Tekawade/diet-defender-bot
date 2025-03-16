
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight, Database, Scan, AlertTriangle, ListFilter, ShieldCheck } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">How Diet Defender Works</h1>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <div className="mr-3 p-2 rounded-full bg-health-light-blue">
                  <Scan className="h-5 w-5 text-health-blue" />
                </div>
                Step 1: Scan & Identify Products
              </h2>
              
              <div className="pl-12">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-blue shrink-0 mt-0.5 mr-2" />
                    <span>Scan product barcodes using your device's camera</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-blue shrink-0 mt-0.5 mr-2" />
                    <span>Our system connects to the Open Food Facts database to identify the product</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-blue shrink-0 mt-0.5 mr-2" />
                    <span>We extract detailed product information, including ingredients list and nutritional data</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <div className="mr-3 p-2 rounded-full bg-health-light-blue">
                  <Database className="h-5 w-5 text-health-blue" />
                </div>
                Step 2: AI-Powered Allergen Detection
              </h2>
              
              <div className="pl-12">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-blue shrink-0 mt-0.5 mr-2" />
                    <span>Our machine learning model processes the ingredient list to detect potential allergens</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-blue shrink-0 mt-0.5 mr-2" />
                    <span>The system compares detected allergens with your personal dietary profile</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-blue shrink-0 mt-0.5 mr-2" />
                    <span>Your dietary data is securely stored in our Supabase database</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <div className="mr-3 p-2 rounded-full bg-health-light-green">
                  <AlertTriangle className="h-5 w-5 text-health-green" />
                </div>
                Step 3: Risk Assessment & Alerts
              </h2>
              
              <div className="pl-12">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-green shrink-0 mt-0.5 mr-2" />
                    <span>The system calculates a personalized risk level for each product</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-green shrink-0 mt-0.5 mr-2" />
                    <span>You receive immediate alerts if a product contains ingredients that don't match your dietary needs</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-green shrink-0 mt-0.5 mr-2" />
                    <span>Each alert is color-coded based on severity to help you make quick decisions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <div className="mr-3 p-2 rounded-full bg-health-light-green">
                  <ListFilter className="h-5 w-5 text-health-green" />
                </div>
                Step 4: Alternative Recommendations
              </h2>
              
              <div className="pl-12">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-green shrink-0 mt-0.5 mr-2" />
                    <span>If a product isn't safe for you, our system suggests safer alternatives</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-green shrink-0 mt-0.5 mr-2" />
                    <span>Recommendations are personalized based on your specific dietary restrictions</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-green shrink-0 mt-0.5 mr-2" />
                    <span>Your scan history is saved to help you keep track of safe products over time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-health-light-blue p-6 rounded-xl flex items-center">
            <ShieldCheck className="h-12 w-12 text-health-blue mr-6 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Your Privacy & Data Security</h3>
              <p className="text-gray-700">
                Your dietary information and scan history are securely stored in our Supabase database with
                strict access controls. We only use your data to provide personalized recommendations
                and never share it with third parties.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
