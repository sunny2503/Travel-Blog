import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Heart, MessageCircle, Share2, Bookmark, User, MapPin, Tag } from 'lucide-react';
import { BlogPostType } from '../types';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comments, setComments] = useState([
    {
      id: '1',
      author: {
        name: 'Emma Johnson',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      content: 'Amazing guide! I\'m planning my trip to Southeast Asia next month and this is incredibly helpful.',
      date: '2024-01-16',
      likes: 12
    },
    {
      id: '2',
      author: {
        name: 'David Park',
        avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      content: 'The safety tips section is pure gold. Thank you for sharing your experience!',
      date: '2024-01-16',
      likes: 8
    }
  ]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now().toString(),
      author: {
        name: 'You',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      content: newComment,
      date: new Date().toISOString().split('T')[0],
      likes: 0
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
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

        {/* Article Info Overlay */}
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full"
              />
              <span>by {post.author.name}</span>
            </div>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Actions */}
        <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                isLiked
                  ? 'bg-red-50 text-red-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span>{post.likes + (isLiked ? 1 : 0)}</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>{comments.length}</span>
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-full transition-colors ${
                isBookmarked
                  ? 'bg-sky-50 text-sky-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
            
            <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Sample Article Content */}
          <h2>Planning Your Solo Adventure</h2>
          <p>
            Southeast Asia is a paradise for solo travelers, offering an incredible mix of cultures, 
            cuisines, landscapes, and experiences that can transform your perspective on the world. 
            From the bustling streets of Bangkok to the serene temples of Angkor Wat, every destination 
            tells a unique story waiting to be discovered.
          </p>

          <h3>Best Destinations for First-Time Solo Travelers</h3>
          <ul>
            <li><strong>Thailand:</strong> Perfect introduction to Southeast Asia with excellent infrastructure and friendly locals</li>
            <li><strong>Vietnam:</strong> Rich history, incredible food scene, and breathtaking natural beauty</li>
            <li><strong>Cambodia:</strong> Home to the magnificent Angkor Wat and authentic cultural experiences</li>
          </ul>

          <h3>Essential Safety Tips</h3>
          <p>
            Safety should always be your top priority when traveling solo. Here are some essential 
            tips that have served me well during my adventures across Southeast Asia:
          </p>

          <blockquote>
            "The key to successful solo travel is preparation combined with an open mind. 
            Research your destinations, but leave room for spontaneous discoveries."
          </blockquote>

          <h3>Budget Breakdown</h3>
          <p>
            One of the biggest advantages of Southeast Asia is how budget-friendly it can be. 
            Here's a realistic breakdown of daily expenses:
          </p>

          <ul>
            <li>Accommodation (hostels/guesthouses): $10-25 per night</li>
            <li>Food (local restaurants/street food): $5-15 per day</li>
            <li>Transportation (local transport): $3-10 per day</li>
            <li>Activities and attractions: $5-20 per day</li>
          </ul>

          <h3>Cultural Etiquette</h3>
          <p>
            Respecting local customs and traditions is crucial for meaningful travel experiences. 
            Each country has its own unique cultural nuances, from temple dress codes in Thailand 
            to greeting customs in Vietnam.
          </p>
        </div>

        {/* Comments Section */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Discussion ({comments.length})
          </h3>

          {/* Add Comment Form */}
          <form onSubmit={handleAddComment} className="mb-8">
            <div className="flex space-x-4">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Your avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts or ask a question..."
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                  rows={3}
                />
                <div className="mt-3 flex justify-end">
                  <button
                    type="submit"
                    className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="flex space-x-4">
                <img
                  src={comment.author.avatar}
                  alt={comment.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{comment.author.name}</h4>
                      <span className="text-sm text-gray-500">
                        {new Date(comment.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-red-600 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{comment.likes}</span>
                    </button>
                    <button className="text-sm text-gray-500 hover:text-sky-600 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;