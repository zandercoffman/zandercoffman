import { cn } from "@/lib/utils"

export default function CalendarBookTime({
    className,
    url
}: {
    className?: string,
    url: string
}) {
    return <iframe
    src={url} style={{border: 0}} className={cn("rounded-xl", className)}/>
}