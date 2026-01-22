"use client"

import * as React from "react"
import Link from "next/link";
import { Facebook, Twitter, Instagram, Menu, X, User, UserCog } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ReadingProgressBar } from "@/components/ui/ReadingProgressBar";
import { usePathname } from "next/navigation";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isArticlePage = pathname.startsWith("/article/");

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/blog", label: "Blog" },
        { href: "/categories", label: "Categories" },
        { href: "/feature", label: "Feature" },
        { href: "/about", label: "About" },
    ];

    return (
        <header className={`w-full py-6 md:py-8 sticky top-0 z-50 transition-all border-b border-border/40 ${isOpen ? 'bg-background' : 'bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60'}`}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-50">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>

                {/* Logo */}
                <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tight text-foreground absolute left-1/2 -translate-x-1/2 z-50">
                    Atlania<span className="text-primary">.</span>
                </Link>

                {/* right side icons */}
                <div className="flex items-center gap-2 z-50">
                    <ModeToggle />
                    <div className="hidden md:flex items-center gap-2">
                        <div className="hidden md:flex items-center gap-4 border-l border-border/40 ml-4 pl-4">
                            <Link href="/login" className="text-sm font-bold text-foreground hover:text-primary transition-colors">Sign In</Link>
                            <Link href="/profile" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all">
                                <User className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-background z-40 md:hidden pt-32 px-4 flex flex-col"
                    >
                        <nav className="flex flex-col gap-6 text-xl font-bold">
                            {menuItems.map((item, idx) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block py-2 border-b border-border hover:text-primary"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="mt-auto pb-10 space-y-4">
                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className="w-full h-14 rounded-2xl bg-secondary flex items-center justify-center text-foreground font-bold"
                            >
                                Sign In
                            </Link>
                            <div className="flex gap-4">
                                <Link
                                    href="/profile"
                                    onClick={() => setIsOpen(false)}
                                    className="flex-1 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 text-white font-bold"
                                >
                                    <User className="w-5 h-5" /> Profile
                                </Link>
                                <Link
                                    href="/admin/profile"
                                    onClick={() => setIsOpen(false)}
                                    className="flex-1 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 text-white font-bold"
                                >
                                    <UserCog className="w-5 h-5" /> Admin
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {isArticlePage && <ReadingProgressBar />}
        </header>
    );
}
