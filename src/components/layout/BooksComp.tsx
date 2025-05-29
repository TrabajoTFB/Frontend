import React from "react";

const BooksComp: React.FC = () => {
  const Books = [
    {
      id: 1,
      title: "Simple Way Of Piece Life",
      author: "Armor Ramsey",
      image: "https://i.ibb.co/2yqPcYR/book1.png",
    },
    {
      id: 2,
      title: "Great Travel At Desert",
      author: "Sanchit Howdy",
      image: "https://i.ibb.co/QpFk85b/book2.png",
    },
    {
      id: 3,
      title: "The Lady Beauty Scarlett",
      author: "Arthur Doyle",
      image: "https://i.ibb.co/dtjvBvH/book3.png",
    },
    {
      id: 4,
      title: "Great Travel At Desert",
      author: "Sanchit Howdy",
      image: "https://i.ibb.co/CQk44ZP/book4.png",
    },
    {
      id: 5,
      title: "The Lady Beauty Scarlett",
      author: "Arthur Doyle",
      image: "https://i.ibb.co/hfZsZtP/book5.png",
    },
    {
      id: 6,
      title: "The Lady Beauty Scarlett",
      author: "Arthur Doyle",
      image: "https://i.ibb.co/Z1H5ySt/book6.png",
    },
  ];

  return (
    <main className="min-h-[calc(100vh-96px-96px)] px-6 py-12 flex justify-center relative bg-white">
      {/* Fondo decorativo amarillo */}
      <div className="absolute top-28 left-20 w-96 h-96 bg-yellow-400 rounded-xl opacity-30 -z-10"></div>

      <div className="max-w-7xl w-full bg-white rounded-xl shadow-lg p-8 flex gap-10">
        {/* Sidebar filtros */}
        <aside className="w-60 text-sm font-semibold text-indigo-900">
          {/* Precio */}
          <div className="mb-6">
            <label className="block mb-1 text-xs font-bold">Price</label>
            <div className="flex items-center gap-2 mb-2">
              <span>$</span>
              <input
                type="number"
                placeholder="0"
                className="border border-indigo-900 rounded w-16 px-1 py-0.5 text-xs text-indigo-900"
              />
              <span>to</span>
              <span>$</span>
              <input
                type="number"
                placeholder="0"
                className="border border-indigo-900 rounded w-16 px-1 py-0.5 text-xs text-indigo-900"
              />
            </div>
            <button className="bg-indigo-900 text-white text-xs px-4 py-1 rounded w-full">
              Filter
            </button>
          </div>

          {/* Otros filtros */}
          <div className="mb-4 cursor-pointer flex justify-between border-b border-indigo-900 pb-1">
            <span>Product type</span>
            <span className="text-indigo-900 font-bold">+</span>
          </div>
          <div className="mb-4 cursor-pointer flex justify-between border-b border-indigo-900 pb-1">
            <span>Availability</span>
            <span className="text-indigo-900 font-bold">+</span>
          </div>
          <div className="mb-4 cursor-pointer flex justify-between border-b border-indigo-900 pb-1">
            <span>Brand</span>
            <span className="text-indigo-900 font-bold">+</span>
          </div>
          <div className="mb-4 cursor-pointer flex justify-between border-b border-indigo-900 pb-1">
            <span>Color</span>
            <span className="text-indigo-900 font-bold">+</span>
          </div>
          <div className="mb-4 cursor-pointer flex justify-between border-b border-indigo-900 pb-1">
            <span>Material</span>
            <span className="text-indigo-900 font-bold">+</span>
          </div>
        </aside>

        {/* Contenido principal */}
        <section className="flex-1">
          {/* Breadcrumb */}
          <div className="mb-6 text-center text-xs text-indigo-900 font-semibold tracking-wide uppercase">
            HOME / PRODUCTS
          </div>

          {/* Barra opciones */}
          <div className="flex justify-between items-center text-xs text-indigo-900 font-semibold mb-8">
            <div>
              Sort by:{" "}
              <select className="border border-indigo-900 rounded px-2 py-1 text-xs font-semibold">
                <option>Alphabetically, A-Z</option>
                <option>Alphabetically, Z-A</option>
                <option>Price, low to high</option>
                <option>Price, high to low</option>
              </select>
            </div>
            <div>Showing 1 - 12 of 26 result</div>
            <div>
              Show:{" "}
              <select className="border border-indigo-900 rounded px-2 py-1 text-xs font-semibold">
                <option>12</option>
                <option>24</option>
                <option>48</option>
              </select>
            </div>
            <div className="text-indigo-900 cursor-pointer text-xl font-bold">▦</div>
            <div className="text-indigo-900 cursor-pointer text-2xl font-bold">≡</div>
          </div>

          {/* Grid libros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {Books.map((book) => (
              <article
                key={book.id}
                className="relative border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-lg transition-shadow group bg-white"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-60 object-contain rounded mb-6"
                />
                <button className="absolute bottom-20 left-6 bg-orange-500 text-white text-xs px-5 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity tracking-widest">
                  ADD TO CART
                </button>
                <h4 className="text-indigo-900 font-bold text-sm mb-1">{book.title}</h4>
                <p className="text-gray-400 text-xs">{book.author}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default BooksComp;
