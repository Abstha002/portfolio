import Link from "next/link";
import { projects } from "@/data/Project";

export default function Projects() {
  return (
    <section id="projects" className="py-20" style={{ backgroundColor: "var(--bg-surface)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-baseline justify-between">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: "var(--text-muted)" }}>04</span>
            <h2 className="font-serif text-3xl font-normal" style={{ color: "var(--text-primary)" }}>Projects</h2>
          </div>
          <a
            href="https://github.com/Abstha002"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            GitHub ↗
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col rounded-2xl p-5 transition-all"
              style={
                project.placeholder
                  ? { border: "1px dashed var(--border-subtle)", backgroundColor: "transparent" }
                  : { border: "1px solid var(--border-subtle)", backgroundColor: "var(--bg-raised)" }
              }
            >
              {project.placeholder ? (
                <div className="flex flex-1 flex-col items-center justify-center py-8 text-center">
                  <div
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ border: "1px dashed var(--border-mid)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--text-muted)" }}>
                      <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>{project.name}</p>
                  <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>{project.description}</p>
                </div>
              ) : (
                <>
                  <div className="mb-3 flex items-start justify-between">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "var(--bg-surface)", color: "var(--text-secondary)" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="1" y="1" width="14" height="14" rx="2" />
                        <path d="M4 6h8M4 9h5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: "var(--text-muted)" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live site" style={{ color: "var(--text-muted)" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="mb-1.5 text-sm font-medium" style={{ color: "var(--text-primary)" }}>{project.name}</h3>
                  <p className="mb-4 flex-1 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md px-2 py-0.5 font-mono text-[10px]"
                        style={{ backgroundColor: "var(--bg-surface)", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/project" className="inline-flex items-center gap-2 font-mono text-xs transition-colors" style={{ color: "var(--text-muted)" }}>
            View all projects on GitHub ↗
          </Link>
        </div>
      </div>
    </section>
  );
}