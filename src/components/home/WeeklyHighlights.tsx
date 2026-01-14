import { Article } from "@/lib/mockData";
import { ArticleCard } from "../ui/ArticleCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollFade } from "../ui/scroll-fade";

interface WeeklyHighlightsProps {
    articles: Article[];
}

export function WeeklyHighlights({ articles }: WeeklyHighlightsProps) {
    return (
        <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
                <ScrollFade>
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold tracking-tight">Weekly Highlights</h2>
                        <Link href="#" className="text-sm font-medium text-primary flex items-center gap-1 hover:underline">
                            See all <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </ScrollFade>

                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <ArticleCard key={article.id} article={article} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
