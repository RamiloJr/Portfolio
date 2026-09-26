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
    stack: [
      "Next.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Supabase Storage",
      "Vercel",
      "Render",
    ],
    links: [
      { label: "starblue.vercel.app", href: "https://starblue.vercel.app" },
      {
        label: "stjosephapdc.vercel.app",
        href: "https://stjosephapdc.vercel.app",
      },
    ],
    accentColor: "#3454D1",
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
      {
        label: "Live app",
        href: "https://frontend-umber-nine-47.vercel.app",
      },
      { label: "Frontend repo", href: "https://github.com/RamiloJr/frontend" },
      { label: "Backend repo", href: "https://github.com/RamiloJr/backend" },
    ],
    accentColor: "#2F6F4E",
  },
];

const skillGroups = [
  {
    label: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
    icon: "frontend" as const,
  },
  {
    label: "Backend",
    items: ["NestJS", "Node.js", "Prisma ORM", "REST API design"],
    icon: "backend" as const,
  },
  {
    label: "Database & storage",
    items: ["Supabase (PostgreSQL)", "Supabase Auth", "Supabase Storage"],
    icon: "database" as const,
  },
  {
    label: "Architecture",
    items: [
      "Multi-tenant systems",
      "Subdomain routing",
      "CRUD systems",
      "PWA / service workers",
    ],
    icon: "architecture" as const,
  },
  {
    label: "DevOps",
    items: ["Vercel", "Render", "Git / GitHub", "CORS & security middleware"],
    icon: "devops" as const,
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

function SkillIcon({ name }: { name: (typeof skillGroups)[number]["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "frontend":
      return (
        <svg {...common}>
          <polyline points="8 6 3 12 8 18" />
          <polyline points="16 6 21 12 16 18" />
        </svg>
      );
    case "backend":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="6" rx="1" />
          <rect x="3" y="14" width="18" height="6" rx="1" />
          <circle cx="7" cy="7" r="0.75" />
          <circle cx="7" cy="17" r="0.75" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
        </svg>
      );
    case "architecture":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      );
    case "devops":
      return (
        <svg {...common}>
          <polyline points="5 8 2 12 5 16" />
          <polyline points="19 8 22 12 19 16" />
          <line x1="14" y1="6" x2="10" y2="18" />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <>
      <SideNav />
      <main className="relative z-0">
        <section
          id="home"
          className="mx-auto grid min-h-[70vh] max-w-5xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 lg:px-8 lg:py-28"
        >
          <div>
            <p className="font-mono-route mb-4 text-sm text-accent">
              /quito.dev/full-stack
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Ramilo Jr. Quito
            </h1>
            <p className="mt-4 max-w-[50ch] text-lg text-muted">
              Full-stack developer building multi-tenant platforms — from
              subdomain-routed tenant sites to the dashboards that run them.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#projects"
                className="inline-flex bg-accent px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div
              className="flex h-52 w-52 items-center justify-center rounded-full border border-line text-muted sm:h-64 sm:w-64"
              aria-hidden="true"
            >
              <span className="font-mono-route text-2xl tracking-widest">
                RQ
              </span>
            </div>
            <span className="sr-only">Portrait placeholder</span>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-5xl border-t border-line px-6 py-24 lg:px-8"
        >
          <h2 className="font-mono-route mb-8 text-sm text-muted">about</h2>
          <p className="max-w-[65ch] text-lg leading-relaxed">
            I&apos;m an IT graduate from STI College Cubao with hands-on
            experience shipping production systems end to end — NestJS and
            Prisma on the backend, Next.js and Tailwind on the front, deployed
            on Vercel and Render. My recent work has centered on multi-tenant
            architecture: subdomain routing, tenant isolation, and admin tools
            that let non-technical people manage their own sites and
            inventories without needing a developer in the loop.
          </p>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-5xl border-t border-line px-6 py-24 lg:px-8"
        >
          <h2 className="font-mono-route mb-10 text-sm text-muted">
            projects
          </h2>
          <div className="space-y-16">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="mx-auto max-w-5xl border-t border-line px-6 py-24 lg:px-8"
        >
          <h2 className="font-mono-route mb-10 text-sm text-muted">skills</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <article
                key={g.label}
                className="border border-line p-6 transition-colors hover:border-ink/30"
              >
                <div className="mb-4 text-accent">
                  <SkillIcon name={g.icon} />
                </div>
                <h3 className="mb-3 text-sm font-semibold">{g.label}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {g.items.join(", ")}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="mx-auto max-w-5xl border-t border-line px-6 py-24 lg:px-8"
        >
          <h2 className="font-mono-route mb-10 text-sm text-muted">
            experience
          </h2>
          <div className="space-y-10">
            {experience.map((e) => (
              <div
                key={e.role + e.org}
                className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:gap-10"
              >
                <div className="shrink-0 sm:w-1/3">
                  <p className="font-medium">{e.role}</p>
                  <p className="text-sm text-muted">{e.org}</p>
                  <p className="font-mono-route mt-1 text-xs text-muted">
                    {e.period}
                  </p>
                </div>
                <p className="max-w-[55ch] text-muted sm:w-2/3">{e.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 text-sm text-muted">
            BS in Information Technology, STI College Cubao — 2022–2026
          </p>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-5xl border-t border-line px-6 py-24 lg:px-8"
        >
          <h2 className="font-mono-route mb-8 text-sm text-muted">contact</h2>
          <p className="max-w-[55ch] text-lg">
            Open to full-stack roles. The fastest way to reach me is email.
          </p>
          <div className="mt-8 flex flex-col gap-3 text-lg">
            <a
              href="mailto:jrquito12@gmail.com"
              className="w-fit text-accent hover:underline"
            >
              jrquito12@gmail.com
            </a>
            <a
              href="https://github.com/RamiloJr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-muted transition-colors hover:text-ink"
            >
              github.com/RamiloJr
            </a>
            <a
              href="https://www.linkedin.com/in/ramilo-jr-quito-194b88317"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-muted transition-colors hover:text-ink"
            >
              linkedin.com/in/ramilo-jr-quito
            </a>
          </div>
          <p className="mt-20 text-xs text-muted">
            Burgos, Montalban, Rizal · 0970 324 6318
          </p>
        </section>
      </main>
    </>
  );
}
