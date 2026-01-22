"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { User, UserRole } from "@/types";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Shield, User as UserIcon, Loader2, Check, UserCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/auth-context";

export default function UserManagementPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const { user: currentUser } = useAuth();

    const fetchUsers = async () => {
        try {
            const data = await api.get("/admin/users");
            setUsers(data);
        } catch (error) {
            console.error("Failed to fetch users:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleRoleChange = async (userId: number, newRole: UserRole) => {
        try {
            await api.put(`/admin/users/${userId}/role`, { role: newRole });
            fetchUsers();
        } catch (error) {
            console.error("Failed to update role:", error);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center p-20">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
                    <p className="text-muted-foreground">Manage user roles and permissions.</p>
                </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Joined</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((u) => (
                            <TableRow key={u.id} className="hover:bg-muted/30 transition-colors">
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground overflow-hidden">
                                            {u.avatar ? (
                                                <img src={u.avatar} alt={u.full_name} className="w-full h-full object-cover" />
                                            ) : (
                                                <UserCircle className="w-5 h-5 opacity-50" />
                                            )}
                                        </div>
                                        <div className="font-medium">{u.full_name}</div>
                                    </div>
                                </TableCell>
                                <TableCell className="text-muted-foreground">{u.email}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={u.role === 'admin' ? 'default' : u.role === 'writer' ? 'secondary' : 'outline'}
                                        className="capitalize rounded-full px-3 py-0.5"
                                    >
                                        {u.role}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                    {new Date(u.created_at).toLocaleDateString()}
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="rounded-full">
                                                <MoreHorizontal className="w-4 h-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-48 rounded-xl p-2">
                                            <DropdownMenuLabel className="text-xs font-bold text-muted-foreground uppercase px-2 py-1.5 tracking-widest">Change Role</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem
                                                onClick={() => handleRoleChange(u.id, "admin")}
                                                className="rounded-lg gap-2 cursor-pointer"
                                            >
                                                <Shield className="w-4 h-4 text-primary" /> Admin {u.role === 'admin' && <Check className="w-3 h-3 ml-auto" />}
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                onClick={() => handleRoleChange(u.id, "writer")}
                                                className="rounded-lg gap-2 cursor-pointer"
                                            >
                                                <UserCircle className="w-4 h-4 text-blue-500" /> Writer {u.role === 'writer' && <Check className="w-3 h-3 ml-auto" />}
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                onClick={() => handleRoleChange(u.id, "reader")}
                                                className="rounded-lg gap-2 cursor-pointer"
                                            >
                                                <UserIcon className="w-4 h-4 text-gray-500" /> Reader {u.role === 'reader' && <Check className="w-3 h-3 ml-auto" />}
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="rounded-lg gap-2 text-red-500 focus:text-red-500 cursor-pointer">
                                                Block User
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div >
    );
}
