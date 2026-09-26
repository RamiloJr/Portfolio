"use client";

const routes = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function SideNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
      <nav
        aria-label="Section navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"
      >
        <a href="#home" className="text-lg font-semibold tracking-tight text-accent">
          Ramilo Jr. Quito
        </a>
        <ul className="flex gap-6 overflow-x-auto">
          {routes.map((r) => (
            <li key={r.href}>
              <a
                href={r.href}
                className="whitespace-nowrap text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {r.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}