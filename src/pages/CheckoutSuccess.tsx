import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../services/api";

const CheckoutSuccess: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, shipping } = location.state || {};
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const addMissingBooks = async () => {
      if (!cart?.items?.length) return;
      const idUsuario = Number(localStorage.getItem('usuario'));
      try {
        const userData = await api.getUserWithBooks();
        const userIsbns = (userData.libros || []).map((l: any) => l.isbn);
        const booksToAdd = cart.items.filter((item: any) => !userIsbns.includes(item.isbn));
        for (const item of booksToAdd) {
          await api.addBookByIsbn({ idUsuario, isbn: item.isbn });
        }
        setAdded(true);
      } catch {
        setAdded(false);
      }
    };
    addMissingBooks().then(() => {
      localStorage.removeItem('cart');
      if ((window as any).__clearCart) (window as any).__clearCart();
    });
    // eslint-disable-next-line
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full flex flex-col items-center">
        <img src="/images/logo.png" alt="Libroly Logo" className="w-16 mb-4" />
        <h1 className="text-3xl font-bold text-coral-600 mb-2 text-center">¡Gracias por tu compra!</h1>
        {added && <p className="text-green-600 text-center text-sm mb-2">Los libros de tu compra se han añadido a tu biblioteca.</p>}
        <p className="text-gray-700 text-center mb-6">Tu pedido ha sido procesado correctamente. Pronto recibirás un email con los detalles del envío.</p>
        <div className="w-full mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Detalles del envío</h2>
          <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
            <div><span className="font-bold">Nombre:</span> {shipping?.firstName} {shipping?.lastName}</div>
            <div><span className="font-bold">Dirección:</span> {shipping?.address}</div>
            <div><span className="font-bold">Ciudad:</span> {shipping?.city}</div>
            <div><span className="font-bold">País:</span> {shipping?.country}</div>
            <div><span className="font-bold">Teléfono:</span> {shipping?.phone}</div>
            <div><span className="font-bold">Email:</span> {shipping?.email}</div>
          </div>
        </div>
        <div className="w-full mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Resumen de tu compra</h2>
          <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
            {cart?.items?.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {cart.items.map((item: any) => (
                  <li key={item.id} className="py-2 flex justify-between items-center">
                    <div>
                      <span className="font-bold">{item.title}</span>
                      <span className="block text-xs text-gray-500">ISBN: {item.isbn}</span>
                    </div>
                    <span className="text-coral-600 font-semibold">€{item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hay productos en el carrito.</p>
            )}
            <div className="mt-4 text-right font-bold text-lg text-coral-600">
              Total: €{cart?.total?.toFixed(2) || '0.00'}
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <button
            className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-md font-semibold transition-colors"
            onClick={() => navigate("/")}
          >
            Volver al inicio
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md font-semibold transition-colors"
            onClick={() => navigate("/my-orders")}
            disabled
          >
            Ver mis pedidos
          </button>
        </div>
      </div>
    </main>
  );
};

export default CheckoutSuccess;
