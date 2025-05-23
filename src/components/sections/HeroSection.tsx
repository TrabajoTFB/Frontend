import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-gradient">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Give Books a Second Life
            </h1>
            <p className="text-gray-600 text-base max-w-xl">
              Join our sustainable reading community. Discover pre-loved books that not only save you money but also help protect our environment. Every book has a story, let's keep them circulating.
            </p>
            <button className="primary-button text-sm">
              Explore Books
            </button>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                src="/images/reading.png"
                alt="Person reading"
                className="relative z-10 w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;