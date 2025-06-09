import React, { useState, useEffect } from 'react';
import { useCart } from '../../contexts/CartContext';
import type { Book } from '../../types';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

interface BookDetailsProps {
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  const { addItem, state } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);
  const [addedVendedorId, setAddedVendedorId] = useState<number | null>(null);
  const [vendedores, setVendedores] = useState<any[]>([]);
  const [estadoFiltro, setEstadoFiltro] = useState<number | ''>('');
  const [loading, setLoading] = useState(true);

  const vendedoresFiltrados = estadoFiltro == ''
    ? vendedores
    : vendedores.filter(v => v.estado == estadoFiltro);

  useEffect(() => {
    const fetchVendedores = async () => {
      try {
        const data = await api.getVentaByIsbn(book.isbn.toString());
        setVendedores(data);
      } catch (error) {
        console.error('Error al obtener vendedores:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVendedores();
  }, [book.isbn]);

  const handleAddToCart = (vendedor: any) => {
    addItem({
      id: `${book.isbn}-${vendedor.id}`, // ID único por vendedor
      isbn: book.isbn,
      title: book.titulo,
      price: vendedor.precio,
      image: book.urlImgPortada,
      author: book.autor,
    });

    setAddedVendedorId(vendedor.id);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const estadoMap: Record<number, string> = {
    5: 'Nuevo con etiqueta',
    4: 'Como nuevo',
    3: 'Buen estado',
    2: 'En condiciones aceptables',
    1: 'Deteriorado',
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            src={book.urlImgPortada || '/placeholder-book.jpg'}
            alt={book.titulo}
            className="max-w-md w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {book.titulo}
            </h1>
            <p className="text-xl text-gray-600 mb-1">Por {book.autor}</p>
            <p className="text-sm text-gray-500">ISBN: {book.isbn}</p>
          </div>

          {book.descripcion && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Descripción</h3>
              <p className="text-gray-700 leading-relaxed">{book.descripcion}</p>
            </div>
          )}

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
                <span className="font-semibold">Fecha:</span>{' '}
                {new Date(book.fechaPublicacion).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            )}
            {book.idiomas && book.idiomas.length > 0 && (
                <div>
                  <span className="font-semibold">Idiomas:</span>{' '}
                  {book.idiomas.map(lang => lang.nombre).join(', ')}
                </div>
              )}
            {book.valoracion && (
              <div>
                <span className="font-semibold">Valoración:</span> {book.valoracion}/5 ⭐
              </div>
            )}
            {book.generoLiterario && book.generoLiterario.length > 0 && (
              <div className="col-span-2">
                <span className="font-semibold">Géneros:</span>{' '}
                {book.generoLiterario.map((genre) => genre.nombre || genre).join(', ')}
              </div>
            )}
          </div>

          {showSuccess && (
            <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              ¡Libro agregado al carrito!
            </div>
          )}

          {/* Vendedores */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Vendedores disponibles

            {/* Filtro */}
            <div className='mb-2 ml-1'>
              <select 
                className='border rounded px-2 py-1 text-sm'
                value={estadoFiltro}
                onChange={e => setEstadoFiltro(e.target.value == '' ? '' : Number(e.target.value))}
              >
                <option value="">Filtrar por estado</option>
                <option value={5}>Nuevo con etiqueta</option>
                <option value={4}>Como nuevo</option>
                <option value={3}>Buen estado</option>
                <option value={2}>En condiciones aceptables</option>
                <option value={1}>Deteriorado</option>
              </select>
            </div>

            </h3>
            {loading ? (
              <p>Cargando vendedores...</p>
            ) : vendedores.length === 0 ? (
              <p>No hay vendedores disponibles para este libro.</p>
            ) : (
              <div className="space-y-3">
                {vendedoresFiltrados.map((v) => {
                  const itemId = `${book.isbn}-${v.id}`;
                  const isInCart = state.items.some((item) => item.id === itemId);
                  return (
                    <div
                      key={v.id}
                      className="border p-3 rounded-lg flex justify-between items-center"
                    >
                      <div>
                        <p className="font-semibold">
                          <Link
                          to={`/seller/${v.id}`}
                          className='hover:underline hover:text-coral-600 transition-color'
                          >
                            {v.nombre} {v.apellidos}
                          </Link>
                        </p>
                        <p className="text-sm text-gray-500">{estadoMap[v.estado]}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-coral-600 font-bold text-lg">
                          €{v.precio.toFixed(2)}
                        </p>
                        <button
                          onClick={() => handleAddToCart(v)}
                          className={`mt-2 px-3 py-1 rounded-md text-sm font-medium text-white ${
                            isInCart
                              ? 'bg-green-500 hover:bg-green-600'
                              : 'bg-coral-500 hover:bg-coral-600'
                          }`}
                        >
                          {isInCart ? 'Agregar otro' : 'Agregar'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
