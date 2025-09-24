import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X, MapPin } from "lucide-react";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const servicesItems = [
    {
      name: "Consultancy",
      path: "/services/consultancy",
      children: [
        { name: "Engineering Consultancy", path: "/services/consultancy/engineering" },
        { name: "Research and Policy Development", path: "/services/consultancy/research" },
        { name: "Transaction Advisory Services", path: "/services/consultancy/advisory" },
      ],
    },
    { name: "Environmental and Social Impact Assessment", path: "/services/environmental" },
    {
      name: "Positioning",
      path: "/services/positioning",
      children: [
        { name: "Engineering Survey", path: "/services/positioning/engineering-survey" },
        { name: "Land Survey", path: "/services/positioning/land-survey" },
      ],
    },
    { name: "GIS & Mapping", path: "/services/gis-mapping" },
    { name: "Physical Planning", path: "/services/physical-planning" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-green-600 p-2 rounded-lg">
              <MapPin className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Visioning Africa</h1>
              <p className="text-xs text-gray-600">Survey & Planning Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium">
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                to="/services"
                className="flex items-center gap-1 text-gray-700 hover:text-green-600 font-medium"
              >
                Services <ChevronDown size={18} />
              </Link>

              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-72 bg-white border rounded-lg shadow-lg hidden group-hover:block">
                {servicesItems.map((item) => (
                  <div key={item.name} className="relative group/item">
                    <Link
                      to={item.path}
                      className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      {item.name}
                      {item.children && <ChevronRight size={16} />}
                    </Link>

                    {/* Sub-dropdown if children exist */}
                    {item.children && (
                      <div className="absolute top-0 left-full mt-0 w-72 bg-white border rounded-lg shadow-lg hidden group-hover/item:block">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Link to="/clients" className="text-gray-700 hover:text-green-600 font-medium">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                About Us
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="px-3">
                <Link
                  to="/services"
                  className="block py-2 font-medium text-gray-700 hover:text-green-600"
                >
                  Services
                </Link>
                {servicesItems.map((item) => (
                  <div key={item.name} className="ml-3">
                    <Link
                      to={item.path}
                      className="block px-2 py-1 text-gray-600 hover:text-green-600"
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-2 py-1 text-gray-500 hover:text-green-600"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <Link to="/clients" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Projects
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
