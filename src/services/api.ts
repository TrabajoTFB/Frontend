import axios from 'axios';
import type { Usuario } from '../types';

const API_URL = 'http://localhost:8080';

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const api = {
    login: async (email: string, password: string) => {
        try {
            const response = await axios.post(`${API_URL}/login`, { email, password });
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
            }
            localStorage.setItem('usuario', JSON.stringify(response.data.id));         
            return response.data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

register: async (userData: {
    nombre: string;
    apellidos: string;
    email: string;
    user: string;
    contraseña: string;
    confirmPassword: string;
}) => {
    try {
        console.log('Payload a enviar:', userData);
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Register error:', error);
        throw error;
    }
},

    isAuthenticated: () => {
        const token = localStorage.getItem('token');
        return !!token;
    },

    // User Endpoints

    getCurrentUser: () => {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    },

    getUserById: async() => {
        const idUser = localStorage.getItem('usuario');
        const response = await axios.get(`${API_URL}/user/${idUser}`)
        return response.data;
    },

    getBookCountByUser: async() => {
        const idUser = localStorage.getItem('usuario');
        const response = await axios.get(`${API_URL}/user/libros/count/${idUser}`);
        return response.data;
    },

    putUser: async(datos: Partial<Usuario>) => {
        const idUser = localStorage.getItem('usuario');
        const response = await axios.put(`${API_URL}/user/${idUser}`, datos);
        return response.data;
    },

    // Book endpoints

    getAllBooks: async () => {
        const response = await axios.get(`${API_URL}/books`);
        return response.data;
    },

    getUserWithBooks: async() => {
        const idUser = localStorage.getItem('usuario');
        const response = await axios.get(`${API_URL}/user/${idUser}`);
        return response.data;
    },

    getUserSales: async () => {
        const idUser = localStorage.getItem('usuario');
        const response = await axios.get(`${API_URL}/user/${idUser}`);
        const sales = (response.data.libros).filter((libro: any) => libro.enVenta)
        return sales;
    },

    getRandomBook: async () => {
        const response = await axios.get(`${API_URL}/book/random`);
        return response.data;
    },

    getNewReleases: async () => {
        const response = await axios.get(`${API_URL}/books/releases`);
        return response.data;
    },

    getGenres: async () => {
        const response = await axios.get(`${API_URL}/genero/home`);
        return response.data;
    },

    getBookByIsbn: async (isbn: string) => {
        const response = await axios.get(`${API_URL}/book/${isbn}`);
        return response.data;
    },

    getVentaByIsbn: async (isbn: string) => {
    const response = await axios.get(`${API_URL}/venta/${isbn}`);
    return response.data;
    }

};