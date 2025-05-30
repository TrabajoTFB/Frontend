import React from "react";

const SignUpComp: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="relative flex items-center justify-center">

                {/* Fondo login */}
                <div className="absolute w-64 h-80 bg-[#FA5D2A] rounded z-10"></div>
                <img
                    src="/images/signup_bg.png"
                    alt="login_bg"
                    className="absolute top-0 w-32 z-20"
                />

                {/* Tarjeta de login */}
                <div className="relative z-30 mt-36 w-64 bg-white rounded-xl border px-6 py-6 shadow-md flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-4">Registrarse</h2>

                    <form className="w-full flex flex-col items-center">
                        <input
                            type="text"
                            placeholder="Nombre completo"
                            className="w-full mb-3 px-4 py-2 border rounded-full text-sm"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full mb-3 px-4 py-2 border rounded-full text-sm"
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="w-full mb-4 px-4 py-2 border rounded-full text-sm"
                        />
                        <button
                            type="submit"
                            className="w-full bg-black text-white font-semibold py-2 rounded-full text-sm hover:bg-gray-900"
                        >
                            Crear cuenta
                        </button>
                    </form>

                    <p className="text-xs mt-3">
                        ¿Ya tienes una cuenta?
                    </p>
                    <a href="/login" className="text-xs mt-1 text-red-500 font-semibold hover:underline">Iniciar sesión</a>
                </div>
            </div>
        </div>
    );
};

export default SignUpComp;
