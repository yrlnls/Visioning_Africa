import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Visioning Africa</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading provider of professional surveying, mapping, and planning services across East Africa, 
            delivering innovative solutions with precision and excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3825563/pexels-photo-3825563.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional surveying team"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Eye className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the premier provider of innovative surveying, mapping, and planning solutions in Africa, 
                empowering sustainable development through cutting-edge technology and professional excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Target className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To deliver high-quality, accurate, and timely surveying, GIS, and planning services that support 
                infrastructure development, environmental conservation, and community growth across the continent.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
              <Award className="text-green-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">15+ Years</h4>
            <p className="text-gray-600">Experience in surveying and mapping</p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
              <Users className="text-green-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">500+</h4>
            <p className="text-gray-600">Successful projects completed</p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
              <Target className="text-purple-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">200+</h4>
            <p className="text-gray-600">Happy clients served</p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
              <Eye className="text-orange-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">10+</h4>
            <p className="text-gray-600">Countries served across Africa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;