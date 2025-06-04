// components/layout/BookDetails.tsx
import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import type { Book } from '../../types';

interface BookDetailsProps {
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  const { addItem, state } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Verificar si el libro ya está en el carrito
  const isInCart = state.items.some(item => item.id === book.isbn.toString());

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    try {
      addItem({
        id: book.isbn.toString(),
        isbn: book.isbn,
        title: book.titulo,
        price: book.precio || 0,
        image: book.urlImgPortada,
        author: book.autor,
      });

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen del libro */}
        <div className="flex justify-center">
          <img
            src={book.urlImgPortada || '/placeholder-book.jpg'}
            alt={book.titulo}
            className="max-w-md w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Detalles del libro */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {book.titulo}
            </h1>
            <p className="text-xl text-gray-600 mb-1">
              por {book.autor}
            </p>
            <p className="text-sm text-gray-500">
              ISBN: {book.isbn}
            </p>
          </div>

          {/* Precio */}
          <div className="border-t border-b py-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-coral-600">
                €{book.precio?.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Descripción */}
          {book.descripcion && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Descripción</h3>
              <p className="text-gray-700 leading-relaxed">
                {book.descripcion}
              </p>
            </div>
          )}

          {/* Detalles adicionales */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            {book.paginas && (
              <div>
                <span className="font-semibold">Páginas:</span> {book.paginas}
              </div>
            )}
            {book.publisher && (
              <div>
                <span className="font-semibold">Editorial:</span> {book.publisher}
              </div>
            )}
            {book.fechaPublicacion && (
              <div>
                <span className="font-semibold">Fecha:</span> {book.fechaPublicacion}
              </div>
            )}
            {book.idiomas && book.idiomas.length > 0 && (
              <div>
                <span className="font-semibold">Idiomas:</span> {book.idiomas.map(lang => lang).join(', ')}
              </div>
            )}
            {book.valoracion && (
              <div>
                <span className="font-semibold">Valoración:</span> {book.valoracion}/5 ⭐
              </div>
            )}
            {book.generoLiterario && book.generoLiterario.length > 0 && (
              <div className="col-span-2">
                <span className="font-semibold">Géneros:</span> {book.generoLiterario.map(genre => genre.nombre || genre).join(', ')}
              </div>
            )}
          </div>

          {/* Botón agregar al carrito */}
          <div className="pt-6">
            {showSuccess && (
              <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                ¡Libro agregado al carrito!
              </div>
            )}
            
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                isInCart
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-coral-500 hover:bg-coral-600'
              } ${
                isAdding ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isAdding ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Agregando...
                </div>
              ) : isInCart ? (
                'Agregar otro'
              ) : (
                'Agregar al carrito'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;