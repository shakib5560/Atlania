import { featuredArticle, latestArticles, weeklyHighlights } from "@/lib/mockData";
import { HeroSection } from "@/components/home/HeroSection";
import { LatestArticles } from "@/components/home/LatestArticles";
import { WeeklyHighlights } from "@/components/home/WeeklyHighlights";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection featuredArticle={featuredArticle} />
      <LatestArticles articles={latestArticles} />
      <WeeklyHighlights articles={weeklyHighlights} />
    </main>
  );
}
