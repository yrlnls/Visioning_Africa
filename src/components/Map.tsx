import React from 'react';
import { MapPin, Navigation, Phone, Mail } from 'lucide-react';

const Map: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Our Office</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit us at our modern offices in Upper Hill, Nairobi. We're conveniently located 
            and easily accessible for all your surveying and mapping consultation needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin size={48} className="mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-sm">Google Maps integration would be placed here</p>
                <p className="text-xs mt-2 text-gray-500">
                  Upper Hill Gardens, Block A Suite A37<br />
                  3rd Ngong Avenue, Nairobi
                </p>
              </div>
            </div>
          </div>

          {/* Office Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Office Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Upper Hill Gardens, Block A Suite A37<br />
                    3rd Ngong Avenue<br />
                    Directly opposite Kenya Banker Sacco Offices<br />
                    Upper Hill Area, Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone size={16} />
                      <span>+254 700 123 456</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone size={16} />
                      <span>+254 711 234 567</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail size={16} />
                      <span>contact@visioningafrica.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail size={16} />
                      <span>info@visioningafrica.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                  <Navigation className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Working Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span>8:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span className="text-red-600">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Need Directions?</h3>
              <p className="mb-6">
                We're located in the heart of Upper Hill, one of Nairobi's premier business districts. 
                Easily accessible by public transport and with ample parking available.
              </p>
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;