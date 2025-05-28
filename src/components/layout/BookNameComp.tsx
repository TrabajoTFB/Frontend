import React from "react";

const BookNameComp: React.FC = () => {
    return (
        <div>
            <div className="flex justify-center hero-gradient p-6 text-blue-800 font-bold">
                BOOK NAME
            </div>
            <div className="p-6 px-10 mt-5 bg-white text-blue-800 font-bold">HOME / PRODUCTS / BOOK NAME</div>

            {/* Principal */}
            <div className="flex justify-center items-center bg-white p-6 mt-8">
                {/* Book image */}
                <div className="flex flex-col text-center">
                    <img
                        src="images/Los_pilares_de_la_tierra.jpg" alt="Imagenlibro" 
                        className="rounded bg-white shadow-lg px-4 py-4 h-80 w-70"
                    />
                    <p className="text-xs text-blue-800 font-bold mt-3">Los pilares de la tierra</p>
                    <p className="text-xs text-grey-300 mt-2">Autor</p>
                </div>

                {/* Book data */}
                <div className="flex flex-col px-20">
                    hola
                </div>

            </div>
        </div>
    );
};

export default BookNameComp;