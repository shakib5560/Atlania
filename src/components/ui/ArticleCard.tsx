"use client"

import { Article } from "@/lib/mockData";
import { ArrowUpRight, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ScrollFade } from "./scroll-fade";

interface ArticleCardProps {
    article: Article;
    variant?: "default" | "compact" | "horizontal";
    index?: number;
}

export function ArticleCard({ article, variant = "default", index = 0 }: ArticleCardProps) {
    if (variant === "horizontal") {
        return (
            <ScrollFade delay={index * 0.1} direction="left">
                <div className="group flex gap-4 items-start">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 overflow-hidden rounded-xl">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="font-medium text-primary">{article.category}</span>
                            <span>•</span>
                            <span>{article.date}</span>
                        </div>
                        <h3 className="font-bold text-base leading-tight group-hover:text-primary transition-colors line-clamp-2">
                            <Link href={`/article/${article.id}`}>{article.title}</Link>
                        </h3>
                    </div>
                </div>
            </ScrollFade>
        )
    }

    return (
        <ScrollFade delay={index * 0.1} className="h-full">
            <div className="group flex flex-col gap-4 h-full">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black">
                            {article.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-1">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-gray-200 overflow-hidden relative">
                                {/* Placeholder avatar if empty */}
                                <Image src="https://github.com/shadcn.png" alt="avatar" fill className="object-cover" />
                            </div>
                            <span className="font-medium text-foreground">{article.author.name}</span>
                        </div>
                        <span>•</span>
                        <span>{article.date} ago</span>
                    </div>

                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                        <Link href={`/article/${article.id}`}>
                            {article.title}
                        </Link>
                    </h3>

                    <p className="text-muted-foreground text-sm line-clamp-2">
                        {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                            <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> 2.1k</span>
                            <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> 45</span>
                        </div>

                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                            <ArrowUpRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </ScrollFade>
    );
}
