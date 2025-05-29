export interface Book {
    id: number;
    titulo: string;
    autor: string;
    descripcion: string;
    precio: number;
    portada?: string;
    fechaPublicacion: string;
}

export interface Genre {
    id: number;
    nombre: string;
    descripcion: string;
    cantidadLibros: number;
    imagen?: string;
}