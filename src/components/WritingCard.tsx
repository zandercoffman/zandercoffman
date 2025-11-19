"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon, BrainCircuit, ChevronRightIcon, Info, ExternalLink, Grid2x2, Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function getShortKey(str: string): string {
    // Split string into words, take first 4
    const words = str.split(/\s+/).slice(0, 4);

    // Join with dash, remove non-alphabet characters except dash, lowercase
    return words
        .join(" ")               // join with space first
        .replace(/[^a-zA-Z ]/g, "") // remove everything except letters and spaces
        .replace(/\s+/g, "-")    // replace spaces with dash
        .toLowerCase();
}

interface WritingCardProps {
    title: string,
    summary: string,
    dateStarted: string,
    dateFinished: string,
    category: string,
    wordCount: number,
    coverImage: string,
    link: string,
    Icon: LucideIcon,
    badges: readonly string[]
}
export const WritingCard = ({
    title,
    summary,
    dateStarted,
    dateFinished,
    category,
    wordCount,
    coverImage,
    link = "https://orcid.org/0009-0001-8312-6770",
    Icon,
    badges
}: WritingCardProps) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (summary) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <Card className="flex items-center gap-4 group cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 text-muted-foreground rounded-full border border-muted-foreground">
                <Icon className="w-5 h-5" />
            </div>

            {/* Text Column */}
            <div className="flex-1 flex flex-col">
                <CardHeader>
                    <div className="flex items-center justify-between w-full">
                        <h3 className="w-[90%] inline-flex items-center gap-x-2 font-semibold leading-tight">
                            {title}
                        </h3>

                        <ChevronRightIcon
                            className={cn(
                                "w-4 h-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                                isExpanded ? "rotate-90" : "rotate-0"
                            )}
                        />
                    </div>
                    <div className="font-sans text-xs">{category}</div>
                </CardHeader>

                {summary && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: isExpanded ? 1 : 0,
                            height: isExpanded ? "auto" : 0,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mt-2 text-xs sm:text-sm flex flex-col gap-2"
                    >
                        <span>{summary}</span>
                        {link && (
                            <Button asChild className="w-fit">
                                <Link href={link}>
                                    {link.includes("https") ? link.substring(8) : link.substring(7)}
                                </Link>
                            </Button>
                        )}
                        <span className="font-semibold flex flex-row gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{dateStarted} - {dateFinished === "" ? "Present" : dateFinished}</span>
                        </span>
                        <div className="flex flex-row gap-2">
                            <Link href={`/writings/${getShortKey(title)}`}>
                                <Button className="flex flex-row gap-2">
                                    <ExternalLink className="w-4 h-4" />
                                    <span>Access the Full Paper</span>
                                </Button>
                            </Link>
                            <Link href={`/writings/${getShortKey(title)}`}>
                                <Button className="flex flex-row gap-2" variant={"ghost"}>
                                    <Info className="w-4 h-4" />
                                    <span>More Information</span>
                                </Button>
                            </Link>
                        </div>

                    </motion.div>
                )}
            </div>
        </Card>

    );
};
