import React, { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import { api } from "../../services/api";
import type { Usuario } from "../../types";

const CartComp: React.FC = () => {
  const { state: cartState } = useCart();
  const [currentUser, setCurrentUser] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);
  const [useUserInfo, setUseUserInfo] = useState(true); // Nuevo estado para controlar el uso de info del usuario

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    sameAsUser: true, // Mantener este campo para facturación si es necesario
    ageConfirmed: false,
  });

  // Cargar información del usuario al montar el componente
  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        if (api.isAuthenticated()) {
          const userData = await api.getUserById();
          setCurrentUser(userData);

          // Pre-llenar el formulario con datos del usuario si está autenticado
          if (userData) {
            setForm((prev) => ({
              ...prev,
              firstName: userData.nombre || "",
              lastName: userData.apellidos || "",
              email: userData.email || "", // Email siempre del usuario logueado
              phone: userData.telefono || "",
              address: userData.direccion || "",
              city: userData.ciudad || "",
              zip: userData.codigoPostal || "",
              country: userData.pais || "",
            }));
            setUseUserInfo(true); // Por defecto, usar la información del usuario
          } else {
            setUseUserInfo(false); // Si no hay datos de usuario, no usar su información
          }
        } else {
          setUseUserInfo(false); // Si no está autenticado, no usar información de usuario
        }
      } catch (error) {
        console.error("Error loading user info:", error);
        setUseUserInfo(false); // En caso de error, permitir al usuario introducir los datos
      } finally {
        setLoading(false);
      }
    };

    loadUserInfo();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleUseUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const shouldUseUserInfo = e.target.checked;
    setUseUserInfo(shouldUseUserInfo);

    if (shouldUseUserInfo && currentUser) {
      // Restaurar información del usuario
      setForm((prev) => ({
        ...prev,
        firstName: currentUser.nombre || "",
        lastName: currentUser.apellidos || "",
        // Email ya está pre-llenado y disabled
        phone: currentUser.telefono || "",
        address: currentUser.direccion || "",
      }));
    } else {
      // Limpiar campos para que el usuario introduzca nueva información
      setForm((prev) => ({
        ...prev,
        firstName: "",
        lastName: "",
        address: "",
        zip: "",
        city: "",
        country: "",
        phone: "",
        // El email se mantiene si el usuario está logueado, pero se limpia si no
        email: currentUser?.email || "",
      }));
    }
  };

  const subtotal = cartState.total;
  const discount = subtotal * 0.1; // 10% de descuento
  const shipping = subtotal > 50 ? 0 : 5.99; // Envío gratis por encima de 50€
  const total = subtotal - discount + shipping;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-coral-500"></div>
      </div>
    );
  }

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h2 className="font-extrabold mb-8 text-2xl bg-gradient-to-r from-[#f7d9cd] via-[#f0b38e] to-[#f2a06a] bg-clip-text text-transparent text-center">
        FINALIZAR PEDIDO
      </h2>

      <section className="flex flex-col lg:flex-row gap-12">
        {/* Formulario de información */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-center font-semibold mb-6 text-lg">
            INFORMACIÓN DE ENVÍO
          </h3>

          {/* Información del usuario logueado y checkbox */}
          {currentUser && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">
                Usuario registrado: {currentUser.nombre} {currentUser.apellidos}
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                Email: {currentUser.email}
              </p>

              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={useUserInfo}
                  onChange={handleUseUserInfoChange}
                  className="rounded text-coral-500 focus:ring-coral-500"
                />
                <span>Usar mi información registrada para el envío</span>
              </label>
            </div>
          )}

          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="Nombre"
                value={form.firstName}
                onChange={handleChange}
                disabled={useUserInfo}
                className={`flex-1 border border-gray-300 rounded px-3 py-2 text-sm ${
                  useUserInfo ? "bg-gray-100" : ""
                }`}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Apellidos"
                value={form.lastName}
                onChange={handleChange}
                disabled={useUserInfo}
                className={`flex-1 border border-gray-300 rounded px-3 py-2 text-sm ${
                  useUserInfo ? "bg-gray-100" : ""
                }`}
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Dirección"
              value={form.address}
              onChange={handleChange}
              disabled={useUserInfo}
              className={`w-full border border-gray-300 rounded px-3 py-2 text-sm ${
                useUserInfo ? "bg-gray-100" : ""
              }`}
            />

            <div className="flex gap-4">
              <input
                type="text"
                name="city"
                placeholder="Ciudad"
                value={form.city}
                onChange={handleChange}
                disabled={useUserInfo}
                className={`flex-1 border border-gray-300 rounded px-3 py-2 text-sm ${
                  useUserInfo ? "bg-gray-100" : ""
                }`}
              />
              <input
                type="text"
                name="zip"
                placeholder="Código Postal"
                value={form.zip}
                onChange={handleChange}
                disabled={useUserInfo}
                className={`flex-1 border border-gray-300 rounded px-3 py-2 text-sm ${
                  useUserInfo ? "bg-gray-100" : ""
                }`}
              />
            </div>

            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              disabled={useUserInfo}
              className={`w-full border border-gray-300 rounded px-3 py-2 text-sm ${
                useUserInfo ? "bg-gray-100" : ""
              }`}
            >
              <option value="">Seleccionar país</option>
              <option value="Spain">España</option>
              <option value="France">Francia</option>
              <option value="Germany">Alemania</option>
              <option value="Italy">Italia</option>
              <option value="Portugal">Portugal</option>
            </select>

            <div className="flex gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={form.phone}
                onChange={handleChange}
                disabled={useUserInfo}
                className={`flex-1 border border-gray-300 rounded px-3 py-2 text-sm ${
                  useUserInfo ? "bg-gray-100" : ""
                }`}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                disabled={true} // Siempre usar email del usuario logueado y deshabilitado
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm bg-gray-100"
              />
            </div>

            <label className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="sameAsUser"
                checked={form.sameAsUser}
                onChange={handleChange}
                className="rounded text-coral-500 focus:ring-coral-500"
              />
              <span>La información de facturación es la misma que la de envío</span>
            </label>
          </form>
        </div>

        {/* Resumen del carrito */}
        <div className="lg:w-96 bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
          <h3 className="font-semibold mb-6 text-lg">RESUMEN DEL PEDIDO</h3>

          <div className="max-h-60 overflow-y-auto mb-4">
            {cartState.items.length === 0 ? (
              <p className="text-gray-500 text-center">Tu carrito está vacío</p>
            ) : (
              cartState.items.map((item) => (
                <div key={item.id} className="mb-4 pb-4 border-b border-gray-100">
                  <div className="flex gap-3">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-16 object-cover rounded"
                      />
                    )}
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{item.title}</p>
                      {item.author && (
                        <p className="text-xs text-gray-500">por {item.author}</p>
                      )}
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm">Cantidad: {item.quantity}</span>
                        <span className="font-bold">
                          €{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartState.items.length > 0 && (
            <>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal ({cartState.itemCount} libros):</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-green-600 font-semibold">
                  <span>Descuento (10%):</span>
                  <span>-€{discount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Envío:</span>
                  <span>{shipping === 0 ? "GRATIS" : `€${shipping.toFixed(2)}`}</span>
                </div>

                {shipping === 0 && (
                  <p className="text-xs text-green-600">
                    ¡Envío gratis por compras superiores a €50!
                  </p>
                )}
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total a pagar:</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
              </div>

              <p className="mt-4 text-xs text-gray-400">IVA incluido. Ver detalles del IVA.</p>

              <div className="mt-6 flex justify-center gap-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                  alt="Visa"
                  className="h-6"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                  alt="MasterCard"
                  className="h-6"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
                  alt="American Express"
                  className="h-6"
                />
              </div>
            </>
          )}
        </div>
      </section>

      {cartState.items.length > 0 && (
        <>
          {/* Opciones de entrega */}
          <section className="mt-8 bg-white max-w-2xl p-6 rounded-lg shadow-lg">
            <h4 className="font-semibold mb-4">Opciones de entrega</h4>
            <div className="space-y-3">
              <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="delivery"
                    defaultChecked
                    className="text-coral-500 focus:ring-coral-500"
                  />
                  <div>
                    <p className="font-medium">ENTREGA ESTÁNDAR</p>
                    <p className="text-sm text-gray-500">2 - 7 días laborables</p>
                  </div>
                </div>
                <span className="font-semibold text-green-600">
                  {shipping === 0 ? "GRATIS" : `€${shipping.toFixed(2)}`}
                </span>
              </label>

              <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="delivery"
                    className="text-coral-500 focus:ring-coral-500"
                  />
                  <div>
                    <p className="font-medium">ENTREGA EXPRESS</p>
                    <p className="text-sm text-gray-500">1 - 2 días laborables</p>
                  </div>
                </div>
                <span className="font-semibold">€9.99</span>
              </label>
            </div>
          </section>

          {/* Confirmación y términos */}
          <section className="mt-6 max-w-2xl">
            <label className="inline-flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                name="ageConfirmed"
                checked={form.ageConfirmed}
                onChange={handleChange}
                className="mt-1 rounded text-coral-500 focus:ring-coral-500"
              />
              <span>
                Confirmo que tengo al menos 18 años de edad. Acepto y consiento
                los{" "}
                <a
                  href="#"
                  className="underline text-coral-600 hover:text-coral-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  términos y condiciones de facturación
                </a>
                , la{" "}
                <a
                  href="#"
                  className="underline text-coral-600 hover:text-coral-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  política de privacidad
                </a>
                , y otras políticas aplicables.
              </span>
            </label>
          </section>

          {/* Botón de finalizar compra */}
          <section className="mt-8 max-w-2xl">
            <button
              disabled={!form.ageConfirmed}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-white text-lg transition-all duration-200 ${
                form.ageConfirmed
                  ? "bg-coral-500 hover:bg-coral-600 shadow-lg hover:shadow-xl"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              FINALIZAR COMPRA - €{total.toFixed(2)}
            </button>
          </section>
        </>
      )}
    </main>
  );
};

export default CartComp;