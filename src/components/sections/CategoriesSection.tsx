import React, { useEffect, useState } from 'react';
import CategoryCard from '../ui/CategoryCard';
import { api } from '../../services/api';
import type { Genre } from '../../types';

const CategoriesSection: React.FC = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await api.getGenres();
        setGenres(data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Explora por Género
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Navega nuestra colección por género y encuentra tu próxima lectura favorita.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {genres.map((genre) => (
            <CategoryCard
              key={genre.id}
              title={genre.nombre}
              count={genre.cantidadLibros}
              image={genre.imagen || `https://placehold.co/200x200/e2e8f0/1a1a1a.png?text=${genre.nombre}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;