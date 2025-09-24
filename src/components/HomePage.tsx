import React from "react";
import { ArrowRight, Globe, BarChart, Code } from "lucide-react";
import Navigation from "./Navigation";
import HeroCarousel from "./HeroCarousel";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      <Navigation />
        <HeroCarousel />

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Building Africa’s Future with{" "}
              <span className="text-green-600">Innovation</span> and{" "}
              <span className="text-green-600">Technology</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Visioning Africa empowers communities and organizations by
              delivering transformative solutions in GIS, software, and
              data-driven decision-making.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="/services"
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 flex items-center gap-2"
              >
                Explore Services <ArrowRight size={18} />
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://source.unsplash.com/600x400/?africa,technology"
              alt="Visioning Africa"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900">About Us</h3>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          We are shaping Africa’s future with innovation in GIS, surveying, and
          planning. Our mission is to provide forward-thinking solutions that
          harness technology for sustainable growth.
        </p>
        <a
          href="/about"
          className="mt-6 inline-block text-green-600 font-medium hover:underline"
        >
          Learn more about us →
        </a>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold text-center text-gray-900">
            Our Services
          </h3>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Globe className="text-green-600 w-10 h-10 mb-4" />
              <h4 className="text-lg font-semibold">GIS Solutions</h4>
              <p className="mt-2 text-gray-600">
                Advanced mapping and geospatial analysis to power smarter
                decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <BarChart className="text-green-600 w-10 h-10 mb-4" />
              <h4 className="text-lg font-semibold">Data Analytics</h4>
              <p className="mt-2 text-gray-600">
                Unlock insights with tailored analytics for impactful
                strategies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Code className="text-green-600 w-10 h-10 mb-4" />
              <h4 className="text-lg font-semibold">Software Development</h4>
              <p className="mt-2 text-gray-600">
                Custom software solutions designed for Africa’s evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Trusted By</h3>
        <div className="mt-8 flex justify-center gap-10 flex-wrap opacity-70">
          <img
            src="https://dummyimage.com/120x60/ddd/aaa.png&text=Partner+1"
            alt="Partner 1"
          />
          <img
            src="https://dummyimage.com/120x60/ddd/aaa.png&text=Partner+2"
            alt="Partner 2"
          />
          <img
            src="https://dummyimage.com/120x60/ddd/aaa.png&text=Partner+3"
            alt="Partner 3"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-lg font-semibold text-white">
              Visioning Africa
            </h4>
            <p className="mt-4 text-gray-400">
              Driving Africa’s growth through innovative technology solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/about" className="hover:text-green-500">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-green-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/clients" className="hover:text-green-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <p className="mt-4 text-gray-400">
              Email: info@visioningafrica.com
            </p>
            <p className="text-gray-400">Phone: +254 700 000 000</p>
          </div>
        </div>
        <div className="text-center py-4 border-t border-gray-700 text-gray-500 text-sm">
          © {new Date().getFullYear()} Visioning Africa. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
