import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../../services/api";

const estadoMap: Record<number, string> = {
  5: 'Nuevo con etiqueta',
  4: 'Como nuevo',
  3: 'Buen estado',
  2: 'En condiciones aceptables',
  1: 'Deteriorado',
};

interface Libro {
  isbn: string;
  titulo: string;
  autor: string;
  precio: number;
  estado: number;
  urlImgPortada: string;
  enVenta: boolean;
}

interface User {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  libros: Libro[];
}

const SellerComp: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await api.getSellerById(id);
        setUser(data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) return <div className="text-center mt-10 text-gray-600">Cargando...</div>;
  if (!user) return <div className="text-center mt-10 text-red-500">No se encontró el usuario.</div>;

  const librosEnVenta = user.libros.filter(libro => libro.enVenta);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <img src="/images/profile.png" alt="profile" className="w-10 h-10 rounded-full" />
          {user.nombre} {user.apellidos}
        </h1>
        <p className="text-gray-500 mt-1">{user.email} | {user.telefono}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Libros en venta</h2>
      
      {librosEnVenta.length === 0 ? (
        <p className="text-gray-600">Este usuario no tiene libros en venta.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {librosEnVenta.map((libro) => (
            <div key={libro.isbn} className="border rounded-lg shadow-sm hover:shadow-md transition p-4 bg-white flex gap-4">
              <img
                src={libro.urlImgPortada}
                alt={libro.titulo}
                className="w-24 h-32 object-cover rounded"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{libro.titulo}</h3>
                  <p className="text-sm text-gray-500">{libro.autor}</p>
                  <p className="text-sm mt-1">{libro.precio} €</p>
                  <p className="text-sm text-gray-600">{estadoMap[libro.estado] || "Desconocido"}</p>
                </div>
                <Link
                  to={`/book/${libro.isbn}`}
                  className="mt-3 inline-block bg-coral-500 text-white text-sm px-3 py-1 rounded hover:bg-coral-600 transition"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerComp;
