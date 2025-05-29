import React from 'react';

interface BookCardProps {
  title: string;
  image: string;
  author: string;
  price: number;
  rating?: number;
}

const BookCard: React.FC<BookCardProps> = ({ title, image, author, price, rating = 5 }) => {
  return (
    <div className="book-card max-w-[280px] mx-auto">
      <div className="relative group">
        <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-md">
          <img
            src={image}
            alt={`Portada de ${title}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 text-center">{author}</p>
        <p className="mt-2 text-lg font-bold text-coral-500 text-center">${price}</p>
        <div className="flex justify-center space-x-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;