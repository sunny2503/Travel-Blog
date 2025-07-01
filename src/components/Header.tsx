import React, { useState } from 'react';
import { Search, Menu, X, User, MapPin, Bookmark, PlaneTakeoff } from 'lucide-react';
import AuthModal from './AuthModal';

interface HeaderProps {
  onViewChange: (view: string) => void;
  user: any;
  onLogin: (user: any) => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({ onViewChange, user, onLogin, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', view: 'home', icon: null },
    { label: 'Destinations', view: 'destinations', icon: MapPin },
    { label: 'Search', view: 'search', icon: Search },
    { label: 'Trip Planner', view: 'trip-planner', icon: PlaneTakeoff },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => onViewChange('home')}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-orange-600 bg-clip-text text-transparent">
                Wanderlust
              </span>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => onViewChange(item.view)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentView === item.view
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-gray-600 hover:text-sky-600 hover:bg-gray-50'
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <button className="p-2 text-gray-600 hover:text-sky-600 transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => onViewChange('profile')}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-700">{user.name}</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center space-x-1 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">Sign In</span>
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-sky-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => {
                    onViewChange(item.view);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-lg text-left transition-colors ${
                    currentView === item.view
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-gray-600 hover:text-sky-600 hover:bg-gray-50'
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {isAuthModalOpen && (
        <AuthModal
          onClose={() => setIsAuthModalOpen(false)}
          onLogin={onLogin}
        />
      )}
    </>
  );
};

export default Header;