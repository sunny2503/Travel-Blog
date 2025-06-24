import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Calendar, Thermometer, Camera, Utensils, Bed, Car, Download, Heart, Share2 } from 'lucide-react';

interface DestinationGuideProps {
  onBack: () => void;
}

const DestinationGuide: React.FC<DestinationGuideProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const destination = {
    name: 'Santorini',
    country: 'Greece',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/161901/santorini-travel-tour-vacation-161901.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A stunning Greek island in the Aegean Sea, famous for its dramatic cliffs, stunning sunsets, white-washed buildings, and crystal-clear waters.',
    bestTime: 'April - October',
    temperature: '20-28°C',
    highlights: [
      'Iconic Blue Domes',
      'Volcanic Beaches',
      'Wine Tasting',
      'Sunset Views',
      'Traditional Villages',
      'Archaeological Sites'
    ],
    budget: {
      budget: '$50-80/day',
      midRange: '$80-150/day',
      luxury: '$150+/day'
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: MapPin },
    { id: 'attractions', label: 'Attractions', icon: Camera },
    { id: 'food', label: 'Food & Drink', icon: Utensils },
    { id: 'accommodation', label: 'Stay', icon: Bed },
    { id: 'transport', label: 'Getting Around', icon: Car }
  ];

  const attractions = [
    {
      name: 'Oia Village',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Famous for its stunning sunsets and blue-domed churches',
      rating: 4.9,
      duration: '2-3 hours'
    },
    {
      name: 'Red Beach',
      image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Unique red volcanic sand beach with dramatic cliffs',
      rating: 4.6,
      duration: '1-2 hours'
    },
    {
      name: 'Akrotiri Archaeological Site',
      image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Ancient Minoan city preserved by volcanic ash',
      rating: 4.5,
      duration: '1.5 hours'
    }
  ];

  const foods = [
    {
      name: 'Fresh Seafood',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Grilled octopus, sea bream, and lobster pasta',
      price: '€15-30'
    },
    {
      name: 'Santorini Wine',
      image: 'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Assyrtiko white wine and Vinsanto dessert wine',
      price: '€8-25'
    },
    {
      name: 'Traditional Greek',
      image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Moussaka, souvlaki, and Greek salad',
      price: '€10-18'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About Santorini</h3>
              <p className="text-gray-600 leading-relaxed">
                {destination.description} This volcanic island offers a unique blend of natural beauty, 
                rich history, and authentic Greek culture that captivates every visitor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-sky-50 p-6 rounded-xl">
                <Calendar className="w-8 h-8 text-sky-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Best Time to Visit</h4>
                <p className="text-gray-600">{destination.bestTime}</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <Thermometer className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Temperature</h4>
                <p className="text-gray-600">{destination.temperature}</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <Star className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Rating</h4>
                <div className="flex items-center">
                  <span className="text-gray-900 font-semibold">{destination.rating}</span>
                  <div className="flex ml-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= destination.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="bg-gray-50 px-4 py-2 rounded-lg text-center">
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Budget Guide</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Budget</h4>
                  <p className="text-2xl font-bold text-green-600 mb-2">{destination.budget.budget}</p>
                  <p className="text-gray-600 text-sm">Hostels, local food, public transport</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Mid-Range</h4>
                  <p className="text-2xl font-bold text-blue-600 mb-2">{destination.budget.midRange}</p>
                  <p className="text-gray-600 text-sm">Hotels, restaurants, tours</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Luxury</h4>
                  <p className="text-2xl font-bold text-purple-600 mb-2">{destination.budget.luxury}</p>
                  <p className="text-gray-600 text-sm">Resorts, fine dining, private tours</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'attractions':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Top Attractions</h3>
            {attractions.map((attraction, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full md:w-48 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900">{attraction.name}</h4>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-gray-600">{attraction.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{attraction.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Duration: {attraction.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'food':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Local Cuisine</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foods.map((food, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{food.name}</h4>
                    <p className="text-gray-600 mb-3 text-sm">{food.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sky-600 font-semibold">{food.price}</span>
                      <button className="text-sky-600 hover:text-sky-700 text-sm font-medium">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-500">Content for {activeTab} coming soon...</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Destination Info */}
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{destination.country}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{destination.name}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-lg font-semibold">{destination.rating}</span>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors flex items-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Save</span>
              </button>
              <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors flex items-center space-x-2">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-full transition-colors flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download Guide</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-sky-600 border-b-2 border-sky-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default DestinationGuide;