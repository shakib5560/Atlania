import { Article, categories } from "@/lib/mockData";
import { ArticleCard } from "../ui/ArticleCard";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { ScrollFade } from "../ui/scroll-fade";

interface LatestArticlesProps {
    articles: Article[];
}

export function LatestArticles({ articles }: LatestArticlesProps) {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                {/* Header & Filter */}
                <ScrollFade direction="down">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>

                        <div className="flex flex-col md:flex-row gap-4 md:items-center flex-1 md:justify-end">
                            <div className="flex flex-wrap gap-2">
                                {categories.slice(0, 3).map((cat) => (
                                    <Button key={cat} variant="outline" size="sm" className="rounded-full bg-card hover:bg-accent border-border">
                                        {cat}
                                    </Button>
                                ))}
                                <Button variant="ghost" size="sm" className="rounded-full">See all</Button>
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="pl-4 pr-10 py-2 rounded-full border border-input bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w- full md:w-[200px]"
                                />
                                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            </div>
                        </div>
                    </div>
                </ScrollFade>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <ArticleCard key={article.id} article={article} index={index} />
                    ))}
                </div>

                {/* Pagination / Load More */}
                <div className="mt-12 text-center">
                    {/* Pagination dots or button could go here */}
                </div>
            </div>
        </section>
    );
}
