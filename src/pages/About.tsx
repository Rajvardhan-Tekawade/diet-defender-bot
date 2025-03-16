
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, Database, Brain, Barcode, Bot } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Diet Defender</h1>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12 p-8">
            <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              Diet Defender was created with a simple mission: to help people with dietary restrictions 
              and allergies make safer food choices. We combine AI technology with food data to create 
              a system that identifies potential allergens and suggests safer alternatives.
            </p>
            
            <h2 className="text-2xl font-semibold mb-6">The Technology Behind Diet Defender</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Brain className="h-6 w-6 text-health-blue mr-3" />
                  <h3 className="text-lg font-medium">AI & Machine Learning</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Our allergen detection system uses advanced NLP models to analyze ingredient 
                  lists and identify potential allergens, even when they're listed under 
                  alternative names or as derivatives.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Database className="h-6 w-6 text-health-blue mr-3" />
                  <h3 className="text-lg font-medium">Supabase Database</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  We use Supabase to securely store user dietary profiles and scan history,
                  ensuring your data is protected while enabling personalized recommendations.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Barcode className="h-6 w-6 text-health-green mr-3" />
                  <h3 className="text-lg font-medium">Open Food Facts API</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  We connect to the Open Food Facts database to retrieve detailed product
                  information when you scan a barcode, giving you access to a vast library
                  of food products.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Bot className="h-6 w-6 text-health-green mr-3" />
                  <h3 className="text-lg font-medium">Jotform Chatbot</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Our conversational interface is powered by Jotform's chatbot technology,
                  making it easy and intuitive to interact with our allergen detection system.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-6">Data Sources & Credits</h2>
            <p className="text-gray-700 mb-4">
              Diet Defender relies on these incredible open data sources and technologies:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <ExternalLink className="h-4 w-4 text-health-blue mr-2" />
                <a 
                  href="https://world.openfoodfacts.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-health-blue hover:underline"
                >
                  Open Food Facts
                </a>
                <span className="text-gray-600 ml-2">- An open database of food products from around the world</span>
              </li>
              
              <li className="flex items-center">
                <ExternalLink className="h-4 w-4 text-health-blue mr-2" />
                <a 
                  href="https://www.jotform.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-health-blue hover:underline"
                >
                  Jotform
                </a>
                <span className="text-gray-600 ml-2">- Online form and chatbot platform</span>
              </li>
              
              <li className="flex items-center">
                <ExternalLink className="h-4 w-4 text-health-blue mr-2" />
                <a 
                  href="https://supabase.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-health-blue hover:underline"
                >
                  Supabase
                </a>
                <span className="text-gray-600 ml-2">- Open source Firebase alternative</span>
              </li>
              
              <li className="flex items-center">
                <ExternalLink className="h-4 w-4 text-health-blue mr-2" />
                <a 
                  href="https://streamlit.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-health-blue hover:underline"
                >
                  Streamlit
                </a>
                <span className="text-gray-600 ml-2">- Open-source app framework for Machine Learning and Data Science</span>
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-6">Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We take your privacy seriously. Here's how we handle your data:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li className="text-gray-700">
                We only collect dietary information that you explicitly provide to help us give you accurate recommendations.
              </li>
              <li className="text-gray-700">
                Your scan history is stored securely and is only accessible to you.
              </li>
              <li className="text-gray-700">
                We use industry-standard security measures to protect your data.
              </li>
              <li className="text-gray-700">
                We never sell or share your personal data with third parties.
              </li>
            </ul>
          </div>
          
          <div className="bg-health-light-blue p-6 rounded-xl flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-700 mb-6 max-w-2xl">
              If you have questions, feedback, or need assistance with Diet Defender, 
              we'd love to hear from you. Reach out to our team at 
              <a href="mailto:support@dietdefender.example.com" className="text-health-blue ml-1 hover:underline">
                support@dietdefender.example.com
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
