"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Check, X, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const MOCK_POSTS = [
    {
        id: 1,
        title: "Building a Modern Blog with Next.js",
        excerpt: "Learn how to build a modern, scalable blog using Next.js App Router.",
        slug: "modern-blog-nextjs",
        created_at: new Date().toISOString(),
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        category: { name: "Next.js" },
        author: { full_name: "Shakib Hasan" },
    },
    {
        id: 2,
        title: "FastAPI vs Express.js — Backend Battle",
        excerpt: "A deep comparison between FastAPI and Express.js for modern backend development.",
        slug: "fastapi-vs-express",
        created_at: new Date().toISOString(),
        image: null,
        category: { name: "Backend" },
        author: { full_name: "Admin" },
    },
];

export default function PostModerationPage() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        setTimeout(() => {
            setPosts(MOCK_POSTS);
            setLoading(false);
        }, 800);
    }, []);

    const handleStatusUpdate = (postId: number) => {
        // Remove post locally after approve/reject
        setPosts((prev) => prev.filter((post) => post.id !== postId));
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
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Content Moderation</h1>
                <p className="text-muted-foreground">
                    Review and approve pending articles.
                </p>
            </div>

            {posts.length === 0 ? (
                <div className="bg-card border border-dashed border-border rounded-3xl p-20 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                        <Check className="w-8 h-8" />
                    </div>
                    <h2 className="text-xl font-bold">All caught up!</h2>
                    <p className="text-muted-foreground max-w-xs mx-auto">
                        There are no pending posts waiting for review.
                    </p>
                </div>
            ) : (
                <div className="grid gap-6">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-card border border-border rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 hover:shadow-xl transition-all"
                        >
                            <div className="relative w-full md:w-64 aspect-video rounded-2xl overflow-hidden">
                                <Image
                                    src={
                                        post.image ||
                                        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                    }
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-3">
                                    <Badge
                                        variant="outline"
                                        className="capitalize text-xs font-black tracking-widest px-3 py-1 bg-primary/5 border-primary/20 text-primary"
                                    >
                                        {post.category?.name || "General"}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground">
                                        {new Date(post.created_at).toLocaleDateString()}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-muted-foreground text-sm line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center gap-3 pt-2">
                                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold">
                                        {post.author?.full_name?.charAt(0) || "U"}
                                    </div>
                                    <span className="text-sm font-medium">
                                        {post.author?.full_name || "Unknown Author"}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-row md:flex-col gap-3">
                                <Button
                                    onClick={() => handleStatusUpdate(post.id)}
                                    className="rounded-2xl bg-primary text-white font-bold gap-2"
                                >
                                    <Check className="w-4 h-4" /> Approve
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={() => handleStatusUpdate(post.id)}
                                    className="rounded-2xl border-red-500/20 text-red-500 hover:bg-red-500/5 font-bold gap-2"
                                >
                                    <X className="w-4 h-4" /> Reject
                                </Button>

                                <Link
                                    href={`/article/${post.slug}`}
                                    target="_blank"
                                >
                                    <Button
                                        variant="ghost"
                                        className="rounded-2xl gap-2 text-muted-foreground"
                                    >
                                        <ExternalLink className="w-4 h-4" /> Preview
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
