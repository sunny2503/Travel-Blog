import React, { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Heart, Bookmark, Camera, Settings, Edit3, Save } from 'lucide-react';

interface UserProfileProps {
  user: any;
  onBack: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onBack }) => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || 'Travel Enthusiast',
    bio: user?.bio || 'Explorer of hidden gems and cultural experiences',
    location: 'San Francisco, CA',
    website: 'wanderlust.com'
  });

  const tabs = [
    { id: 'posts', label: 'My Posts', icon: Edit3, count: 12 },
    { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark, count: 24 },
    { id: 'photos', label: 'Photos', icon: Camera, count: 156 },
    { id: 'trips', label: 'Trips', icon: MapPin, count: 8 }
  ];

  const userPosts = [
    {
      id: '1',
      title: 'My Solo Adventure in Southeast Asia',
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-01-15',
      likes: 342,
      comments: 28,
      status: 'published'
    },
    {
      id: '2',
      title: 'Hidden Cafes in Tokyo',
      image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-01-10',
      likes: 128,
      comments: 15,
      status: 'draft'
    }
  ];

  const bookmarkedPosts = [
    {
      id: '1',
      title: 'Budget Travel Hacks for Europe',
      author: 'Emma Wilson',
      image: 'https://images.pexels.com/photos/1488215/pexels-photo-1488215.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-01-03'
    },
    {
      id: '2',
      title: 'Street Food Adventures in Mexico City',
      author: 'Maria Rodriguez',
      image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-01-10'
    }
  ];

  const userPhotos = [
    'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  const userTrips = [
    {
      id: '1',
      title: 'European Adventure',
      destinations: ['Paris', 'Rome', 'Barcelona'],
      duration: '15 days',
      date: '2024-06-15',
      image: 'https://images.pexels.com/photos/1488215/pexels-photo-1488215.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      title: 'Southeast Asia Explorer',
      destinations: ['Bangkok', 'Siem Reap', 'Ho Chi Minh'],
      duration: '21 days',
      date: '2024-03-10',
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'posts':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userPosts.map((post) => (
              <div key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.status === 'published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </span>
                      <span>{post.comments} comments</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'bookmarks':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookmarkedPosts.map((post) => (
              <div key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>by {post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'photos':
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {userPhotos.map((photo, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl hover:scale-105 transition-transform cursor-pointer">
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        );

      case 'trips':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userTrips.map((trip) => (
              <div key={trip.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{trip.title}</h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {trip.destinations.map((destination, index) => (
                      <span key={index} className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full text-xs font-medium">
                        {destination}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(trip.date).toLocaleDateString()}
                    </span>
                    <span>{trip.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </div>

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <img
              src={user?.avatar || 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'}
              alt={profileData.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            
            <div className="flex-1 text-center md:text-left">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    className="text-3xl font-bold text-gray-900 bg-transparent border-b-2 border-sky-500 focus:outline-none w-full"
                  />
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                    className="text-gray-600 bg-gray-50 border border-gray-300 rounded-lg p-3 w-full resize-none"
                    rows={3}
                  />
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                      placeholder="Location"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      value={profileData.website}
                      onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                      placeholder="Website"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{profileData.name}</h1>
                  <p className="text-gray-600 mb-4">{profileData.bio}</p>
                  <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-500">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {profileData.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Joined January 2024
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors"
              >
                {isEditing ? <Save className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                <span>{isEditing ? 'Save' : 'Edit Profile'}</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-gray-600">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">1.2K</div>
              <div className="text-gray-600">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">856</div>
              <div className="text-gray-600">Following</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">24</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-sky-600 border-b-2 border-sky-600 bg-sky-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <div className="p-8">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;