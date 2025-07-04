import React from 'react';
import { MapPin, Star, Users, ArrowRight } from 'lucide-react';
import { DestinationType } from '../types';

interface FeaturedDestinationsProps {
  onViewDestination: (destination: DestinationType) => void;
}

const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({ onViewDestination }) => {
  const destinations: DestinationType[] = [
    {
      id: '1',
      name: 'Barcelona',
      country: 'Spain',
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A vibrant city known for its unique architecture, rich culture, and Mediterranean charm.',
      highlights: ['Sagrada Familia', 'Gothic Quarter', 'Beach Life', 'Tapas Culture'],
      bestTime: 'March - October',
      rating: 4.8,
      guides: 28
    },
    {
      id: '2',
      name: 'Kyoto',
      country: 'Japan',
      image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ancient temples, traditional gardens, and authentic Japanese culture.',
      highlights: ['Bamboo Forest', 'Golden Pavilion', 'Geisha District', 'Cherry Blossoms'],
      bestTime: 'March - May',
      rating: 4.9,
      guides: 31
    },
    {
      id: '3',
      name: 'Machu Picchu',
      country: 'Peru',
      image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The ancient Incan citadel high in the Andes Mountains.',
      highlights: ['Historic Ruins', 'Mountain Views', 'Inca Trail', 'Archaeological Wonder'],
      bestTime: 'May - September',
      rating: 4.7,
      guides: 18
    },
    {
      id: '4',
      name: 'Maldives',
      country: 'Maldives',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Tropical paradise with overwater bungalows and pristine beaches.',
      highlights: ['Overwater Villas', 'Coral Reefs', 'Water Sports', 'Luxury Resorts'],
      bestTime: 'November - April',
      rating: 4.6,
      guides: 15
    },
    {
      id: '5',
      name: 'Cape Town',
      country: 'South Africa',
      image: 'https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A stunning city nestled between mountains and sea, famous for Table Mountain, beaches, and vibrant culture.',
      highlights: ['Table Mountain', 'Robben Island', 'V&A Waterfront', 'Winelands'],
      bestTime: 'November - March',
      rating: 4.7,
      guides: 22
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the world's most breathtaking locations, handpicked by our travel experts
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group cursor-pointer"
              onClick={() => onViewDestination(destination)}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{destination.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {destination.bestTime}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{destination.country}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {destination.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 2).map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-sky-50 text-sky-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 2 && (
                        <span className="text-gray-500 text-xs">
                          +{destination.highlights.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{destination.guides} guides</span>
                    </div>
                    <div className="flex items-center text-sky-600 font-medium text-sm group-hover:text-sky-700">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => onViewDestination(destinations[0])}
            className="inline-flex items-center space-x-2 bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;