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
            <Hero />
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