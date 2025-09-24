import React from "react";
import { MapPin, Building, Compass, Camera, Users, Leaf, CheckCircle2 } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Cadastral & Engineering Survey",
      description:
        "Precise boundary surveys, topographic mapping, and engineering measurements using state-of-the-art equipment and methodologies.",
      icon: MapPin,
      features: ["Boundary Surveys", "Topographic Mapping", "Construction Staking", "As-Built Surveys"],
    },
    {
      title: "Physical Planning",
      description:
        "Comprehensive urban and regional planning services for sustainable development and efficient land use management.",
      icon: Building,
      features: ["Master Planning", "Zoning Studies", "Development Control", "Urban Design"],
    },
    {
      title: "GIS & Mapping",
      description:
        "Advanced Geographic Information Systems solutions for spatial analysis, data management, and decision support.",
      icon: Compass,
      features: ["Spatial Analysis", "Database Design", "Web Mapping", "Custom Applications"],
    },
    {
      title: "Aerial Photography",
      description:
        "High-resolution aerial imagery and photogrammetric services for mapping, monitoring, and documentation.",
      icon: Camera,
      features: ["Drone Surveys", "Orthophoto Maps", "Volume Calculations", "Progress Monitoring"],
    },
    {
      title: "Resettlement Action Plan",
      description:
        "Comprehensive planning and implementation support for community resettlement projects with social safeguards.",
      icon: Users,
      features: ["Social Surveys", "Compensation Planning", "Livelihood Restoration", "Monitoring & Evaluation"],
    },
    {
      title: "Environmental & Social Impact Assessment",
      description:
        "Professional environmental and social impact assessments to ensure sustainable and compliant development.",
      icon: Leaf,
      features: ["Environmental Audits", "Social Impact Studies", "Compliance Monitoring", "Mitigation Planning"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver comprehensive surveying, mapping, and planning solutions designed to meet Africa’s unique
            challenges with precision, professionalism, and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-green-500"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 mb-6">
                  <Icon className="text-green-600 w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="text-green-500 w-4 h-4" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
