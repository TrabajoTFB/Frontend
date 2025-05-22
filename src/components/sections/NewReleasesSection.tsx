import React from 'react';
import BookCard from '../ui/BookCard';

const NewReleasesSection: React.FC = () => {
  const books = [
    { title: "The Mind Connection", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Book+1", rating: 4 },
    { title: "The Road to Recognition", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Book+2", rating: 5 },
    { title: "Revelation of the Mind", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Book+3", rating: 4 },
    { title: "The Road to Recognition", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Book+4", rating: 5 },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            New Release Books
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
        
        <div className="text-center">
          <a href="#" className="inline-flex items-center text-coral-500 hover:text-coral-600 font-medium text-sm">
            View All Products
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewReleasesSection;