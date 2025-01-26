import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Wallet, Users, TrendingUp, Filter } from 'lucide-react';
import FeaturedCreators from './FeaturedCreators';
 

const Creators = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeBlockchain, setActiveBlockchain] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  // Featured creators carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredCreators = [
    {
      id: 1,
      name: "Digital Artist Jane",
      tagline: "Creating unique digital experiences",
      banner: "../src/public/banner/digital artist.jpg",
      supporters: "5.2K",
      earnings: "$250K+"
    },
    {
      id: 2,
      name: "Music Producer Max",
      tagline: "Revolutionizing digital music",
      banner: "../src/public/banner/music creator.webp",
      supporters: "8.1K",
      earnings: "$420K+"
    },
    {
      id: 3,
      name: "Gaming Creator Alex",
      tagline: "Building immersive gaming worlds",
      banner: "../src/public/banner/gaming creator alex.webp",
      supporters: "12.4K",
      earnings: "$680K+"
    },
    {
      id: 4,
      name: "Digital Artist Sarah",
      tagline: "Pushing boundaries in digital art",
      banner: "../src/public/banner/digital content creator.jpg",
      supporters: "6.8K",
      earnings: "$310K+"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => 
        prev === featuredCreators.length - 1 ? 0 : prev + 1
      );
    }, 2000); // Changed from 3000 to 1500 (1.5 seconds)

    return () => clearInterval(timer);
  }, []);
  

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Featured Creators Carousel */}
      <div className="relative h-[500px] overflow-hidden mb-12">
        <div 
          className="absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {featuredCreators.map((creator, index) => (
            <div
              key={creator.id}
              className="absolute inset-0 w-full h-full"
              style={{ left: `${index * 100}%` }}
            >
              <img 
                src={creator.banner}
                alt={creator.name}
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-pink-900/60 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                  <div className="relative w-full animate-fadeIn">
                    <h1 className="text-6xl font-bold mb-4 animate-slideUp">{creator.name}</h1>
                    <p className="text-2xl mb-6 text-purple-200 animate-slideUp delay-100">{creator.tagline}</p>
                    <div className="flex gap-6 mb-8 animate-slideUp delay-200">
                      <div className="flex items-center gap-2">
                        <Users className="w-6 h-6 text-purple-400" />
                        <span>{creator.supporters} Supporters</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wallet className="w-6 h-6 text-purple-400" />
                        <span>{creator.earnings} Earned</span>
                      </div>
                    </div>
                    <button className="px-8 py-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all 
                      transform hover:scale-105 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] 
                      animate-slideUp delay-300">
                      Support Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => setCurrentSlide(prev => prev === 0 ? featuredCreators.length - 1 : prev - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={() => setCurrentSlide(prev => prev === featuredCreators.length - 1 ? 0 : prev + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {featuredCreators.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4">
             
             

          
          
          </div>

           
        </div>
      </div>

      
      <div>
        <FeaturedCreators />
      </div>

      {/* Categories Section */}
      

      {/* NFT Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center p-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Featured NFT Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Neon Dreamscape",
              creator: "Digital Artist Jane",
              image: "../src/public/nfts/neon dreamscape nft.webp",
              price: "2.5 ETH",
              items: "1000",
              floor: "0.8 ETH"
            },
            {
              title: "Cyber Beats",
              creator: "Music Producer Max",
              image: "../src/public/nfts/cyber2.webp",
              price: "1.8 ETH",
              items: "500",
              floor: "0.5 ETH"
            },
            {
              title: "Virtual Realms",
              creator: "Gaming Creator Alex",
              image: "../src/public/nfts/realms3.webp",
              price: "3.2 ETH",
              items: "750",
              floor: "1.2 ETH"
            }
          ].map((collection, index) => (
            <div 
              key={index}
              className="group bg-gray-800/50 rounded-xl p-4 hover:transform hover:scale-[1.02] 
                transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]
                backdrop-blur-sm"
            >
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-bold text-xl mb-2">{collection.title}</h3>
              <p className="text-purple-400 text-sm mb-4">By {collection.creator}</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center">
                  <p className="text-xs text-gray-400">Price</p>
                  <p className="font-bold">{collection.price}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400">Items</p>
                  <p className="font-bold">{collection.items}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400">Floor</p>
                  <p className="font-bold">{collection.floor}</p>
                </div>
              </div>
              <button className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700 
                transition-all transform hover:scale-105 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                View Collection
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Creators; 