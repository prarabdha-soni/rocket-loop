import { Link } from "@tanstack/react-router";
import { Activity, LayoutGrid, Users, Radar, Command, Dumbbell } from "lucide-react";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Strategic Matrix", desc: "Market · Brands", icon: LayoutGrid },
  { to: "/execution", label: "Execution Engine", desc: "Milestones · Agents", icon: Activity },
  { to: "/pipeline", label: "Lead Pipeline Studio", desc: "Accounts · WhatsApp", icon: Users },
] as const;

export function AppShell({
  title,
  subtitle,
  actions,
  children,
}: {
  title: string;
  subtitle: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="sticky top-0 hidden h-screen w-[264px] shrink-0 flex-col border-r border-border bg-sidebar lg:flex">
        <div className="flex items-center gap-2.5 px-5 py-5">
          <div className="flex size-8 items-center justify-center rounded-md bg-primary">
            <Dumbbell className="size-4 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">KotaWhey Nutrition</div>
            <div className="text-[11px] text-muted-foreground">Kota Distribution Command</div>
          </div>
        </div>

        <div className="px-3 pb-2 pt-1">
          <div className="flex items-center justify-between rounded-md border border-border bg-surface px-2.5 py-1.5 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Command className="size-3" /> Quick jump
            </span>
            <kbd className="rounded border border-border px-1 font-mono text-[10px]">⌘K</kbd>
          </div>
        </div>

        <nav className="mt-2 flex flex-col gap-1 px-3">
          <div className="px-2 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Workspace
          </div>
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group flex items-start gap-2.5 rounded-md px-2.5 py-2 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent data-[status=active]:bg-sidebar-accent data-[status=active]:text-sidebar-accent-foreground"
              activeProps={{ "data-status": "active" }}
            >
              <item.icon className="mt-0.5 size-4 text-muted-foreground transition-colors group-hover:text-primary group-data-[status=active]:text-primary" />
              <span className="leading-tight">
                <span className="block font-medium">{item.label}</span>
                <span className="block text-[11px] text-muted-foreground">{item.desc}</span>
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto p-3">
          <div className="rounded-lg border border-border bg-surface p-3">
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald" />
              <span className="text-xs font-medium">8 local agents live</span>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
              Signals refreshed 2 mins ago across 142 tracked gyms & retailers in Kota.
            </p>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-2 border-b border-border bg-surface px-6 py-2 text-[11px] text-muted-foreground lg:px-8">
          <Radar className="size-3 text-emerald" />
          <span>
            <span className="font-medium text-foreground">8 local agents live</span>
            {"  |  "}Signals refreshed 2 mins ago across{" "}
            <span className="font-medium text-foreground">142 tracked gyms & retailers</span> in
            Kota
          </span>
        </div>
        <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
          <div className="flex flex-wrap items-end justify-between gap-4 px-6 py-5 lg:px-8">
            <div>
              <h1 className="text-[22px] font-semibold tracking-tight">{title}</h1>
              <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            </div>
            <div className="flex items-center gap-2">{actions}</div>
          </div>
          <div className="flex gap-1 overflow-x-auto border-t border-border px-4 py-2 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent data-[status=active]:bg-accent data-[status=active]:text-foreground"
                activeProps={{ "data-status": "active" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </header>
        <main className="flex-1 px-6 py-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
