import React, { useState } from 'react';
import { X, Heart, Download, Share2, MapPin } from 'lucide-react';
import { PhotoType } from '../types';

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoType | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [cityQuery, setCityQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'landscapes', name: 'Landscapes' },
    { id: 'culture', name: 'Culture' },
    { id: 'food', name: 'Food' },
    { id: 'wildlife', name: 'Wildlife' }
  ];

  const photos: PhotoType[] = [
    {
      id: '1',
      url: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Magnificent Sagrada Familia cathedral in Barcelona',
      location: 'Barcelona, Spain',
      photographer: 'Carlos Rodriguez'
    },
    {
      id: '2',
      url: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Misty morning in the Scottish Highlands',
      location: 'Scottish Highlands, UK',
      photographer: 'James MacLeod'
    },
    {
      id: '3',
      url: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Traditional longtail boats in Thailand',
      location: 'Phi Phi Islands, Thailand',
      photographer: 'Sarah Chen'
    },
    {
      id: '4',
      url: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Bamboo forest pathway in Kyoto',
      location: 'Kyoto, Japan',
      photographer: 'Takeshi Yamamoto'
    },
    {
      id: '5',
      url: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Vibrant street tacos in Mexico City',
      location: 'Mexico City, Mexico',
      photographer: 'Maria Rodriguez'
    },
    {
      id: '6',
      url: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Himalayan peaks at sunrise',
      location: 'Annapurna Circuit, Nepal',
      photographer: 'Alex Thompson'
    },
    {
      id: '7',
      url: 'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Colorful festival celebration in Rajasthan',
      location: 'Jaipur, India',
      photographer: 'Priya Sharma'
    },
    {
      id: '8',
      url: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Crystal clear waters of the Maldives',
      location: 'Maldives',
      photographer: 'David Ocean'
    },
    {
      id: '9',
      url: 'https://images.pexels.com/photos/1488215/pexels-photo-1488215.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Medieval architecture in Prague',
      location: 'Prague, Czech Republic',
      photographer: 'Emma Wilson'
    }
  ];

  // Filter photos by city/location
  const filteredPhotos = photos.filter(photo =>
    cityQuery.trim() === '' ||
    photo.location.toLowerCase().includes(cityQuery.trim().toLowerCase())
  );

  const openLightbox = (photo: PhotoType) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stunning moments captured by our travel community around the world
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-sky-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* City Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search by city..."
            value={cityQuery}
            onChange={e => setCityQuery(e.target.value)}
            className="w-full max-w-md px-6 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent text-lg shadow-sm"
          />
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                index % 6 === 0 || index % 6 === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              } ${index % 7 === 2 ? 'lg:row-span-2' : ''}`}
              onClick={() => openLightbox(photo)}
            >
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{photo.location}</span>
                    </div>
                    <button className="bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-1">{photo.caption}</p>
                    <p className="text-xs text-gray-300">by {photo.photographer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Load More Photos
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md text-white p-6 rounded-b-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{selectedPhoto.caption}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {selectedPhoto.location}
                    </span>
                    <span>by {selectedPhoto.photographer}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;