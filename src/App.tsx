import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedDestinations from './components/FeaturedDestinations';
import BlogPosts from './components/BlogPosts';
import PhotoGallery from './components/PhotoGallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import DestinationGuide from './components/DestinationGuide';
import Search from './components/Search';
import TripPlanner from './components/TripPlanner';
import UserProfile from './components/UserProfile';
import { BlogPostType, DestinationType } from './types';

function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<DestinationType | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleViewChange = (view: string, data?: any) => {
    setCurrentView(view);
    if (view === 'blog-post') {
      setSelectedPost(data);
    }
    if (view === 'destination') {
      setSelectedDestination(data);
    }
  };

  const handleLogin = (userData: any) => {
    setUser(userData);
    setCurrentView('home');
  };

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

  const renderCurrentView = () => {
    switch (currentView) {
      case 'blog-post':
        return selectedPost ? <BlogPost post={selectedPost} onBack={() => setCurrentView('home')} /> : null;
      case 'destination':
        return selectedDestination ? <DestinationGuide destination={selectedDestination} onBack={() => setCurrentView('home')} /> : null;
      case 'destinations':
        return <FeaturedDestinations onViewDestination={(destination) => handleViewChange('destination', destination)} />;
      case 'search':
        return <Search onBack={() => setCurrentView('home')} onViewPost={handleViewChange} />;
      case 'trip-planner':
        return <TripPlanner onBack={() => setCurrentView('home')} />;
      case 'profile':
        return <UserProfile user={user} onBack={() => setCurrentView('home')} />;
      default:
        return (
          <>
            <Hero 
              onCitySelect={(city) => {
                const destination = destinations.find(
                  (d) => d.name.toLowerCase() === city.name.toLowerCase()
                );
                if (destination) {
                  handleViewChange('destination', destination);
                }
              }}
            />
            <FeaturedDestinations onViewDestination={(destination) => handleViewChange('destination', destination)} />
            <BlogPosts onViewPost={handleViewChange} />
            <PhotoGallery />
            <Newsletter />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onViewChange={handleViewChange} 
        user={user} 
        onLogin={handleLogin}
        currentView={currentView}
      />
      <main>
        {renderCurrentView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;