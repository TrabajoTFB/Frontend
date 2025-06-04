import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import type { Usuario } from '../../types';



const ProfileInfo = ({
  user,
  setIsEditing
}: {
  user: Usuario;
  setIsEditing: (val: string) => void;
}) => {


  const passwordLen = user.contraseña?.length || 8;

  return (
    <form className="bg-blue-800 text-white rounded-2xl p-6 w-full h-full">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="font-bold block mb-1">Name</label>
          <p>{user.nombre}</p>
        </div>
        <div>
          <label className="font-bold block mb-1">Surname</label>
          <p>{user.apellidos}</p>
        </div>

        <div className="col-span-2">
          <label className="font-bold block mb-1">Direction</label>
          <p>{user.direccion || 'Sin direccion asignada'}</p>
        </div>

        <div>
          <label className="font-bold block mb-1">Password</label>
          <p>{"*".repeat(passwordLen)}</p>
        </div>
        <div>
          <label className="font-bold block mb-1">Mail</label>
          <p>{user.email}</p>
        </div>

        <div>
          <label className="font-bold block mb-1">Phone</label>
          <p>{user.telefono}</p>
        </div>
        <div>
          <label className="font-bold block mb-1">Username</label>
          <p>{user.user}</p>
        </div>
      </div>

      <div className='flex justify-center mt-2'>
        <button
          onClick={() => setIsEditing("edit")}
          type="button"
          className="mt-6 bg-white text-black font-bold py-2 px-4 rounded-xl shadow-md hover:shadow-lg"
        >
          Editar
        </button>
      </div>
    </form>
  );
};

export default ProfileInfo;
