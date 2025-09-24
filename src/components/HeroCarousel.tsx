import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Compass, Building, Leaf } from 'lucide-react';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Positioning Services',
      subtitle: 'Cadastral & Engineering Survey',
      description: 'Precise land surveying and cadastral mapping services using cutting-edge technology for accurate property boundaries and engineering projects.',
      icon: <MapPin className="text-green-600" size={48} />,
      bgGradient: 'from-green-600 to-green-800',
      image: 'https://images.pexels.com/photos/3825454/pexels-photo-3825454.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      title: 'GIS & Mapping',
      subtitle: 'Remote Sensing, Cartography, Mapping',
      description: 'Advanced Geographic Information Systems, remote sensing technologies, and detailed cartographic solutions for comprehensive spatial analysis.',
      icon: <Compass className="text-green-600" size={48} />,
      bgGradient: 'from-green-600 to-green-800',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      title: 'Physical Planning',
      subtitle: 'Urban and Regional Planning',
      description: 'Comprehensive urban and regional planning services to create sustainable, well-organized communities and development projects.',
      icon: <Building className="text-purple-600" size={48} />,
      bgGradient: 'from-purple-600 to-purple-800',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      title: 'Environmental Consultancy',
      subtitle: 'Social and Environmental Impact',
      description: 'Expert environmental and social impact assessments to ensure sustainable development and regulatory compliance.',
      icon: <Leaf className="text-emerald-600" size={48} />,
      bgGradient: 'from-emerald-600 to-emerald-800',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          } ${index < currentSlide ? '-translate-x-full' : ''}`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-85`}></div>
          </div>
          
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="mb-6 flex justify-center">
                {slide.icon}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <h2 className="text-xl md:text-2xl font-light mb-6 animate-fade-in-delay-1">
                {slide.subtitle}
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-delay-2">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
                <button className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;