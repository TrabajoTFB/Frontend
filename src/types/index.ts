export interface Book {
    titulo: string;
    autor: string;
    urlImgPortada: string;
    fechaPublicacion: string;
    valoracion: number;
    generoLiterario: Genre[];
    isbn: number;
    precio?: number;
}

export interface Genre {
    id: number;
    nombre: string;
}