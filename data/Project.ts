export type Project = {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    name: "ArtfulMinds",
    description:
      "A platform where students can upload and share their creative work with peers. Features user authentication, file uploads, and a content feed.",
    stack: ["ASP.NET Razor Pages", "C#", "SQL Server", "T-SQL"],
    github: "https://github.com/Abstha002",
  },
  {
    name: "Personal Portfolio",
    description:
      "This site — a minimalist developer portfolio with Next.js App Router, server-side metadata, and full SEO optimization.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://www.abhayrajshrestha.com.np",
    github: "https://github.com/Abstha002/portfolio",
  },
  {
    name: "Coming Soon",
    description:
      "Next project in progress. Check back soon or follow on GitHub to see what's being built.",
    stack: [],
    placeholder: true,
  },
];