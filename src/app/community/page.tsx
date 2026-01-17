"use client"

import { motion } from "framer-motion";
import { MessageCircle, Users, Github, Heart, Star, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
    { label: "Active Members", value: "25k+", icon: Users },
    { label: "Github Stars", value: "1.2k", icon: Star },
    { label: "Articles Written", value: "120k", icon: Heart },
    { label: "Daily Sessions", value: "8k", icon: Zap },
];

export default function CommunityPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Hero */}
                <div className="text-center space-y-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6 border border-primary/20 shadow-2xl shadow-primary/20"
                    >
                        <Users className="w-10 h-10" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tight text-foreground"
                    >
                        Better together.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed"
                    >
                        Join tens of thousands of creators and developers sharing insights and building the future of digital storytelling.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
                    >
                        <Button className="h-16 rounded-2xl px-12 bg-primary text-white font-black text-xl hover:scale-105 transition-all shadow-xl shadow-primary/20">
                            Join Community
                        </Button>
                        <Button variant="outline" className="h-16 rounded-2xl px-12 font-black text-xl bg-background border-border hover:bg-secondary">
                            Explore Forums
                        </Button>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
                    {stats.map((item, idx) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                            className="bg-secondary/10 border border-border p-8 rounded-[2.5rem] text-center space-y-2 hover:bg-secondary/20 transition-all cursor-default"
                        >
                            <item.icon className="w-8 h-8 text-primary mx-auto mb-4 opacity-70" />
                            <div className="text-4xl font-black text-foreground">{item.value}</div>
                            <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">{item.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Platforms Cards */}
                <div className="grid lg:grid-cols-3 gap-8 mb-32">
                    {[
                        {
                            name: "Discord Server",
                            description: "Real-time discussions, help, and networking with other Atlania users.",
                            icon: MessageCircle,
                            color: "indigo"
                        },
                        {
                            name: "GitHub Discussions",
                            description: "Propose new features, report bugs, and contribute to the platform.",
                            icon: Github,
                            color: "black"
                        },
                        {
                            name: "Ambassador Program",
                            description: "Get recognized for your contributions and unlock exclusive perks.",
                            icon: Award,
                            color: "primary"
                        }
                    ].map((platform, idx) => {
                        const Icon = platform.icon;
                        return (
                            <motion.div
                                key={platform.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                                className="p-12 rounded-[3.5rem] border border-border bg-card/50 flex flex-col items-center text-center space-y-6 hover:shadow-2xl hover:shadow-black/5 transition-all group"
                            >
                                <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center text-foreground group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                    <Icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-black">{platform.name}</h3>
                                <p className="text-muted-foreground font-medium leading-relaxed">
                                    {platform.description}
                                </p>
                                <Button variant="link" className="text-primary font-black uppercase tracking-widest text-xs pt-4 group-hover:translate-x-2 transition-transform">
                                    Learn More
                                </Button>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Testimonial Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="max-w-4xl mx-auto p-16 rounded-[4rem] bg-secondary/10 border border-primary/20 relative"
                >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white p-4 rounded-full shadow-xl">
                        <Heart className="w-8 h-8 fill-current" />
                    </div>
                    <blockquote className="text-3xl md:text-4xl font-black text-center text-foreground leading-tight italic">
                        "Atlania isn't just a blogging tool, it's a vibrant ecosystem where I've found my voice and a community that supports it every step of the way."
                    </blockquote>
                    <div className="mt-12 text-center">
                        <div className="font-black text-xl">Elena Rodriguez</div>
                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Tech Storyteller & Mentor</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
