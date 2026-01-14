export interface Article {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    author: {
        name: string;
        avatar: string;
    };
    date: string;
    readTime: string;
    image: string;
    featured?: boolean;
    content?: string;
}

export const categories = [
    "Technologies",
    "Digital marketing",
    "Business",
    "Blockchain",
    "Android Dev",
    "Gadget"
];

const defaultContent = `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <h3>The Impact of Technology</h3>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  <ul>
    <li>Artificial Intelligence and Machine Learning</li>
    <li>Blockchain and Decentralized Finance</li>
    <li>Internet of Things (IoT)</li>
  </ul>
  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
  <blockquote>"Technology is best when it brings people together." - Matt Mullenweg</blockquote>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
`;

export const featuredArticle: Article = {
    id: "1",
    title: "The Future of Artificial Intelligence: Trends and Implications.",
    excerpt: "The Future of Artificial Intelligence: Trends and Implications. The Future of Artificial Intelligence: Trends and Implications.",
    category: "Tech.",
    author: {
        name: "Joseph Pharmacy",
        avatar: "/avatars/user1.jpg"
    },
    date: "6 hours ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2665&auto=format&fit=crop", // Abstract AI image
    featured: true,
    content: defaultContent
};

export const latestArticles: Article[] = [
    {
        id: "2",
        title: "Content Marketing Strategies: Explore content trend",
        excerpt: "The Future of Artificial Intelligence: Trends and Implications. The Future of Artificial Intelligence.",
        category: "Technologies",
        author: { name: "Steve Jobs", avatar: "/avatars/user2.jpg" },
        date: "2,124",
        readTime: "735",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        content: defaultContent
    },
    {
        id: "3",
        title: "Social Media Marketing: Cover social media strategies",
        excerpt: "The Future of Artificial Intelligence: Trends and Implications. The Future of Artificial Intelligence.",
        category: "Technologies",
        author: { name: "Steve Jobs", avatar: "/avatars/user2.jpg" },
        date: "2,124",
        readTime: "735",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
        content: defaultContent
    },
    {
        id: "4",
        title: "Data Privacy and Ethics in the Digital Age",
        excerpt: "The Future of Artificial Intelligence: Trends and Implications. The Future of Artificial Intelligence.",
        category: "Technologies",
        author: { name: "Steve Jobs", avatar: "/avatars/user2.jpg" },
        date: "2,124",
        readTime: "735",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        content: defaultContent
    }
];

export const heroArticlesRight: Article[] = [
    {
        id: "101",
        title: "Exploring the Future of Artificial Intelligence in Everyday Life",
        excerpt: "",
        category: "Tech",
        author: { name: "Steve Jobs", avatar: "" },
        date: "5 hours ago",
        readTime: "",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop",
        content: defaultContent
    },
    {
        id: "102",
        title: "Advancements in Quantum Computing and their Potential Impact",
        excerpt: "",
        category: "Tech",
        author: { name: "Steve Jobs", avatar: "" },
        date: "5 hours ago",
        readTime: "",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop",
        content: defaultContent
    },
    {
        id: "103",
        title: "The Latest Trends in Web Development: React vs Angular vs Vue",
        excerpt: "",
        category: "Tech",
        author: { name: "Steve Jobs", avatar: "" },
        date: "5 hours ago",
        readTime: "",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop",
        content: defaultContent
    }
];

export const weeklyHighlights: Article[] = [
    {
        id: "201",
        title: "Data Privacy and Ethics in the Digital Age",
        excerpt: "The Future of Artificial Intelligence: Trends and Implications.",
        category: "Technology",
        author: { name: "Steve Jobs", avatar: "" },
        date: "2,124",
        readTime: "735",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2670&auto=format&fit=crop",
        content: defaultContent
    },
    {
        id: "202",
        title: "Exploring Virtual Reality: Gaming, Entertainment",
        excerpt: "The Future of Artificial Intelligence: Trends and Implications.",
        category: "Technology",
        author: { name: "Steve Jobs", avatar: "" },
        date: "2,124",
        readTime: "735",
        image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2678&auto=format&fit=crop",
        content: defaultContent
    },
    {
        id: "203",
        title: "How Machine Learning is Changing the Face",
        excerpt: "The Future of Artificial Intelligence: Trends and Implications.",
        category: "Technology",
        author: { name: "Steve Jobs", avatar: "" },
        date: "2,124",
        readTime: "735",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2532&auto=format&fit=crop",
        content: defaultContent
    }
]

export const allArticles = [
    featuredArticle,
    ...latestArticles,
    ...heroArticlesRight,
    ...weeklyHighlights
];

export function getArticleById(id: string): Article | undefined {
    return allArticles.find(article => article.id === id);
}
