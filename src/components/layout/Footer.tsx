"use client"
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollFade } from "@/components/ui/scroll-fade";

export function Footer() {
    return (
        <footer className="bg-[#1A1A2E] text-white pt-20 pb-10 mt-20">
            <div className="container mx-auto px-4">
                {/* Newsletter Section */}
                <ScrollFade direction="up" duration={0.8}>
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to our <span className="underline decoration-primary decoration-4 underline-offset-4">newsletter</span></h2>
                        <p className="text-gray-400 mb-8 text-sm">Get the latest updates and insights directly to your inbox.</p>

                        <div className="flex items-center bg-white/10 rounded-full p-2 pl-6 backdrop-blur-sm border border-white/10 focus-within:bg-white/15 transition-all">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="bg-transparent border-none outline-none text-white placeholder:text-gray-400 flex-1 text-sm w-full"
                            />
                            <Button size="icon" className="rounded-full w-10 h-10 shrink-0 bg-white text-black hover:bg-gray-200">
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </ScrollFade>

                <div className="border-t border-white/10 my-10" />

                <ScrollFade delay={0.2}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-2xl font-bold">
                            Atlania<span className="text-primary">.</span>
                        </div>

                        <nav className="flex gap-6 text-sm text-gray-400">
                            <Link href="#" className="hover:text-white transition-colors">About</Link>
                            <Link href="#" className="hover:text-white transition-colors">Features</Link>
                            <Link href="#" className="hover:text-white transition-colors">Categories</Link>
                            <Link href="#" className="hover:text-white transition-colors">Support</Link>
                        </nav>

                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10 text-xs text-gray-500">
                        <p>
                            &copy; {new Date().getFullYear()} Atlania. Developed by <Link href="https://shakibcoder.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Sheikh Shamiul Shakib</Link>
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
                            <Link href="#" className="hover:text-gray-300">Terms & Conditions</Link>
                        </div>
                    </div>
                </ScrollFade>
            </div>
        </footer>
    );
}
