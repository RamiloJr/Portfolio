
import { Code2, Server, Database, Network, Cloud, Download } from "lucide-react";
import Image from "next/image";
import SideNav from "@/components/SideNav";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Promotional Website Platform",
    period: "Mar – May 2026",
    description:
      "A multi-tenant promotional web platform: subdomain-routed tenant sites assembled from modular components, with an admin dashboard that lets non-technical staff manage branding and content without a developer.",
    bullets: [
      "Architected the platform on NestJS and Prisma with a Next.js frontend, deployed across Vercel and Render with CORS and security middleware configured for production.",
      "Built full CRUD tenant management, subdomain proxy routing, a tenant directory landing page, and per-tenant pages assembled from modular UI sections (Hero, Lead Form, Project Gallery).",
      "Shipped an admin dashboard for branding and content control, with image uploads through Supabase Storage and configurable section ordering.",
    ],
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Supabase Storage", "Vercel", "Render"],
    links: [
      { label: "starblue.vercel.app", href: "https://starblue.vercel.app" },
      { label: "stjosephapdc.vercel.app", href: "https://stjosephapdc.vercel.app" },
    ],
  },
  {
    title: "Inventory Management System",
    period: "Mar – May 2026",
    description:
      "A live inventory application with multi-organization support — organizations can switch context, invite members, and manage stock independently within a shared Supabase-backed system.",
    bullets: [
      "Built authentication (login, registration, password reset), a dashboard with sidebar navigation, and a full inventory table with add, edit, and delete modals.",
      "Implemented multi-organization support: organization switching, invitation management, onboarding flows, and context-aware UI, within the constraints of Supabase's free tier.",
      "Added a PWA install prompt, activity reporting, and account settings with profile management and avatar upload.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    links: [
      { label: "Live app", href: "https://frontend-umber-nine-47.vercel.app" },
      { label: "Frontend repo", href: "https://github.com/RamiloJr/frontend" },
      { label: "Backend repo", href: "https://github.com/RamiloJr/backend" },
    ],
  },
];

const skillGroups = [
  {
    label: "Frontend",
    icon: Code2,
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    label: "Backend",
    icon: Server,
    items: ["NestJS", "Node.js", "Prisma ORM", "REST API design"],
  },
  {
    label: "Database & storage",
    icon: Database,
    items: ["Supabase (PostgreSQL)", "Supabase Auth", "Supabase Storage"],
  },
  {
    label: "Architecture",
    icon: Network,
    items: ["Multi-tenant systems", "Subdomain routing", "CRUD systems", "PWA / service workers"],
  },
  {
    label: "DevOps",
    icon: Cloud,
    items: ["Vercel", "Render", "Git / GitHub", "CORS & security middleware"],
  },
];

const experience = [
  {
    role: "Full-Stack Developer, Internship (OJT)",
    org: "Promotional Website Platform",
    period: "Mar – May 2026",
    detail: "Multi-tenant architecture, admin dashboard, subdomain routing. See Projects above.",
  },
  {
    role: "Full-Stack Developer, Internship (OJT)",
    org: "Inventory Management System",
    period: "Mar – May 2026",
    detail: "Multi-org inventory app with auth, PWA, and reporting. See Projects above.",
  },
  {
    role: "IT Support, Internship",
    org: "St. Joseph Amity Prime Development Corp.",
    period: "Mar – May 2026",
    detail:
      "Hardware/software troubleshooting for office workstations; assisted with computer assembly, driver configuration, and routine maintenance.",
  },
  {
    role: "Data Encoder (Contractual)",
    org: "Social Weather Stations",
    period: "Mar 2021 – Mar 2022",
    detail:
      "Encoded and validated survey data at high volume; performed quality checks to catch inconsistencies before dataset release.",
  },
];

export default function Home() {
  return (
    <>
      <SideNav />
      <main>
        <section
          id="home"
          className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center"
        >
          <div>
            <p className="mb-4 text-sm font-medium text-accent">Full-stack developer</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Ramilo Jr. Quito
            </h1>
            <p className="mt-4 max-w-[46ch] text-lg text-muted">
              Building multi-tenant platforms and the dashboards that run them —
              from subdomain routing to admin tools non-technical teams can use.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
              >
                Let&apos;s connect
              </a>
              <a
                href="#projects"
                className="rounded-md border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent"
              >
                View projects
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="flex flex-col items-center">
              <div
                className="relative flex h-64 w-64 items-center justify-center rounded-full"
                style={{ boxShadow: "0 0 80px 10px rgba(52,224,161,0.15)" }}
              >
                <div className="absolute inset-0 rounded-full border border-accent/30" />
                <div className="absolute inset-6 rounded-full border border-accent/20" />
                <div className="h-40 w-40 overflow-hidden rounded-full bg-surface">
                  <Image
                    src="/profile.JPG"
                    width={160}
                    height={160}
                    alt="Ramilo Jr. Quito"
                    loading="eager"
                    unoptimized
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
              <a href="/Quito_Resume_ATS2.pdf" download className="mt-4 inline-flex w-fit items-center gap-2 rounded-md border border-accent/50 bg-surface px-4 py-2 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent hover:text-accent-ink">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl border-t border-line px-6 py-16">
          <h2 className="mb-6 text-2xl font-semibold">About</h2>
          <p className="max-w-[65ch] text-lg leading-relaxed text-muted">
            I&apos;m an IT graduate from STI College Cubao with hands-on experience shipping
            production systems end to end — NestJS and Prisma on the backend, Next.js and
            Tailwind on the front, deployed on Vercel and Render. My recent work has centered
            on multi-tenant architecture: subdomain routing, tenant isolation, and admin tools
            that let non-technical people manage their own sites and inventories without
            needing a developer in the loop.
          </p>
        </section>

        <section id="projects" className="mx-auto max-w-6xl border-t border-line px-6 py-16">
          <h2 className="mb-10 text-2xl font-semibold">Projects</h2>
          <div className="space-y-14">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl border-t border-line px-6 py-16">
          <h2 className="mb-10 text-2xl font-semibold">Technical expertise</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => {
              const Icon = g.icon;
              return (
                <div key={g.label} className="rounded-lg border border-line bg-surface p-6">
                  <Icon className="mb-4 h-6 w-6 text-accent" strokeWidth={1.75} />
                  <h3 className="mb-2 font-semibold">{g.label}</h3>
                  <p className="text-sm leading-relaxed text-muted">{g.items.join(", ")}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl border-t border-line px-6 py-16">
          <h2 className="mb-10 text-2xl font-semibold">Experience</h2>
          <div className="space-y-8">
            {experience.map((e) => (
              <div
                key={e.role + e.org}
                className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6"
              >
                <div className="shrink-0 sm:w-1/3">
                  <p className="font-medium">{e.role}</p>
                  <p className="text-sm text-muted">{e.org}</p>
                  <p className="mt-1 text-xs text-muted">{e.period}</p>
                </div>
                <p className="max-w-[55ch] text-muted sm:w-2/3">{e.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted">
            BS in Information Technology, STI College Cubao — 2022–2026
          </p>
        </section>

        <section id="contact" className="mx-auto max-w-6xl border-t border-line px-6 py-20">
          <h2 className="mb-6 text-2xl font-semibold">Contact</h2>
          <p className="max-w-[55ch] text-lg text-muted">
            Open to full-stack roles. The fastest way to reach me is email.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-lg">
            <a href="mailto:jrquito12@gmail.com" className="w-fit text-accent hover:underline">
              jrquito12@gmail.com
            </a>
            <a href="https://github.com/RamiloJr" target="_blank" rel="noopener noreferrer" className="w-fit text-muted transition-colors hover:text-ink">
              github.com/RamiloJr
            </a>
            <a href="https://www.linkedin.com/in/ramilo-jr-quito-194b88317" target="_blank" rel="noopener noreferrer" className="w-fit text-muted transition-colors hover:text-ink">
              linkedin.com/in/ramilo-jr-quito
            </a>
          </div>
          <p className="mt-16 text-xs text-muted">Burgos, Montalban, Rizal · 0970 324 6318</p>
        </section>
      </main>
    </>
  );
}