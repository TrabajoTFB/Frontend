import React, { useEffect, useState } from 'react';
import BookCard from '../ui/BookCard';
import { api } from '../../services/api';
import type { Book } from '../../types';

const NewReleasesSection: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await api.getNewReleases();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching new releases:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Tesoros Recién Llegados
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Descubre nuestras últimas incorporaciones de libros de segunda mano.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
          {books.map((book) => (
            <BookCard
              key={book.isbn}
              libro={book}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewReleasesSection;