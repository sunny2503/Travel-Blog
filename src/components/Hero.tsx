import React, { useState, useEffect } from 'react';
import { Search, MapPin, ArrowRight, Star } from 'lucide-react';

const featuredCities = [
  { name: 'Barcelona', country: 'Spain' },
  { name: 'Kyoto', country: 'Japan' },
  { name: 'Machu Picchu', country: 'Peru' },
  { name: 'Maldives', country: 'Maldives' },
  { name: 'Cape Town', country: 'South Africa' },
];

interface HeroProps {
  onCitySelect?: (city: { name: string; country: string }) => void;
}

const Hero: React.FC<HeroProps> = ({ onCitySelect }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredCities, setFilteredCities] = useState(featuredCities);

  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
      title: 'Discover Hidden Gems',
      subtitle: 'Explore breathtaking destinations around the world',
      location: 'Barcelona, Spain'
    },
    {
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
      title: 'Adventure Awaits',
      subtitle: 'Create unforgettable memories in exotic locations',
      location: 'Bali, Indonesia'
    },
    {
      image: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
      title: 'Cultural Journeys',
      subtitle: 'Immerse yourself in rich traditions and history',
      location: 'Kyoto, Japan'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setFilteredCities(
      featuredCities.filter(city =>
        city.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const currentHero = heroSlides[currentSlide];

  const handleCitySelect = (city: { name: string; country: string }) => {
    setSearchQuery(city.name);
    setShowDropdown(false);
    if (onCitySelect) {
      onCitySelect(city);
    } else {
      console.log('Selected city:', city);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.location}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{currentHero.location}</span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">4.9</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {currentHero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto">
            {currentHero.subtitle}
          </p>

          {/* City Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="flex items-center bg-white rounded-full shadow border border-sky-200 focus-within:border-sky-400 transition-all duration-200 px-4 h-10">
              <Search className="w-5 h-5 text-sky-600 mr-2" />
              <input
                type="text"
                className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-base h-8"
                placeholder="Search cities (e.g. Kyoto, Barcelona)"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                style={{ boxShadow: 'none' }}
              />
              <button
                type="button"
                className="ml-2 flex items-center justify-center px-4 h-8 rounded-full bg-sky-500 hover:bg-sky-600 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-sky-400 text-white font-semibold text-sm"
                onClick={() => {
                  const match = filteredCities.find(city => city.name.toLowerCase() === searchQuery.trim().toLowerCase());
                  if (match) {
                    handleCitySelect(match);
                  }
                }}
                tabIndex={0}
                aria-label="Search city"
              >
                Search
              </button>
            </div>
            {showDropdown && searchQuery && filteredCities.length > 0 && (
              <div className="absolute left-0 right-0 bg-white rounded-b-2xl shadow z-30 mt-1 max-h-60 overflow-y-auto border border-t-0 border-sky-200 animate-fade-in">
                {filteredCities.map(city => (
                  <button
                    key={city.name}
                    className="w-full text-left px-4 py-2 hover:bg-sky-50 text-base text-gray-800 font-normal transition-colors duration-150 flex items-center gap-2"
                    onClick={() => handleCitySelect(city)}
                  >
                    <MapPin className="w-4 h-4 text-sky-500" />
                    {city.name}, <span className="text-gray-500">{city.country}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm text-gray-300">Destinations</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm text-gray-300">Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1M+</div>
              <div className="text-sm text-gray-300">Photos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;