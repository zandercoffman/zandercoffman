"use client"
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { WritingCard } from "@/components/WritingCard";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col gap-7 pb-24 sm:gap-9 sm:pb-28">
      <section id="hero" className="section-shell relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 right-[-10%] h-64 w-64 rounded-full bg-violet-500/25 blur-3xl dark:bg-violet-500/15" />
        <div className="pointer-events-none absolute -bottom-24 left-[-8%] h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/10" />
        <div className="grid items-center gap-8 md:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Badge className="rounded-full bg-foreground/5 px-4 py-1.5 text-[11px] font-medium tracking-[0.12em] uppercase text-foreground/70 dark:bg-white/10 dark:text-white/75">
                Creative Developer Portfolio
              </Badge>
            </BlurFade>
            <div className="space-y-3">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl"
                yOffset={8}
                text={`Hi, I’m ${DATA.name.split(" ")[0]}`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
                  <span className="gradient-text font-semibold">Futuristic, human-centered</span>{" "}
                  interfaces crafted with intention, motion, and clean engineering.
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">{DATA.description}</p>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="rounded-full px-3 py-1 text-[11px]">Based in {DATA.location}</Badge>
                <Badge variant="secondary" className="rounded-full px-3 py-1 text-[11px]">Open to impactful builds</Badge>
                <Badge variant="secondary" className="rounded-full px-3 py-1 text-[11px]">Faith-driven builder</Badge>
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 2} className="mx-auto w-full max-w-sm">
            <div className="glass-panel relative flex flex-col items-center gap-4 p-6 text-center">
              <Avatar className="size-28 border border-white/30 shadow-2xl shadow-indigo-500/20">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h2 className="text-lg font-semibold tracking-tight">{DATA.name}</h2>
                <p className="text-sm text-muted-foreground">{DATA.location}</p>
              </div>
              <div className="flex w-full items-center justify-between rounded-xl border border-white/20 bg-white/40 px-3 py-2 text-xs text-muted-foreground dark:bg-white/5">
                <span>Projects shipped</span>
                <span className="font-semibold text-foreground">{DATA.projects.length}</span>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="about" className="section-shell space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="section-title">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-none text-pretty font-sans text-sm leading-relaxed text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section id="work" className="section-shell space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="section-title">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
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

        <section id="education" className="section-shell space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="section-title">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
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
      </div>

      <section id="skills" className="section-shell space-y-5">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="section-title">Skills</h2>
        </BlurFade>
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(DATA.skills).map(([category, skills], categoryIndex) => (
            <div key={category} className="rounded-2xl border border-white/20 bg-white/40 p-4 dark:border-white/10 dark:bg-white/5">
              <BlurFade
                delay={BLUR_FADE_DELAY * 10 + categoryIndex * 0.1}
              >
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground/80">{category}</h3>
              </BlurFade>
              <div className="flex flex-wrap gap-1.5">
                {([...skills] as string[]).map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={
                      BLUR_FADE_DELAY * 10 +
                      categoryIndex * 0.1 +
                      (id + 1) * 0.03
                    }
                  >
                    <Badge key={skill} variant="secondary" className="rounded-full px-2.5 py-0.5 text-[11px]">{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell space-y-7">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="space-y-2">
            <div className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Featured Builds
            </div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Cinematic products with practical impact
            </h2>
            <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
              A curated set of projects where interaction design, engineering, and usability are treated as one system.
            </p>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <div className="grid gap-6 lg:grid-cols-3">
        <section id="activites" className="section-shell space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="section-title">Activities</h2>
          </BlurFade>
          {DATA.activites.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </section>
        <section id="certificates" className="section-shell space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="section-title">Certificates</h2>
          </BlurFade>
          {DATA.certificates.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`Issued in ${education.start}`}
                isCert={education.location}
              />
            </BlurFade>
          ))}
        </section>
        <section id="awards" className="section-shell space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="section-title">Awards</h2>
          </BlurFade>
          {DATA.awards.map((education, id) => (
            <BlurFade
              key={education.title}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.title}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.title}
                title={education.title}
                subtitle={education.description}
                period={`Issued in ${education.start}`}
                isCert={education.location}
              />
            </BlurFade>
          ))}
        </section>
      </div>

      <section id="writing" className="section-shell space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="section-title">Featured Papers</h2>
        </BlurFade>
        {DATA.writings.filter(w => w.type === "written").slice(0, 2).map((writing, id) => (
          <BlurFade
            key={id}
            delay={BLUR_FADE_DELAY * 8 + id * 0.05}
          >
            <WritingCard
              title={writing.title}
              summary={writing.summary}
              dateStarted={writing.dateStarted}
              dateFinished={writing.dateFinished}
              category={writing.category}
              wordCount={writing.wordCount}
              coverImage={writing.coverImage}
              link={writing.link}
              Icon={writing.Icon}
              badges={writing.badges} type={writing.type} />
          </BlurFade>
        ))}
      </section>

      <section id="hackathons" className="section-shell space-y-7">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="space-y-2 text-center">
            <div className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Hackathons
            </div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Fast teams, tight deadlines, real outcomes</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground sm:text-base">
              I’ve attended {DATA.hackathons.length}+ hackathons where rapid collaboration and execution shaped how I design and ship software.
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <ul className="mb-2 ml-4 divide-y divide-dashed border-l border-border/70">
            {DATA.hackathons
              .slice()
              .sort((a, b) => parseInt(b.dates) - parseInt(a.dates))
              .map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
          </ul>
        </BlurFade>
      </section>

      <footer id="footer" className="section-shell mt-2">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium tracking-tight">{DATA.name}</p>
              <p className="text-xs text-muted-foreground">
                Crafted with care, motion, and purpose — © {new Date().getFullYear()}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(DATA.contact.social)
                .filter(([_, social]) => social.navbar)
                .map(([name, social]) => (
                  <Link
                    key={name}
                    href={social.url.startsWith("http") || social.url.startsWith("mailto:")
                      ? social.url
                      : `https://${social.url}`}
                    className="rounded-full border border-border/70 bg-white/60 px-3 py-1.5 text-xs text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {name}
                  </Link>
                ))}
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
