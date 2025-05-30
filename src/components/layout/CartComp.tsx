import React, { useState } from "react";

const CartComp: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    sameShipping: true,
    ageConfirmed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const cart = [
    {
      id: 1,
      title: "COLOR RICHE shine lips",
      price: 9.63,
      image: "/mnt/data/WhatsApp Image 2025-05-30 at 10.45.59.jpeg",
    },
  ];

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const discount = subtotal * 0.54;
  const total = subtotal - discount;

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h2
        className="font-extrabold mb-8 text-lg
        bg-gradient-to-r from-[#f7d9cd] via-[#f0b38e] to-[#f2a06a]
        bg-clip-text text-transparent inline-block mx-auto text-center"
      >
        ORDER FORM
      </h2>

      <section className="flex flex-col md:flex-row gap-12">
        {/* Formulario de información */}
        <div className="flex-1 bg-white p-8 rounded shadow max-w-lg">
          <h3 className="text-center font-semibold mb-6">YOUR INFORMATION</h3>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />

            <div className="flex gap-4">
              <input
                type="text"
                name="zip"
                placeholder="Zip or Postcode"
                value={form.zip}
                onChange={handleChange}
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
              >
                <option value="">Country</option>
                <option value="Spain">Spain</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                {/* Agrega más países aquí */}
              </select>
            </div>

            <div className="flex gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleChange}
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <label className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="sameShipping"
                checked={form.sameShipping}
                onChange={handleChange}
              />
              My shipping information is not the same as my billing information
            </label>
          </form>
        </div>

        {/* Resumen del pedido */}
        <div className="flex-1 max-w-xs bg-white border border-gray-200 rounded-lg p-6 shadow">
          <h3 className="font-semibold mb-6">YOUR ORDER</h3>
          {cart.map((item) => (
            <div key={item.id} className="mb-4">
              <p className="font-semibold">{item.title} x 1</p>
              <p className="text-sm text-gray-500">L'Oréal Paris</p>
              <p className="font-bold">{item.price.toFixed(2)} €</p>
            </div>
          ))}

          <div className="flex justify-between mb-1">
            <span>Subtotal:</span>
            <span>{subtotal.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between mb-1 text-yellow-600 font-semibold">
            <span>VIP discount:</span>
            <span>-{discount.toFixed(2)} € (-54%)</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total to pay:</span>
            <span>{total.toFixed(2)} €</span>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Tax and VAT included. View VAT Details.
          </p>

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
          </div>
        </div>
      </section>

      {/* Delivery options */}
      <section className="mt-8 bg-white max-w-lg p-6 rounded shadow">
        <h4 className="font-semibold mb-4">Delivery options</h4>
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="radio" name="delivery" checked readOnly />
          STANDARD DELIVERY: 2 - 7 DAYS
          <span className="ml-auto font-semibold">0.00€</span>
        </label>
      </section>

      {/* Edad */}
      <section className="mt-4 max-w-lg">
        <label className="inline-flex items-center gap-2 text-xs">
          <input
            type="checkbox"
            name="ageConfirmed"
            checked={form.ageConfirmed}
            onChange={handleChange}
          />
          I certify I’m at least 18 years of age. I agree and consent to the{" "}
          <a
            href="#"
            className="underline text-blue-600"
            target="_blank"
            rel="noreferrer"
          >
            Billing terms & conditions
          </a>
          ,{" "}
          <a
            href="#"
            className="underline text-blue-600"
            target="_blank"
            rel="noreferrer"
          >
            Privacy policy
          </a>
          , and other policies.
        </label>
      </section>
    </main>
  );
};

export default CartComp;

