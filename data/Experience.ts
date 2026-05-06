export type Experience = {
  role: string;
  company: string;
  period: string;
  type: "full-time" | "intern" | "trainee";
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: ".NET Developer ",
    company: "LunivaTech Pvt. Ltd.",
    period: "Dec 2025 – present",
    type: "full-time",
    bullets: [
      "Built web application features using ASP.NET MVC / Razor (CSHTML), implementing controllers, views, and backend services",
      "Designed and maintained RESTful APIs with ASP.NET Core to support application modules and data integration",
      "Wrote T-SQL stored procedures in SQL Server for data access and automated reporting",
      "Developed Crystal Reports for healthcare operational analytics",
      "Debugged and resolved production issues in an enterprise healthcare management system",
    ],
  },
  {
    role: ".NET Developer — Trainee",
    company: "LunivaTech Pvt. Ltd.",
    period: "Oct 2025 – Dec 2025",
    type: "trainee",
    bullets: [
      "Built web application features using ASP.NET MVC / Razor (CSHTML), implementing controllers, views, and backend services",
      "Designed and maintained RESTful APIs with ASP.NET Core to support application modules and data integration",
      "Wrote T-SQL stored procedures in SQL Server for data access and automated reporting",
      "Developed Crystal Reports for healthcare operational analytics",
      "Debugged and resolved production issues in an enterprise healthcare management system",
    ],
  },
  {
    role: ".NET Developer — Intern",
    company: "LunivaTech Pvt. Ltd.",
    period: "Jul 2025 – Oct 2025",
    type: "intern",
    bullets: [
      "Developed backend features and REST APIs using ASP.NET Core and C#",
      "Supported debugging and maintenance of production issues",
      "Collaborated with senior developers to implement new features",
    ],
  },
];