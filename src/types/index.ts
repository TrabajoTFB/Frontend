export type { BlogPost } from './blog';

export interface Book {
    titulo: string;
    autor: string;
    urlImgPortada: string;
    fechaPublicacion: string;
    valoracion: number;
    generoLiterario: Genre[];
    isbn: number;
    precio?: number;
    descripcion?: string;
    paginas?: number;
    publisher?: string;
    idiomas?: Language[];
}

export interface Genre {
    id: number;
    nombre: string;
    urlImgGenero: string;
}

export interface Language {
    id: number;
    codigo: string;
}