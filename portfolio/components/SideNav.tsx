"use client";

import { useEffect, useState } from "react";

const routes = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function SideNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = routes.map((r) => r.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="sticky top-0 z-50 border-b border-line bg-paper"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <a
          href="#home"
          className="font-mono-route shrink-0 text-sm text-accent"
        >
          quito.dev
        </a>
        <ul className="flex w-full items-center gap-x-3 overflow-x-auto sm:w-auto sm:justify-end sm:gap-x-6 sm:overflow-visible">
          {routes.map((r) => {
            const isActive = active === r.href;
            return (
              <li key={r.href}>
                <a
                  href={r.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`font-mono-route inline-block whitespace-nowrap border-b pb-0.5 text-xs transition-colors sm:text-sm
                    ${
                      isActive
                        ? "border-accent text-accent"
                        : "border-transparent text-muted hover:text-ink"
                    }`}
                >
                  {r.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
