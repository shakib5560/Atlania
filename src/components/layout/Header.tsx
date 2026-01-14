"use client"

import * as React from "react"
import Link from "next/link";
import { Facebook, Twitter, Instagram, Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

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
                        <Link href="#" className="p-2 hover:bg-secondary rounded-full transition-colors text-foreground">
                            <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                        </Link>
                        <Link href="#" className="p-2 hover:bg-secondary rounded-full transition-colors text-foreground">
                            <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                        </Link>
                        <Link href="#" className="p-2 hover:bg-secondary rounded-full transition-colors text-foreground">
                            <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                        </Link>
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

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-10 flex gap-6 justify-center"
                        >
                            <Link href="#" className="p-3 bg-secondary rounded-full text-foreground"><Facebook /></Link>
                            <Link href="#" className="p-3 bg-secondary rounded-full text-foreground"><Twitter /></Link>
                            <Link href="#" className="p-3 bg-secondary rounded-full text-foreground"><Instagram /></Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
