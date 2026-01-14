import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function Header() {
    return (
        <header className="w-full py-6 md:py-8 bg-background sticky top-0 z-50 transition-all border-b border-border/40 backdrop-blur-sm bg-background/80 supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
                    <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                    <Link href="/categories" className="hover:text-primary transition-colors">Categories</Link>
                    <Link href="/feature" className="hover:text-primary transition-colors">Feature</Link>
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                </nav>

                {/* Logo */}
                <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tight text-foreground absolute left-1/2 -translate-x-1/2">
                    Atlania<span className="text-primary">.</span>
                </Link>

                {/* Social Icons & Theme Toggle */}
                <div className="flex items-center gap-2">
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
        </header>
    );
}
