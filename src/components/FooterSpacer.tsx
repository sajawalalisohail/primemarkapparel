"use client";

import { useEffect, useRef, useState } from "react";

export default function FooterSpacer({ children }: { children: React.ReactNode }) {
    const [height, setHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!contentRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setHeight(entry.contentRect.height);
            }
        });

        observer.observe(contentRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Spacer that takes up space in the document flow */}
            <div style={{ height: height > 0 ? height : 'auto' }} className="w-full relative -z-10 pointer-events-none" />

            {/* Fixed footer content */}
            <div
                ref={contentRef}
                className="fixed bottom-0 left-0 right-0 z-0 will-change-transform"
            >
                {children}
            </div>
        </>
    );
}
