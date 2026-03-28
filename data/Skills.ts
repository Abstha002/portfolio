export type SkillGroup = {
  label: string;
  skills: { name: string; primary?: boolean }[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      { name: "C#", primary: true },
      { name: "TypeScript", primary: true },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "C++" },
    ],
  },
  {
    label: "Frameworks",
    skills: [
      { name: "ASP.NET Core", primary: true },
      { name: "ASP.NET MVC", primary: true },
      { name: "Razor Pages" },
      { name: "Web API" },
      { name: "React" },
      { name: "Next.js" },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "SQL Server", primary: true },
      { name: "T-SQL", primary: true },
      { name: "Stored Procedures" },
      { name: "UDFs" },
      { name: "Triggers" },
    ],
  },
  {
    label: "Tools & Concepts",
    skills: [
      { name: "Git" },
      { name: "IIS" },
      { name: "Postman" },
      { name: "Crystal Reports" },
      { name: "REST APIs" },
      { name: "SOAP APIs" },
      { name: "Agile" },
    ],
  },
];