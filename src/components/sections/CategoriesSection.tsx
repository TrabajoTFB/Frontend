import React from 'react';
import CategoryCard from '../ui/CategoryCard';
import TopCategoriesCard from '../ui/TopCategoriesCard';

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      title: 'Engineering Books',
      image: 'https://placehold.co/800x400/2c5282/ffffff?text=Engineering',
    },
    {
      title: 'Commerce Books',
      image: 'https://placehold.co/800x400/2c5282/ffffff?text=Commerce',
    },
    {
      title: 'Management Books',
      image: 'https://placehold.co/800x400/2c5282/ffffff?text=Management',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <CategoryCard
            title="Higher Education"
            image="https://placehold.co/800x400/2c5282/ffffff?text=Higher+Education"
          />
          <TopCategoriesCard />
          <CategoryCard
            title="Finance Books"
            image="https://placehold.co/800x400/2c5282/ffffff?text=Finance"
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