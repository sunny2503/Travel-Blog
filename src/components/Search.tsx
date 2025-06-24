import React, { useState } from 'react';
import { ArrowLeft, Search as SearchIcon, Filter, MapPin, Calendar, Star, Heart, Eye } from 'lucide-react';
import { BlogPostType } from '../types';

interface SearchProps {
  onBack: () => void;
  onViewPost: (view: string, post: BlogPostType) => void;
}

const Search: React.FC<SearchProps> = ({ onBack, onViewPost }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    category: 'all',
    region: 'all',
    duration: 'all',
    budget: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);

  const filters = {
    category: [
      { id: 'all', name: 'All Categories' },
      { id: 'destinations', name: 'Destinations' },
      { id: 'culture', name: 'Culture' },
      { id: 'adventure', name: 'Adventure' },
      { id: 'food', name: 'Food & Drink' },
      { id: 'budget', name: 'Budget Travel' }
    ],
    region: [
      { id: 'all', name: 'All Regions' },
      { id: 'europe', name: 'Europe' },
      { id: 'asia', name: 'Asia' },
      { id: 'americas', name: 'Americas' },
      { id: 'africa', name: 'Africa' },
      { id: 'oceania', name: 'Oceania' }
    ],
    duration: [
      { id: 'all', name: 'Any Duration' },
      { id: 'weekend', name: 'Weekend (2-3 days)' },
      { id: 'week', name: 'Week (4-7 days)' },
      { id: 'extended', name: 'Extended (8+ days)' }
    ],
    budget: [
      { id: 'all', name: 'Any Budget' },
      { id: 'budget', name: 'Budget ($0-50/day)' },
      { id: 'mid', name: 'Mid-range ($50-150/day)' },
      { id: 'luxury', name: 'Luxury ($150+/day)' }
    ]
  };

  const searchResults: BlogPostType[] = [
    {
      id: '1',
      title: 'The Ultimate Guide to Solo Travel in Southeast Asia',
      excerpt: 'Discover the best destinations, safety tips, and cultural experiences for solo travelers exploring Thailand, Vietnam, and Cambodia.',
      content: 'Full content...',
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: {
        name: 'Sarah Chen',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      category: 'destinations',
      tags: ['Solo Travel', 'Southeast Asia', 'Adventure'],
      date: '2024-01-15',
      readTime: '8 min read',
      likes: 342,
      comments: 28
    },
    {
      id: '2',
      title: 'Hidden Gems of the Scottish Highlands',
      excerpt: 'Venture beyond the tourist trails to discover secret lochs, ancient castles, and breathtaking viewpoints in Scotland.',
      content: 'Full content...',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: {
        name: 'James MacLeod',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      category: 'destinations',
      tags: ['Scotland', 'Hidden Gems', 'Nature'],
      date: '2024-01-12',
      readTime: '6 min read',
      likes: 128,
      comments: 15
    },
    {
      id: '3',
      title: 'Street Food Adventures in Mexico City',
      excerpt: 'A culinary journey through the vibrant food scene of Mexico City, from tacos al pastor to churros con cajeta.',
      content: 'Full content...',
      image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: {
        name: 'Maria Rodriguez',
        avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      category: 'food',
      tags: ['Mexico', 'Street Food', 'Culture'],
      date: '2024-01-10',
      readTime: '5 min read',
      likes: 256,
      comments: 32
    },
    {
      id: '4',
      title: 'Budget Travel Hacks for Europe',
      excerpt: 'Save money while exploring Europe with these insider tips on accommodation, transportation, and activities.',
      content: 'Full content...',
      image: 'https://images.pexels.com/photos/1488215/pexels-photo-1488215.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: {
        name: 'Emma Wilson',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      category: 'budget',
      tags: ['Europe', 'Budget Travel', 'Tips'],
      date: '2024-01-03',
      readTime: '9 min read',
      likes: 412,
      comments: 67
    }
  ];

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: value
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      category: 'all',
      region: 'all',
      duration: 'all',
      budget: 'all'
    });
  };

  const activeFiltersCount = Object.values(selectedFilters).filter(value => value !== 'all').length;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Search</h1>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search destinations, experiences, tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent text-lg"
              />
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-sky-600 text-white text-xs px-2 py-1 rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(filters).map(([filterType, options]) => (
                  <div key={filterType}>
                    <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                      {filterType}
                    </label>
                    <select
                      value={selectedFilters[filterType as keyof typeof selectedFilters]}
                      onChange={(e) => handleFilterChange(filterType, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    >
                      {options.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              
              {activeFiltersCount > 0 && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={clearFilters}
                    className="text-sky-600 hover:text-sky-700 font-medium text-sm"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Search Results */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Search Results ({searchResults.length})
            </h2>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
              <option>Most Relevant</option>
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Highest Rated</option>
            </select>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {searchResults.map((post) => (
              <div
                key={post.id}
                className="group cursor-pointer"
                onClick={() => onViewPost('blog-post', post)}
              >
                <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-32 h-24 flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full text-xs font-medium capitalize">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-gray-500 text-sm">
                        <span className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </span>
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm text-gray-600">{post.author.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Load More Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;