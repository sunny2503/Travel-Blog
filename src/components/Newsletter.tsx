import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Gift, MapPin, Calendar } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  const benefits = [
    {
      icon: MapPin,
      title: 'Exclusive Destinations',
      description: 'Be the first to discover hidden gems'
    },
    {
      icon: Gift,
      title: 'Special Offers',
      description: 'Get up to 30% off on travel guides'
    },
    {
      icon: Calendar,
      title: 'Event Updates',
      description: 'Never miss local festivals and events'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-600 via-sky-700 to-orange-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join Our Travel Community
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Get weekly travel inspiration, exclusive destination guides, and insider tips delivered straight to your inbox
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/30 transition-colors">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/80 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Newsletter Form */}
        <div className="max-w-2xl mx-auto">
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white rounded-full font-semibold transition-colors flex items-center justify-center space-x-2 whitespace-nowrap"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-white/70 text-sm text-center mt-4">
                Join 50,000+ travelers who trust our recommendations. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Journey!</h3>
              <p className="text-white/90 mb-6">
                Thank you for subscribing! Your first travel guide will arrive in your inbox shortly.
              </p>
              <button
                onClick={() => setIsSubscribed(false)}
                className="text-white/80 hover:text-white underline text-sm"
              >
                Subscribe with different email
              </button>
            </div>
          )}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-sm">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.9★</div>
              <div className="text-sm">Newsletter Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Weekly</div>
              <div className="text-sm">Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;