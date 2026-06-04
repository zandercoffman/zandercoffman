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
  achievements?: readonly string[];
  featured?: boolean;
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
  achievements,
  featured,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "group flex h-full flex-col overflow-hidden border border-border/70 bg-card/90 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
      }
    >
      <Link
        href={href || "#"}
        className={cn("relative block cursor-pointer", className)}
      >
        {featured && (
          <div className="absolute left-3 top-3 z-10 rounded-full bg-foreground/90 px-2 py-1 text-[10px] font-semibold text-background">
            Featured
          </div>
        )}
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-44 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-44 w-full overflow-hidden object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </Link>
      <CardHeader className="mt-4 px-4">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base leading-tight">{title}</CardTitle>
          <time className="font-sans text-xs text-muted-foreground">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose prose-sm max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-4">
        {achievements && achievements.length > 0 && (
          <ul className="space-y-1 pb-2 text-xs text-muted-foreground">
            {achievements.map((achievement) => (
              <li key={achievement} className="flex gap-2">
                <span className="mt-1 inline-block size-1.5 rounded-full bg-primary/80" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-2 py-0.5 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-4 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  className="flex gap-2 border border-border/60 bg-background px-2 py-1 text-[10px] transition-colors hover:bg-muted"
                >
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
