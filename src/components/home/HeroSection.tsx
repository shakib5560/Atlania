"use client"

import { Article } from "@/lib/mockData";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
    featuredArticle: Article;
}

export function HeroSection({ featuredArticle }: HeroSectionProps) {
    return (
        <section className="py-12 md:py-20 relative overflow-hidden">
            {/* Background Floating Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        rotate: [0, 20, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50"
                />
                <motion.div
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 100, 0],
                        rotate: [0, -10, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl opacity-50"
                />
            </div>

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">
                            Tech<span className="text-primary">.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground font-medium mb-2"
                    >
                        <span>{featuredArticle.author.name}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span>{featuredArticle.date}</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-3xl md:text-5xl font-bold leading-tight text-balance"
                    >
                        {featuredArticle.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg text-muted-foreground md:max-w-md leading-relaxed"
                    >
                        {featuredArticle.excerpt}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center gap-4 mt-4"
                    >
                        <Button size="lg" className="rounded-full px-8 text-base">
                            Read Article <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <span className="text-lg font-bold text-muted-foreground font-mono">2<span className="text-gray-200 dark:text-gray-700">/6</span></span>
                    </motion.div>
                </div>

                {/* Right Image */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[4/3] md:aspect-square lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl z-10"
                    >
                        <Image
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Decorative elements */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Float Element example */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, x: -20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        whileHover={{ y: -5 }}
                        className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl hidden md:block max-w-[200px] z-20 border border-border"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold text-xs">AI</div>
                            <span className="text-xs font-bold text-card-foreground">Trending</span>
                        </div>
                        <p className="text-xs font-medium text-muted-foreground">Artificial General Intelligence is closer than we think.</p>
                    </motion.div>

                    {/* Decorative Shape */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-12 -right-12 z-0 opacity-20 dark:opacity-10 text-primary"
                    >
                        <Sparkles className="w-32 h-32" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
