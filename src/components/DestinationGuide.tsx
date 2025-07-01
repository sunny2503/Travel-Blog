import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Calendar, Thermometer, Camera, Utensils, Bed, Car, Download, Heart, Share2 } from 'lucide-react';
import { DestinationType } from '../types';

interface DestinationGuideProps {
  destination: DestinationType;
  onBack: () => void;
}

const DestinationGuide: React.FC<DestinationGuideProps> = ({ destination, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: MapPin },
    { id: 'attractions', label: 'Attractions', icon: Camera },
    { id: 'food', label: 'Food & Drink', icon: Utensils },
    { id: 'accommodation', label: 'Stay', icon: Bed },
    { id: 'transport', label: 'Getting Around', icon: Car }
  ];

  // Attractions and foods by city
  let attractions = [];
  let foods = [];
  switch (destination.name) {
    case 'Barcelona':
      attractions = [
        {
          name: 'Sagrada Familia',
          image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Gaudí\'s masterpiece cathedral with stunning architecture',
          rating: 4.9,
          duration: '2-3 hours'
        },
        {
          name: 'Park Güell',
          image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Whimsical park with colorful mosaics and city views',
          rating: 4.7,
          duration: '2-3 hours'
        },
        {
          name: 'Gothic Quarter',
          image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Medieval neighborhood with narrow streets and historic buildings',
          rating: 4.6,
          duration: '3-4 hours'
        }
      ];
      foods = [
        {
          name: 'Tapas',
          image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Patatas bravas, jamón ibérico, and croquetas',
          price: '€8-20'
        },
        {
          name: 'Catalan Cuisine',
          image: 'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Paella, fideuà, and crema catalana',
          price: '€15-35'
        },
        {
          name: 'Fresh Seafood',
          image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Grilled fish, seafood paella, and fideuà',
          price: '€20-40'
        }
      ];
      break;
    case 'Kyoto':
      attractions = [
        {
          name: 'Fushimi Inari Shrine',
          image: 'https://images.pexels.com/photos/161216/torii-gate-shrine-japan-kyoto-161216.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Famous for its thousands of vermilion torii gates',
          rating: 4.9,
          duration: '2 hours'
        },
        {
          name: 'Arashiyama Bamboo Grove',
          image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'A magical bamboo forest path',
          rating: 4.8,
          duration: '1 hour'
        },
        {
          name: 'Kinkaku-ji (Golden Pavilion)',
          image: 'https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Iconic Zen Buddhist temple covered in gold leaf',
          rating: 4.7,
          duration: '1.5 hours'
        }
      ];
      foods = [
        {
          name: 'Kaiseki',
          image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Traditional multi-course Japanese dinner',
          price: '¥5000-15000'
        },
        {
          name: 'Yudofu',
          image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Hot tofu dish, a Kyoto specialty',
          price: '¥1000-2000'
        },
        {
          name: 'Matcha Sweets',
          image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Green tea flavored desserts',
          price: '¥500-1500'
        }
      ];
      break;
    case 'Machu Picchu':
      attractions = [
        {
          name: 'The Citadel',
          image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Ancient Incan city and UNESCO World Heritage Site',
          rating: 5.0,
          duration: '3-4 hours'
        },
        {
          name: 'Huayna Picchu',
          image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Mountain peak with panoramic views',
          rating: 4.8,
          duration: '2 hours'
        },
        {
          name: 'Temple of the Sun',
          image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Sacred Incan temple with impressive stonework',
          rating: 4.7,
          duration: '1 hour'
        }
      ];
      foods = [
        {
          name: 'Cuy (Guinea Pig)',
          image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Traditional Andean delicacy',
          price: 'S/40-60'
        },
        {
          name: 'Lomo Saltado',
          image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Stir-fried beef with vegetables and fries',
          price: 'S/20-35'
        },
        {
          name: 'Quinoa Soup',
          image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Nutritious soup made with local quinoa',
          price: 'S/10-20'
        }
      ];
      break;
    case 'Maldives':
      attractions = [
        {
          name: 'Overwater Villas',
          image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Iconic luxury villas above turquoise waters',
          rating: 4.9,
          duration: 'Overnight'
        },
        {
          name: 'Coral Reefs',
          image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Snorkeling and diving among vibrant marine life',
          rating: 4.8,
          duration: '2-3 hours'
        },
        {
          name: 'Sandbank Picnic',
          image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Private picnic on a remote sandbank',
          rating: 4.7,
          duration: 'Half day'
        }
      ];
      foods = [
        {
          name: 'Mas Huni',
          image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Tuna, coconut, onion, and chili salad',
          price: 'MVR 30-50'
        },
        {
          name: 'Garudhiya',
          image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Fragrant fish soup served with rice',
          price: 'MVR 40-60'
        },
        {
          name: 'Fihunu Mas',
          image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Grilled fish with Maldivian spices',
          price: 'MVR 60-100'
        }
      ];
      break;
    case 'Cape Town':
      attractions = [
        {
          name: 'Table Mountain',
          image: 'https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Ride the cable car or hike to the top for panoramic views',
          rating: 4.9,
          duration: '2-4 hours'
        },
        {
          name: 'Robben Island',
          image: 'https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Historic island prison where Nelson Mandela was held',
          rating: 4.7,
          duration: 'Half day'
        },
        {
          name: 'V&A Waterfront',
          image: 'https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Bustling harbor with shops, restaurants, and entertainment',
          rating: 4.8,
          duration: '2-3 hours'
        }
      ];
      foods = [
        {
          name: 'Braai',
          image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'South African barbecue with grilled meats',
          price: 'R80-200'
        },
        {
          name: 'Bobotie',
          image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Spiced minced meat baked with egg-based topping',
          price: 'R60-120'
        },
        {
          name: 'Cape Malay Curry',
          image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Aromatic curry with Malay spices',
          price: 'R70-150'
        }
      ];
      break;
    default:
      attractions = [
        {
          name: 'Main Attraction',
          image: destination.image,
          description: 'Explore the best this destination has to offer!',
          rating: 4.5,
          duration: '2 hours'
        }
      ];
      foods = [
        {
          name: 'Local Dish',
          image: destination.image,
          description: 'Try the local cuisine!',
          price: 'Varies'
        }
      ];
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About {destination.name}</h3>
              <p className="text-gray-600 leading-relaxed">
                {destination.description} This cosmopolitan city offers a perfect blend of historic charm, 
                modern innovation, and Mediterranean lifestyle that enchants every visitor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-sky-50 p-6 rounded-xl">
                <Calendar className="w-8 h-8 text-sky-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Best Time to Visit</h4>
                <p className="text-gray-600">{destination.bestTime}</p>
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
                        className={`w-4 h-4 ${star <= destination.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
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