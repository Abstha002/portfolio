import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20 pt-20 md:pt-28">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto]">
        {/* Left: Text */}
        <div>
          {/* Status badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs text-emerald-700">
              Available for opportunities
            </span>
          </div>

          {/* Label */}
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-stone-400">
            .NET Developer · Kathmandu, Nepal
          </p>

          {/* Heading */}
          <h1 className="mb-5 font-serif text-5xl font-normal leading-[1.05] tracking-tight text-stone-900 md:text-6xl">
            Abhay Raj
            <br />
            <em className="font-serif italic text-stone-400">Shrestha</em>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-lg text-base leading-relaxed text-stone-500">
            I build robust backend systems and web applications using{" "}
            <span className="font-medium text-stone-700">ASP.NET Core</span>,{" "}
            <span className="font-medium text-stone-700">C#</span>, and{" "}
            <span className="font-medium text-stone-700">SQL Server</span>.
            Currently working on enterprise healthcare software at LunivaTech.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-stone-700 active:scale-95"
            >
              Download Resume
              <span aria-hidden>↓</span>
            </a>
            <Link
              href="/project"
              className="inline-flex items-center gap-2 rounded-md border border-stone-300 px-5 py-2.5 text-sm text-stone-600 transition-all hover:border-stone-500 hover:text-stone-900 active:scale-95"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-stone-300 px-5 py-2.5 text-sm text-stone-600 transition-all hover:border-stone-500 hover:text-stone-900 active:scale-95"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right: Stats card */}
        <div className="flex flex-col gap-3 md:items-end md:justify-start md:pt-2">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
            {[
              { value: "8+", label: "months professional exp." },
              { value: "2+", label: "years of coding" },
              { value: "BSc.", label: "CSIT — 2026" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="rounded-xl border border-stone-100 bg-stone-50 px-4 py-3 md:w-40"
              >
                <p className="font-serif text-2xl font-normal text-stone-900">
                  {value}
                </p>
                <p className="font-mono text-xs text-stone-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 flex items-center gap-4">
        <div className="h-px flex-1 bg-stone-100" />
        <span className="font-mono text-xs uppercase tracking-widest text-stone-300">
          scroll to explore
        </span>
        <div className="h-px flex-1 bg-stone-100" />
      </div>
    </section>
  );
}