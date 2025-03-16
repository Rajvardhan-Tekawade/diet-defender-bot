
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronRight } from 'lucide-react';

const Streamlit = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Streamlit Companion App</h1>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
            <div className="p-8">
              <p className="text-gray-700 mb-6">
                Our Streamlit app provides additional features and detailed analysis capabilities beyond what's available 
                in the chatbot. It's designed for users who want deeper insights into their dietary safety.
              </p>
              
              <div className="flex justify-center mb-8">
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
              
              <div className="border-t border-gray-100 pt-6">
                <h2 className="text-xl font-semibold mb-4">What You Can Do in the Streamlit App</h2>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-blue shrink-0 mt-0.5 mr-2" />
                    <div>
                      <span className="font-medium">Detailed Product Analysis</span>
                      <p className="text-gray-600 mt-1">Visualize detailed ingredient breakdowns and nutrition facts with interactive charts.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-blue shrink-0 mt-0.5 mr-2" />
                    <div>
                      <span className="font-medium">Scan History & Trends</span>
                      <p className="text-gray-600 mt-1">View your complete scan history and track dietary safety trends over time.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-blue shrink-0 mt-0.5 mr-2" />
                    <div>
                      <span className="font-medium">Bulk Product Comparison</span>
                      <p className="text-gray-600 mt-1">Compare multiple products side-by-side to find the safest options for your diet.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-blue shrink-0 mt-0.5 mr-2" />
                    <div>
                      <span className="font-medium">Advanced Allergen Detection Settings</span>
                      <p className="text-gray-600 mt-1">Customize sensitivity thresholds and get more control over allergen detection parameters.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-health-blue shrink-0 mt-0.5 mr-2" />
                    <div>
                      <span className="font-medium">Diet Plan Integration</span>
                      <p className="text-gray-600 mt-1">Connect your dietary requirements to meal planning recommendations.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-health-light-green p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-center">How to Get Started</h3>
            
            <ol className="space-y-4">
              <li className="flex">
                <div className="bg-health-green text-white w-8 h-8 rounded-full flex items-center justify-center font-medium mr-4 flex-shrink-0">1</div>
                <div>
                  <p className="font-medium">Visit the Streamlit App</p>
                  <p className="text-gray-700 mt-1">Click the launch button above to open our Streamlit application in a new browser tab.</p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-health-green text-white w-8 h-8 rounded-full flex items-center justify-center font-medium mr-4 flex-shrink-0">2</div>
                <div>
                  <p className="font-medium">Log In with Your Diet Defender Account</p>
                  <p className="text-gray-700 mt-1">Use the same credentials you created in the chatbot to access your dietary profile.</p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-health-green text-white w-8 h-8 rounded-full flex items-center justify-center font-medium mr-4 flex-shrink-0">3</div>
                <div>
                  <p className="font-medium">Grant Camera Access (if needed)</p>
                  <p className="text-gray-700 mt-1">To use barcode scanning features, you'll need to allow camera access when prompted.</p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-health-green text-white w-8 h-8 rounded-full flex items-center justify-center font-medium mr-4 flex-shrink-0">4</div>
                <div>
                  <p className="font-medium">Start Exploring Features</p>
                  <p className="text-gray-700 mt-1">Navigate through the sidebar to access different tools and features available in the app.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Streamlit;
