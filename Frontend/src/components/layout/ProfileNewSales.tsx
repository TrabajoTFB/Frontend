import React from 'react';

const PASSWORD = "banana"

const ProfileNewSales = ({ setIsEditing }: { setIsEditing: (val: string) => void }) => {

  return (
    <form className="bg-blue-800 text-white rounded-2xl p-6 w-full max-w-md">

      <div className='flex'>
        <div className="flex flex-col gap-3 px-2">
          <h2 className="text-white font-bold">ISBN</h2>
          <input className="p-1 bg-white rounded" placeholder="ISBN" />

          <h2 className="text-white font-bold">Status</h2>
          <input className="p-1 bg-white rounded" type="text" placeholder="Status"/>
        </div>

        <div className="flex flex-col gap-3 px-2">
          <h2 className='text-white font-bold'>Price</h2>
          <input className='p-1 bg-white rounded' type="text" placeholder="Price"/>
        </div>
      </div>

      <div className='flex justify-right mt-5 ml-2'>
        <h3 className='text-white font-bold'>Avaliable for hand picking:</h3>
        <input
          type='checkbox'
          className='w-5 h-5 accent-yellow-300 ml-2'
        />
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
