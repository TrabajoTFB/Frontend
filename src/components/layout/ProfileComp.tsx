import React from "react";

const ProfileCard: React.FC = () => {
    return (
        <div className="bg-blue-800 text-center text-white p-6 w-72 rounded-2xl">
            <div className="flex justify-center mb-4">
                <a href="/" className="logo bg-gray-800 rounded-full p-2 ">
                    <img src="/images/profile.png" alt="Foto de perfil" height={40} className="rounded-full w-20 h-20 object-cover"/>
                </a>
            </div>
            <h2 className="text-xl font-bold">Nombre de perfil</h2>
            <div className="flex justify-center gap-2 mt-2">
                <span className="bg-yellow-200 text-black text-xs font-bold py-1 px-3 rounded-full">100 books</span>
                <span className="bg-indigo-100 text-black text-xs font-bold py-1 px-3 rounded-full">Seller</span>
            </div>
            <button className="bg-white text-center text-black py-1 px-3 font-bold rounded mt-4">
                Editar perfíl
            </button>
        </div>
    );
};

export default ProfileCard;