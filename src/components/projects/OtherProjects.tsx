import React from 'react';
import { Briefcase, Camera, Users, Award, Calendar, Target, MapPin, Building } from 'lucide-react';

const OtherProjects: React.FC = () => {
  const projectCategories = [
    {
      title: 'Aerial Photography & Photogrammetry',
      description: 'High-resolution aerial imaging and photogrammetric mapping services',
      icon: Camera,
      color: 'bg-orange-100 text-orange-600',
      projects: [
        'Coastal Erosion Monitoring - Kenya Coast',
        'Mining Site Documentation - Taita Taveta',
        'Agricultural Land Assessment - Central Kenya'
      ]
    },
    {
      title: 'Resettlement Action Plans',
      description: 'Comprehensive planning for community resettlement and compensation',
      icon: Users,
      color: 'bg-purple-100 text-purple-600',
      projects: [
        'SGR Phase 2 Resettlement - Nairobi to Naivasha',
        'Dam Construction RAP - Thwake Dam',
        'Highway Expansion Resettlement - A104 Road'
      ]
    },
    {
      title: 'Consultancy Services',
      description: 'Expert advisory services for development and infrastructure projects',
      icon: Briefcase,
      color: 'bg-indigo-100 text-indigo-600',
      projects: [
        'Port Development Advisory - Lamu Port',
        'Urban Development Consultancy - Konza City',
        'Infrastructure Planning - Northern Kenya'
      ]
    },
    {
      title: 'Research & Development',
      description: 'Innovation in surveying technology and methodologies',
      icon: Award,
      color: 'bg-teal-100 text-teal-600',
      projects: [
        'Drone Technology Integration Study',
        'GIS Database Optimization Research',
        'Sustainable Planning Methodologies'
      ]
    }
  ];

  const featuredProjects = [
    {
      title: 'Lamu Port-South Sudan-Ethiopia Transport Corridor',
      description: 'Comprehensive surveying and planning support for the LAPSSET corridor project',
      duration: '60 months',
      client: 'LAPSSET Corridor Development Authority',
      status: 'Ongoing',
      services: ['Engineering Survey', 'Environmental Assessment', 'Resettlement Planning'],
      image: 'https://images.pexels.com/photos/3825454/pexels-photo-3825454.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Konza Technopolis Master Planning',
      description: 'Smart city planning and infrastructure development for Kenya\'s Silicon Savannah',
      duration: '48 months',
      client: 'Konza Technopolis Development Authority',
      status: 'In Progress',
      services: ['Physical Planning', 'GIS Mapping', 'Infrastructure Survey'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Lake Victoria Water Management',
      description: 'Integrated water resource management and environmental monitoring',
      duration: '36 months',
      client: 'Lake Victoria Basin Commission',
      status: 'Completed',
      services: ['Environmental Monitoring', 'GIS Analysis', 'Community Engagement'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const capabilities = [
    'Project Management & Coordination',
    'Stakeholder Engagement & Consultation',
    'Technical Training & Capacity Building',
    'Quality Assurance & Control',
    'Regulatory Compliance Support',
    'Data Management & Analysis',
    'Report Writing & Documentation',
    'Multi-disciplinary Team Coordination'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Briefcase size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Other Projects & Services
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Diverse portfolio of specialized projects and consultancy services 
              supporting development across East Africa
            </p>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services and projects that complement our core surveying and planning offerings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`p-4 rounded-full inline-block mb-6 ${category.color}`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{category.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 mb-3">Recent Projects:</h4>
                    {category.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                        <span>{project}</span>
                      </div>
                    ))}
                  </div>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Major Multi-Disciplinary Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Large-scale projects that showcase our integrated approach to development challenges
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
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
                      <Calendar className="text-gray-600" size={20} />
                      <span className="font-semibold">Duration:</span>
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Building className="text-gray-600" size={20} />
                      <span className="font-semibold">Client:</span>
                      <span className="text-sm">{project.client}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Services Provided:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                    View Project Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Additional Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting services that enhance our project delivery and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0">
                    <Target className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{capability}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Technology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Innovation & Technology Integration
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We continuously invest in new technologies and methodologies to enhance 
                our service delivery and provide innovative solutions to complex challenges.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0">
                    <Camera className="text-gray-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Drone Technology</h3>
                    <p className="text-gray-600">Advanced UAV systems for aerial mapping and monitoring</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0">
                    <Award className="text-gray-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">AI & Machine Learning</h3>
                    <p className="text-gray-600">Automated data processing and analysis capabilities</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0">
                    <MapPin className="text-gray-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">IoT Integration</h3>
                    <p className="text-gray-600">Smart sensors for real-time monitoring and data collection</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/3825563/pexels-photo-3825563.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Technology innovation"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-700 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Explore Partnership Opportunities</h2>
          <p className="text-xl mb-8">
            Whether you need specialized consulting, innovative technology solutions, or 
            comprehensive project support, we're here to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Discuss Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300">
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherProjects;