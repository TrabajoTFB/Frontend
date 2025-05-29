import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import type { Book } from '../../types';

const RandomBookSection: React.FC = () => {
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchRandomBook = async () => {
      try {
        const data = await api.getRandomBook();
        setBook(data);
      } catch (error) {
        console.error('Error fetching random book:', error);
      }
    };

    fetchRandomBook();
  }, []);

  if (!book) return null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Descubre un Libro al Azar
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              ¿Te sientes con suerte? Aquí tienes una recomendación aleatoria de nuestra colección.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={book.urlImgPortada || 'https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Sin+Imagen'}
                  alt={book.titulo}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{book.titulo}</h3>
                <p className="text-gray-600 text-sm mb-4">{book.autor}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${i < (book.valoracion || 5) ? "text-yellow-400" : "text-gray-300"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <button className="bg-coral-500 text-white px-6 py-2 rounded-md hover:bg-coral-600 transition-colors">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RandomBookSection;