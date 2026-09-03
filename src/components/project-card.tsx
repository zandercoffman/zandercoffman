import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/60 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_30px_60px_-30px_rgba(68,90,255,0.45)] dark:border-white/10 dark:bg-white/[0.035]"
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer overflow-hidden", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-44 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-44 w-full overflow-hidden object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </Link>
      <CardHeader className="mt-4 px-5">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-lg tracking-tight">{title}</CardTitle>
          <time className="font-sans text-xs uppercase tracking-[0.1em] text-muted-foreground">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-5">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags?.map((tag) => (
              <Badge
                className="rounded-full border-none bg-primary/10 px-2.5 py-0.5 text-[11px] text-primary hover:bg-primary/20 dark:bg-primary/15"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-5 pb-4">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-2">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex rounded-full border border-border/70 bg-white/70 px-2.5 py-1 text-[11px] text-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground dark:bg-white/5">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
