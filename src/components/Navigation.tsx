import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X, MapPin } from "lucide-react";

interface ServiceItem {
  name: string;
  path: string;
  children?: { name: string; path: string }[];
}

const servicesItems: ServiceItem[] = [
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

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileSubMenu = (name: string) =>
    setOpenMobileSubMenu(openMobileSubMenu === name ? null : name);

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
            <div
              className="relative"
              onMouseEnter={() => setOpenDesktopMenu("services")}
              onMouseLeave={() => setOpenDesktopMenu(null)}
            >
              <Link
                to="/services"
                className="flex items-center gap-1 text-gray-700 hover:text-green-600 font-medium"
              >
                Services <ChevronDown size={18} />
              </Link>

              {openDesktopMenu === "services" && (
                <div className="absolute left-0 top-full w-72 bg-white border rounded-lg shadow-lg z-50">
                  {servicesItems.map((item) => (
                    <div
                      key={item.name}
                      className="relative group"
                    >
                      <Link
                        to={item.path}
                        className="flex justify-between items-center px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        onMouseEnter={() => setOpenDesktopMenu(item.name)}
                      >
                        {item.name}
                        {item.children && <ChevronRight size={16} />}
                      </Link>

                      {item.children && (
                        <div 
                          className={`absolute top-0 left-full w-72 bg-white border rounded-lg shadow-lg transition-all duration-200 ${
                            openDesktopMenu === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                          }`}
                          onMouseEnter={() => setOpenDesktopMenu(item.name)}
                          onMouseLeave={() => setOpenDesktopMenu("services")}
                        >
                          {item.children.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
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
                <button
                  onClick={() => toggleMobileSubMenu("services")}
                  className="flex justify-between items-center w-full py-2 font-medium text-gray-700 hover:text-green-600"
                >
                  Services <ChevronDown size={16} />
                </button>
                {openMobileSubMenu === "services" && (
                  <div className="ml-3">
                    {servicesItems.map((item) => (
                      <div key={item.name}>
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
                )}
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
