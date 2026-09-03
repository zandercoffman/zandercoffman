import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <li className="relative ml-10 py-5">
      <div className="absolute -left-16 top-3 flex items-center justify-center rounded-full bg-white/70 dark:bg-white/10">
        <Avatar className="m-auto size-12 border border-white/30 shadow-lg dark:border-white/20">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="glass-panel flex flex-1 flex-col justify-start gap-1 p-4">
        {dates && (
          <time className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none tracking-tight">{title}</h2>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        {description && (
          <span className="prose text-sm text-muted-foreground dark:prose-invert">
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex rounded-full border border-border/80 bg-white/70 px-2.5 py-1 text-[11px] dark:bg-white/[0.05]">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
