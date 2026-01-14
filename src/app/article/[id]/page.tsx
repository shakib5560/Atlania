import { getArticleById, latestArticles } from "@/lib/mockData";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Calendar, Clock, User } from "lucide-react";

// Use SearchParams for static generation if needed, but for now assuming dynamic
interface Props {
    params: Promise<{ id: string }>;
}

export default async function ArticlePage({ params }: Props) {
    const { id } = await params;
    const article = getArticleById(id);

    if (!article) {
        notFound();
    }

    return (
        <article className="min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full bg-slate-900">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 text-white">
                    <div className="container mx-auto">
                        <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase rounded-full mb-4">
                            {article.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl text-balance">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden relative">
                                    {/* Placeholder avatar */}
                                    <div className="w-full h-full flex items-center justify-center bg-gray-700 text-xs">
                                        {article.author.name.charAt(0)}
                                    </div>
                                </div>
                                <span className="text-white">{article.author.name}</span>
                            </div>
                            <span className="hidden md:inline">•</span>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> {article.date}
                            </div>
                            <span className="hidden md:inline">•</span>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" /> {article.readTime} read
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    {/* Social Share (Mobile) */}
                    <div className="flex gap-4 mb-8 lg:hidden">
                        <Button variant="outline" size="sm" className="rounded-full"><Facebook className="w-4 h-4 mr-2" /> Share</Button>
                        <Button variant="outline" size="sm" className="rounded-full"><Twitter className="w-4 h-4 mr-2" /> Tweet</Button>
                    </div>

                    <div className="prose prose-lg md:prose-xl max-w-none text-foreground prose-headings:text-foreground prose-a:text-primary">
                        <p className="lead text-xl md:text-2xl font-medium text-gray-600 mb-8">{article.excerpt}</p>
                        <div dangerouslySetInnerHTML={{ __html: article.content || "" }} />
                    </div>

                    {/* Tags */}
                    <div className="mt-12 flex flex-wrap gap-2">
                        {["Technology", "AI", "Future", "Innovation"].map(tag => (
                            <span key={tag} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/80 cursor-pointer">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:w-1/3 space-y-12">
                    {/* Author Box */}
                    <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
                        <h3 className="text-xl font-bold mb-4">About the Author</h3>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden relative">
                                {/* Placeholder */}
                                <div className="w-full h-full flex items-center justify-center bg-gray-400 text-white text-xl">
                                    {article.author.name.charAt(0)}
                                </div>
                            </div>
                            <div>
                                <div className="font-bold text-lg">{article.author.name}</div>
                                <div className="text-sm text-muted-foreground">Tech Journalist</div>
                            </div>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Passionate about detailing the latest in technology and how it affects our daily lives.
                        </p>
                        <Button className="w-full rounded-full">Follow Author</Button>
                    </div>

                    {/* Newsletter Widget */}
                    <div className="bg-primary text-white p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-2">Subscribe</h3>
                        <p className="mb-6 opacity-90">Get the latest articles delivered to your inbox.</p>
                        <div className="space-y-4">
                            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 placeholder:text-white/70 focus:outline-none focus:bg-white/30" />
                            <Button variant="secondary" className="w-full rounded-xl font-bold">Subscribe</Button>
                        </div>
                    </div>

                    {/* Share (Desktop) */}
                    <div>
                        <h3 className="font-bold text-gray-400 uppercase tracking-wider text-sm mb-4">Share this article</h3>
                        <div className="flex gap-4">
                            <Button size="icon" variant="outline" className="rounded-full hover:border-blue-600 hover:text-blue-600"><Facebook className="w-5 h-5" /></Button>
                            <Button size="icon" variant="outline" className="rounded-full hover:border-sky-500 hover:text-sky-500"><Twitter className="w-5 h-5" /></Button>
                            <Button size="icon" variant="outline" className="rounded-full hover:border-blue-700 hover:text-blue-700"><Linkedin className="w-5 h-5" /></Button>
                            <Button size="icon" variant="outline" className="rounded-full"><LinkIcon className="w-5 h-5" /></Button>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Related Articles */}
            <div className="border-t border-border mt-20 pt-20 bg-secondary/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12">Related Articles</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {latestArticles.map(item => (
                            <ArticleCard key={item.id} article={item} />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
