"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
} from "framer-motion";

interface SmoothScrollProps {
    children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        // Also watch for content changes
        const observer = new MutationObserver(handleResize);
        if (contentRef.current) {
            observer.observe(contentRef.current, { childList: true, subtree: true });
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            observer.disconnect();
        };
    }, []);

    const { scrollY } = useScroll();

    const smoothY = useSpring(scrollY, {
        damping: 20,
        stiffness: 100,
        mass: 0.5,
    });

    const y = useTransform(smoothY, (value) => -value);

    return (
        <>
            <div style={{ height: contentHeight }} />
            <motion.div
                ref={contentRef}
                style={{ y }}
                className="fixed top-0 left-0 w-full overflow-hidden"
            >
                {children}
            </motion.div>
        </>
    );
};
