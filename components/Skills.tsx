import { skillGroups } from "@/data/Skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-stone-100 bg-stone-50/60 py-20"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-stone-400">
            02
          </span>
          <h2 className="font-serif text-3xl font-normal text-stone-900">
            Skills &amp; Technologies
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-stone-200 bg-white px-5 py-5"
            >
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-stone-400">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-md px-2.5 py-1 font-mono text-xs transition-colors ${
                      skill.primary
                        ? "bg-stone-900 text-white"
                        : "border border-stone-200 bg-stone-50 text-stone-600"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education strip */}
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-stone-200 bg-white px-5 py-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400">
              Education
            </p>
            <p className="mt-1 text-sm font-medium text-stone-800">
              BSc. CSIT — Himalaya College of Engineering
            </p>
          </div>
          <span className="font-mono text-xs text-stone-400">2022 – 2026</span>
        </div>
      </div>
    </section>
  );
}