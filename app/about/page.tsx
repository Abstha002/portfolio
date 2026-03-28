import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Abhay Raj Shrestha — a .NET Developer from Kathmandu, Nepal with hands-on experience in ASP.NET Core, C#, SQL Server, and enterprise healthcare software.",
};

const timeline = [
  {
    year: "2026",
    label: "Expected graduation",
    detail: "BSc. CSIT — Himalaya College of Engineering",
    current: false,
  },
  {
    year: "Oct 2025",
    label: ".NET Developer",
    detail: "Promoted to full-time role at LunivaTech Pvt. Ltd.",
    current: true,
  },
  {
    year: "Jul 2025",
    label: "Started internship",
    detail: "Joined LunivaTech as a .NET Developer intern",
    current: false,
  },
  {
    year: "2022",
    label: "Started BSc. CSIT",
    detail: "Himalaya College of Engineering, Kathmandu",
    current: false,
  },
];

const values = [
  {
    icon: "⌗",
    title: "Clean systems",
    body: "I care about writing code that is readable, maintainable, and makes the next developer's job easier — not just code that works today.",
  },
  {
    icon: "↗",
    title: "Continuous growth",
    body: "From intern to full-time developer in three months. I push to take on harder problems and learn from every production issue I encounter.",
  },
  {
    icon: "◎",
    title: "Real-world impact",
    body: "I work on enterprise healthcare software used by real institutions. That responsibility shapes how seriously I treat correctness and reliability.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">

      {/* Page header */}
      <div className="mb-16">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-stone-400">
          01 — About
        </p>
        <h1 className="mb-6 font-serif text-5xl font-normal leading-tight tracking-tight text-stone-900 md:text-6xl">
          The person
          <br />
          <em className="font-serif italic text-stone-400">behind the code</em>
        </h1>
        <div className="h-px w-full bg-stone-100" />
      </div>

      {/* Bio grid */}
      <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-[1fr_340px]">
        {/* Left: text */}
        <div className="flex flex-col gap-5 text-base leading-relaxed text-stone-500">
          <p>
            I&apos;m{" "}
            <span className="font-medium text-stone-800">
              Abhay Raj Shrestha
            </span>
            , a .NET Developer based in Kathmandu, Nepal. I build backend
            systems and web applications with a focus on correctness,
            performance, and maintainability.
          </p>
          <p>
            I currently work at{" "}
            <span className="font-medium text-stone-800">
              LunivaTech Pvt. Ltd.
            </span>
            , where I develop features for an enterprise healthcare management
            system — writing ASP.NET MVC controllers, designing T-SQL stored
            procedures, building REST APIs, and resolving production issues
            in a system used by real healthcare institutions.
          </p>
          <p>
            My primary stack is{" "}
            <span className="font-medium text-stone-800">
              C#, ASP.NET Core, and SQL Server
            </span>
            . On the frontend side I work with React and Next.js —
            which is how this portfolio was built.
          </p>
          <p>
            I&apos;m completing a{" "}
            <span className="font-medium text-stone-800">BSc. in CSIT</span> at
            Himalaya College of Engineering, graduating in 2026. Outside of
            work, I&apos;m interested in system design, developer tooling, and
            the intersection of software and healthcare.
          </p>
        </div>

        {/* Right: quick facts */}
        <div className="flex flex-col gap-3">
          {[
            { label: "Location", value: "Mahalaxmi, Lalitpur, Nepal" },
            { label: "Role", value: ".NET Developer" },
            { label: "Company", value: "LunivaTech Pvt. Ltd." },
            { label: "Degree", value: "BSc. CSIT (2022 – 2026)" },
            { label: "Email", value: "abhayshrestha18@gmail.com" },
            { label: "GitHub", value: "github.com/Abstha002" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex items-start justify-between gap-4 border-b border-stone-100 pb-3 last:border-0"
            >
              <span className="shrink-0 font-mono text-xs text-stone-400">
                {label}
              </span>
              <span className="text-right text-sm text-stone-700">{value}</span>
            </div>
          ))}

          {/* Availability badge */}
          <div className="mt-2 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs text-emerald-700">
              Open to new opportunities
            </span>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.15em] text-stone-400">
          What I care about
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {values.map(({ icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-stone-100 bg-stone-50 px-5 py-5"
            >
              <span className="mb-3 block font-mono text-xl text-stone-300">
                {icon}
              </span>
              <h3 className="mb-2 text-sm font-medium text-stone-900">
                {title}
              </h3>
              <p className="text-xs leading-relaxed text-stone-500">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.15em] text-stone-400">
          Journey so far
        </p>
        <div className="relative">
          <div className="absolute left-[5px] top-2 h-full w-px bg-stone-100" />
          <div className="flex flex-col gap-8">
            {timeline.map(({ year, label, detail, current }) => (
              <div key={year} className="relative flex items-start gap-5 pl-6">
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 ${
                    current
                      ? "border-stone-900 bg-stone-900"
                      : "border-stone-300 bg-white"
                  }`}
                />
                {/* Content */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-stone-400">
                      {year}
                    </span>
                    {current && (
                      <span className="rounded-full bg-stone-900 px-2 py-0.5 font-mono text-[10px] text-white">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-stone-800">
                    {label}
                  </p>
                  <p className="mt-0.5 text-xs text-stone-400">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}