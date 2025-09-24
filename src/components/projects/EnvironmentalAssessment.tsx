import React from 'react';
import { Leaf, Shield, Users, CheckCircle, Calendar, Award, Target, TreePine } from 'lucide-react';

const EnvironmentalAssessment: React.FC = () => {
  const projects = [
    {
      title: 'Lamu Coal Power Plant ESIA',
      description: 'Comprehensive environmental and social impact assessment for proposed coal power plant',
      duration: '18 months',
      client: 'Amu Power Company',
      status: 'Completed',
      scope: 'Environmental & Social',
      image: 'https://images.pexels.com/photos/3825563/pexels-photo-3825563.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Geothermal Development EIA',
      description: 'Environmental impact assessment for geothermal energy development in Rift Valley',
      duration: '24 months',
      client: 'Kenya Electricity Generating Company',
      status: 'Ongoing',
      scope: 'Environmental Impact',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Highway Expansion ESIA',
      description: 'Social and environmental assessment for major highway expansion project',
      duration: '15 months',
      client: 'Kenya National Highways Authority',
      status: 'In Progress',
      scope: 'Environmental & Social',
      image: 'https://images.pexels.com/photos/3825454/pexels-photo-3825454.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const assessmentServices = [
    {
      title: 'Environmental Impact Assessment',
      description: 'Comprehensive evaluation of potential environmental effects of proposed projects',
      icon: Leaf
    },
    {
      title: 'Social Impact Assessment',
      description: 'Analysis of social consequences and community impacts of development projects',
      icon: Users
    },
    {
      title: 'Environmental Auditing',
      description: 'Systematic evaluation of environmental compliance and performance',
      icon: Shield
    },
    {
      title: 'Mitigation Planning',
      description: 'Development of strategies to minimize negative environmental and social impacts',
      icon: Target
    }
  ];

  const expertise = [
    { area: 'Biodiversity Assessment', description: 'Flora and fauna surveys and impact evaluation' },
    { area: 'Water Resources', description: 'Surface and groundwater impact assessment' },
    { area: 'Air Quality Monitoring', description: 'Atmospheric pollution assessment and monitoring' },
    { area: 'Noise Impact Studies', description: 'Acoustic environment assessment and mitigation' },
    { area: 'Soil Contamination', description: 'Soil quality assessment and remediation planning' },
    { area: 'Community Engagement', description: 'Stakeholder consultation and participation processes' },
    { area: 'Resettlement Planning', description: 'Involuntary resettlement action plans' },
    { area: 'Cultural Heritage', description: 'Archaeological and cultural site assessments' }
  ];

  const achievements = [
    { number: '200+', label: 'ESIAs Completed' },
    { number: '50+', label: 'EIAs Conducted' },
    { number: '1M+', label: 'People Consulted' },
    { number: '15+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Leaf size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Environmental & Social Impact Assessment
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Ensuring sustainable development through comprehensive environmental and 
              social impact assessments across East Africa
            </p>
          </div>
        </div>
      </section>

      {/* Assessment Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Assessment Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive environmental and social assessment services to ensure 
              sustainable and responsible development practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-emerald-100 p-4 rounded-full inline-block mb-6">
                    <Icon className="text-emerald-600" size={32} />
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Major Assessment Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading environmental and social impact assessments for significant development projects
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
                      <Calendar className="text-emerald-600" size={20} />
                      <span className="font-semibold">Duration:</span>
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Target className="text-emerald-600" size={20} />
                      <span className="font-semibold">Scope:</span>
                      <span>{project.scope}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <Users className="text-emerald-600" size={20} />
                    <span className="font-semibold">Client:</span>
                    <span>{project.client}</span>
                  </div>

                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                    View Assessment Report
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Areas of Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized knowledge across multiple environmental and social assessment disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">
                    <TreePine className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.area}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven experience in environmental and social impact assessment across East Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-emerald-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-emerald-600 mb-2">{achievement.number}</div>
                <div className="text-gray-700 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Assessment Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to environmental and social impact assessment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
                  <span className="text-emerald-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Scoping & Planning</h3>
                  <p className="text-gray-600">Define assessment scope, methodology, and stakeholder engagement strategy</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
                  <span className="text-emerald-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Baseline Studies</h3>
                  <p className="text-gray-600">Comprehensive environmental and social baseline data collection</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
                  <span className="text-emerald-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Impact Assessment</h3>
                  <p className="text-gray-600">Identification and evaluation of potential environmental and social impacts</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
                  <span className="text-emerald-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Mitigation & Monitoring</h3>
                  <p className="text-gray-600">Development of mitigation measures and monitoring programs</p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Environmental assessment"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ensure Sustainable Development</h2>
          <p className="text-xl mb-8">
            Partner with us for comprehensive environmental and social impact assessments 
            that promote sustainable and responsible development practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalAssessment;