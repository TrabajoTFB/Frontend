import React from 'react';

interface BookCardProps {
  title: string;
  image: string;
  rating: number;
}

const BookCard: React.FC<BookCardProps> = ({ title, image, rating }) => {
  return (
    <div className="book-card">
      <div className="relative group">
        <div className="w-full aspect-[3/4] overflow-hidden rounded-lg shadow-md">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">
          {title}
        </h3>
        <div className="flex justify-center space-x-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className={`text-xl ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const NewReleasesSection: React.FC = () => {
  const books = [
    { title: "The Mind Connection", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Book+1", rating: 4 },
    { title: "The Road to Recognition", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Book+2", rating: 5 },
    { title: "Revelation of the Mind", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Book+3", rating: 4 },
    { title: "The Road to Recognition", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Book+4", rating: 5 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            New Release Books
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
        
        <div className="flex justify-center space-x-2 mb-8">
          <button className="w-2 h-2 rounded-full bg-coral-500"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
        </div>
        
        <div className="text-center">
          <a href="#" className="inline-flex items-center text-coral-500 hover:text-coral-600 font-medium">
            View All Products
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewReleasesSection;