import { FileText, Users, Eye, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

const initialStats = [
    { label: "Total Users", value: "...", icon: Users, change: "0%", trend: "neutral", key: "users" },
    { label: "Published Posts", value: "...", icon: FileText, change: "0%", trend: "neutral", key: "posts" },
    { label: "Pending Reviews", value: "...", icon: Eye, change: "0%", trend: "neutral", key: "pending" },
];

export default function AdminDashboard() {
    const [stats, setStats] = useState(initialStats);
    const [recentActivity, setRecentActivity] = useState<any[]>([]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [users, posts, pending] = (await Promise.all([
                    api.get("/admin/users"),
                    api.get("/posts"),
                    api.get("/admin/posts/pending")
                ])) as unknown as [any[], any[], any[]];

                setStats([
                    { label: "Total Users", value: users.length.toString(), icon: Users, change: "+", trend: "up", key: "users" },
                    { label: "Published Posts", value: posts.length.toString(), icon: FileText, change: "+", trend: "up", key: "posts" },
                    { label: "Pending Reviews", value: pending.length.toString(), icon: Eye, change: pending.length > 0 ? "!" : "0", trend: pending.length > 0 ? "down" : "neutral", key: "pending" },
                ]);

                // Mock recent activity based on pending posts for now
                setRecentActivity(pending.slice(0, 5).map((p: any) => ({
                    id: p.id,
                    message: `New post pending: "${p.title}"`,
                    time: new Date(p.created_at).toLocaleDateString(),
                    initial: p.author?.full_name?.[0] || "U"
                })));

            } catch (error) {
                console.error("Failed to fetch admin stats", error);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
                <p className="text-muted-foreground mt-2">Welcome back! Here's what's happening with your blog today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-background p-6 rounded-xl border border-border shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <stat.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className={cn(
                                "flex items-center gap-1 text-sm font-medium",
                                stat.trend === "up" ? "text-emerald-500" : stat.trend === "down" ? "text-rose-500" : "text-gray-500"
                            )}>
                                {stat.change}
                                {stat.trend === "up" && <ArrowUpRight className="w-4 h-4" />}
                                {stat.trend === "down" && <ArrowDownRight className="w-4 h-4" />}
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <div className="bg-background rounded-xl border border-border shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-border flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Pending Approvals</h2>
                        <button className="text-sm text-primary hover:underline font-medium">View All</button>
                    </div>
                    <div className="divide-y divide-border">
                        {recentActivity.length > 0 ? recentActivity.map((activity) => (
                            <div key={activity.id} className="p-4 flex items-center gap-4 hover:bg-secondary/50 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-sm text-primary">
                                    {activity.initial}
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-medium">{activity.message}</div>
                                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                                </div>
                            </div>
                        )) : (
                            <div className="p-8 text-center text-muted-foreground">No pending activities</div>
                        )}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-background rounded-xl border border-border shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-6">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left group">
                            <div className="p-2 bg-primary/10 rounded-md w-fit mb-3 group-hover:bg-primary/20">
                                <FileText className="w-5 h-5 text-primary" />
                            </div>
                            <div className="font-medium text-sm">New Post</div>
                            <div className="text-xs text-muted-foreground">Write a new article</div>
                        </button>
                        <button className="p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left group">
                            <div className="p-2 bg-primary/10 rounded-md w-fit mb-3 group-hover:bg-primary/20">
                                <Users className="w-5 h-5 text-primary" />
                            </div>
                            <div className="font-medium text-sm">Manage Users</div>
                            <div className="text-xs text-muted-foreground">View all moderators</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
