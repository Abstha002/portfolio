import { experience } from "@/data/Experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20" style={{ backgroundColor: "var(--bg-base)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: "var(--text-muted)" }}>03</span>
          <h2 className="font-serif text-3xl font-normal" style={{ color: "var(--text-primary)" }}>Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-2 hidden h-full w-px md:block" style={{ backgroundColor: "var(--border-subtle)" }} />
          <div className="flex flex-col gap-12">
            {experience.map((job, i) => (
              <div key={i} className="group relative grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr] md:pl-8">
                {/* Dot */}
                <div
                  className="absolute -left-[4.5px] top-1.5 hidden h-2.5 w-2.5 rounded-full transition-colors md:block"
                  style={{
                    border: "2px solid var(--border-mid)",
                    backgroundColor: "var(--bg-base)",
                  }}
                />
                {/* Meta */}
                <div className="md:pt-0.5">
                  <p className="font-mono text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{job.period}</p>
                  <span
                    className="mt-2 inline-block rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                    style={
                      job.type === "full-time"
                        ? { backgroundColor: "var(--text-primary)", color: "var(--bg-base)" }
                        : { border: "1px solid var(--border-mid)", color: "var(--text-secondary)" }
                    }
                  >
                    {job.type === "full-time" ? "Full-time" : "Internship"}
                  </span>
                </div>
                {/* Card */}
                <div
                  className="rounded-2xl px-6 py-5"
                  style={{ border: "1px solid var(--border-subtle)", backgroundColor: "var(--bg-raised)" }}
                >
                  <h3 className="mb-0.5 text-base font-medium" style={{ color: "var(--text-primary)" }}>{job.role}</h3>
                  <p className="mb-4 font-mono text-xs" style={{ color: "var(--text-muted)" }}>{job.company}</p>
                  <ul className="flex flex-col gap-2">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        <span className="mt-2 block h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: "var(--border-mid)" }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}