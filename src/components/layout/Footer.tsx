"use client"
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Github, Mail, MapPin, Phone, ArrowUp, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";

export function Footer() {
    const [email, setEmail] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <footer className="relative w-full overflow-hidden transition-colors duration-500 font-sans border-t border-black/5 dark:border-white/5 bg-white dark:bg-[#030308]">
            {/* 1. Newsletter Header Section */}
            <div className="pt-24 pb-16 text-center px-4 transition-colors duration-500">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto space-y-6"
                >
                    <span className="text-primary font-bold tracking-widest text-xs uppercase bg-primary/10 px-4 py-1.5 rounded-full">
                        Stay Updated
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                        Subscribe to our newsletter
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                        Sign up today and get the latest tech insights, design patterns, and blog updates delivered straight to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-3 mt-10 bg-black/5 dark:bg-white/5 p-2 rounded-2xl border border-black/10 dark:border-white/10 max-w-lg mx-auto focus-within:ring-4 ring-primary/20 transition-all backdrop-blur-sm">
                        <div className="flex items-center gap-3 pl-4 flex-1 w-full">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder:text-gray-500 text-sm w-full py-2.5 font-medium"
                            />
                        </div>
                        <Button className="w-full sm:w-auto h-12 rounded-xl px-10 bg-primary text-white hover:opacity-90 active:scale-95 transition-all font-bold">
                            Get started
                        </Button>
                    </div>
                </motion.div>
            </div>


            {/* 3. Main Footer Section */}
            <div className="pt-16 pb-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-24"
                    >
                        {/* Company / Brand Column */}
                        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
                            <Link href="/" className="flex items-center gap-2 group w-fit">
                                <span className="text-3xl font-black tracking-tighter text-gray-900 dark:text-white">ATLANIA</span>
                                <span className="w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-150 transition-transform duration-500" />
                            </Link>
                            <div className="space-y-5 text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed max-w-sm">
                                <p className="flex items-start gap-4 hover:text-gray-900 dark:hover:text-white transition-colors cursor-default">
                                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    123 Innovation Way, Suite 400 <br /> Silicon Valley, CA 94025
                                </p>
                                <p className="flex items-center gap-4 hover:text-gray-900 dark:hover:text-white transition-colors cursor-default">
                                    <Phone className="w-5 h-5 text-primary shrink-0" />
                                    +1 (800) ATLANIA
                                </p>
                                <p className="flex items-center gap-4 hover:text-gray-900 dark:hover:text-white transition-colors cursor-default">
                                    <Mail className="w-5 h-5 text-primary shrink-0" />
                                    hello@atlania.studio
                                </p>
                            </div>
                        </motion.div>

                        {/* Link Columns */}
                        {[
                            { title: "Explore", items: ["Home", "Features", "Categories", "Pricing", "About us"] },
                            { title: "Resources", items: ["Documentation", "Community", "Support", "FAQ", "Blog"] },
                            { title: "Legal", items: ["Terms of service", "Privacy policy", "Cookie policy", "Security"] },
                            { title: "Connect", items: ["Facebook", "Instagram", "LinkedIn", "Twitter", "Github"] }
                        ].map((column) => (
                            <motion.div key={column.title} variants={itemVariants} className="space-y-8">
                                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900/40 dark:text-white/40">{column.title}</h4>
                                <ul className="space-y-5">
                                    {column.items.map((item) => (
                                        <li key={item}>
                                            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-all text-sm font-semibold flex items-center group">
                                                <span className="w-0 group-hover:w-4 h-[2px] bg-primary mr-0 group-hover:mr-3 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom Bar */}
                    <div className="pt-12 border-t border-black/[0.05] dark:border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="space-y-2 text-center md:text-left">
                            <p className="text-xs text-gray-400 dark:text-gray-500 font-bold tracking-wide">
                                &copy; {new Date().getFullYear()} ATLANIA STUDIO. ALL RIGHTS RESERVED.
                            </p>
                            <p className="text-[10px] text-gray-500 dark:text-gray-600 font-black tracking-widest uppercase">
                                PROUDLY MADE BY <Link href="https://shakibcoder.netlify.app/" target="_blank" className="text-primary hover:text-gray-900 dark:hover:text-white transition-colors">Sheikh Shamiul Shakib</Link>
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            {[Facebook, Twitter, Instagram, Github].map((Icon, idx) => (
                                <Link key={idx} href="#" className="w-10 h-10 flex items-center justify-center bg-black/5 dark:bg-white/5 hover:bg-primary rounded-full transition-all duration-300 group border border-black/10 dark:border-white/10">
                                    <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-white group-hover:scale-110 transition-all fill-current" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <AnimatePresence>
                {isScrolled && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="fixed bottom-10 right-10 w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-[0_20px_40px_rgba(59,130,246,0.4)] hover:shadow-primary/60 transition-all z-[99] border border-black/10 dark:border-white/10 backdrop-blur-md"
                    >
                        <ArrowUp className="w-7 h-7" />
                    </motion.button>
                )}
            </AnimatePresence>

            <style jsx global>{`
                @keyframes gradient-x {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 15s ease infinite;
                }
                .animate-spin-slow {
                    animation: spin 60s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </footer>
    );
}
