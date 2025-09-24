import React from 'react';
import { Compass, Map, Satellite, Database, Calendar, Users, Award, Target } from 'lucide-react';

const GISMapping: React.FC = () => {
  const projects = [
    {
      title: 'National Land Information System',
      description: 'Comprehensive GIS database for land records and cadastral information across Kenya',
      duration: '48 months',
      client: 'Ministry of Lands and Physical Planning',
      status: 'Completed',
      coverage: 'Nationwide',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Wildlife Conservation Mapping',
      description: 'GIS mapping and monitoring system for wildlife corridors and conservation areas',
      duration: '18 months',
      client: 'Kenya Wildlife Service',
      status: 'Ongoing',
      coverage: '15 National Parks',
      image: 'https://images.pexels.com/photos/3825563/pexels-photo-3825563.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Urban Infrastructure Mapping',
      description: 'Digital mapping of utilities, roads, and infrastructure for smart city initiatives',
      duration: '24 months',
      client: 'Nairobi Water and Sewerage Company',
      status: 'In Progress',
      coverage: 'Greater Nairobi',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const gisServices = [
    {
      title: 'Spatial Data Analysis',
      description: 'Advanced analysis of geographic data to support decision-making processes',
      icon: Database
    },
    {
      title: 'Digital Mapping',
      description: 'Creation of detailed digital maps using satellite imagery and field data',
      icon: Map
    },
    {
      title: 'Remote Sensing',
      description: 'Satellite and aerial image analysis for land use and environmental monitoring',
      icon: Satellite
    },
    {
      title: 'GIS Database Development',
      description: 'Design and implementation of comprehensive geographic information systems',
      icon: Compass
    }
  ];

  const capabilities = [
    { title: 'Satellite Imagery Analysis', description: 'High-resolution satellite image processing and interpretation' },
    { title: 'Drone Mapping', description: 'UAV-based aerial mapping for detailed site surveys' },
    { title: 'Web GIS Development', description: 'Online mapping platforms and applications' },
    { title: 'Mobile GIS Solutions', description: 'Field data collection using mobile GIS applications' },
    { title: 'Spatial Database Design', description: 'Enterprise-level spatial database architecture' },
    { title: 'Cartographic Design', description: 'Professional map design and visualization' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Compass size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              GIS & Mapping Projects
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Advanced Geographic Information Systems and mapping solutions for 
              spatial analysis, decision-making, and resource management
            </p>
          </div>
        </div>
      </section>

      {/* GIS Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our GIS Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive GIS and mapping services powered by cutting-edge technology 
              and expert spatial analysis capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gisServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
                    <Icon className="text-blue-600" size={32} />
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Major GIS Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming data into actionable insights through advanced GIS solutions
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : project.status === 'Ongoing'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-800">{project.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Calendar className="text-blue-600" size={20} />
                      <span className="font-semibold">Duration:</span>
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Target className="text-blue-600" size={20} />
                      <span className="font-semibold">Coverage:</span>
                      <span>{project.coverage}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <Users className="text-blue-600" size={20} />
                    <span className="font-semibold">Client:</span>
                    <span>{project.client}</span>
                  </div>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                    View Project Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced GIS technologies and methodologies for comprehensive spatial solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <Award className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{capability.title}</h3>
                    <p className="text-gray-600 text-sm">{capability.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Technology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Advanced GIS Software & Technology
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We utilize industry-leading GIS software and cutting-edge technology to deliver 
                precise, reliable, and comprehensive spatial solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <Database className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">ArcGIS Enterprise</h3>
                    <p className="text-gray-600">Complete GIS platform for mapping, analysis, and data management</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <Satellite className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">ERDAS IMAGINE</h3>
                    <p className="text-gray-600">Advanced remote sensing and photogrammetry software</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <Map className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">QGIS & PostGIS</h3>
                    <p className="text-gray-600">Open-source GIS solutions for flexible and cost-effective projects</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="GIS technology"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Unlock the Power of Spatial Data</h2>
          <p className="text-xl mb-8">
            Transform your data into actionable insights with our advanced GIS and mapping solutions. 
            Let us help you make informed decisions based on spatial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start GIS Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              View GIS Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GISMapping;