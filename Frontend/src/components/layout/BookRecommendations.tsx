import React, { useState } from 'react';
import BookCard from '../ui/BookCard';
import type { Book } from '../../types';

const BOOKS_PER_PAGE = 4;

const BookRecommendation: React.FC = () => {
  const mockBooks: Book[] = [
    {
      titulo: "La Conexión Mental",
      autor: "Autor 1",
      urlImgPortada: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+1",
      valoracion: 4,
      fechaPublicacion: "2025-05-29",
      generoLiterario: [],
      isbn: 1000000000001,
      precio: 19.99
    },
    {
      titulo: "El Camino del Reconocimiento",
      autor: "Autor 2",
      urlImgPortada: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+2",
      valoracion: 5,
      fechaPublicacion: "2025-05-29",
      generoLiterario: [],
      isbn: 1000000000002,
      precio: 24.99
    },
    {
      titulo: "Revelación de la Mente",
      autor: "Autor 3",
      urlImgPortada: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+3",
      valoracion: 4,
      fechaPublicacion: "2025-05-29",
      generoLiterario: [],
      isbn: 1000000000003,
      precio: 15.99
    },
    {
      titulo: "El Arte de la Serenidad",
      autor: "Autor 4",
      urlImgPortada: "https://placehold.co/400x600/e2e8f0/1a1a1a.png?text=Libro+4",
      valoracion: 5,
      fechaPublicacion: "2025-05-29",
      generoLiterario: [],
      isbn: 1000000000004,
      precio: 29.99
    }
  ];

  // Duplicate the books to create 16 items
  const books: Book[] = [
    ...mockBooks,
    ...mockBooks.map(book => ({ ...book, isbn: book.isbn + 4 })),
    ...mockBooks.map(book => ({ ...book, isbn: book.isbn + 8 })),
    ...mockBooks.map(book => ({ ...book, isbn: book.isbn + 12 }))
  ];

  const [page, setPage] = useState(0);
  const totalPages = 4;

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
            <a href="/books" className="inline-flex items-center text-coral-500 hover:text-coral-600 font-medium text-sm">
              Ver todos
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
          {visibleBooks.map((book) => (
            <BookCard key={book.isbn} libro={book} />
          ))}
        </div>

        <div
          className="flex justify-center gap-2"
          onWheel={e => {
            if ((e.deltaX > 0 || e.deltaY > 0) && page < totalPages - 1)
              setPage(page + 1);
            else if ((e.deltaX < 0 || e.deltaY < 0) && page > 0)
              setPage(page - 1);
          }}
        >
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