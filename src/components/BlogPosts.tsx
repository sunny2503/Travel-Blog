import React, { useState } from 'react';
import { Calendar, Clock, Heart, MessageCircle, User, Tag } from 'lucide-react';
import { BlogPostType } from '../types';

interface BlogPostsProps {
  onViewPost: (view: string, post: BlogPostType) => void;
}

const BlogPosts: React.FC<BlogPostsProps> = ({ onViewPost }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'destinations', name: 'Destinations', count: 12 },
    { id: 'culture', name: 'Culture', count: 8 },
    { id: 'adventure', name: 'Adventure', count: 6 },
    { id: 'food', name: 'Food', count: 4 }
  ];

  const blogPosts: BlogPostType[] = [
    {
      id: '1',
      title: 'The Ultimate Guide to Solo Travel in Southeast Asia',
      excerpt: 'Discover the best destinations, safety tips, and cultural experiences for solo travelers exploring Thailand, Vietnam, and Cambodia.',
      content: 'Full blog post content...',
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
      content: 'Full blog post content...',
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
      content: 'Full blog post content...',
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
      title: 'Trekking the Annapurna Circuit: A 14-Day Journey',
      excerpt: 'Complete guide to one of Nepal\'s most spectacular treks, including preparation tips, route details, and what to expect.',
      content: 'Full blog post content...',
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: {
        name: 'Alex Thompson',
        avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      category: 'adventure',
      tags: ['Nepal', 'Hiking', 'Adventure'],
      date: '2024-01-08',
      readTime: '12 min read',
      likes: 189,
      comments: 21
    },
    {
      id: '5',
      title: 'Traditional Festivals of Rajasthan',
      excerpt: 'Experience the vibrant colors, music, and traditions of Rajasthan\'s most celebrated festivals throughout the year.',
      content: 'Full blog post content...',
      image: 'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: {
        name: 'Priya Sharma',
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      category: 'culture',
      tags: ['India', 'Festivals', 'Culture'],
      date: '2024-01-05',
      readTime: '7 min read',
      likes: 93,
      comments: 12
    },
    {
      id: '6',
      title: 'Budget Travel Hacks for Europe',
      excerpt: 'Save money while exploring Europe with these insider tips on accommodation, transportation, and activities.',
      content: 'Full blog post content...',
      image: 'https://images.pexels.com/photos/1488215/pexels-photo-1488215.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: {
        name: 'Emma Wilson',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      category: 'destinations',
      tags: ['Europe', 'Budget Travel', 'Tips'],
      date: '2024-01-03',
      readTime: '9 min read',
      likes: 412,
      comments: 67
    },
    {
      id: '7',
      title: 'Exploring the Fjords of Norway',
      excerpt: "A breathtaking journey through Norway's dramatic fjords, charming villages, and scenic train rides.",
      content: 'Full blog post content...',
      image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: {
        name: 'Lars Johansen',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      category: 'destinations',
      tags: ['Norway', 'Fjords', 'Scenic'],
      date: '2024-01-02',
      readTime: '7 min read',
      likes: 175,
      comments: 19
    },
    {
      id: '8',
      title: 'A Weekend in Prague: Castles & Cafés',
      excerpt: 'Discover the magic of Prague with its fairytale castles, cobblestone streets, and vibrant café culture.',
      content: 'Full blog post content...',
      image: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: {
        name: 'Eva Novak',
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      category: 'destinations',
      tags: ['Prague', 'Europe', 'City Break'],
      date: '2023-12-28',
      readTime: '6 min read',
      likes: 142,
      comments: 14
    },
    {
      id: '9',
      title: 'Safari Adventure in Kenya',
      excerpt: 'Experience the thrill of a Kenyan safari, spotting lions, elephants, and the Great Migration.',
      content: 'Full blog post content...',
      image: 'https://images.pexels.com/photos/667205/pexels-photo-667205.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: {
        name: 'Amina Njoroge',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      category: 'destinations',
      tags: ['Kenya', 'Safari', 'Wildlife'],
      date: '2023-12-20',
      readTime: '10 min read',
      likes: 210,
      comments: 25
    },
    {
      id: '10',
      title: 'Hanami: Cherry Blossom Traditions in Japan',
      excerpt: "Experience the beauty and cultural significance of Japan's cherry blossom season, from picnics to poetry.",
      content: 'Full blog post content...',
      image: 'https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: {
        name: 'Yuki Tanaka',
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      category: 'culture',
      tags: ['Japan', 'Cherry Blossoms', 'Tradition'],
      date: '2024-01-01',
      readTime: '5 min read',
      likes: 134,
      comments: 11
    },
    {
      id: '11',
      title: 'Carnival in Rio: A Festival of Color',
      excerpt: 'Dive into the world-famous Rio Carnival, exploring its music, costumes, and vibrant street parades.',
      content: 'Full blog post content...',
      image: 'https://images.pexels.com/photos/4666755/pexels-photo-4666755.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: {
        name: 'Lucas Silva',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      category: 'culture',
      tags: ['Brazil', 'Carnival', 'Festival'],
      date: '2023-12-15',
      readTime: '8 min read',
      likes: 198,
      comments: 22
    },
    {
      id: '12',
      title: 'Diwali: Festival of Lights in India',
      excerpt: "Discover the traditions, foods, and celebrations that make Diwali one of India's most cherished festivals.",
      content: 'Full blog post content...',
      image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: {
        name: 'Anjali Mehra',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      category: 'culture',
      tags: ['India', 'Diwali', 'Lights'],
      date: '2023-11-10',
      readTime: '6 min read',
      likes: 156,
      comments: 18
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Travel Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get inspired by our community's adventures and discover your next destination
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
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div 
          className="mb-16 cursor-pointer group"
          onClick={() => onViewPost('blog-post', featuredPost)}
        >
          <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-1">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{featuredPost.author.name}</p>
                    <div className="flex items-center text-gray-500 text-sm space-x-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-sky-600 transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {(featuredPost.tags && featuredPost.tags.length > 0) ? (
                      featuredPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-sm font-medium flex items-center"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="bg-gray-100 text-gray-400 px-3 py-1 rounded-full text-sm font-medium">No tags</span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-500">
                    <span className="flex items-center">
                      <Heart className="w-5 h-5 mr-1" />
                      {featuredPost.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="w-5 h-5 mr-1" />
                      {featuredPost.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group hover:-translate-y-1"
              onClick={() => onViewPost('blog-post', post)}
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-700 capitalize">{post.category}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm">{post.author.name}</p>
                    <div className="flex items-center text-gray-500 text-xs space-x-2">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {(post.tags && post.tags.length > 0) ? (
                      post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="bg-gray-100 text-gray-400 px-2 py-1 rounded-full text-xs">No tags</span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-500 text-sm">
                    <span className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Load More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;