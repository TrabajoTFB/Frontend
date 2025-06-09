import { useState } from 'react';
import type { Usuario } from '../../types';
import { api } from '../../services/api';


const ProfileEdit = ({
  user,
  setIsEditing,
  onUserUpdated
}: {
  user: Usuario;
  setIsEditing: (val: string) => void;
  onUserUpdated: () => void;
}) => { 
  
  const [showPassword, setShowPassword] = useState(false);

    // Estados para cada campo editable
    const [nombre, setNombre] = useState(user.nombre);
    const [apellidos, setApellidos] = useState(user.apellidos);
    const [direccion, setDireccion] = useState(user.direccion);
    const [telefono, setTelefono] = useState(user.telefono);
    const [email, setEmail] = useState(user.email);
    const [contraseña, setContraseña] = useState(user.contraseña);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {        
        await api.putUser( {
          id: user.id,
          user: user.user,
          nombre,
          apellidos,
          direccion,
          telefono,
          email,
          contraseña
        });
        await onUserUpdated();
        setIsEditing("info"); // Vuelve al modo de visualización
      } catch (error) {
        console.error("Error actualizando el usuario:", error);
        // Aquí puedes mostrar un mensaje de error si lo deseas
      }
    };

  return (
    <form 
      className="bg-white shadow-lg rounded-2xl p-8 w-full h-full border border-gray-100"
      onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-bold block mb-1 text-gray-700">Name</label>
          <input
            type="text"
            defaultValue={user.nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Full name"
            className="w-full p-2 rounded-xl text-gray-900 border border-gray-300 focus:ring-coral-500 focus:border-coral-500"
          />
        </div>
        <div>
          <label className="font-bold block mb-1 text-gray-700">Surname</label>
          <input
            type="text"
            defaultValue={user.apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            placeholder="Surname"
            className="w-full p-2 rounded-xl text-gray-900 border border-gray-300 focus:ring-coral-500 focus:border-coral-500"
          />
        </div>
        <div className="col-span-2">
          <label className="font-bold block mb-1 text-gray-700">Direction</label>
          <input
            type="text"
            defaultValue={user.direccion}
            onChange={(e) => setDireccion(e.target.value)}
            placeholder="Direction"
            className="w-full p-2 rounded-xl text-gray-900 border border-gray-300 focus:ring-coral-500 focus:border-coral-500"
          />
        </div>
        <div>
          <label className="font-bold block mb-1 text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              defaultValue={user.contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              placeholder="Password"
              className="w-full p-2 rounded-xl text-gray-900 border border-gray-300 focus:ring-coral-500 focus:border-coral-500 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm bg-white text-coral-500 px-2 py-1 rounded shadow"
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
        </div>
        <div>
          <label className="font-bold block mb-1 text-gray-700">Mail</label>
          <input
            type="email"
            defaultValue={user.email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Mail"
            className="w-full p-2 rounded-xl text-gray-900 border border-gray-300 focus:ring-coral-500 focus:border-coral-500"
          />
        </div>
        <div>
          <label className="font-bold block mb-1 text-gray-700">Phone</label>
          <input
            type="tel"
            defaultValue={user.telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Phone"
            className="w-full p-2 rounded-xl text-gray-900 border border-gray-300 focus:ring-coral-500 focus:border-coral-500"
          />
        </div>
      </div>
      <div className='flex justify-center mt-6'>
        <button
          type="submit"
          className="bg-coral-500 text-white font-bold py-2 px-6 rounded-xl shadow-md hover:bg-coral-600 transition-colors m-2"
        >
          Guardar
        </button>
        <button
          onClick={() => setIsEditing("info")}
          className="bg-white text-coral-500 font-bold py-2 px-6 rounded-xl shadow-md border border-coral-500 hover:bg-coral-50 transition-colors m-2"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default ProfileEdit;