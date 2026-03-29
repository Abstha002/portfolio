import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto]">
        {/* Left: Text */}
        <div>
          {/* Status badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 dark:border-emerald-900 dark:bg-emerald-950">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400">
              Available for opportunities
            </span>
          </div>

          {/* Label */}
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em]" style={{ color: "var(--text-muted)" }}>
            .NET Developer · Kathmandu, Nepal
          </p>

          {/* Heading */}
          <h1 className="mb-5 font-serif text-5xl font-normal leading-[1.05] tracking-tight md:text-6xl" style={{ color: "var(--text-primary)" }}>
            Abhay Raj
            <br />
            <em className="font-serif italic" style={{ color: "var(--text-secondary)" }}>Shrestha</em>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-lg text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            I build robust backend systems and web applications using{" "}
            <span className="font-medium" style={{ color: "var(--text-primary)" }}>ASP.NET Core</span>,{" "}
            <span className="font-medium" style={{ color: "var(--text-primary)" }}>C#</span>, and{" "}
            <span className="font-medium" style={{ color: "var(--text-primary)" }}>SQL Server</span>.
            Currently working on enterprise healthcare software at LunivaTech.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all active:scale-95"
              style={{ backgroundColor: "var(--text-primary)", color: "var(--bg-base)" }}
            >
              Download Resume <span aria-hidden>↓</span>
            </a>
            <Link
              href="/project"
              className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm transition-all active:scale-95"
              style={{ color: "var(--text-secondary)", border: "1px solid var(--border-mid)" }}
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm transition-all active:scale-95"
              style={{ color: "var(--text-secondary)", border: "1px solid var(--border-mid)" }}
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right: Stats */}
        <div className="flex flex-col gap-3 md:items-end md:justify-start md:pt-2">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
            {[
              { value: "8+", label: "months professional exp." },
              { value: "2+", label: "years of coding" },
              { value: "BSc.", label: "CSIT — 2026" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="rounded-xl px-4 py-3 md:w-44"
                style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}
              >
                <p className="font-serif text-2xl font-normal" style={{ color: "var(--text-primary)" }}>
                  {value}
                </p>
                <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 flex items-center gap-4">
        <div className="h-px flex-1" style={{ backgroundColor: "var(--border-subtle)" }} />
        <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          scroll to explore
        </span>
        <div className="h-px flex-1" style={{ backgroundColor: "var(--border-subtle)" }} />
      </div>
    </section>
  );
}