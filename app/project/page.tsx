import type { Metadata } from "next";
import { projects } from "../../data/Project";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Abhay Raj Shrestha — .NET applications, web platforms, and developer tools built with ASP.NET Core, C#, React, and Next.js.",
};

export default function ProjectsPage() {
  const realProjects = projects.filter((p) => !p.placeholder);

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">

      {/* Page header */}
      <div className="mb-16">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-stone-400">
          04 — Projects
        </p>
        <h1 className="mb-6 font-serif text-5xl font-normal leading-tight tracking-tight text-stone-900 md:text-6xl">
          Things I&apos;ve
          <br />
          <em className="font-serif italic text-stone-400">built</em>
        </h1>
        <p className="mb-6 max-w-lg text-base leading-relaxed text-stone-500">
          A selection of projects I&apos;ve worked on — from academic platforms
          to production web applications. More on{" "}
          <a
            href="https://github.com/Abstha002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-700 underline underline-offset-2 hover:text-stone-900"
          >
            GitHub ↗
          </a>
          .
        </p>
        <div className="h-px w-full bg-stone-100" />
      </div>

      {/* Featured projects */}
      <div className="mb-16 flex flex-col gap-6">
        {realProjects.map((project, i) => (
          <article
            key={project.name}
            className="group grid grid-cols-1 gap-6 rounded-2xl border border-stone-200 bg-white p-6 transition-shadow hover:shadow-md md:grid-cols-[1fr_200px]"
          >
            {/* Left: info */}
            <div>
              {/* Number + name */}
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-xs text-stone-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-lg font-medium text-stone-900">
                  {project.name}
                </h2>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-stone-500">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-stone-100 bg-stone-50 px-2.5 py-1 font-mono text-[11px] text-stone-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: links */}
            <div className="flex flex-row items-start gap-3 md:flex-col md:items-end md:justify-start">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-stone-900 bg-stone-900 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-stone-700 active:scale-95"
                >
                  Live site ↗
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-stone-200 px-4 py-2 text-xs text-stone-600 transition-all hover:border-stone-400 hover:text-stone-900 active:scale-95"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* GitHub CTA banner */}
      <div className="rounded-2xl border border-dashed border-stone-200 bg-stone-50 px-8 py-10 text-center">
        <p className="mb-1 font-serif text-2xl font-normal text-stone-800">
          More on GitHub
        </p>
        <p className="mb-6 text-sm text-stone-400">
          Experiments, coursework, and work-in-progress projects.
        </p>
        <a
          href="https://github.com/Abstha002"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3 text-sm text-stone-700 transition-all hover:border-stone-900 hover:text-stone-900 active:scale-95"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          github.com/Abstha002
        </a>
      </div>
    </div>
  );
}