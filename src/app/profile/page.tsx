"use client"

import { motion } from "framer-motion";
import { User, Mail, Calendar, BookOpen, Bookmark, Clock, Settings, LogOut, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-[#030308] pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column: Sidebar Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-10">
                            <div className="flex flex-col items-center text-center space-y-6">
                                <div className="relative group">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-blue-600 p-1">
                                        <div className="w-full h-full rounded-full bg-[#0b0b14] flex items-center justify-center overflow-hidden">
                                            <User className="w-16 h-16 text-white/20" />
                                        </div>
                                    </div>
                                    <button className="absolute bottom-1 right-1 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center border-4 border-[#0b0b14] hover:scale-110 transition-all">
                                        <Settings className="w-5 h-5" />
                                    </button>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-white tracking-tight">Sheikh Shamiul</h2>
                                    <p className="text-primary font-bold text-sm tracking-widest uppercase mt-1">Reader & Collector</p>
                                </div>

                                <div className="w-full pt-6 border-t border-white/5 space-y-4">
                                    <div className="flex items-center gap-4 text-gray-400 font-medium">
                                        <Mail className="w-5 h-5 text-primary" />
                                        <span className="text-sm">shakib@atlania.studio</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-400 font-medium">
                                        <Calendar className="w-5 h-5 text-primary" />
                                        <span className="text-sm">Joined January 2026</span>
                                    </div>
                                </div>

                                <Button variant="outline" className="w-full h-12 rounded-xl border-white/10 hover:bg-white/5 text-gray-400 font-bold gap-2">
                                    <LogOut className="w-4 h-4" />
                                    Sign Out
                                </Button>
                            </div>
                        </div>

                        {/* Stats Quick View */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 text-center">
                                <p className="text-2xl font-black text-white">42</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-primary mt-1">Read</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 text-center">
                                <p className="text-2xl font-black text-white">12</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-primary mt-1">Saved</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Main Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        {/* Reading History */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between px-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-primary" />
                                    Recent Reading
                                </h3>
                                <Link href="#" className="text-sm font-bold text-primary flex items-center gap-2 group">
                                    View All
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="grid gap-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-6 flex items-center gap-6 group hover:bg-white/[0.07] transition-all cursor-pointer">
                                        <div className="w-20 h-20 rounded-2xl bg-white/5 flex-shrink-0" />
                                        <div className="flex-1 space-y-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Technology</span>
                                                <span className="text-[10px] font-bold text-gray-600 tracking-widest">5 MIN READ</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-white line-clamp-1 group-hover:text-primary transition-colors">The Future of AI in Modern Software Architecture</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Saved Articles */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between px-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                    <Bookmark className="w-5 h-5 text-primary" />
                                    Saved for Later
                                </h3>
                                <Link href="#" className="text-sm font-bold text-primary flex items-center gap-2 group">
                                    Manage
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[1, 2].map((i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 space-y-6 group hover:border-primary/30 transition-all cursor-pointer">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                            <BookOpen className="w-6 h-6 text-primary" />
                                        </div>
                                        <h4 className="text-xl font-bold text-white leading-tight">Mastering TypeScript: Advanced Patterns for 2026</h4>
                                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-xs font-bold text-gray-500">SAVED 2 DAYS AGO</span>
                                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                                <Bookmark className="w-4 h-4 text-primary fill-current" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
