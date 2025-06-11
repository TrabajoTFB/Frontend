import axios from 'axios';
import type { Usuario } from '../types';

const API_URL = 'http://localhost:8080';
const PYTHON_API_URL = 'http://localhost:5000';

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

    getSellerById: async(id: string | number) => {
        const response = await axios.get(`${API_URL}/user/${id}`);
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

    updateUserVerification: async () => {
        const idUser = localStorage.getItem('usuario');
        // Primero obtenemos los datos actuales del usuario
        const currentUser = await axios.get(`${API_URL}/user/${idUser}`);
        
        // Actualizamos solo cambiando el campo verificado
        const response = await axios.put(`${API_URL}/user/${idUser}`, {
            ...currentUser.data,
            verificado: 1
        });
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
    },

    addBookByIsbn: async ({ idUsuario, isbn }: { idUsuario: number, isbn: number }) => {
        const response = await axios.post(`${API_URL}/agregar/isbn`, {
            idUsuario,
            isbn
        });
        return response.data;
    },

    createSale: async (saleData: { usuarioId: number; libroISBN: number; precio: number; estado: number; enVenta: boolean }) => {
        try {
            const response = await axios.put(`${API_URL}/venta`, saleData);
            return response.data;
        } catch (error) {
            console.error('Create sale error:', error);
            throw error;
        }
    },

    createStripeCheckoutSession: async (items: Array<{price: number, quantity: number, title: string, isbn: string}>) => {
        try {
            const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            
            // Añadir la URL de éxito directamente a checkout-success
            const response = await axios.post(`${PYTHON_API_URL}/create-checkout-session`, {
                order_id: orderId,
                items,
                success_url: `${window.location.origin}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${window.location.origin}/cart`
            });

            if (!response.data || !response.data.checkout_url) {
                throw new Error('No se recibió una URL de checkout válida del servidor');
            }

            return response.data;
        } catch (error) {
            console.error('Error creating checkout session:', error);
            throw error;
        }
    },

    verifyPaymentSession: async (sessionId: string) => {
        try {
            const response = await axios.get(`${PYTHON_API_URL}/verify-payment/${sessionId}`);
            return response.data;
        } catch (error) {
            console.error('Error verifying payment:', error);
            throw error;
        }
    },

    createPurchase: async (purchaseData: {
        compradorId: number;
        detalles: Array<{
            idVendedor: number;
            isbn: number;
        }>;
        precioFinal: number;
    }) => {
        try {
            const response = await axios.post(`${API_URL}/comprar`, purchaseData);
            return response.data;
        } catch (error) {
            console.error('Error creating purchase:', error);
            throw error;
        }
    }
};