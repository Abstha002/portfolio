import { experience } from "@/data/Experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-stone-400">
            03
          </span>
          <h2 className="font-serif text-3xl font-normal text-stone-900">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 hidden h-full w-px bg-stone-100 md:block" />

          <div className="flex flex-col gap-12">
            {experience.map((job, i) => (
              <div
                key={i}
                className="group relative grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr] md:pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[4.5px] top-1.5 hidden h-2.5 w-2.5 rounded-full border-2 border-stone-300 bg-white transition-colors group-hover:border-stone-900 md:block" />

                {/* Left: meta */}
                <div className="md:pt-0.5">
                  <p className="font-mono text-xs leading-relaxed text-stone-400">
                    {job.period}
                  </p>
                  <span
                    className={`mt-2 inline-block rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                      job.type === "full-time"
                        ? "bg-stone-900 text-white"
                        : "border border-stone-200 text-stone-500"
                    }`}
                  >
                    {job.type === "full-time" ? "Full-time" : "Internship"}
                  </span>
                </div>

                {/* Right: content */}
                <div className="rounded-2xl border border-stone-100 bg-white px-6 py-5 transition-shadow hover:shadow-sm">
                  <h3 className="mb-0.5 text-base font-medium text-stone-900">
                    {job.role}
                  </h3>
                  <p className="mb-4 font-mono text-xs text-stone-400">
                    {job.company}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {job.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm leading-relaxed text-stone-500"
                      >
                        <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-stone-300" />
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