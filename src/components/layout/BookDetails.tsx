import React, { useState } from "react";
import { CheckCircle, Star, ChevronDown, BookOpen, Clock, Building2, Languages } from "lucide-react";
import type { Book } from "../../types";

interface BookDetailsProps {
    book: Book;
}

// Mock seller data
const mockSeller = {
    name: "Book Shop",
    rating: 4.8,
    isVerified: true,
    price: 9.99
};

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left Column - Image */}
                    <div className="md:w-1/3">
                        <div className="aspect-[3/4] relative">
                            <img
                                src={book.urlImgPortada}
                                alt={`Portada de ${book.titulo}`}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="md:w-2/3">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">{book.titulo}</h1>
                        <p className="text-xl text-gray-600 mb-4">por {book.autor}</p>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${
                                            i < book.valoracion
                                                ? "text-yellow-400 fill-yellow-400"
                                                : "text-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">({book.valoracion} / 5)</span>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-500">ISBN</p>
                                <p className="font-medium">{book.isbn}</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-500">Fecha de publicación</p>
                                <p className="font-medium">{book.fechaPublicacion}</p>
                            </div>
                        </div>

                        {/* Sellers Section */}
                        <div className="border rounded-lg p-6 bg-white shadow-sm">
                            <h3 className="text-lg font-semibold mb-4">Vendedores actuales</h3>
                            
                            {/* Mock Seller Card */}
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div>
                                        <p className="font-medium flex items-center gap-2">
                                            {mockSeller.name}
                                            {mockSeller.isVerified && (
                                                <CheckCircle className="w-4 h-4 text-blue-500" />
                                            )}
                                        </p>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                            <span className="text-sm text-gray-600">{mockSeller.rating}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-coral-500">{mockSeller.price}€</p>
                                    <button className="mt-2 px-4 py-2 bg-coral-500 text-white rounded-md hover:bg-coral-600 transition-colors">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Collapsible Book Information */}
            <div className="max-w-7xl mx-auto px-4 mb-12">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    <span className="font-medium text-gray-900">Información detallada del libro</span>
                    <ChevronDown
                        className={`w-5 h-5 text-gray-600 transition-transform ${
                            isExpanded ? "transform rotate-180" : ""
                        }`}
                    />
                </button>

                {isExpanded && (
                    <div className="mt-4 p-6 border rounded-lg bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <BookOpen className="w-5 h-5 text-coral-500 mt-1" />
                                    <div>
                                        <h3 className="font-medium text-gray-900">Descripción</h3>
                                        <p className="text-gray-600 mt-1">{book.descripcion || "No disponible"}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-coral-500 mt-1" />
                                    <div>
                                        <h3 className="font-medium text-gray-900">Detalles de publicación</h3>
                                        <p className="text-gray-600 mt-1">
                                            Fecha: {new Date(book.fechaPublicacion).toLocaleDateString()}
                                            <br />
                                            Páginas: {book.paginas}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Building2 className="w-5 h-5 text-coral-500 mt-1" />
                                    <div>
                                        <h3 className="font-medium text-gray-900">Editorial</h3>
                                        <p className="text-gray-600 mt-1">{book.publisher || "No disponible"}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Languages className="w-5 h-5 text-coral-500 mt-1" />
                                    <div>
                                        <h3 className="font-medium text-gray-900">Idiomas disponibles</h3>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {book.idiomas && book.idiomas.length > 0 ? (
                                                book.idiomas.map((idioma) => (
                                                    <span
                                                        key={idioma.id}
                                                        className="px-2 py-1 bg-gray-100 text-sm text-gray-600 rounded"
                                                    >
                                                        {idioma.codigo}
                                                    </span>
                                                ))
                                            ) : (
                                                <span className="text-gray-600">No disponible</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-2">Géneros</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {book.generoLiterario && book.generoLiterario.length > 0 ? (
                                            book.generoLiterario.map((genero, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-coral-50 text-coral-600 rounded-full text-sm"
                                                >
                                                    {genero.nombre}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="text-gray-600">No disponible</span>
                                        )}
                                    </div>
                                </div>

                                {book.valoracion > 0 && (
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-2">Valoración detallada</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-5 h-5 ${
                                                            i < book.valoracion
                                                                ? "text-yellow-400 fill-yellow-400"
                                                                : "text-gray-300"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-600">
                                                {book.valoracion.toFixed(1)} de 5
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default BookDetails;