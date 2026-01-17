"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

type Role = "admin" | "writer" | "reader";

interface User {
    id: number;
    email: string;
    full_name: string;
    avatar: string;
    role: Role;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (token: string) => Promise<void>;
    logout: () => void;
    isAdmin: boolean;
    isWriter: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const fetchUser = async () => {
        try {
            const userData = await api.get("/auth/me");
            setUser(userData);
        } catch (error) {
            localStorage.removeItem("token");
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetchUser();
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (token: string) => {
        localStorage.setItem("token", token);
        await fetchUser();
        router.push("/");
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        router.push("/login");
    };

    const isAdmin = user?.role === "admin";
    const isWriter = user?.role === "writer" || user?.role === "admin";

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, isAdmin, isWriter }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
