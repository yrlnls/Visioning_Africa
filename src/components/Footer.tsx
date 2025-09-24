import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-600 p-2 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Visioning Africa</h3>
                  <p className="text-gray-400 text-sm">Survey & Planning Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Leading provider of professional surveying, mapping, and planning services across East Africa, 
                delivering innovative solutions with precision and excellence for over 15 years.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-green-400 transition-colors">Services</a></li>
                <li><a href="/projects" className="text-gray-300 hover:text-green-400 transition-colors">Projects</a></li>
                {/* <li><a href="#careers" className="text-gray-300 hover:text-green-400 transition-colors">Careers</a></li> */}
                <li><a href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Engineering Survey</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Land Survey</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">GIS & Mapping</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Physical Planning</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Environmental Assessment</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Aerial Photography</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin size={16} className="text-green-400 flex-shrink-0" />
                    <span className="text-sm">Upper Hill Gardens, Block A Suite A37, 3rd Ngong Avenue, Nairobi</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone size={16} className="text-green-400 flex-shrink-0" />
                    <span className="text-sm">+254 700 123 456 / +254 711 234 567</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail size={16} className="text-green-400 flex-shrink-0" />
                    <span className="text-sm">contact@visioningafrica.com</span>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>8:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-red-400">Closed</span>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Subscribe to our newsletter for the latest updates on surveying technology and industry insights.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                  />
                  <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-lg transition-colors duration-300">
                    <Mail size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Visioning Africa. All rights reserved. | 
              <a href="#" className="hover:text-green-400 ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-green-400 ml-1">Terms of Service</a>
            </p>
            
            <button
              onClick={scrollToTop}
              className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;