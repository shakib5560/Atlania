"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, FolderTree, Settings, LogOut, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/posts", label: "Posts", icon: FileText },
    { href: "/admin/categories", label: "Categories", icon: FolderTree },
    { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-background border-r border-border h-screen sticky top-0 hidden md:flex flex-col">
            <div className="p-6">
                <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
                    Atlania<span className="text-primary">.</span>
                </Link>
                <div className="text-xs text-muted-foreground mt-1 font-medium px-1">ADMIN PANEL</div>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors group",
                                isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                            )}
                        >
                            <item.icon className={cn("w-4 h-4", isActive ? "" : "group-hover:text-primary")} />
                            {item.label}
                            {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-border">
                <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors">
                    <LogOut className="w-4 h-4" />
                    Logout
                </button>
            </div>
        </aside>
    );
}
