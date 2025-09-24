import React from 'react';
import { MapPin, Ruler, Target, CheckCircle, Calendar, Users, Award } from 'lucide-react';

const CadastralEngineering: React.FC = () => {
  const projects = [
    {
      title: 'Northern Corridor Highway Survey',
      description: 'Comprehensive cadastral and engineering survey for 500km highway project',
      duration: '18 months',
      client: 'Kenya National Highways Authority',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/3825454/pexels-photo-3825454.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Nairobi-Mombasa Railway Extension',
      description: 'Precision surveying for railway infrastructure development',
      duration: '24 months',
      client: 'Kenya Railways Corporation',
      status: 'Ongoing',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Industrial Park Development',
      description: 'Land subdivision and boundary demarcation for industrial complex',
      duration: '12 months',
      client: 'Kenya Association of Manufacturers',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const services = [
    {
      title: 'Boundary Surveys',
      description: 'Precise determination of property boundaries using advanced GPS and total station technology',
      icon: Target
    },
    {
      title: 'Topographic Surveys',
      description: 'Detailed mapping of terrain features, elevations, and natural/man-made structures',
      icon: MapPin
    },
    {
      title: 'Construction Layout',
      description: 'Setting out building foundations, roads, and infrastructure according to design plans',
      icon: Ruler
    },
    {
      title: 'As-Built Surveys',
      description: 'Documentation of completed construction to verify compliance with original designs',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <MapPin size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cadastral & Engineering Survey
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Precision surveying services for land development, infrastructure projects, 
              and property boundary determination across East Africa
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Survey Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive cadastral and engineering survey solutions using 
              state-of-the-art equipment and proven methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-green-100 p-4 rounded-full inline-block mb-6">
                    <Icon className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our most significant cadastral and engineering survey projects
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-green-600" />
                      <span>Duration: {project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-green-600" />
                      <span>Client: {project.client}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Equipment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Advanced Technology & Equipment
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We utilize cutting-edge surveying technology to ensure the highest accuracy 
                and efficiency in all our cadastral and engineering survey projects.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Award className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">GPS/GNSS Systems</h3>
                    <p className="text-gray-600">High-precision satellite positioning for accurate coordinate determination</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Award className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Stations</h3>
                    <p className="text-gray-600">Electronic theodolites for precise angle and distance measurements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Award className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">3D Laser Scanning</h3>
                    <p className="text-gray-600">Advanced scanning technology for detailed 3D mapping and modeling</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/3825563/pexels-photo-3825563.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Survey equipment"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Survey Project?</h2>
          <p className="text-xl mb-8">
            Contact our expert team for professional cadastral and engineering survey services 
            tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CadastralEngineering;