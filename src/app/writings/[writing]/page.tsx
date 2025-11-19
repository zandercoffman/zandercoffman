"use client"

import { useEffect, useState } from "react"
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Type as type, type LucideIcon } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Button } from "@/components/ui/button";
import LoadingBar from "@/components/LoadingBar";
import { Badge } from "@/components/ui/badge";

interface PageProps {
    params: {
        writing: string;
    };
}

interface TOCEntry {
    page: number;
    subsections?: Record<string, TOCEntry | string | number>;
}
  
interface TableOfContents {
    [key: string]: TOCEntry | number | string;
}

const BLUR_FADE_DELAY = 0.04;

function getShortKey(str: string): string {
    const words = str.split(/\s+/).slice(0, 4);
    return words
        .join(" ")
        .replace(/[^a-zA-Z ]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase();
}

interface WritingInt {
    title: string;
    summary: string;
    extendedSummary: string;
    dateStarted: string;
    dateFinished: string;
    category: string;
    wordCount: number;
    coverImage: string;
    link: string;
    Icon: LucideIcon;
    badges: readonly string[];
    tableOfContents?: TableOfContents;
}

export default function WritingPage({ params }: PageProps) {
    const { writing } = params;
    const writings = DATA.writings;
    const [selectedWriting, setSelectedWriting] = useState<WritingInt | null>(null);

    useEffect(() => {
        const gottenWriting = writings.find(w => getShortKey(w.title) === writing);
        if (gottenWriting) setSelectedWriting(gottenWriting);
    }, [writing, writings]);

    if (!selectedWriting) {
        return <LoadingBar/>
    }

    const renderTOC = (
        toc: TableOfContents | TOCEntry | string | number,
        level = 0
    ): JSX.Element => {
        if (typeof toc === "string") {
            return <span className="text-muted-foreground text-sm">{toc}</span>;
        }

        if (typeof toc == "number") {
            return <></>
        }
    
        // TOCEntry with page
        if ("page" in toc) {
            return (
                <div className={`${level > 0 ? 'ml-6' : ''}`}>
                    {toc.subsections && renderTOC(toc.subsections, level + 1)}
                </div>
            );
        }
    
        // TableOfContents object
        return (
            <div className={`space-y-1 ${level > 0 ? 'ml-6 mt-1' : ''}`}>
                {Object.entries(toc).map(([key, value], index) => {
                    // Check if value is a TOCEntry with a page number
                    const pageNumber = typeof value === 'object' && value !== null && 'page' in value 
                        ? value.page 
                        : null;
                    
                    const displayTitle = key;
                    
                    return (
                        <div key={key} className="group">
                            <div className={`
                                flex items-center gap-2 py-1 px-3 rounded-lg
                                transition-all duration-200
                                hover:bg-muted/50
                                ${level === 0 ? 'font-semibold text-base' : level === 1 ? 'font-medium text-sm' : 'text-sm'}
                            `}>
                                {/* Section number indicator for visual hierarchy */}
                                <span className={`
                                    ${level === 0 ? 'text-primary font-bold' : 'text-muted-foreground'}
                                    shrink-0
                                `}>
                                    {level === 0 ? '§' : level === 1 ? '›' : '·'}
                                </span>
                                
                                <span className="flex-grow text-foreground group-hover:text-primary transition-colors">
                                    {displayTitle}
                                </span>
                                
                                {pageNumber !== null && (
                                    <>
                                        <span className="flex-grow border-b border-dotted border-muted-foreground/30 mb-1" />
                                        <span className={`
                                            shrink-0 font-mono text-sm
                                            ${level === 0 ? 'text-primary font-semibold' : 'text-muted-foreground'}
                                        `}>
                                            {pageNumber}
                                        </span>
                                    </>
                                )}
                            </div>
                            {/* Render nested content */}
                            {renderTOC(value, level + 1)}
                        </div>
                    );
                })}
            </div>
        );
    };
    


    return (
        <section className="relative">
            {selectedWriting.coverImage !== "" && <img src={selectedWriting.coverImage} className="w-full h-[200px] object-cover shadow-xl mb-4" alt="" />}
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="font-medium text-2xl mb-8 tracking-tighter">{selectedWriting.title} <Badge>{selectedWriting.wordCount} word{selectedWriting.wordCount > 1 && "s"}</Badge></h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY + 0.2}>
                <p>{selectedWriting.summary}</p>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY + 0.4} className="sticky top-4 z-10 flex flex-row gap-4 w-full my-8">
            <RainbowButton className=" rounded-full flex-1 h-14 text-lg font-semibold">View This Paper</RainbowButton>
            <Button variant="outline" className="rounded-full flex-1 h-14 text-lg font-semibold">Do Something</Button>
            </BlurFade>

            {selectedWriting.tableOfContents && (
                <BlurFade delay={BLUR_FADE_DELAY + 0.6}>
                    <div className="mt-12 mb-8">
                        <h2 className="font-semibold text-xl mb-6 tracking-tight">Table of Contents</h2>
                        <div className="border border-border rounded-xl p-6 bg-card shadow-sm">
                            {renderTOC(selectedWriting.tableOfContents)}
                        </div>
                    </div>
                </BlurFade>
            )}
        </section>
    );
}
