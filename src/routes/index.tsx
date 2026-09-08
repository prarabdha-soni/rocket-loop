import { createFileRoute } from "@tanstack/react-router";
import { Link2, ArrowUpRight, RefreshCw, ShieldAlert, Crosshair } from "lucide-react";
import { toast } from "sonner";

import { AppShell } from "@/components/app-shell";
import { Sparkline } from "@/components/sparkline";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { opportunities, competitors } from "@/data/gtm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Strategic Matrix — KotaWhey Nutrition, Kota" },
      {
        name: "description",
        content:
          "Kota market opportunity matrix and national brand deficiencies for KotaWhey Nutrition's regional protein distribution.",
      },
      { property: "og:title", content: "Strategic Matrix — KotaWhey Nutrition, Kota" },
      {
        property: "og:description",
        content: "Student-dense market openings and national brand gaps across Kota, Rajasthan.",
      },
    ],
  }),
  component: MatrixPage,
});

const toneMap = {
  emerald: { chip: "border-emerald/40 bg-emerald/10 text-emerald", stroke: "var(--emerald)" },
  primary: { chip: "border-primary/40 bg-primary/10 text-primary", stroke: "var(--primary)" },
  amber: { chip: "border-amber/40 bg-amber/10 text-amber", stroke: "var(--amber)" },
} as const;

const gapStyles: Record<string, string> = {
  "Pricing Gap": "border-destructive/40 bg-destructive/10 text-destructive",
  "Margin Gap": "border-amber/40 bg-amber/10 text-amber",
  "Distribution Gap": "border-primary/40 bg-primary/10 text-primary",
  "Product Format Gap": "border-border-strong bg-surface-raised text-muted-foreground",
};

function MatrixPage() {
  return (
    <AppShell
      title="Strategic Matrix"
      subtitle="Kota market openings and national brand deficiencies — refreshed 2 mins ago"
      actions={
        <>
          <Button variant="outline" size="sm">
            <RefreshCw className="size-3.5" /> Re-scan signals
          </Button>
          <Button size="sm">
            <ArrowUpRight className="size-3.5" /> Push to Execution
          </Button>
        </>
      }
    >
      <div className="grid gap-5 xl:grid-cols-3">
        <section className="xl:col-span-2">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-sm font-semibold tracking-tight">
              Kota Market Opportunity Matrix (Ranked by Student Density × Competitor Margins)
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {opportunities.map((o) => {
              const tone = toneMap[o.tone];
              return (
                <article
                  key={o.id}
                  className="group relative flex flex-col rounded-xl border border-border bg-card p-4 transition-all hover:border-border-strong hover:bg-surface-raised"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${tone.chip}`}
                    >
                      {o.tag}
                    </span>
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          aria-label="View verified data source"
                          className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                        >
                          <Link2 className="size-3.5" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent
                        side="top"
                        align="end"
                        className="w-72 border-border bg-popover text-xs leading-relaxed"
                      >
                        <div className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald">
                          <span className="size-1.5 rounded-full bg-emerald" /> Verified source
                        </div>
                        {o.source}
                      </PopoverContent>
                    </Popover>
                  </div>

                  <h3 className="mt-3 text-[15px] font-semibold leading-snug tracking-tight">
                    {o.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    {o.summary}
                  </p>

                  <div className="mt-4 flex items-end justify-between gap-4 border-t border-border pt-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {o.metricLabel}
                      </div>
                      <div className="mt-0.5 flex items-baseline gap-2">
                        <span className="font-mono text-xl font-semibold">{o.metricValue}</span>
                        <span className="text-[11px] text-emerald">{o.delta}</span>
                      </div>
                    </div>
                    <div className="w-[46%]">
                      <Sparkline data={o.trend} stroke={tone.stroke} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section>
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-sm font-semibold tracking-tight">
              National Brand Deficiencies (Kota Region)
            </h2>
            <span className="text-[11px] text-muted-foreground">Live</span>
          </div>

          <div className="flex flex-col gap-2.5">
            {competitors.map((c) => (
              <article
                key={c.id}
                className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-border-strong hover:bg-surface-raised"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight">{c.name}</h3>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{c.posture}</p>
                  </div>
                </div>
                <p className="mt-2.5 flex gap-2 text-[13px] leading-relaxed text-muted-foreground">
                  <ShieldAlert className="mt-0.5 size-3.5 shrink-0 text-destructive" />
                  {c.gap}
                </p>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${gapStyles[c.tag]}`}
                  >
                    {c.tag}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      toast.success(`Conquest playbook generated for ${c.name}`)
                    }
                  >
                    <Crosshair className="size-3.5" /> Target Weakness
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
