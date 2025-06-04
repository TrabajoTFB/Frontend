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
      className="bg-blue-800 text-white rounded-2xl p-6 w-full h-full"
      onSubmit={handleSubmit}>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-bold block mb-1">Name</label>
          <input
            type="text"
            defaultValue={user.nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Full name"
            className="w-full p-2 rounded-xl text-black"
          />
        </div>
        <div>
          <label className="font-bold block mb-1">Surname</label>
          <input
            type="text"
            defaultValue={user.apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            placeholder="Surname"
            className="w-full p-2 rounded-xl text-black"
          />
        </div>

        <div className="col-span-2">
          <label className="font-bold block mb-1">Direction</label>
          <input
            type="text"
            defaultValue={user.direccion}
            onChange={(e) => setDireccion(e.target.value)}
            placeholder="Direction"
            className="w-full p-2 rounded-xl text-black"
          />
        </div>

        <div>
          <label className="font-bold block mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              defaultValue={user.contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              placeholder="Password"
              className="w-full p-2 rounded-xl text-black pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm bg-white text-black px-2 py-1 rounded"
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
        </div>
        <div>
          <label className="font-bold block mb-1">Mail</label>
          <input
            type="email"
            defaultValue={user.email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Mail"
            className="w-full p-2 rounded-xl text-black"
          />
        </div>

        <div>
          <label className="font-bold block mb-1">Phone</label>
          <input
            type="tel"
            defaultValue={user.telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Phone"
            className="w-full p-2 rounded-xl text-black"
          />
        </div>
      </div>
        <div className='flex justify-center mt-2'>
        <button
          type="submit"
          className="mt-6 bg-white text-black font-bold py-2 px-4 rounded-xl shadow-md hover:shadow-lg m-5"
        >
          Guardar
        </button>
          <button
              onClick={() => setIsEditing("info")}
              className="mt-6 bg-white text-black font-bold py-2 px-4 rounded-xl shadow-md hover:shadow-lg m-5"
          >
              Cancelar
          </button>
        </div>
    </form>
  );
};

export default ProfileEdit;