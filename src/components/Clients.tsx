import React from 'react';

const Clients: React.FC = () => {
  const clients = [
    { name: 'Kenya Power', logo: 'https://logodix.com/logos/2011164.jpg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Safaricom', logo: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Kenya Railways', logo: 'https://images.pexels.com/photos/3825454/pexels-photo-3825454.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Ministry of Lands', logo: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'World Bank', logo: 'https://images.pexels.com/photos/3825563/pexels-photo-3825563.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'African Development Bank', logo: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Trusted Clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to work with leading organizations across Africa, delivering exceptional 
            surveying and mapping solutions that drive successful projects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-20 h-12 bg-gray-200 rounded mb-3 mx-auto flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-600">{client.name}</span>
                </div>
                <p className="text-sm text-gray-700 font-medium">{client.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Growing Client Base</h3>
            <p className="text-gray-600 mb-6">
              Experience the difference of working with Kenya's leading surveying and mapping professionals.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;