"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Globe, BookOpen, Target, Heart, Award } from "lucide-react";

const stats = [
    { label: "Monthly Readers", value: "2M+", icon: Users },
    { label: "Premium Articles", value: "500+", icon: BookOpen },
    { label: "Global Writers", value: "50+", icon: Globe },
    { label: "Expert Awards", value: "12", icon: Award },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Hero section */}
                <div className="text-center space-y-8 mb-32">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-primary font-black uppercase tracking-[0.3em] text-xs bg-primary/10 px-8 py-3 rounded-full inline-block"
                    >
                        Our Story
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-black tracking-tight text-foreground leading-[0.9]"
                    >
                        We are <span className="text-primary">Atlania.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-xl md:text-3xl font-medium max-w-4xl mx-auto leading-relaxed"
                    >
                        A diverse team of visionaries, writers, and designers dedicated to bringing you the most forward-thinking perspectives on the digital frontier.
                    </motion.p>
                </div>

                {/* Main Content & Image */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[4rem] overflow-hidden group shadow-2xl shadow-black/20"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                            alt="Team Collaboration"
                            width={1200}
                            height={1200}
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-10 left-10 text-white translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                    <Heart className="w-5 h-5 fill-current" />
                                </div>
                                <span className="text-xl font-black">Built with Passion</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Target className="w-8 h-8" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Our Mission</h2>
                            <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
                                We believe in the power of digital narrative to shape the future. Our platform is more than just a blog—it's a launchpad for ideas that matter, delivered through an experience that feels as premium as the content itself.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 rounded-[2.5rem] bg-secondary/20 border border-border group hover:border-primary/50 transition-all duration-300"
                                >
                                    <div className="text-4xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">{stat.value}</div>
                                    <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-black dark:bg-white text-white dark:text-black rounded-[5rem] p-16 md:p-32 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-primary rounded-full animate-spin-slow" />
                    </div>

                    <div className="text-center space-y-12 relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Our Values</h2>
                        <div className="grid md:grid-cols-3 gap-12 pt-12">
                            {[
                                { title: "Integrity", text: "We prioritize authentic, well-researched, and honest storytelling." },
                                { title: "Innovation", text: "Pushing the boundaries of how content is consumed and shared." },
                                { title: "Inclusion", text: "A global community where every voice can find its place." }
                            ].map((value) => (
                                <div key={value.title} className="space-y-4">
                                    <div className="text-2xl font-black text-primary uppercase tracking-[0.2em]">{value.title}</div>
                                    <p className="opacity-70 font-medium text-lg">{value.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
