"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Lock, FileText, Globe } from "lucide-react";

const links = [
    { label: "Terms of Service", href: "/legal/terms", icon: FileText },
    { label: "Privacy Policy", href: "/legal/privacy", icon: Lock },
    { label: "Cookie Policy", href: "/legal/cookie", icon: Shield },
    { label: "Security", href: "/legal/security", icon: Globe },
];

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Legal Nav Sidebar */}
                    <div className="w-full lg:w-72 sticky top-32 space-y-2">
                        <div className="px-4 py-2 mb-4">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">Legal Center</h2>
                        </div>
                        {links.map((link) => {
                            const Icon = link.icon;
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`
                                        flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all
                                        ${isActive
                                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                        }
                                    `}
                                >
                                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-primary'}`} />
                                    {link.label}
                                </Link>
                            );
                        })}

                        <div className="mt-12 p-8 rounded-[2rem] bg-secondary/20 border border-border">
                            <h3 className="text-sm font-black mb-2">Need help?</h3>
                            <p className="text-xs text-muted-foreground font-medium mb-6">Contact our legal team for specific questions regarding policies.</p>
                            <Link href="/support" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                                Contact Support
                            </Link>
                        </div>
                    </div>

                    {/* Legal Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex-1 w-full bg-background rounded-[3rem] border border-border p-8 md:p-16 shadow-2xl shadow-black/5 prose prose-slate dark:prose-invert max-w-none"
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
