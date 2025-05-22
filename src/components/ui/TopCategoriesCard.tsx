import React from 'react';

const TopCategoriesCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-coral-500 to-coral-600 h-48 flex items-center justify-center">
      <div className="text-center text-white p-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Explore Our Top Categories
        </h2>
        <button className="mt-4 px-6 py-2 bg-white text-coral-600 rounded-full hover:bg-gray-100 transition-colors">
          View All
        </button>
      </div>
    </div>
  );
};

export default TopCategoriesCard;