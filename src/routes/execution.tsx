import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, CircleDot, Loader2, Rocket, Filter } from "lucide-react";
import { toast } from "sonner";

import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { milestones } from "@/data/gtm";

export const Route = createFileRoute("/execution")({
  head: () => ({
    meta: [
      { title: "Execution Engine — KotaWhey Kota Field Milestones" },
      {
        name: "description",
        content:
          "Deploy local field agents against KotaWhey's three regional distribution milestones across Kota, Rajasthan.",
      },
      { property: "og:title", content: "Execution Engine — KotaWhey Kota Field Milestones" },
      {
        property: "og:description",
        content: "Trackable regional milestones with deployable agents on every task.",
      },
    ],
  }),
  component: ExecutionPage,
});

const statusStyles: Record<string, string> = {
  "In flight": "border-primary/40 bg-primary/10 text-primary",
  Queued: "border-border-strong bg-surface-raised text-muted-foreground",
  Blocked: "border-destructive/40 bg-destructive/10 text-destructive",
};

function ExecutionPage() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [dispatched, setDispatched] = useState<Record<string, boolean>>({});
  const [running, setRunning] = useState<string | null>(null);

  const total = milestones.reduce((n, m) => n + m.tasks.length, 0);
  const completed = Object.values(done).filter(Boolean).length;

  function runAction(taskId: string, title: string) {
    setRunning(taskId);
    window.setTimeout(() => {
      setRunning(null);
      setDispatched((d) => ({ ...d, [taskId]: true }));
      setDone((d) => ({ ...d, [taskId]: true }));
      toast.success("Agent Dispatched", { description: title });
    }, 1100);
  }

  return (
    <AppShell
      title="Execution Engine"
      subtitle={`${completed} of ${total} tasks executed across 3 active Kota field milestones`}
      actions={
        <>
          <Button variant="outline" size="sm">
            <Filter className="size-3.5" /> All pods
          </Button>
          <Button size="sm">
            <Rocket className="size-3.5" /> New milestone
          </Button>
        </>
      }
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-[19px] top-4 bottom-4 hidden w-px bg-border sm:block" />
        <div className="flex flex-col gap-5">
          {milestones.map((m) => (
            <div key={m.id} className="relative sm:pl-14">
              <div className="absolute left-0 top-5 hidden size-10 items-center justify-center rounded-full border border-border bg-surface-raised font-mono text-xs text-muted-foreground sm:flex">
                {m.index}
              </div>

              <section className="overflow-hidden rounded-xl border border-border bg-card">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border px-5 py-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${statusStyles[m.status]}`}
                      >
                        {m.status}
                      </span>
                      <span className="text-[11px] text-muted-foreground">{m.focus}</span>
                      <span className="text-[11px] text-muted-foreground">· {m.owner}</span>
                    </div>
                    <h2 className="mt-2 text-base font-semibold tracking-tight">{m.title}</h2>
                  </div>
                  <div className="w-40">
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                      <span>Progress</span>
                      <span className="font-mono text-foreground">{m.progress}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-raised">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${m.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                <ul className="divide-y divide-border">
                  {m.tasks.map((t) => {
                    const isDone = !!done[t.id];
                    const isRunning = running === t.id;
                    const isDispatched = !!dispatched[t.id];
                    return (
                      <li
                        key={t.id}
                        className="flex flex-wrap items-center gap-3 px-5 py-3.5 transition-colors hover:bg-surface-raised/60"
                      >
                        <button
                          type="button"
                          onClick={() => setDone((d) => ({ ...d, [t.id]: !d[t.id] }))}
                          aria-label={isDone ? "Mark task incomplete" : "Mark task complete"}
                          className={`flex size-[18px] shrink-0 items-center justify-center rounded-[5px] border transition-colors ${
                            isDone
                              ? "border-emerald bg-emerald text-emerald-foreground"
                              : "border-border-strong hover:border-primary"
                          }`}
                        >
                          {isDone ? <Check className="size-3" strokeWidth={3} /> : null}
                        </button>

                        <div className="min-w-0 flex-1">
                          <p
                            className={`truncate text-sm ${isDone ? "text-muted-foreground line-through" : ""}`}
                          >
                            {t.title}
                          </p>
                          <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                            <CircleDot className="size-3" /> {t.meta}
                          </p>
                        </div>

                        <Button
                          size="sm"
                          variant={isDispatched ? "outline" : "default"}
                          disabled={isRunning || isDispatched}
                          onClick={() => runAction(t.id, t.title)}
                          className={`ml-auto min-w-[164px] justify-center ${
                            isDispatched
                              ? "border-emerald/40 bg-emerald/10 text-emerald hover:bg-emerald/10 hover:text-emerald"
                              : ""
                          }`}
                        >
                          {isRunning ? (
                            <>
                              <Loader2 className="size-3.5 animate-spin" /> Deploying…
                            </>
                          ) : isDispatched ? (
                            <>
                              <Check className="size-3.5" /> Agent Dispatched
                            </>
                          ) : (
                            <>
                              <Rocket className="size-3.5" /> Deploy Agent
                            </>
                          )}
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
