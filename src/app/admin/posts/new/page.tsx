"use client"

import { useState } from "react";
import { ArrowLeft, Save, Image as ImageIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { categories } from "@/lib/mockData";

export default function NewPostPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState(categories[0]);

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/admin/posts">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Create New Post</h1>
                        <p className="text-muted-foreground">Draft your next masterpiece.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline">Save Draft</Button>
                    <Button className="flex items-center gap-2">
                        <Save className="w-4 h-4" />
                        Publish Post
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-background p-6 rounded-xl border border-border shadow-sm space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Post Title</label>
                            <input
                                type="text"
                                placeholder="Enter post title..."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full bg-secondary/30 border border-border rounded-lg px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Content</label>
                            <textarea
                                placeholder="Start writing..."
                                rows={15}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full bg-secondary/30 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Sidebar Settings */}
                <div className="space-y-6">
                    <div className="bg-background p-6 rounded-xl border border-border shadow-sm space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full bg-secondary/30 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Featured Image</label>
                            <div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center gap-2 hover:bg-secondary/30 transition-colors cursor-pointer group">
                                <div className="p-3 bg-secondary rounded-full text-muted-foreground group-hover:text-primary transition-colors">
                                    <ImageIcon className="w-6 h-6" />
                                </div>
                                <div className="text-sm font-medium">Click to upload</div>
                                <div className="text-xs text-muted-foreground">PNG, JPG up to 10MB</div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Search Tags</label>
                            <div className="flex flex-wrap gap-2 mb-2">
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                                    AI <X className="w-3 h-3 cursor-pointer" />
                                </span>
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                                    Future <X className="w-3 h-3 cursor-pointer" />
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="Add tag..."
                                className="w-full bg-secondary/30 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
