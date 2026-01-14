import { categories, latestArticles } from "@/lib/mockData";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CategoriesPage() {
    return (
        <main className="container mx-auto px-4 py-12 md:py-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Explore Topics</h1>
                <p className="text-muted-foreground text-lg">Discover the latest insights across technology, design, and business.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
                {categories.map((cat) => (
                    <Link key={cat} href={`#${cat}`} className="group relative overflow-hidden rounded-xl bg-secondary aspect-[4/3] flex items-center justify-center p-4 hover:bg-primary hover:text-white transition-all duration-300">
                        <span className="font-bold text-center z-10">{cat}</span>
                    </Link>
                ))}
            </div>

            {/* Example Category Section */}
            <div className="mb-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold">Technology</h2>
                    <Button variant="ghost" className="text-primary hover:text-primary/80">View All <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {latestArticles.slice(0, 3).map(article => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </main>
    );
}
