import { featuredArticle, heroArticlesRight, latestArticles, weeklyHighlights } from "@/lib/mockData";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function FeaturePage() {
    const topFeature = weeklyHighlights[0];
    const sideFeatures = heroArticlesRight;

    return (
        <main className="min-h-screen">
            {/* Unique Dark Header Area */}
            <div className="bg-[#0f172a] text-white pt-20 pb-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-primary/20 rounded-full w-fit">
                            <Sparkles className="w-6 h-6 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight">Featured</h1>
                    </div>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        Hand-picked stories, in-depth analysis, and the most important trends shaping our world today. Curated by our editors.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-20">
                {/* Bento Grid Layout Style */}
                <div className="grid lg:grid-cols-12 gap-6 mb-20">
                    {/* Main Big Feature */}
                    <div className="lg:col-span-8 group relative overflow-hidden rounded-3xl bg-white shadow-xl min-h-[500px]">
                        <Image
                            src={topFeature.image}
                            alt={topFeature.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 md:p-12">
                            <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                                {topFeature.category}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                {topFeature.title}
                            </h2>
                            <p className="text-gray-300 text-lg mb-6 line-clamp-2 md:max-w-2xl">
                                {topFeature.excerpt}
                            </p>
                            <Button size="lg" className="rounded-full font-bold">Read Full Story</Button>
                        </div>
                    </div>

                    {/* Side Stack */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {sideFeatures.slice(0, 2).map((item, idx) => (
                            <div key={item.id} className="relative flex-1 rounded-3xl overflow-hidden group min-h-[240px]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6">
                                    <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">Top Pick #{idx + 1}</div>
                                    <h3 className="text-xl font-bold text-white leading-tight group-hover:underline decoration-primary underline-offset-4">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Editor's Selection Section */}
                <div className="mb-20">
                    <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
                        <h2 className="text-3xl font-bold">Editor's Selection</h2>
                        <span className="text-sm font-medium text-gray-500">Updated daily</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {latestArticles.map(article => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                        {/* Reusing articles to fill grid */}
                        <ArticleCard article={featuredArticle} />
                    </div>
                </div>
            </div>
        </main>
    );
}
