"use client"
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { WritingCard } from "@/components/WritingCard"; // if using your card component
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from 'react'

const BLUR_FADE_DELAY = 0.04;

export default function PapersPage() {
  const [filter, setFilter] = useState("all");
  const writings = DATA.writings.filter((writing) => {
    if (filter === "all") {
      return writing.type !== "Idea";
    }
    return writing.category === filter && writing.type !== "Idea";
  });

  return (
    <section className="flex flex-col gap-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl tracking-tighter">Papers Written</h1>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY + 0.2}>
        <p className="text-sm">
          If you know me, you know I enjoy thinking critically and deeply, and I love writing thoughtful papers on current issues. Find all of my papers below.
        </p>
      </BlurFade>

      {
        /**<Select onValueChange={setFilter}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent className="w-full absolute">
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Research Paper">Research Paper</SelectItem>
            <SelectItem value="Process Analysis Paper">Process Analysis Paper</SelectItem>
            <SelectItem value="Analytical / Case Study Paper">Analytical / Case Study Paper</SelectItem>
            <SelectItem value="Expository / Theological Analysis Paper">Expository / Theological Analysis Paper</SelectItem>
            <SelectItem value="Persuasive / Theological Reflection Paper">Persuasive / Theological Reflection Paper</SelectItem>
            <SelectItem value="Expository / Social Commentary Paper">Expository / Social Commentary Paper</SelectItem>
            <SelectItem value="Reflective / Theological Inquiry Paper">Reflective / Theological Inquiry Paper</SelectItem>
            <SelectItem value="Synthesis / How-To Guide Paper">Synthesis / How-To Guide Paper</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select> */
      }

      <section className="flex flex-col gap-4">
        {writings
          .sort((a, b) => new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime())
          .map((writing, idx) => (
            <BlurFade key={writing.title} delay={BLUR_FADE_DELAY * 2 + idx * 0.05 + 0.3}>
              <WritingCard
                title={writing.title}
                summary={writing.summary}
                dateStarted={writing.dateStarted}
                dateFinished={writing.dateFinished}
                category={writing.category}
                wordCount={writing.wordCount}
                coverImage={writing.coverImage}
                link={writing.link || "https://orcid.org/0009-0001-8312-6770"}
                Icon={writing.Icon}
                badges={writing.badges}
                type={writing.type}
              />
            </BlurFade>
          ))}
      </section>

      <BlurFade delay={BLUR_FADE_DELAY + 0.3}>
        <h2 className="filter grayscale !text-gray-500 scroll-m-20 text-xl font-semibold tracking-tight">Ideas</h2>
      </BlurFade>

      <section className="filter grayscale !text-gray-500 flex flex-col gap-4">
        {[...DATA.writings]
          .filter(writing => writing.type === "Idea")
          .sort((a, b) => new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime())
          .map((writing, idx) => (
            <BlurFade key={writing.title} delay={BLUR_FADE_DELAY * 2 + idx * 0.05 + 0.5}>
              <WritingCard
                title={writing.title}
                summary={writing.summary}
                dateStarted={writing.dateStarted}
                dateFinished={writing.dateFinished}
                category={writing.category}
                wordCount={writing.wordCount}
                coverImage={writing.coverImage}
                link={writing.link || "https://orcid.org/0009-0001-8312-6770"}
                Icon={writing.Icon}
                badges={writing.badges}
                type={writing.type}
              />
            </BlurFade>
          ))}
      </section>

    </section>
  );
}
