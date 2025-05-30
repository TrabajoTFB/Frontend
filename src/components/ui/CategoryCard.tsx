import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Genre } from '../../types';

interface CategoryCardProps {
  genre: Genre;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ genre }) => {
  const navigate = useNavigate();
  const { id, nombre, urlImgGenero } = genre;
  const [imageError, setImageError] = useState(false);
  
  const fallbackImage = `https://placehold.co/400x400/e2e8f0/1a1a1a.png?text=${encodeURIComponent(nombre)}`;
  const imageToUse = imageError ? fallbackImage : (urlImgGenero || fallbackImage);

  return (
    <div 
      onClick={() => navigate(`/books?genre=${id}`)}
      className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer bg-gray-100"
    >
      <div className="aspect-square">
        <img 
          src={imageToUse}
          alt={`Categoría ${nombre}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={() => setImageError(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-80">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-white text-xl font-semibold mb-2">{nombre}</h3>
            <button 
              onClick={() => navigate(`/books?genre=${id}`)}
              className="text-sm text-white bg-coral-500/90 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-coral-600"
            >
              Ver libros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;