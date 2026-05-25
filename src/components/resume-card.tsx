"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  isCert?: string;
  skills?: string[];
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  isCert,
  skills = []
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="group block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex rounded-2xl border border-white/20 bg-white/55 p-4 transition-all duration-400 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_18px_48px_-30px_rgba(68,90,255,0.45)] dark:border-white/10 dark:bg-white/[0.03]">
        <div className="flex-none">
          <Avatar className="m-auto size-12 border border-white/25 bg-muted-background shadow-sm dark:border-white/15 dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="ml-4 flex flex-grow flex-col items-center">
          <CardHeader className="w-full">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center gap-2 text-xs font-semibold leading-none tracking-tight sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle rounded-full bg-primary/10 text-[10px] text-primary dark:bg-primary/15"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="font-sans text-xs text-muted-foreground">
                {subtitle} {isCert && `issued by ${isCert}`}
              </div>
            )}
          </CardHeader>

          {description && (
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
              className="mt-2 flex flex-col gap-3 text-xs sm:text-sm"
            >
              <span className="leading-relaxed text-muted-foreground">{description}</span>



              {skills.length > 0 && (
                <>
                  <div className="text-left text-xs tabular-nums text-muted-foreground">
                    Skills Learned
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant={"outline"} className="justify-center rounded-full border-border/80 bg-white/65 dark:bg-white/[0.05]">{skill}</Badge>
                    ))}
                  </div>
                </>
              )}

              {href && (
                <Button asChild className="w-fit rounded-full bg-primary/90 text-xs hover:bg-primary">
                  <Link href={href}>
                    {href.includes("https")
                      ? href.substring(8)
                      : href.substring(7)}
                  </Link>
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};