import React from 'react';

const PASSWORD = "banana"

const ProfileNewSales = ({ setIsEditing }: { setIsEditing: (val: string) => void }) => {

  const passwordLen = PASSWORD.length;

  return (
    <form className="bg-blue-800 text-white rounded-2xl p-6 w-full max-w-md">
      <div className="grid grid-cols-2 gap-4">
        <p>Aquí no hay nada todavía</p>
      </div>
        <div className='flex justify-center mt-2'>
            <button
              onClick={() => setIsEditing("info")}
              type="submit"
              className="mt-6 bg-white text-black font-bold py-2 px-4 rounded-xl shadow-md hover:shadow-lg"
            >
                Guardar
            </button>
        </div>
    </form>
  );
};

export default ProfileNewSales;
