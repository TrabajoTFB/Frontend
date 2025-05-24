import React from "react";

const LoginComp: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="relative flex items-center justify-center">

                {/* Fondo login */}
                <div className="absolute w-80 h-96 bg-[#FFBD12] rounded z-10"></div>
                <img
                    src="/images/login_bg.png"
                    alt="login_bg"
                    className="absolute top-2 w-44 z-20"
                />

                {/* Tarjeta de login */}
                <div className="relative z-30 mt-36 w-80 bg-white rounded-xl border px-6 py-6 shadow-md flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-4">Login</h2>

                    <form className="w-full flex flex-col items-center">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full mb-3 px-4 py-2 border rounded-full text-sm"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full mb-4 px-4 py-2 border rounded-full text-sm"
                        />
                        <button
                            type="submit"
                            className="w-full bg-black text-white font-semibold py-2 rounded-full text-sm hover:bg-gray-900"
                        >
                            Iniciar sesión →
                        </button>
                    </form>

                    <p className="text-xs mt-3">
                        ¿Eres nuevo? <a href="/sign_up" className="text-red-500 font-semibold hover:underline">Crear cuenta</a>
                    </p>

                    <p className="text-center text-xs mt-4 px-2 text-gray-500">
                        O inicia sesión con:
                    </p>

                    {/* Botones */}
                    <div className="w-full flex flex-col gap-2 mt-4">
                        <a
                            href="g"
                            className="flex items-center justify-center gap-2 bg-black text-white py-2 rounded-full text-sm hover:bg-gray-800"
                        >
                            ✉️ Email
                        </a>
                        <a
                            href="g"
                            className="flex items-center justify-center gap-2 bg-[#1877F2] text-white py-2 rounded-full text-sm hover:bg-blue-700"
                        >
                            📘 Facebook
                        </a>
                        <a
                            href="g"
                            className="flex items-center justify-center gap-2 bg-[#1DA1F2] text-white py-2 rounded-full text-sm hover:bg-[#0d8ddc]"
                        >
                            🐦 Twitter
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComp;
