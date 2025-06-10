import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

const estadoMap: Record<number, string> = {
  5: 'Nuevo con etiqueta',
  4: 'Como nuevo',
  3: 'Buen estado',
  2: 'En condiciones aceptables',
  1: 'Deteriorado',
};

const SellerComp: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any>(null);
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

  if (loading) return <div>Cargando...</div>;
  if (!user) return <div>No se encontró el usuario.</div>;

  const librosEnVenta = (user.libros).filter((libro: any) => libro.enVenta);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">
        <img src="/images/profile.png" alt="profile" className="inline w-8 h-8 rounded-full mr-2"/>
        {user.nombre} {user.apellidos}</h1>
      <p className="mb-4 text-gray-600">{user.email} | {user.telefono}</p>
      <h2 className="text-xl font-semibold mb-3">Libros en venta</h2>
      {librosEnVenta.length === 0 ? (
        <p>Este usuario no tiene libros en venta.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {librosEnVenta.map((libro: any) => (
            <div key={libro.isbn} className="border rounded-lg p-4 flex gap-4">
              <img src={libro.urlImgPortada} alt={libro.titulo} className="w-20 h-28 object-cover rounded" />
              <div>
                <h3 className="font-bold">{libro.titulo}</h3>
                <p className="text-sm text-gray-600">{libro.autor}</p>
                <p className="text-sm">{libro.precio} €</p>
                <p className="text-sm">{estadoMap[libro.estado] || "Desconocido"}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerComp;