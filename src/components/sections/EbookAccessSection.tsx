import React from 'react';

const EbookAccessSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <img
                src="/images/learning.png"
                alt="Person with books"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Access, Read, Practice & Engage with Digital Content (eBook)
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet,
              libero ipsum enim pharetra hac. Urna commodo, lacus et magna velit eleifend.
              Amet consequat amet.
            </p>
            <button className="primary-button">
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookAccessSection;