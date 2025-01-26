import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeaturedCreators = () => {
  const navigate = useNavigate();

  const creators = [
    {
      id: "sarah",
      name: "Sarah Digital",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      category: "Digital Art",
      supporters: "5.2K",
      description: "Creating unique digital art collections and NFTs"
    },
    {
      id: "cryptomusic",
      name: "CryptoMusic",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
      category: "Music",
      supporters: "8.1K",
      description: "Independent musician sharing exclusive tracks and behind-the-scenes"
    },
    {
      id: "web3academy",
      name: "Web3 Academy",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
      category: "Education",
      supporters: "12K",
      description: "Teaching blockchain development and crypto economics"
    }
  ];

  return (
    <section className="relative bg-gray-900 py-20 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] -right-40 top-0 bg-purple-500/10 rounded-full blur-[100px] animate-glow-pulse"></div>
        <div className="absolute w-[400px] h-[400px] -left-20 bottom-0 bg-blue-500/10 rounded-full blur-[100px] animate-glow-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl font-bold text-white mb-4 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Featured Creators
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover and support amazing creators who are pushing the boundaries of their craft
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <div 
              key={index} 
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-102 transition-all duration-500 ease-out animate-fade-slide-up hover:shadow-2xl hover:shadow-purple-500/20 border border-transparent hover:border-purple-500/50"
              style={{ 
                animationDelay: `${index * 150}ms`,
                transform: 'translateZ(0)' // Force GPU acceleration
              }}
            >
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-purple-500/50 group-hover:ring-purple-500 transition-all duration-500 relative z-10"
                  />
                </div>
                <div className="ml-4 transform group-hover:translate-x-2 transition-transform duration-500">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-500">{creator.name}</h3>
                  <p className="text-purple-400 group-hover:text-purple-300">{creator.category}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-500">{creator.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-yellow-500 group-hover:text-yellow-400 transition-colors duration-500">
                  <Star className="h-5 w-5 mr-1 animate-star-pulse" />
                  <span>{creator.supporters} supporters</span>
                </div>
                <button 
                  onClick={() => navigate(`/profile/${creator.id}`)}
                  className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-500 group"
                >
                  View Profile
                  <ExternalLink className="h-4 w-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCreators;