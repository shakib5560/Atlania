"use client"

import { ModeToggle } from "@/components/ui/mode-toggle";
import { User, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdminHeader() {
    return (
        <header className="h-16 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-6">
            <div className="flex items-center gap-4 flex-1">
                <div className="relative w-full max-w-md hidden md:block">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="search"
                        placeholder="Search posts..."
                        className="w-full bg-secondary/50 border border-border rounded-md py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
                </Button>
                <div className="h-8 w-px bg-border mx-2" />
                <ModeToggle />
                <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                </Button>
            </div>
        </header>
    );
}
