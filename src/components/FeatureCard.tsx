
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <div className="mb-4 p-3 rounded-full inline-block bg-health-light-blue">
        <Icon className="h-6 w-6 text-health-blue" />
      </div>
      
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
