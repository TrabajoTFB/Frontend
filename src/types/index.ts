export type { BlogPost } from './blog';

// types/index.ts

export interface Genre {
  id?: number;
  nombre: string;
  descripcion?: string;
}

export interface Language {
  id?: number;
  nombre: string;
  codigo?: string; // ej: "es", "en", "fr"
}

export interface Seller {
  id: string;
  nombre: string;
  estado: string;
  valoracion: number;
  precio: number;
}

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
  enVenta?: boolean;
  sellers?: Seller[];
}

// Tipos para el carrito
export interface CartItem {
  id: string;
  isbn: number;
  title: string;
  price: number;
  image?: string;
  author?: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface Usuario {
  apellidos: string;
  contraseña: string;
  email: string;
  id: number;
  book: Book;
  nombre: string;
  telefono: string;
  user: string;
  direccion: string;
  verificado: number;
  libros: any[];
}

interface PaymentIntentResponse {
  clientSecret: string;
  amount: number;
  status: string;
}

interface PurchaseResponse {
  success: boolean;
  transactionId: string;
}