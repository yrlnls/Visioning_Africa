import React from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Cadastral and Engineering Survey",
      location: "Multiple Counties, Kenya",
      date: "2018 - Present",
      description: "Comprehensive cadastral and engineering survey services for infrastructure development projects across Kenya.",
      details: [
        "Boundary surveys and land demarcation for major infrastructure projects",
        "Topographic surveys for road construction and urban development",
        "Engineering surveys for water supply and irrigation systems",
        "Deformation monitoring for dams and bridges"
      ],
      status: "Ongoing"
    },
    {
      title: "Physical Planning",
      location: "Nairobi, Mombasa, Kisumu, Nakuru",
      date: "2019 - Present",
      description: "Urban and regional physical planning services supporting sustainable development initiatives.",
      details: [
        "Master planning for new urban developments",
        "Land use planning and zoning regulations",
        "Development control and building approvals",
        "Environmental impact assessments for planned developments"
      ],
      status: "Ongoing"
    },
    {
      title: "GIS and Mapping",
      location: "East Africa Region",
      date: "2017 - Present",
      description: "Advanced GIS and digital mapping services for government agencies and private sector clients.",
      details: [
        "Digital mapping and cartography for national databases",
        "Geographic Information Systems implementation",
        "Spatial data analysis for urban planning",
        "Web-based mapping applications development"
      ],
      status: "Ongoing"
    },
    {
      title: "Environmental and Social Impact Assessment",
      location: "Kenya, Uganda, Tanzania",
      date: "2016 - Present",
      description: "Comprehensive environmental and social impact assessments for major development projects.",
      details: [
        "Environmental Impact Assessments (EIA) for infrastructure projects",
        "Social Impact Assessments (SIA) for community development",
        "Environmental audits and compliance monitoring",
        "Resettlement Action Plans (RAP) for affected communities"
      ],
      status: "Ongoing"
    },
    {
      title: "Athi River - Namanga Road (A2) Survey",
      location: "Kajiado County, Kenya",
      date: "2019",
      description: "Detailed engineering survey for the Athi River - Namanga road section covering 136km.",
      details: [
        "Route survey and alignment optimization",
        "Topographic mapping of the corridor",
        "Environmental impact assessment",
        "Stakeholder consultation and engagement"
      ],
      status: "Completed"
    },
    {
      title: "Standard Gauge Railway Mapping",
      location: "Kenya",
      date: "2017 - Ongoing",
      description: "Comprehensive mapping and GIS services for the Standard Gauge Railway project.",
      details: [
        "Land acquisition mapping and documentation",
        "Route alignment and station planning",
        "Environmental monitoring and compliance",
        "Resettlement planning and implementation"
      ],
      status: "Ongoing"
    },
    {
      title: "Nairobi County GIS Implementation",
      location: "Nairobi County, Kenya",
      date: "2015",
      description: "Implementation of comprehensive GIS system for Nairobi County's urban planning department.",
      details: [
        "Digital mapping of all county properties",
        "Development of web-based GIS portal",
        "Training of county staff on GIS applications",
        "Integration with existing county systems"
      ],
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'Completed' ? 'text-green-600 bg-green-100' : 'text-blue-600 bg-blue-100';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our comprehensive portfolio of surveying, mapping, and planning projects
              across East Africa, showcasing our commitment to excellence and sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From infrastructure development to environmental conservation, our projects span
              across multiple sectors and geographical locations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2 text-green-600" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2 text-green-600" />
                      <span className="text-sm">{project.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <ExternalLink size={14} className="mr-2 mt-1 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Counties Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">KM Surveyed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our expertise in surveying, mapping, and planning can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
