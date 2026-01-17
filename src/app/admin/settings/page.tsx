"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Settings,
    Globe,
    Shield,
    Palette,
    Share2,
    Save,
    Mail,
    Image as ImageIcon,
    Layout
} from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'seo', label: 'SEO & Meta', icon: Globe },
    { id: 'social', label: 'Social Media', icon: Share2 },
    { id: 'security', label: 'Security', icon: Shield },
];

export default function AdminSettingsPage() {
    const [activeTab, setActiveTab] = useState('general');
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => setIsSaving(false), 1500);
    };

    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Settings</h1>
                    <p className="text-muted-foreground mt-2 font-medium">Configure your platform preferences and integrations.</p>
                </div>
                <Button
                    onClick={handleSave}
                    className="rounded-2xl px-8 h-12 font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all bg-primary"
                    disabled={isSaving}
                >
                    {isSaving ? (
                        <span className="flex items-center">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                            Saving...
                        </span>
                    ) : (
                        <>
                            <Save className="w-5 h-5 mr-3" />
                            Save Changes
                        </>
                    )}
                </Button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Sidebar Tabs */}
                <div className="w-full lg:w-64 bg-background rounded-3xl border border-border p-2 space-y-1">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all
                                    ${isActive
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                    }
                                `}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-muted-foreground"}`} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Main Content Area */}
                <div className="flex-1 w-full min-h-[600px] bg-background rounded-[2.5rem] border border-border shadow-2xl shadow-black/5 p-8 md:p-12 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        {activeTab === 'general' && (
                            <motion.div
                                key="general"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <Settings className="w-6 h-6 text-primary" />
                                        </div>
                                        General Information
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Site Title</label>
                                            <input
                                                type="text"
                                                defaultValue="Atlania Studio"
                                                className="w-full h-14 bg-secondary/30 border border-border rounded-2xl px-6 font-bold text-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Support Email</label>
                                            <input
                                                type="email"
                                                defaultValue="hello@atlania.com"
                                                className="w-full h-14 bg-secondary/30 border border-border rounded-2xl px-6 font-bold text-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-3 md:col-span-2">
                                            <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Site Description</label>
                                            <textarea
                                                rows={4}
                                                defaultValue="A premium platform for modern digital storytelling and exploration."
                                                className="w-full bg-secondary/30 border border-border rounded-[1.5rem] p-6 font-medium text-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-border space-y-6">
                                    <h3 className="text-2xl font-black">Branding</h3>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Site Logo</label>
                                            <div className="relative group cursor-pointer">
                                                <div className="w-full h-40 bg-secondary/30 border-2 border-dashed border-border rounded-[1.5rem] flex flex-col items-center justify-center gap-3 group-hover:bg-secondary/50 transition-all">
                                                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-muted-foreground group-hover:text-primary transition-all">
                                                        <ImageIcon className="w-6 h-6" />
                                                    </div>
                                                    <span className="text-sm font-bold text-muted-foreground">Click to upload or drag logo</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Favicon</label>
                                            <div className="relative group cursor-pointer">
                                                <div className="w-full h-40 bg-secondary/30 border-2 border-dashed border-border rounded-[1.5rem] flex flex-col items-center justify-center gap-3 group-hover:bg-secondary/50 transition-all">
                                                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-muted-foreground group-hover:text-primary transition-all">
                                                        <Layout className="w-6 h-6" />
                                                    </div>
                                                    <span className="text-sm font-bold text-muted-foreground">Upload 32x32 Favicon</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'appearance' && (
                            <motion.div
                                key="appearance"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black">Visual Identity</h3>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Primary Color</label>
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-2xl bg-primary shadow-lg shadow-primary/20" />
                                                <input
                                                    type="text"
                                                    defaultValue="#3b82f6"
                                                    className="flex-1 h-14 bg-secondary/30 border border-border rounded-2xl px-6 font-bold text-foreground focus:outline-none transition-all uppercase"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Dark Mode</label>
                                            <div className="h-14 flex items-center justify-between px-6 bg-secondary/30 border border-border rounded-2xl">
                                                <span className="font-bold">Enable Auto Dark Mode</span>
                                                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Placeholder for other tabs to keep it clean */}
                        {['seo', 'social', 'security'].includes(activeTab) && (
                            <motion.div
                                key="other"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col items-center justify-center h-full py-20 text-center space-y-6"
                            >
                                <div className="w-24 h-24 rounded-full bg-secondary/50 flex items-center justify-center">
                                    <Settings className="w-10 h-10 text-muted-foreground animate-pulse" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black capitalize">{activeTab} Settings</h3>
                                    <p className="text-muted-foreground max-w-xs mx-auto mt-2">These settings are currently being fine-tuned for your platform.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
