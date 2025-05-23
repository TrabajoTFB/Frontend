import React from 'react';
import BookCard from '../ui/BookCard';

const NewReleasesSection: React.FC = () => {
  const books = [
    { title: "La Conexión Mental", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+1", rating: 4 },
    { title: "El Camino del Reconocimiento", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+2", rating: 5 },
    { title: "Revelación de la Mente", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+3", rating: 4 },
    { title: "El Arte de la Serenidad", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+4", rating: 5 },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Tesoros Recién Llegados
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Descubre nuestras últimas incorporaciones de libros de segunda mano. Cada uno trae su propia historia y está listo para comenzar un nuevo capítulo contigo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
        
        <div className="text-center">
          <a href="#" className="inline-flex items-center text-coral-500 hover:text-coral-600 font-medium text-sm">
            Ver Todos los Libros
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