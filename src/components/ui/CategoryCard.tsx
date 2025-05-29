import React from 'react';
import type { Genre } from '../../types';

interface CategoryCardProps {
  genre: Genre;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ genre }) => {
  const { nombre } = genre;
  
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
      <div className="aspect-square">
        <img 
          src={`https://placehold.co/200x200/e2e8f0/1a1a1a.png?text=${nombre}`}
          alt={nombre} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white text-lg font-semibold">{nombre}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;