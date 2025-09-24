import React from "react";
import { MapPin, Building, Compass, Camera, Users, Leaf } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Positioning",
      description:
        "Over a period of time, we have been offering distinctive services in cadastral and engineering surveys while employing current technologies in delivering our services.",
      icon: MapPin,
      color: "text-gray-900 bg-gray-100",
    },
    {
      title: "Physical Planning",
      description:
        "Physical planning provides guidelines by which urban and rural development initiatives must adhere to for sustainable future urbanization. Geodev has been actively involved in the formulation of these guidelines in quite a good number of counties in Kenya.",
      icon: Building,
      color: "text-red-500 bg-red-100",
    },
    {
      title: "GIS and Mapping",
      description:
        "Geospatial technology provides a tool for managing spatial data. Our experienced GIS team provides intensive support to other departments in mapping and organizing spatial data.",
      icon: Compass,
      color: "text-blue-500 bg-blue-100",
    },
    {
      title: "Aerial Photography",
      description:
        "We use advanced aerial imaging systems to capture aerial images within the area of interest. Our imagery team ensures images delivered to clients are of good quality. In addition, we offer satellite images to our clients.",
      icon: Camera,
      color: "text-cyan-500 bg-cyan-100",
    },
    {
      title: "Resettlement Action Plan (RAP)",
      description:
        "Projects, as well as natural causes, impact the settlement of citizens and hence the need for RAP. We, Geodev, prepare RAP documents to guide in the acquisition, compensation, and resettlement of affected people.",
      icon: Users,
      color: "text-yellow-500 bg-yellow-100",
    },
    {
      title: "Environmental and Social Impact Assessment and Audit",
      description:
        "Our Environment team has undertaken ESIA and EIA projects that have been used to foresee the economic aspect of projects and the project's impact on the people and the environment.",
      icon: Leaf,
      color: "text-green-500 bg-green-100",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver comprehensive surveying, mapping, and planning solutions designed to meet Africa’s unique challenges with precision, professionalism, and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${service.color}`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
