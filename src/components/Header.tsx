import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="bg-green-900 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-2 sm:mb-0">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+254 700 123 456</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+254 711 234 567</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={14} />
          <span>info@visioningafrica.com</span>
        </div>
      </div>
    </div>
  );
};

export default Header;