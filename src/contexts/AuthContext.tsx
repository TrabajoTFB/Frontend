import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

interface User {
    id: number;
    nombre: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (userData: { nombre: string; apellidos:string, user:string, email: string; contraseña: string; confirmPassword: string }) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    login: async () => {},
    register: async () => {},
    logout: () => {},
    isAuthenticated: false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in on component mount
        const currentUser = api.getCurrentUser();
        if (currentUser) {
            setUser(currentUser);
        }
        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const response = await api.login(email, password);
            setUser(response.user);
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

const register = async (userData: {
    nombre: string;
    apellidos: string;
    user: string;
    email: string;
    contraseña: string;
    confirmPassword: string;
}) => {
    try {
        const response = await api.register(userData);
        // Después del registro exitoso, hacemos login automáticamente
        await login(userData.email, userData.contraseña);
        return response;
    } catch (error) {
        console.error('Register error:', error);
        throw error;
    }
};


    const logout = () => {
        api.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider 
            value={{ 
                user, 
                loading,
                login,
                register,
                logout,
                isAuthenticated: !!user
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
