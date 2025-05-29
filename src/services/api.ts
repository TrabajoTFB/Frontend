import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const api = {
    getAllBooks: async () => {
        const response = await axios.get(`${API_URL}/books`);
        return response.data;
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
    }
};