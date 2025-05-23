import React from 'react';
import CategoryCard from '../ui/CategoryCard';
import TopCategoriesCard from '../ui/TopCategoriesCard';

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      title: 'Libros de Ingeniería',
      image: 'https://placehold.co/800x400/2c5282/ffffff?text=Ingenieria',
    },
    {
      title: 'Libros de Comercio',
      image: 'https://placehold.co/800x400/2c5282/ffffff?text=Comercio',
    },
    {
      title: 'Libros de Gestión',
      image: 'https://placehold.co/800x400/2c5282/ffffff?text=Gestion',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <CategoryCard
            title="Educación Superior"
            image="https://placehold.co/800x400/2c5282/ffffff?text=Educacion"
          />
          <TopCategoriesCard />
          <CategoryCard
            title="Libros de Finanzas"
            image="https://placehold.co/800x400/2c5282/ffffff?text=Finanzas"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              {...category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;