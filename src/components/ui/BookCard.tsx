import React from 'react';
import type { Book } from '../../types';

interface BookCardProps {
  libro: Book;
}

const BookCard: React.FC<BookCardProps> = ({ libro }) => {
  const { titulo, autor, urlImgPortada, valoracion = 5, precio = 15.99 } = libro;
  
  return (
    <div className="book-card max-w-[280px] mx-auto">
      <div className="relative group">
        <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-md">
          <img
            src={urlImgPortada || 'https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Sin+Imagen'}
            alt={`Portada de ${titulo}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center line-clamp-2">
          {titulo}
        </h3>
        <p className="mt-2 text-sm text-gray-600 text-center">{autor}</p>
        <p className="mt-2 text-lg font-bold text-coral-500 text-center">${precio}</p>
        <div className="flex justify-center space-x-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className={`text-lg ${i < valoracion ? "text-yellow-400" : "text-gray-300"}`}
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