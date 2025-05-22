import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-gradient">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Ipsum Dolor Si
            </h1>
            <p className="text-gray-600 text-lg max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
            </p>
            <button className="primary-button">
              Read more
            </button>
            <div className="flex space-x-2 pt-4">
              <button className="w-2 h-2 rounded-full bg-coral-500"></button>
              <button className="w-2 h-2 rounded-full bg-gray-300"></button>
              <button className="w-2 h-2 rounded-full bg-gray-300"></button>
              <button className="w-2 h-2 rounded-full bg-gray-300"></button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                src="/images/reading.png"
                alt="Person reading"
                className="relative z-10 w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;