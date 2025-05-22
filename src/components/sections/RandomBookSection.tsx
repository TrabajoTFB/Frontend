import React from 'react';

const RandomBookSection: React.FC = () => {
  const featuredBook = {
    title: "Birds gonna be happy",
    author: "Timbur Hood",
    image: "/images/reading.png",
    rating: 4,
    description: "Jump start your book reading by quickly check through the popular book categories. 1000+ books are published by different authors everyday. Buy your favourite books on TreeBooks Today."
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 max-w-[240px]">
              <div className="aspect-[3/4] relative">
                <img
                  src={featuredBook.image}
                  alt={featuredBook.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 p-6">
              <p className="text-sm text-gray-500 mb-2">Featured Book of the week</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{featuredBook.title}</h3>
              <p className="text-gray-600 mb-3 text-sm">By {featuredBook.author}</p>
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`text-lg ${i < featuredBook.rating ? "text-yellow-400" : "text-gray-300"}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-sm line-clamp-3">{featuredBook.description}</p>
              <button className="bg-coral-500 text-white px-4 py-1.5 text-sm rounded-md hover:bg-coral-600 transition-colors">
                View more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RandomBookSection;