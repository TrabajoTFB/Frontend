import React from "react";

const ProfileCard: React.FC = () => {
    return (
        <div className="bg-blue-800 text-center text-white p-1 w-72 h-full rounded-2xl">
            <div className="flex justify-center mb-4 mt-12">
                <a href="/profile" className="logo flex items-center justify-center w-28 h-28 bg-gray-800 rounded-full">
                    <img
                        src="/images/profile.png"
                        alt="Foto de perfil"
                        className="w-28 h-28 rounded-full object-cover"
                    />
                </a>
            </div>
            <h2 className="text-xl font-bold font-poppins">Katrina meldeva</h2>
            <div className="flex justify-center gap-2 mt-3">
                <span className="bg-yellow-200 text-black text-xs font-bold py-1 px-3 rounded-full">100 books</span>
                <span className="bg-indigo-100 text-black text-xs font-bold py-1 px-3 rounded-full">Seller</span>
            </div>
            <button className="mt-8 bg-white text-black font-bold py-2 px-12 rounded-xl shadow-md hover:shadow-lg">
                Editar perfíl
            </button>
        </div>
    );
};

export default ProfileCard;