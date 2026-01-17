"use client"

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, MapPin, Send, HelpCircle, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const supportChannels = [
    {
        title: "Email Support",
        description: "Response within 24 hours",
        value: "support@atlania.studio",
        icon: Mail,
        action: "Send Email"
    },
    {
        title: "Live Chat",
        description: "Available 9am - 5pm EST",
        value: "Start a conversation",
        icon: MessageSquare,
        action: "Open Chat"
    },
    {
        title: "Phone",
        description: "Mon-Fri toll-free",
        value: "+1 (800) ATLANIA",
        icon: Phone,
        action: "Call Now"
    }
];

export default function SupportPage() {
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setTimeout(() => setStatus("success"), 2000);
    };

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-20 text-center lg:text-left">
                    <div className="space-y-6 max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-primary font-black uppercase tracking-[0.3em] text-xs bg-primary/10 px-6 py-2 rounded-full inline-block"
                        >
                            Help & Support
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black tracking-tight text-foreground"
                        >
                            Let's connect.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground text-lg md:text-xl font-medium"
                        >
                            Have a technical question or need help with your account? Our team is here to help you 24/7.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 gap-4 lg:w-96"
                    >
                        {[
                            { icon: HelpCircle, label: "FAQ" },
                            { icon: FileText, label: "Docs" },
                            { icon: Users, label: "Community" },
                            { icon: MapPin, label: "Location" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-secondary/30 border border-border p-6 rounded-3xl flex flex-col items-center gap-3 hover:border-primary/50 transition-all cursor-pointer group">
                                <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Support Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-secondary/20 border border-border p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-black/5"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                                    <input
                                        required
                                        className="w-full h-14 bg-background border border-border rounded-2xl px-6 font-bold text-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full h-14 bg-background border border-border rounded-2xl px-6 font-bold text-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                                <select className="w-full h-14 bg-background border border-border rounded-2xl px-6 font-bold text-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all appearance-none cursor-pointer">
                                    <option>Technical Issue</option>
                                    <option>Billing Question</option>
                                    <option>Feature Request</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    className="w-full bg-background border border-border rounded-[1.5rem] p-6 font-medium text-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={status !== "idle"}
                                className="w-full h-16 rounded-2xl font-black text-lg bg-primary text-white hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-primary/20"
                            >
                                {status === "idle" && (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5 ml-3" />
                                    </>
                                )}
                                {status === "sending" && (
                                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                )}
                                {status === "success" && "Message Sent Successfully!"}
                            </Button>
                        </form>
                    </motion.div>

                    {/* Contact Info Channels */}
                    <div className="space-y-6">
                        {supportChannels.map((channel, idx) => {
                            const Icon = channel.icon;
                            return (
                                <motion.div
                                    key={channel.title}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                    className="group p-8 rounded-[2.5rem] border border-border bg-background hover:bg-secondary/10 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 rounded-[1.5rem] bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-black mb-1">{channel.title}</h3>
                                                <p className="text-sm text-muted-foreground font-medium mb-3">{channel.description}</p>
                                                <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{channel.value}</p>
                                            </div>
                                        </div>
                                        <button className="text-xs font-black uppercase tracking-widest text-primary hover:underline mt-2">
                                            {channel.action}
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Social Links Block */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="mt-8 p-10 bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8"
                        >
                            <div>
                                <h4 className="text-xl font-black">Follow our updates</h4>
                                <p className="text-sm opacity-60 font-medium">Join our growing community online.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                {["Twitter", "Discord", "GitHub"].map(platform => (
                                    <button key={platform} className="px-6 py-2.5 rounded-full border border-white/20 dark:border-black/20 text-xs font-black uppercase hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all">
                                        {platform}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
