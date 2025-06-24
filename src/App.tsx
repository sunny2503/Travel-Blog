import React, { useState } from 'react';
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
import { BlogPostType } from './types';

function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
  const [user, setUser] = useState<any>(null);

  const handleViewChange = (view: string, data?: any) => {
    setCurrentView(view);
    if (data) {
      setSelectedPost(data);
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
        return <DestinationGuide onBack={() => setCurrentView('home')} />;
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
            <FeaturedDestinations onViewDestination={() => handleViewChange('destination')} />
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