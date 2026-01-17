"use client"

import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const plans = [
    {
        name: "Reader",
        price: "0",
        description: "Perfect for casual readers who want to stay informed.",
        features: [
            "Access to all public articles",
            "Bookmark up to 10 articles",
            "weekly newsletter summary",
            "Basic support"
        ],
        icon: Star,
        color: "blue"
    },
    {
        name: "Creator",
        price: "12",
        description: "Best for writers and content creators looking to build an audience.",
        features: [
            "Unlimited article publishing",
            "Advanced analytics dashboard",
            "Custom author profile",
            "Priority community support",
            "Ad-free reading experience"
        ],
        popular: true,
        icon: Zap,
        color: "primary"
    },
    {
        name: "Enterprise",
        price: "49",
        description: "Tailored solutions for large teams and organizations.",
        features: [
            "Full API access",
            "Custom domain integration",
            "Dedicated account manager",
            "Whitelabeling options",
            "SLA guarantees"
        ],
        icon: ShieldCheck,
        color: "purple"
    }
];

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="text-center space-y-6 mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-black uppercase tracking-[0.3em] text-xs bg-primary/10 px-6 py-2 rounded-full"
                    >
                        Pricing Plans
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black tracking-tight text-foreground"
                    >
                        Ready to level up?
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        Choose the perfect plan for your needs. Whether you're a reader, writer, or business, we have you covered.
                    </motion.p>

                    {/* Toggle */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-6 mt-12"
                    >
                        <span className={`text-sm font-bold ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-14 h-8 bg-secondary rounded-full relative p-1 transition-colors hover:bg-secondary/80"
                        >
                            <div className={`w-6 h-6 bg-primary rounded-full transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
                        </button>
                        <span className={`text-sm font-bold ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Yearly <span className="text-primary text-[10px] ml-1">(-20%)</span></span>
                    </motion.div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => {
                        const Icon = plan.icon;
                        const price = isYearly ? Math.floor(parseInt(plan.price) * 0.8 * 12) : plan.price;

                        return (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className={`
                                    relative p-10 rounded-[2.5rem] border bg-card/50 backdrop-blur-3xl transition-all duration-500
                                    ${plan.popular ? 'border-primary shadow-2xl shadow-primary/10 scale-105 z-10' : 'border-border hover:border-primary/30'}
                                `}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full ring-8 ring-background">
                                        Most Popular
                                    </div>
                                )}

                                <div className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary border border-border">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                            {plan.description}
                                        </p>
                                    </div>

                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-black">${price}</span>
                                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                                            {isYearly ? '/ Year' : '/ Month'}
                                        </span>
                                    </div>

                                    <ul className="space-y-4 pt-4">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
                                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                    <Check className="w-3 h-3 text-primary" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        className={`
                                            w-full h-14 rounded-2xl font-black text-lg group transition-all
                                            ${plan.popular ? 'bg-primary text-white hover:opacity-90' : 'bg-secondary text-foreground hover:bg-primary hover:text-white'}
                                        `}
                                    >
                                        Get Started
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* FAQ Quick Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 text-center p-12 rounded-[3rem] bg-secondary/20 border border-border"
                >
                    <h3 className="text-2xl font-bold mb-4">Have more questions?</h3>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">Check out our comprehensive FAQ page or contact our support team for any custom inquiries.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="outline" className="h-12 rounded-xl px-8 font-bold">Contact Support</Button>
                        <Button variant="ghost" className="h-12 rounded-xl px-8 font-bold underline">Read the FAQ</Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
