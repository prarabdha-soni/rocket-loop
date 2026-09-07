import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy, Mail, Linkedin, Sparkles, Search, Download } from "lucide-react";
import { toast } from "sonner";

import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { leads, type Lead } from "@/data/gtm";

export const Route = createFileRoute("/pipeline")({
  head: () => ({
    meta: [
      { title: "Lead Pipeline Studio — SignalOS ICP Accounts" },
      {
        name: "description",
        content:
          "Dense ICP account table with AI-detected pain points and one-click personalized outreach drafting.",
      },
      { property: "og:title", content: "Lead Pipeline Studio — SignalOS ICP Accounts" },
      {
        property: "og:description",
        content: "Target enterprise accounts and draft hyper-personalized outreach instantly.",
      },
    ],
  }),
  component: PipelinePage,
});

const tierStyles: Record<string, string> = {
  "Tier 1": "border-emerald/40 bg-emerald/10 text-emerald",
  "Tier 2": "border-primary/40 bg-primary/10 text-primary",
  "Tier 3": "border-border-strong bg-surface-raised text-muted-foreground",
};

function PipelinePage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Lead | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const rows = leads.filter((l) =>
    `${l.company} ${l.pain} ${l.contact} ${l.industry}`.toLowerCase().includes(query.toLowerCase()),
  );

  async function copy(key: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      toast.success("Copied to clipboard");
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      toast.error("Clipboard unavailable in this browser");
    }
  }

  return (
    <AppShell
      title="Lead Pipeline Studio"
      subtitle={`${leads.length} ICP-matched enterprise accounts · outreach generated from detected pain signals`}
      actions={
        <>
          <div className="relative">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter accounts…"
              className="h-9 w-56 bg-surface pl-8 text-sm"
            />
          </div>
          <Button variant="outline" size="sm">
            <Download className="size-3.5" /> Export
          </Button>
        </>
      }
    >
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1040px] text-sm">
            <thead>
              <tr className="border-b border-border bg-surface text-left text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                <th className="px-5 py-3 font-semibold">Company</th>
                <th className="px-5 py-3 font-semibold">ICP tier</th>
                <th className="px-5 py-3 font-semibold">AI-detected pain point</th>
                <th className="px-5 py-3 font-semibold">Decision maker</th>
                <th className="px-5 py-3 text-right font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((l) => (
                <tr key={l.id} className="group transition-colors hover:bg-surface-raised/60">
                  <td className="px-5 py-3.5 align-top">
                    <div className="font-medium">{l.company}</div>
                    <div className="mt-0.5 text-[11px] text-muted-foreground">{l.industry}</div>
                  </td>
                  <td className="px-5 py-3.5 align-top">
                    <span
                      className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${tierStyles[l.tier]}`}
                    >
                      {l.tier}
                    </span>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <div className="h-1 w-16 overflow-hidden rounded-full bg-surface-raised">
                        <div className="h-full bg-primary" style={{ width: `${l.fit}%` }} />
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground">{l.fit}</span>
                    </div>
                  </td>
                  <td className="max-w-[380px] px-5 py-3.5 align-top text-[13px] leading-relaxed text-muted-foreground">
                    {l.pain}
                  </td>
                  <td className="px-5 py-3.5 align-top">
                    <div className="font-medium">{l.contact}</div>
                    <div className="mt-0.5 text-[11px] text-muted-foreground">{l.role}</div>
                  </td>
                  <td className="px-5 py-3.5 text-right align-top">
                    <Button size="sm" onClick={() => setActive(l)} className="min-w-[150px] justify-center">
                      <Sparkles className="size-3.5" /> [Draft Outreach]
                    </Button>
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-10 text-center text-sm text-muted-foreground">
                    No accounts match “{query}”.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Sheet open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <SheetContent className="w-full gap-0 overflow-y-auto border-border bg-background p-0 sm:max-w-xl">
          {active && (
            <>
              <SheetHeader className="border-b border-border p-6">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                  <Sparkles className="size-3.5" /> Generated sequence
                </div>
                <SheetTitle className="mt-1 text-lg">{active.company}</SheetTitle>
                <SheetDescription className="text-sm">
                  {active.contact} · {active.role}
                </SheetDescription>
                <div className="mt-3 rounded-lg border border-border bg-surface p-3 text-[13px] leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Pain signal · </span>
                  {active.pain}
                </div>
              </SheetHeader>

              <div className="space-y-5 p-6">
                <section className="overflow-hidden rounded-xl border border-border bg-card">
                  <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <Mail className="size-3.5 text-primary" /> Step 1 · Email
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        copy("email", `Subject: ${active.email.subject}\n\n${active.email.body}`)
                      }
                    >
                      {copied === "email" ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                      [Copy to Clipboard]
                    </Button>
                  </div>
                  <div className="px-4 py-3">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Subject</div>
                    <div className="mt-0.5 text-sm font-medium">{active.email.subject}</div>
                    <pre className="mt-3 whitespace-pre-wrap font-sans text-[13px] leading-relaxed text-muted-foreground">
                      {active.email.body}
                    </pre>
                  </div>
                </section>

                <section className="overflow-hidden rounded-xl border border-border bg-card">
                  <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <Linkedin className="size-3.5 text-emerald" /> Step 2 · LinkedIn (Day 3)
                    </div>
                    <Button size="sm" variant="outline" onClick={() => copy("li", active.linkedin)}>
                      {copied === "li" ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                      [Copy to Clipboard]
                    </Button>
                  </div>
                  <p className="px-4 py-3 text-[13px] leading-relaxed text-muted-foreground">
                    {active.linkedin}
                  </p>
                </section>

                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    onClick={() => toast.success("Sequence queued", { description: active.company })}
                  >
                    Queue sequence
                  </Button>
                  <Button variant="outline" onClick={() => setActive(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </AppShell>
  );
}
