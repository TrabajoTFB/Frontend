import React from 'react';

const PASSWORD = "banana"

const ProfileInfo = ({ setIsEditing }: { setIsEditing: (val: string) => void }) => {

  const passwordLen = PASSWORD.length;

  return (
    <form className="bg-blue-800 text-white rounded-2xl p-6 w-full h-full">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="font-bold block mb-1">Name</label>
          <p>Name</p>
        </div>
        <div>
          <label className="font-bold block mb-1">Surname</label>
          <p>Surname</p>
        </div>

        <div className="col-span-2">
          <label className="font-bold block mb-1">Direction</label>
          <p>Direction</p>
        </div>

        <div>
          <label className="font-bold block mb-1">Passsword</label>
          <p>
            {"*".repeat(passwordLen)}
          </p>
        </div>
        <div>
          <label className="font-bold block mb-1">Mail</label>
          <p>Mail</p>
        </div>

        <div>
          <label className="font-bold block mb-1">Phone</label>
          <p>Phone</p>
        </div>
        <div>
          <label className="font-bold block mb-1">Date</label>
          <p>Date</p>
        </div>
      </div>
        <div className='flex justify-center mt-2'>
            <button
              onClick={() => setIsEditing("edit")}
              type="submit"
              className="mt-6 bg-white text-black font-bold py-2 px-4 rounded-xl shadow-md hover:shadow-lg"
            >
                Editar
            </button>
        </div>
    </form>
  );
};

export default ProfileInfo;
