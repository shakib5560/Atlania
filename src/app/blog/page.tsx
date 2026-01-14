import { allArticles, categories } from "@/lib/mockData";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
    return (
        <main className="container mx-auto px-4 py-12 md:py-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">All Articles</h1>
                    <p className="text-muted-foreground text-lg">Browse our complete collection of insights and stories.</p>
                </div>

                {/* Simple Filter */}
                <div className="flex flex-wrap gap-2">
                    <Button variant="default" size="sm" className="rounded-full">All</Button>
                    {categories.slice(0, 4).map(cat => (
                        <Button key={cat} variant="outline" size="sm" className="rounded-full bg-transparent">{cat}</Button>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-16 text-center">
                <Button variant="outline" size="lg" className="rounded-full px-8">Load More</Button>
            </div>
        </main>
    );
}
