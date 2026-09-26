type ProjectCardProps = {
  title: string;
  period: string;
  description: string;
  bullets: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

export default function ProjectCard({
  title,
  period,
  description,
  bullets,
  stack,
  links,
}: ProjectCardProps) {
  return (
    <div className="border-l-2 border-line py-1 pl-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
        <span className="text-xs text-muted">{period}</span>
      </div>

      <p className="mt-2 max-w-[65ch] text-muted">{description}</p>

      <ul className="mt-3 max-w-[65ch] list-outside list-disc space-y-1.5 pl-4 text-sm text-ink/90">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
        {stack.map((s, i) => (
          <span key={s}>
            {s}
            {i < stack.length - 1 && <span className="mx-1.5 text-line">/</span>}
          </span>
        ))}
      </div>

      {links.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}