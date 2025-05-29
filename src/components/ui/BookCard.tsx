import React from 'react';
import type { Book } from '../../types';

interface BookCardProps {
  libro: Book;
}

const BookCard: React.FC<BookCardProps> = ({ libro }) => {
  const { titulo, autor, urlImgPortada, valoracion = 5, precio = 15.99 } = libro;
  
  return (
    <div className="group">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
        <div className="aspect-[3/4] relative overflow-hidden">
          <img
            src={urlImgPortada || 'https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Sin+Imagen'}
            alt={`Portada de ${titulo}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-coral-500 text-white px-6 py-2 rounded-md hover:bg-coral-600 transition-colors">
                Ver detalles
              </button>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
            {titulo}
          </h3>
          <p className="text-gray-600 text-sm mb-2">{autor}</p>
          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`text-sm ${i < valoracion ? "text-yellow-400" : "text-gray-300"}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-coral-500 font-semibold">${precio}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;