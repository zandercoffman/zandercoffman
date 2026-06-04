"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DATA } from "@/data/resume";
import { ArrowRight, ExternalLink, Github, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

type SkillItem = string | { name: string; level?: "Advanced" | "Proficient" | "Familiar" | string };

const levelClassMap: Record<string, string> = {
  Advanced: "border-emerald-500/50 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  Proficient: "border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-300",
  Familiar: "border-violet-500/50 bg-violet-500/10 text-violet-700 dark:text-violet-300",
};

export default function Page() {
  const featuredProjects = DATA.projects.filter((project) => project.active).slice(0, 3);
  const projectCount = DATA.projects.length;
  const certificateCount = DATA.certificates.length;
  const githubUrl = DATA.contact.social.GitHub.url;

  return (
    <main className="flex min-h-[100dvh] flex-col gap-14 pb-16 sm:gap-20">
      <section id="hero" className="relative overflow-hidden rounded-3xl border bg-card/70 p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.14),transparent_45%)]" />
        <div className="relative mx-auto flex w-full flex-col gap-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl space-y-4">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Badge variant="outline" className="gap-2 rounded-full px-3 py-1 text-xs">
                  <Sparkles className="size-3" />
                  Open to internships and junior SWE roles
                </Badge>
              </BlurFade>
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-3xl font-bold tracking-tight sm:text-5xl"
                text="Building thoughtful software experiences that ship and scale."
                yOffset={8}
              />
              <BlurFadeText
                className="max-w-[650px] text-sm text-muted-foreground sm:text-base"
                delay={BLUR_FADE_DELAY * 3}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Button asChild size="lg" className="group">
                    <Link href="#projects">
                      View Projects
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href={`mailto:${DATA.contact.email}`}>
                      <Mail className="mr-2 size-4" />
                      Contact Me
                    </Link>
                  </Button>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Avatar className="size-24 border-2 border-background shadow-lg sm:size-32">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>

          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="grid gap-3 sm:grid-cols-3">
              <Card className="border-border/60 bg-background/70">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Projects Shipped</CardTitle>
                </CardHeader>
                <CardContent className="text-2xl font-semibold">{projectCount}+</CardContent>
              </Card>
              <Card className="border-border/60 bg-background/70">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Certifications</CardTitle>
                </CardHeader>
                <CardContent className="text-2xl font-semibold">{certificateCount}</CardContent>
              </Card>
              <Card className="border-border/60 bg-background/70">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Based In</CardTitle>
                </CardHeader>
                <CardContent className="text-2xl font-semibold">{DATA.location}</CardContent>
              </Card>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="featured-projects" aria-labelledby="featured-projects-heading" className="space-y-5">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="space-y-2">
            <h2 id="featured-projects-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
              Featured Projects
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
              Products focused on usability, measurable outcomes, and clean engineering fundamentals.
            </p>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {featuredProjects.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 7 + id * 0.05}>
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
                achievements={project.achievements}
                featured
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="about" aria-labelledby="about-heading" className="space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <h2 id="about-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
            About
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <Markdown className="prose prose-sm max-w-none text-pretty text-muted-foreground dark:prose-invert sm:prose-base">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="skills" aria-labelledby="skills-heading" className="space-y-5">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 id="skills-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2 text-xs">
              <Badge className={levelClassMap.Advanced}>Advanced</Badge>
              <Badge className={levelClassMap.Proficient}>Proficient</Badge>
              <Badge className={levelClassMap.Familiar}>Familiar</Badge>
            </div>
          </div>
        </BlurFade>
        <div className="grid gap-3 sm:grid-cols-2">
          {Object.entries(DATA.skills).map(([category, skills], categoryIndex) => (
            <BlurFade key={category} delay={BLUR_FADE_DELAY * 11 + categoryIndex * 0.05}>
              <Card className="h-full border-border/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {(skills as SkillItem[]).map((skill) => {
                    const isObject = typeof skill !== "string";
                    const name = isObject ? skill.name : skill;
                    const level = isObject ? skill.level ?? "Familiar" : "Familiar";
                    return (
                      <Badge
                        key={`${category}-${name}`}
                        variant="outline"
                        className={levelClassMap[level] ?? levelClassMap.Familiar}
                      >
                        {name}
                      </Badge>
                    );
                  })}
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="projects" aria-labelledby="all-projects-heading" className="space-y-5">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <h2 id="all-projects-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
            All Projects
          </h2>
        </BlurFade>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DATA.projects.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 13 + id * 0.04}>
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
                achievements={project.achievements}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="experience" aria-labelledby="experience-heading" className="space-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <h2 id="experience-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
            Experience
          </h2>
        </BlurFade>
        {DATA.work.map((work, id) => (
          <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
            <ResumeCard
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
              skills={[...work.skills]}
            />
          </BlurFade>
        ))}
      </section>

      <section id="education" aria-labelledby="education-heading" className="space-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <h2 id="education-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
            Education
          </h2>
        </BlurFade>
        {DATA.education.map((education, id) => (
          <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 17 + id * 0.05}>
            <ResumeCard
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
              description={education.description}
            />
          </BlurFade>
        ))}
      </section>

      <section id="certifications" aria-labelledby="certifications-heading" className="space-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <h2 id="certifications-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
            Certifications
          </h2>
        </BlurFade>
        {DATA.certificates.map((certificate, id) => (
          <BlurFade key={certificate.school} delay={BLUR_FADE_DELAY * 19 + id * 0.05}>
            <ResumeCard
              href={certificate.href}
              logoUrl={certificate.logoUrl}
              altText={certificate.school}
              title={certificate.school}
              subtitle={certificate.degree}
              period={`Issued in ${certificate.start}`}
              isCert={certificate.location}
            />
          </BlurFade>
        ))}
      </section>

      <section id="github-stats" aria-labelledby="github-stats-heading" className="space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 20}>
          <h2 id="github-stats-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
            GitHub Statistics
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 21}>
          <Card className="border-border/60">
            <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Explore code, commits, and open-source work.</p>
                <p className="text-sm text-muted-foreground">{githubUrl.replace("https://", "")}</p>
              </div>
              <Button asChild variant="outline">
                <Link href={githubUrl} target="_blank" rel="noreferrer">
                  <Github className="mr-2 size-4" />
                  Visit GitHub
                  <ExternalLink className="ml-2 size-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </BlurFade>
      </section>

      <section id="contact" aria-labelledby="contact-heading" className="space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 22}>
          <h2 id="contact-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
            Contact
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 23}>
          <Card className="border-border/60">
            <CardContent className="space-y-4 p-5">
              <p className="text-sm text-muted-foreground">
                Looking for an intern or junior engineer who can contribute quickly and grow with your team? Let&apos;s connect.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={`mailto:${DATA.contact.email}`}>
                    <Mail className="mr-2 size-4" />
                    Email Me
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={githubUrl} target="_blank" rel="noreferrer">
                    <Github className="mr-2 size-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noreferrer">
                    LinkedIn
                    <ExternalLink className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </BlurFade>
      </section>
    </main>
  );
}
