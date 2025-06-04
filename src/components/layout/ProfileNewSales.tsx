import React, { useState } from 'react';

const ProfileNewSales = ({ setIsEditing }: { setIsEditing: (val: string) => void }) => {
  const [form, setForm] = useState({
    isbn: '',
    price: '',
    status: '',
    handPicking: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form className="bg-blue-800 text-white rounded-2xl p-6 w-full max-w-md">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-bold mb-1">ISBN</label>
          <input
            type="text"
            name="isbn"
            placeholder="📘 Book name"
            value={form.isbn}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
          />
        </div>

        <div>
          <label className="block font-bold mb-1">Precio</label>
          <input
            type="number"
            name="precio"
            placeholder="💲 price"
            value={form.price}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
          />
        </div>

        <div className="col-span-2">
          <label className="block font-bold mb-1">Estado</label>
          <input
            type="text"
            name="status"
            placeholder="Estado"
            value={form.status}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
          />
        </div>

        <div className="col-span-2 flex items-center space-x-4 mt-2">
          <label className="font-bold">Disponible para recoger en mano</label>
          <input
            type="checkbox"
            name="handPicking"
            checked={form.handPicking}
            onChange={handleChange}
            className="w-5 h-5"
          />
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => setIsEditing("info")}
          type="submit"
          className="bg-white text-black font-bold py-2 px-4 rounded-xl shadow-md hover:shadow-lg"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default ProfileNewSales;
