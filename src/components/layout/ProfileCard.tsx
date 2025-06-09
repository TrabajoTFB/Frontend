import type { Usuario } from '../../types';


const ProfileCard = ({
    bookCount,
    user
  }: {
    bookCount: number;
    user: Usuario
  }) => {

    return (
        <div className="bg-gray-50 text-center text-gray-900 p-4 w-80 h-80 rounded-2xl border border-coral-100 flex flex-col items-center justify-between transition-transform duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center mt-8">
                <a href="/profile" className="logo flex items-center justify-center w-28 h-28 bg-gradient-to-br from-coral-500 to-coral-600 rounded-full overflow-hidden shadow-md border-4 border-white">
                    <img
                        src="/images/profile.png"
                        alt="Foto de perfil"
                        className="w-full h-full object-cover"
                    />
                </a>
                <h2 className="text-xl font-bold font-poppins mt-4 text-gray-900">{user.nombre} {user.apellidos}</h2>
            </div>
            <div className="flex justify-center gap-2 mt-3">
                <span className="bg-yellow-200 text-black text-xs font-bold py-1 px-3 rounded-full shadow">{bookCount} libros</span>
                <span className="bg-coral-500/90 text-white text-xs font-bold py-1 px-3 rounded-full shadow">Vendedor</span>
            </div>
        </div>
    );
};

export default ProfileCard;