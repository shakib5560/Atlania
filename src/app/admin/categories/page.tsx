"use client"

import { categories as mockCategories, allArticles } from "@/lib/mockData";
import { Plus, Search, MoreVertical, Edit2, Trash2, FolderTree, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AdminCategoriesPage() {
    const [searchQuery, setSearchQuery] = useState("");

    // Calculate post counts for each category
    const categoryStats = mockCategories.map(cat => {
        const count = allArticles.filter(article => article.category.toLowerCase().includes(cat.toLowerCase())).length;
        return {
            name: cat,
            count: count,
            icon: cat === "Technologies" ? "💻" :
                cat === "Digital marketing" ? "📈" :
                    cat === "Business" ? "💼" :
                        cat === "Blockchain" ? "⛓️" :
                            cat === "Android Dev" ? "🤖" : "📁"
        };
    });

    const filteredCategories = categoryStats.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Categories</h1>
                    <p className="text-muted-foreground mt-2 font-medium">Manage your content taxonomies and organization.</p>
                </div>
                <Button className="rounded-2xl px-8 h-12 font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                    <Plus className="w-5 h-5 mr-2" />
                    New Category
                </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-primary/5 border border-primary/10 rounded-3xl p-6 flex items-center gap-5"
                >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <FolderTree className="w-7 h-7" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-primary/60 uppercase tracking-widest">Total Categories</div>
                        <div className="text-3xl font-black">{mockCategories.length}</div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-secondary/20 border border-border rounded-3xl p-6 flex items-center gap-5"
                >
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-foreground">
                        <TrendingUp className="w-7 h-7" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Most Active</div>
                        <div className="text-2xl font-black">Technologies</div>
                    </div>
                </motion.div>
            </div>

            <div className="bg-background rounded-[2.5rem] border border-border shadow-2xl shadow-black/5 overflow-hidden">
                <div className="p-8 border-b border-border flex flex-col md:flex-row md:items-center gap-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                            type="search"
                            placeholder="Search categories..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-secondary/30 border border-border rounded-[1.25rem] py-4 pl-14 pr-6 text-base focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-secondary/10 text-muted-foreground text-xs uppercase tracking-[0.2em] font-black">
                                <th className="px-8 py-6">Category Name</th>
                                <th className="px-8 py-6">Linked Posts</th>
                                <th className="px-8 py-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {filteredCategories.map((cat, idx) => (
                                <motion.tr
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    key={cat.name}
                                    className="hover:bg-secondary/10 transition-colors group"
                                >
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-5">
                                            <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center text-2xl shadow-inner">
                                                {cat.icon}
                                            </div>
                                            <div>
                                                <div className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{cat.name}</div>
                                                <div className="text-xs text-muted-foreground font-medium">blog.atlania.com/category/{cat.name.toLowerCase().replace(' ', '-')}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-black border border-primary/10">
                                            {cat.count} {cat.count === 1 ? 'Article' : 'Articles'}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                                            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-blue-500/10 hover:text-blue-500">
                                                <Edit2 className="w-5 h-5" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-red-500/10 hover:text-red-500 text-destructive">
                                                <Trash2 className="w-5 h-5" />
                                            </Button>
                                        </div>
                                        <div className="group-hover:hidden text-muted-foreground">
                                            <MoreVertical className="w-5 h-5 ml-auto opacity-40" />
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredCategories.length === 0 && (
                    <div className="p-24 text-center space-y-4">
                        <div className="w-20 h-20 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search className="w-10 h-10 text-muted-foreground" />
                        </div>
                        <div className="text-muted-foreground font-bold text-xl">No categories found</div>
                        <p className="text-sm text-muted-foreground max-w-xs mx-auto">We couldn't find any categories matching "{searchQuery}".</p>
                    </div>
                )}
            </div>
        </div>
    );
}
