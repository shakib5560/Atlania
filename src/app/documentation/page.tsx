"use client"

import { motion } from "framer-motion";
import { Book, Code, Rocket, Terminal, Search, ChevronRight } from "lucide-react";

const mainGuides = [
    { title: "Getting Started", description: "Learn the basics of Atlania and set up your first blog in minutes.", icon: Rocket },
    { title: "Writers Guide", description: "Optimize your writing workflow with our powerful markdown editor.", icon: Book },
    { title: "Developer API", description: "Integrate Atlania into your existing applications with our robust API.", icon: Code },
    { title: "CLI Tools", description: "Manage your content from the command line with our official CLI.", icon: Terminal },
];

export default function DocumentationPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Hero Section */}
                <div className="text-center space-y-8 mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-black uppercase tracking-[0.3em] text-xs bg-primary/10 px-6 py-2 rounded-full inline-block"
                    >
                        Developer Docs
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-7xl font-black tracking-tight text-foreground"
                    >
                        Built for builders.
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative max-w-2xl mx-auto mt-12"
                    >
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search the documentation..."
                            className="w-full h-18 bg-secondary/30 border border-border rounded-[1.5rem] pl-16 pr-8 font-bold text-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-xl"
                        />
                    </motion.div>
                </div>

                {/* Main Guides Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {mainGuides.map((guide, idx) => {
                        const Icon = guide.icon;
                        return (
                            <motion.div
                                key={guide.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                                className="group p-10 rounded-[3rem] bg-secondary/20 border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer"
                            >
                                <div className="flex items-start gap-8">
                                    <div className="w-20 h-20 rounded-[2rem] bg-background border flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <Icon className="w-10 h-10" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-black mb-3">{guide.title}</h3>
                                        <p className="text-muted-foreground font-medium mb-6 leading-relaxed">
                                            {guide.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                            Explore Guide <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="p-16 rounded-[4rem] bg-black text-white flex flex-col items-center text-center gap-8 shadow-2xl shadow-black/40 overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -mr-48 -mt-48" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] -ml-48 -mb-48" />

                    <h2 className="text-4xl font-black z-10">Can't find what you're looking for?</h2>
                    <p className="text-white/60 font-medium max-w-xl z-10 leading-relaxed text-lg">
                        Join our developer community on Discord or reach out to our team via the API support channel.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 z-10">
                        <button className="h-16 px-10 bg-white text-black rounded-2xl font-black text-lg hover:bg-white/90 transition-all">Join Discord</button>
                        <button className="h-16 px-10 bg-white/10 text-white border border-white/20 rounded-2xl font-black text-lg hover:bg-white/20 transition-all">Open API Reference</button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
