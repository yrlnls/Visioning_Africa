import React from 'react';
import { Building, Users, MapPin, CheckCircle, Calendar, Award, Target } from 'lucide-react';

const PhysicalPlanningProjects: React.FC = () => {
  const projects = [
    {
      title: 'Nairobi Metropolitan Master Plan',
      description: 'Comprehensive urban planning for Greater Nairobi area covering 2,000 sq km',
      duration: '36 months',
      client: 'Nairobi City County',
      status: 'Completed',
      beneficiaries: '4.5M residents',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Kisumu Lakefront Development Plan',
      description: 'Sustainable waterfront development and urban renewal project',
      duration: '24 months',
      client: 'Kisumu County Government',
      status: 'Ongoing',
      beneficiaries: '500K residents',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Mombasa Port City Expansion',
      description: 'Strategic planning for port city expansion and infrastructure development',
      duration: '30 months',
      client: 'Kenya Ports Authority',
      status: 'In Progress',
      beneficiaries: '1.2M residents',
      image: 'https://images.pexels.com/photos/3825454/pexels-photo-3825454.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const planningServices = [
    {
      title: 'Master Planning',
      description: 'Comprehensive long-term development plans for cities and regions',
      icon: Building
    },
    {
      title: 'Zoning & Land Use',
      description: 'Strategic allocation of land for residential, commercial, and industrial use',
      icon: MapPin
    },
    {
      title: 'Infrastructure Planning',
      description: 'Planning for transportation, utilities, and public facilities',
      icon: Target
    },
    {
      title: 'Community Engagement',
      description: 'Stakeholder consultation and participatory planning processes',
      icon: Users
    }
  ];

  const achievements = [
    { number: '50+', label: 'Master Plans Developed' },
    { number: '15M+', label: 'People Impacted' },
    { number: '25+', label: 'Counties Served' },
    { number: '100+', label: 'Communities Engaged' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Building size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Physical Planning Projects
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Creating sustainable, well-organized communities through comprehensive 
              urban and regional planning across East Africa
            </p>
          </div>
        </div>
      </section>

      {/* Planning Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Planning Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive physical planning services that balance development 
              needs with environmental sustainability and community welfare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {planningServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-purple-100 p-4 rounded-full inline-block mb-6">
                    <Icon className="text-purple-600" size={32} />
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Major Planning Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming communities through strategic planning and sustainable development
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
                      <Calendar className="text-purple-600" size={20} />
                      <span className="font-semibold">Duration:</span>
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Users className="text-purple-600" size={20} />
                      <span className="font-semibold">Beneficiaries:</span>
                      <span>{project.beneficiaries}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <Building className="text-purple-600" size={20} />
                    <span className="font-semibold">Client:</span>
                    <span>{project.client}</span>
                  </div>

                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                    View Project Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results from our physical planning projects across East Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-purple-600 mb-2">{achievement.number}</div>
                <div className="text-gray-700 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Planning Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to creating sustainable and livable communities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Research & Analysis</h3>
                  <p className="text-gray-600">Comprehensive study of existing conditions, demographics, and development patterns</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Stakeholder Engagement</h3>
                  <p className="text-gray-600">Community consultation and involvement of all relevant stakeholders</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Plan Development</h3>
                  <p className="text-gray-600">Creation of comprehensive development plans with clear guidelines and regulations</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                  <span className="text-purple-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Implementation Support</h3>
                  <p className="text-gray-600">Ongoing support for plan implementation and monitoring</p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/3825563/pexels-photo-3825563.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Planning process"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Community</h2>
          <p className="text-xl mb-8">
            Partner with us to create sustainable, well-planned communities that enhance 
            quality of life and promote economic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Planning Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Download Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhysicalPlanningProjects;