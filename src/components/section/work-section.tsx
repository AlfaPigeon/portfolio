/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none bg-white"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  const workGroups = [
    {
      key: "Professional Experience",
      label: "Professional Experience",
      accent: "border-blue-500/30 bg-blue-500/5 text-blue-600 dark:text-blue-400",
      items: DATA.work.filter((item) => item.category === "Professional Experience"),
    },
    {
      key: "Independent Ventures",
      label: "Independent Ventures",
      accent: "border-amber-500/30 bg-amber-500/5 text-amber-600 dark:text-amber-400",
      items: DATA.work.filter((item) => item.category === "Independent Ventures"),
    },
    {
      key: "Internships",
      label: "Internships",
      accent: "border-violet-500/30 bg-violet-500/5 text-violet-600 dark:text-violet-400",
      items: DATA.work.filter((item) => item.category === "Internships"),
    },
  ];

  return (
    <div className="space-y-8">
      {workGroups.map((group) =>
        group.items.length > 0 ? (
          <div key={group.key} className="space-y-3">
            <div className="flex items-center gap-2">
              <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]", group.accent)}>
                {group.label}
              </span>
            </div>

            <Accordion type="single" collapsible className="w-full grid gap-4">
              {group.items.map((work) => (
                <AccordionItem
                  key={`${group.key}-${work.company}`}
                  value={`${group.key}-${work.company}`}
                  className="w-full border-b-0 grid gap-2 rounded-xl border border-border/70 bg-background/70 p-3 shadow-sm"
                >
                  <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
                    <div className="flex items-center gap-x-3 justify-between w-full text-left">
                      <div className="flex items-center gap-x-3 flex-1 min-w-0">
                        <LogoImage src={work.logoUrl} alt={work.company} />
                        <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                          <div className="font-semibold leading-none flex items-center gap-2">
                            {work.company}
                            <span className="relative inline-flex items-center w-3.5 h-3.5">
                              <ChevronRight
                                className={cn(
                                  "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                                  "translate-x-0 opacity-0",
                                  "group-hover:translate-x-1 group-hover:opacity-100",
                                  "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                                )}
                              />
                              <ChevronDown
                                className={cn(
                                  "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                                  "opacity-0 rotate-0",
                                  "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                                )}
                              />
                            </span>
                          </div>
                          <div className="font-sans text-sm text-muted-foreground">
                            {work.title}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                        <span>
                          {work.start} - {work.end ?? DATA.sections.work.presentLabel}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
                    {work.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ) : null
      )}
    </div>
  );
}

