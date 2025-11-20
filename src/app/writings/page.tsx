"use client"
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { WritingCard } from "@/components/WritingCard"; // if using your card component


const BLUR_FADE_DELAY = 0.04;

export default function PapersPage() {
  const writings = DATA.writings;

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

      <section className="flex flex-col gap-2">
        {[...DATA.writings]
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
              />
            </BlurFade>
          ))}
      </section>

    </section>
  );
}
