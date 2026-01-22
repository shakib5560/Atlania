"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ReadingProgressBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] z-[100] origin-left pointer-events-none">
            <motion.div
                className="h-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 shadow-[0_0_15px_hsla(var(--primary),0.8)]"
                style={{ scaleX }}
            />
            {/* Subtle Glow Effect at the tip */}
            <motion.div
                className="absolute top-0 right-0 h-full w-4 bg-white/40 blur-sm"
                style={{ scaleX, transformOrigin: "left" }}
            />
        </div>
    );
};
