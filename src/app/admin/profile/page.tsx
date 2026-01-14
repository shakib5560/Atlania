"use client"

import { motion } from "framer-motion";
import { User, Shield, BarChart3, FileText, Users, Plus, Settings, LogOut, ChevronRight, TrendingUp, Eye, MessageSquare, Share2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminProfilePage() {
    return (
        <div className="min-h-screen bg-[#030308] pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Header Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
                >
                    {[
                        { label: "Total Views", val: "1.2M", icon: Eye, trend: "+12%" },
                        { label: "Subscribers", val: "24.5K", icon: Users, trend: "+5%" },
                        { label: "Total Posts", val: "482", icon: FileText, trend: "+2%" },
                        { label: "Engagement", val: "8.4%", icon: MessageSquare, trend: "+1.5%" },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-6 space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <stat.icon className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-black text-green-400 bg-green-400/10 px-2 py-1 rounded-full">{stat.trend}</span>
                            </div>
                            <div>
                                <h4 className="text-3xl font-black text-white">{stat.val}</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Admin Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8">
                            <div className="flex flex-col items-center text-center space-y-6">
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                                        <div className="w-full h-full rounded-full bg-[#0b0b14] flex items-center justify-center">
                                            <Shield className="w-10 h-10 text-primary" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white tracking-tight">System Admin</h2>
                                    <p className="text-primary font-bold text-xs tracking-widest uppercase mt-1">Full Access Control</p>
                                </div>
                                <div className="w-full pt-6 border-t border-white/5 space-y-2 text-left">
                                    <button className="w-full h-12 flex items-center justify-between px-4 rounded-xl bg-white/5 text-white text-sm font-bold group hover:bg-primary transition-all">
                                        <span>Dashboard</span>
                                        <BarChart3 className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                                    </button>
                                    <button className="w-full h-12 flex items-center justify-between px-4 rounded-xl text-gray-400 text-sm font-bold hover:bg-white/5 transition-all">
                                        <span>User Management</span>
                                        <Users className="w-4 h-4 opacity-40" />
                                    </button>
                                    <button className="w-full h-12 flex items-center justify-between px-4 rounded-xl text-gray-400 text-sm font-bold hover:bg-white/5 transition-all outline-none">
                                        <span>Site Settings</span>
                                        <Settings className="w-4 h-4 opacity-40" />
                                    </button>
                                </div>
                                <Button variant="destructive" className="w-full h-12 rounded-xl font-bold gap-2">
                                    <LogOut className="w-4 h-4" />
                                    Sign Out
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Admin Main Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-3 space-y-8"
                    >
                        {/* Quick Actions */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <button className="h-32 bg-primary rounded-[2rem] flex flex-col items-center justify-center space-y-4 hover:scale-[1.02] transition-all shadow-[0_20px_50px_rgba(59,130,246,0.2)] group">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-90 transition-transform">
                                    <Plus className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-white font-black uppercase tracking-widest text-[10px]">Create New Post</span>
                            </button>
                            <button className="h-32 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col items-center justify-center space-y-4 hover:bg-white/10 transition-all">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                    <BarChart3 className="w-5 h-5 text-gray-400" />
                                </div>
                                <span className="text-gray-400 font-black uppercase tracking-widest text-[10px]">Analytics Overview</span>
                            </button>
                            <button className="h-32 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col items-center justify-center space-y-4 hover:bg-white/10 transition-all">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-gray-400" />
                                </div>
                                <span className="text-gray-400 font-black uppercase tracking-widest text-[10px]">Moderation Queue</span>
                            </button>
                        </div>

                        {/* Recent Activity Table (Simulated) */}
                        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 space-y-8">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-black text-white tracking-tight">Recent Content Performance</h3>
                                <Button variant="ghost" className="text-primary font-bold hover:bg-primary/10">Export Report</Button>
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex items-center justify-between p-6 rounded-[2rem] hover:bg-white/5 transition-all group">
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 rounded-2xl bg-white/5 group-hover:scale-105 transition-transform" />
                                            <div>
                                                <h4 className="text-white font-bold group-hover:text-primary transition-colors">Understanding Next.js Server Components</h4>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mt-1">PUBLISHED 4 HOURS AGO</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-12 text-right hidden md:flex">
                                            <div>
                                                <p className="text-white font-black">12.4K</p>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Views</p>
                                            </div>
                                            <div>
                                                <p className="text-white font-black">842</p>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Shares</p>
                                            </div>
                                            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                                <ChevronRight className="w-5 h-5 text-white" />
                                            </button>
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
