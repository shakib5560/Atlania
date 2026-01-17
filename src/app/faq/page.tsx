"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, MessageCircle, HelpCircle, Shield, CreditCard, LifeBuoy } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: { category: string, icon: any, items: FAQItem[] }[] = [
    {
        category: "General",
        icon: HelpCircle,
        items: [
            { question: "What is Atlania?", answer: "Atlania is a modern blogging and content platform designed for creators, developers, and storytellers to share their ideas with the world through a premium, high-performance interface." },
            { question: "Is Atlania free to use?", answer: "Yes! We offer a free 'Reader' plan that allows you to access and comment on all public articles. For creators looking for advanced features, we have premium plans starting at $12/month." },
            { question: "How do I start a blog?", answer: "Simply create an account, click on 'New Post' in your dashboard, and start writing! Our intuitive editor makes it easy to format content and add high-quality images." }
        ]
    },
    {
        category: "Billing",
        icon: CreditCard,
        items: [
            { question: "Can I cancel my subscription anytime?", answer: "Absolutely. You can cancel your premium subscription at any time through your account settings. You will continue to have access to premium features until the end of your billing cycle." },
            { question: "Do you offer refunds?", answer: "We offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied, just reach out to our support team." },
            { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and Apple Pay through our secure payment processor." }
        ]
    },
    {
        category: "Safety & Security",
        icon: Shield,
        items: [
            { question: "Is my data secure?", answer: "We use industry-standard encryption and security protocols to ensure your data and content stay private and safe at all times." },
            { question: "How do you handle moderation?", answer: "We have a dedicated moderation team and automated filters to ensure our community remains respectful and free of spam or offensive content." }
        ]
    }
];

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [openItem, setOpenItem] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Header Section */}
                <div className="text-center space-y-6 mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-black uppercase tracking-[0.3em] text-xs bg-primary/10 px-6 py-2 rounded-full"
                    >
                        Help Center
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black tracking-tight text-foreground"
                    >
                        How can we help?
                    </motion.h1>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative max-w-2xl mx-auto mt-12"
                    >
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search for questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-16 bg-secondary/30 border border-border rounded-2xl pl-16 pr-8 font-bold text-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-lg shadow-xl shadow-black/5"
                        />
                    </motion.div>
                </div>

                {/* FAQ List */}
                <div className="space-y-12">
                    {faqs.map((category, catIdx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + catIdx * 0.1 }}
                        >
                            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-3 mb-6 ml-2">
                                <category.icon className="w-4 h-4" />
                                {category.category}
                            </h2>
                            <div className="space-y-4">
                                {category.items.map((item, itemIdx) => {
                                    const id = `${category.category}-${itemIdx}`;
                                    const isOpen = openItem === id;

                                    // Skip items not matching search
                                    if (searchQuery && !item.question.toLowerCase().includes(searchQuery.toLowerCase())) return null;

                                    return (
                                        <div
                                            key={id}
                                            className={`
                                                group rounded-3xl border border-border transition-all duration-300
                                                ${isOpen ? 'bg-secondary/20 border-primary/30 ring-4 ring-primary/5' : 'hover:bg-secondary/30'}
                                            `}
                                        >
                                            <button
                                                onClick={() => toggleItem(id)}
                                                className="w-full p-6 flex items-center justify-between gap-4 text-left"
                                            >
                                                <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{item.question}</span>
                                                <div className={`w-10 h-10 rounded-xl bg-background border flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                                                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                                </div>
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-6 pb-8 pt-2 text-muted-foreground font-medium leading-relaxed">
                                                            {item.answer}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Still have questions? */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 p-12 rounded-[3.5rem] bg-primary text-white text-center space-y-10 shadow-2xl shadow-primary/30"
                >
                    <div className="flex -space-x-4 justify-center">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-14 h-14 rounded-full border-4 border-primary bg-secondary shrink-0 overflow-hidden">
                                <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Avatar" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-black">Still have questions?</h2>
                        <p className="text-white/80 font-medium max-w-md mx-auto">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    </div>
                    <button className="h-16 px-10 bg-white text-primary rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl flex items-center gap-3 mx-auto">
                        <MessageCircle className="w-6 h-6" />
                        Message Support
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
