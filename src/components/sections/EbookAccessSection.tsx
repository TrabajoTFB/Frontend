import React from 'react';

const EbookAccessSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
          <div className="w-full md:w-1/3">
            <div className="relative max-w-[280px] mx-auto">
              <img
                src="/images/learning.png"
                alt="Person with books"
                className="w-full"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Sustainable Reading Community
            </h2>
            <p className="text-gray-600 text-base mb-6">
              Create an account to start your sustainable reading journey. Buy and sell pre-loved books, track your environmental impact, and connect with fellow book lovers who care about our planet.
            </p>
            <button className="primary-button text-sm px-6 py-2">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookAccessSection;