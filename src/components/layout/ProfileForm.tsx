const ProfileForm = () => {
  return (
    <form className="bg-blue-800 text-white rounded-2xl p-6 w-full max-w-md">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-bold block mb-1">Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 rounded-xl text-black"
          />
        </div>
        <div>
          <label className="font-bold block mb-1">Surname</label>
          <input
            type="text"
            placeholder="Surname"
            className="w-full p-2 rounded-xl text-black"
          />
        </div>

        <div className="col-span-2">
          <label className="font-bold block mb-1">Direction</label>
          <input
            type="text"
            placeholder="Direction"
            className="w-full p-2 rounded-xl text-black"
          />
        </div>

        <div>
          <label className="font-bold block mb-1">Passsword</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded-xl text-black"
          />
        </div>
        <div>
          <label className="font-bold block mb-1">Mail</label>
          <input
            type="email"
            placeholder="Mail"
            className="w-full p-2 rounded-xl text-black"
          />
        </div>

        <div>
          <label className="font-bold block mb-1">Phone</label>
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-2 rounded-xl text-black"
          />
        </div>
        <div>
          <label className="font-bold block mb-1">Date</label>
          <input
            type="date"
            className="w-full p-2 rounded-xl text-black"
          />
        </div>
      </div>
        <div className='flex justify-center mt-2'>
            <button
                type="submit"
                className="mt-6 bg-white text-black font-bold py-2 px-4 rounded-xl shadow-md hover:shadow-lg"
            >
                Save profile
            </button>
        </div>
    </form>
  );
};

export default ProfileForm;
