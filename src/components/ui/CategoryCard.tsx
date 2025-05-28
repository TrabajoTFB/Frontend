import React from 'react';

interface CategoryCardProps {
  title: string;
  count: number;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, count, image }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
      <div className="aspect-square">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white text-lg font-semibold">{title}</h3>
            <p className="text-white/80 text-sm">{count} libros</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;