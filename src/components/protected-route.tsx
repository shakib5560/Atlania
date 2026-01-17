"use client";

import { useAuth } from "@/components/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles?: ("admin" | "writer" | "reader")[];
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
    const { user, loading, isAdmin, isWriter } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            if (!user) {
                router.push("/login");
            } else if (allowedRoles) {
                const hasPermission = allowedRoles.some((role) => {
                    if (role === "admin") return isAdmin;
                    if (role === "writer") return isWriter;
                    if (role === "reader") return true;
                    return user.role === role;
                });

                if (!hasPermission) {
                    router.push("/");
                }
            }
        }
    }, [user, loading, allowedRoles, router, isAdmin, isWriter]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
        );
    }

    if (!user) return null;

    if (allowedRoles) {
        const hasPermission = allowedRoles.some((role) => {
            if (role === "admin") return isAdmin;
            if (role === "writer") return isWriter;
            return user.role === role;
        });
        if (!hasPermission) return null;
    }

    return <>{children}</>;
}
