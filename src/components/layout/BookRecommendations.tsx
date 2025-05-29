import React, { useState } from 'react';
import BookCard from '../ui/BookCard';

const BOOKS_PER_PAGE = 4;

const BookRecommendation: React.FC = () => {
  const books = [
    { title: "La Conexión Mental", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+1", rating: 4 },
    { title: "El Camino del Reconocimiento", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+2", rating: 5 },
    { title: "Revelación de la Mente", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+3", rating: 4 },
    { title: "El Arte de la Serenidad", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+4", rating: 5 },

    { title: "La Conexión Mental", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+5", rating: 4 },
    { title: "El Camino del Reconocimiento", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+6", rating: 5 },
    { title: "Revelación de la Mente", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+7", rating: 4 },
    { title: "El Arte de la Serenidad", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+8", rating: 5 },

    { title: "La Conexión Mental", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+9", rating: 4 },
    { title: "El Camino del Reconocimiento", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+10", rating: 5 },
    { title: "Revelación de la Mente", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+11", rating: 4 },
    { title: "El Arte de la Serenidad", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+12", rating: 5 },

    { title: "La Conexión Mental", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+13", rating: 4 },
    { title: "El Camino del Reconocimiento", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+14", rating: 5 },
    { title: "Revelación de la Mente", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+15", rating: 4 },
    { title: "El Arte de la Serenidad", image: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+16", rating: 5 },
  ];

  const [page, setPage] = useState(0);
  const totalPages = 4

  const handleDotClick = (idx: number) => setPage(idx);

  const visibleBooks = books.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Libros recomendados
          </h2>

        <div className="text-center">
          <a href="#" className="inline-flex items-center text-coral-500 hover:text-coral-600 font-medium text-sm">
            Ver todos
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        </div>
        
        {/* libros visibles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
          {visibleBooks.map((book, index) => (
            <BookCard key={index + page * BOOKS_PER_PAGE} {...book} />
          ))}
        </div>

        {/* manejar scroll */}
        <div
          className="flex justify-center gap-2"
          onWheel={e => {
            if ((e.deltaX > 0 || e.deltaY > 0) && page < totalPages - 1)
                setPage(page + 1);
            else if ((e.deltaX < 0 || e.deltaY < 0) && page > 0)
                setPage(page - 1);
          }}
        >

        {/* botones */}
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-3 h-3 rounded-full ${page == idx ? 'bg-coral-500' : 'bg-gray-300'} transition`}
                aria-label={`Página ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BookRecommendation;