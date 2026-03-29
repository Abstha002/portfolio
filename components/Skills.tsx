import { skillGroups } from "@/data/Skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20" style={{ backgroundColor: "var(--bg-surface)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: "var(--text-muted)" }}>02</span>
          <h2 className="font-serif text-3xl font-normal" style={{ color: "var(--text-primary)" }}>Skills &amp; Technologies</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl px-5 py-5"
              style={{ backgroundColor: "var(--bg-raised)", border: "1px solid var(--border-subtle)" }}
            >
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-md px-2.5 py-1 font-mono text-xs"
                    style={
                      skill.primary
                        ? { backgroundColor: "var(--text-primary)", color: "var(--bg-base)" }
                        : { backgroundColor: "var(--bg-surface)", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)" }
                    }
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-4 flex items-center justify-between rounded-2xl px-5 py-4"
          style={{ backgroundColor: "var(--bg-raised)", border: "1px solid var(--border-subtle)" }}
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Education</p>
            <p className="mt-1 text-sm font-medium" style={{ color: "var(--text-primary)" }}>
              BSc. CSIT — Himalaya College of Engineering
            </p>
          </div>
          <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>2022 – 2026</span>
        </div>
      </div>
    </section>
  );
}