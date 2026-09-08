import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy, MessageCircle, Search, Download } from "lucide-react";
import { toast } from "sonner";

import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { leads, type Lead } from "@/data/gtm";

export const Route = createFileRoute("/pipeline")({
  head: () => ({
    meta: [
      { title: "Lead Pipeline Studio — KotaWhey Kota Accounts" },
      {
        name: "description",
        content:
          "High-density table of Kota gyms, wholesalers and hostels with one-tap localized WhatsApp outreach drafts.",
      },
      { property: "og:title", content: "Lead Pipeline Studio — KotaWhey Kota Accounts" },
      {
        property: "og:description",
        content: "Target regional Kota accounts and draft localized WhatsApp outreach instantly.",
      },
    ],
  }),
  component: PipelinePage,
});

function PipelinePage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Lead | null>(null);
  const [copied, setCopied] = useState(false);

  const rows = leads.filter((l) =>
    `${l.name} ${l.pain} ${l.territory} ${l.type}`.toLowerCase().includes(query.toLowerCase()),
  );

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("WhatsApp message copied to clipboard");
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      toast.error("Clipboard unavailable in this browser");
    }
  }

  return (
    <AppShell
      title="Lead Pipeline Studio"
      subtitle={`${leads.length} key regional accounts · outreach drafted from detected pain points`}
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
          <table className="w-full min-w-[960px] text-sm">
            <thead>
              <tr className="border-b border-border bg-surface text-left text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                <th className="px-5 py-3 font-semibold">Account Name</th>
                <th className="px-5 py-3 font-semibold">Territory</th>
                <th className="px-5 py-3 font-semibold">Lead Type</th>
                <th className="px-5 py-3 font-semibold">Primary Pain Point</th>
                <th className="px-5 py-3 text-right font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((l) => (
                <tr key={l.id} className="group transition-colors hover:bg-surface-raised/60">
                  <td className="px-5 py-3.5 align-top">
                    <div className="font-medium">{l.name}</div>
                    <div className="mt-0.5 text-[11px] text-muted-foreground">{l.contact}</div>
                  </td>
                  <td className="px-5 py-3.5 align-top">
                    <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {l.territory}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 align-top text-[13px] text-muted-foreground">
                    {l.type}
                  </td>
                  <td className="max-w-[360px] px-5 py-3.5 align-top text-[13px] leading-relaxed text-muted-foreground">
                    {l.pain}
                  </td>
                  <td className="px-5 py-3.5 text-right align-top">
                    <Button size="sm" onClick={() => setActive(l)} className="min-w-[158px] justify-center">
                      <MessageCircle className="size-3.5" /> Draft WhatsApp
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
        <SheetContent className="w-[35%] min-w-[380px] gap-0 overflow-y-auto border-border bg-background p-0 sm:max-w-none">
          {active && (
            <>
              <SheetHeader className="border-b border-border p-6">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald">
                  <MessageCircle className="size-3.5" /> WhatsApp outreach
                </div>
                <SheetTitle className="mt-1 text-lg">{active.name}</SheetTitle>
                <SheetDescription className="text-sm">
                  {active.territory} · {active.type}
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
                      <MessageCircle className="size-3.5 text-emerald" /> WhatsApp message
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copy(active.whatsapp)}
                    >
                      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                      [Copy to Clipboard]
                    </Button>
                  </div>
                  <pre className="whitespace-pre-wrap px-4 py-3 font-sans text-[13px] leading-relaxed text-muted-foreground">
                    {active.whatsapp}
                  </pre>
                </section>

                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    onClick={() => toast.success("Message queued for WhatsApp send", { description: active.name })}
                  >
                    Queue message
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
