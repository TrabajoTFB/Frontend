import React, { useState } from 'react';
import { data } from 'react-router-dom';

const ProfileNewSales = ({ setIsEditing }: { setIsEditing: (val: string) => void }) => {
  const [form, setForm] = useState({
    isbn: '',
    price: '',
    status: '',
    handPicking: false,
  });

  const statusMap: Record<string, number> = {
    'Nuevo con etiqueta': 5,
    'Como nuevo': 4,
    'Buen estado': 3,
    'En condiciones aceptables': 2,
    'Deteriorado': 1
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSend = 
    {
      ...form,
      status: statusMap[form.status] || 1,
    };
    try
    {
      const response = await fetch('http://localhost:8080/api/libros',
      {
        method: 'POST', 
        headers: 
        {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(dataToSend),
      });
      if (response.ok)
        alert('libro guardado correctamente');
      else
        alert('Error al guardar el libro');
    }
    catch (error)
    {
      alert('Error de conexión con el servidor');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
  };

  return (
    <form 
      className="bg-blue-800 text-white rounded-2xl p-6 w-full max-w-md"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-bold mb-1">ISBN</label>
          <input
            type="text"
            name="isbn"
            placeholder="ISBN"
            value={form.isbn}
            onChange={handleChange}
            required
            className="w-full p-2 rounded text-black"
          />
        </div>

        <div>
          <label className="block font-bold mb-1">Precio</label>
          <input
            type="number"
            name="price"
            placeholder="Precio"
            value={form.price}
            onChange={handleChange}
            required
            className="w-full p-2 rounded text-black"
          />
        </div>

        <div className="col-span-2">
          <label className="block font-bold mb-1">Estado</label>
          <select
            id='status'
            name="status"
            value={form.status}
            onChange={handleChange}
            required
            className="w-full p-2 rounded text-black"
          >
          <option value="">Estado del libro</option>
          {Object.keys(statusMap).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          </select>
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
