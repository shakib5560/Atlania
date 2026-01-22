"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Lock, User, ArrowRight, Github, Chrome } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/components/auth-context";
import { api } from "@/lib/api";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();

    return (
        <div className="min-h-screen bg-[#030308] flex items-center justify-center px-4 py-20 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                    <div className="text-center space-y-4 mb-10">
                        <Link href="/" className="inline-block">
                            <div className="text-3xl font-black tracking-tighter text-white">ATLANIA<span className="text-primary">.</span></div>
                        </Link>
                        <h2 className="text-3xl font-bold text-white tracking-tight">Create Account</h2>
                        <p className="text-gray-400 font-medium">Join our community of knowledge seekers</p>
                    </div>

                    <form className="space-y-6" onSubmit={async (e) => {
                        e.preventDefault();
                        setError("");
                        setIsLoading(true);
                        try {
                            // Register
                            await api.post("/auth/register", {
                                email,
                                password,
                                full_name: name
                            });

                            // Auto Login
                            const formData = new FormData();
                            formData.append('username', email);
                            formData.append('password', password);

                            const response = await api.post("/auth/login", formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                }
                            }) as any;

                            await login(response.access_token);
                        } catch (err: any) {
                            console.error(err);
                            setError(err.response?.data?.detail || "Failed to create account. Please try again.");
                        } finally {
                            setIsLoading(false);
                        }
                    }}>
                        {error && (
                            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium">
                                {error}
                            </div>
                        )}
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    required
                                    className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-gray-600 outline-none focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@company.com"
                                    required
                                    className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-gray-600 outline-none focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-gray-600 outline-none focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-14 rounded-2xl bg-primary text-white font-bold text-lg hover:opacity-90 active:scale-95 transition-all shadow-[0_10px_30px_rgba(59,130,246,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Creating Account..." : "Sign Up"}
                        </Button>
                    </form>

                    <p className="mt-12 text-center text-sm font-medium text-gray-500">
                        Already have an account? <Link href="/login" className="text-primary font-bold hover:text-white transition-colors">Sign in</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
