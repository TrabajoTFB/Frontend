import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import UserBookCard from "../ui/UserBooks";

interface UserBook {
  titulo: string;
  autor: string;
  urlImgPortada: string;
  fechaPublicacion: string;
  valoracion: number;
  descripcion: string;
  paginas: number;
  publisher: string;
  isbn: number;
}

interface User {
  id: number;
  nombre: string;
  apellidos: string;
  email: string;
  libros: UserBook[];
}

const MyBooksComponent: React.FC = () => {
  const [books, setBooks] = useState<UserBook[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<UserBook[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Estados para los filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'titulo-asc' | 'titulo-desc' | 'fecha-asc' | 'fecha-desc' | 'valoracion-desc'>('titulo-asc');

  useEffect(() => {
    const fetchUserBooks = async () => {
      try {
        const userData = await api.getUserWithBooks();
        setUser(userData);
        setBooks(userData.libros || []);
        setFilteredBooks(userData.libros || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching user books:', err);
        setError('Error al cargar tus libros');
        setLoading(false);
      }
    };

    fetchUserBooks();
  }, []);

  // Efecto para aplicar los filtros
  useEffect(() => {
    let result = [...books];

    // Filtrar por término de búsqueda
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(book => 
        book.titulo.toLowerCase().includes(term) ||
        book.autor.toLowerCase().includes(term)
      );
    }

    // Aplicar ordenamiento
    result.sort((a, b) => {
      switch (sortBy) {
        case 'titulo-asc':
          return a.titulo.localeCompare(b.titulo);
        case 'titulo-desc':
          return b.titulo.localeCompare(a.titulo);
        case 'fecha-asc':
          return new Date(a.fechaPublicacion).getTime() - new Date(b.fechaPublicacion).getTime();
        case 'fecha-desc':
          return new Date(b.fechaPublicacion).getTime() - new Date(a.fechaPublicacion).getTime();
        case 'valoracion-desc':
          return b.valoracion - a.valoracion;
        default:
          return 0;
      }
    });

    setFilteredBooks(result);
  }, [books, searchTerm, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSortBy('titulo-asc');
  };

  return (
    <main className="min-h-[calc(100vh-96px-96px)] px-6 py-12 flex justify-center relative bg-white">
      {/* Fondo decorativo */}
      <div className="absolute top-28 left-20 w-96 h-96 bg-coral-500/30 rounded-xl -z-10"></div>

      <div className="max-w-7xl w-full bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Mi Biblioteca
          </h1>
          {user && (
            <p className="text-gray-600">
              {user.nombre} {user.apellidos} • {books.length} libro{books.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Filtros y búsqueda */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar por título o autor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
            >
              <option value="titulo-asc">Título A-Z</option>
              <option value="titulo-desc">Título Z-A</option>
              <option value="fecha-desc">Más recientes</option>
              <option value="fecha-asc">Más antiguos</option>
              <option value="valoracion-desc">Mejor valorados</option>
            </select>
            
            {(searchTerm || sortBy !== 'titulo-asc') && (
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-coral-500 hover:text-coral-600 border border-coral-500 hover:border-coral-600 rounded-lg transition-colors"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Contenido */}
        <section>
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coral-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Cargando tu biblioteca...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500 mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-6 py-2 bg-coral-500 text-white rounded-lg hover:bg-coral-600 transition-colors"
              >
                Reintentar
              </button>
            </div>
          ) : filteredBooks.length === 0 ? (
            <div className="text-center py-12">
              {books.length === 0 ? (
                <div>
                  <p className="text-gray-500 mb-4">No tienes libros en tu biblioteca aún</p>
                  <p className="text-sm text-gray-400">¡Comienza a agregar libros para verlos aquí!</p>
                </div>
              ) : (
                <div>
                  <p className="text-gray-500 mb-4">No se encontraron libros con los filtros seleccionados</p>
                  <button 
                    onClick={clearFilters}
                    className="text-coral-500 hover:text-coral-600 transition-colors"
                  >
                    Limpiar filtros
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredBooks.map((book: UserBook) => (
                <UserBookCard key={book.isbn} libro={book} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default MyBooksComponent;