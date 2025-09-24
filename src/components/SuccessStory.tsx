import React from 'react';
import { CheckCircle, MapPin, Users, Calendar } from 'lucide-react';

const SuccessStory: React.FC = () => {
  const projects = [
    {
      title: 'Northern Corridor Infrastructure Project',
      description: 'Comprehensive surveying and mapping for the 500km highway project connecting Kenya, Uganda, and South Sudan.',
      achievements: ['500km of highway surveyed', '15,000 land parcels mapped', '50+ communities engaged'],
      duration: '24 months',
      location: 'Kenya, Uganda, South Sudan',
      image: 'https://images.pexels.com/photos/3825454/pexels-photo-3825454.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Nairobi Metropolitan Urban Planning',
      description: 'Master planning and GIS development for sustainable urban growth in the Greater Nairobi area.',
      achievements: ['2,000 sq km planned', '1M+ residents impacted', '100+ stakeholders engaged'],
      duration: '18 months',
      location: 'Nairobi, Kenya',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Renewable Energy Mapping Initiative',
      description: 'Geospatial analysis and site selection for solar and wind energy projects across East Africa.',
      achievements: ['50+ sites evaluated', '500MW capacity planned', '10 countries covered'],
      duration: '12 months',
      location: 'East Africa',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our expertise has contributed to transformative projects across Africa, 
            delivering measurable impact and sustainable development.
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
                <h3 className="text-3xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="text-green-600" size={20} />
                    <span className="font-semibold">Duration:</span>
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="text-green-600" size={20} />
                    <span className="font-semibold">Location:</span>
                    <span>{project.location}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-center gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-green-600 to-green-800 text-white p-12 rounded-xl text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can drive the success of your next surveying or mapping project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;