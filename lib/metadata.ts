import type { Metadata } from "next";

const BASE_URL = "https://www.abhayrajshrestha.com.np";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Abhay Raj Shrestha — .NET Developer",
    template: "%s | Abhay Raj Shrestha",
  },
  description:
    "Abhay Raj Shrestha is a .NET Developer in Kathmandu, Nepal, specializing in ASP.NET Core, C#, SQL Server, and REST APIs.",
  keywords: [
    ".NET Developer Nepal",
    "ASP.NET Core developer Kathmandu",
    "C# developer Nepal",
    "software engineer Nepal",
    "Abhay Raj Shrestha",
    "LunivaTech developer",
    "web developer Kathmandu",
  ],
  authors: [{ name: "Abhay Raj Shrestha", url: BASE_URL }],
  creator: "Abhay Raj Shrestha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Abhay Raj Shrestha",
    title: "Abhay Raj Shrestha — .NET Developer",
    description:
      "Building robust backend systems and web applications with ASP.NET Core, C#, and SQL Server.",
  },
  twitter: {
    card: "summary",
    title: "Abhay Raj Shrestha — .NET Developer",
    description:
      "Building robust backend systems and web applications with ASP.NET Core, C#, and SQL Server.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhay Raj Shrestha",
  jobTitle: ".NET Developer",
  url: BASE_URL,
  email: "abhayshrestha18@gmail.com",
  image: `${BASE_URL}/abhay.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressRegion: "Bagmati Province",
    addressCountry: "NP",
  },
  worksFor: {
    "@type": "Organization",
    name: "LunivaTech Pvt. Ltd.",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Himalaya College of Engineering",
  },
  sameAs: [
    "https://linkedin.com/in/abhayshrestha",
    "https://github.com/Abstha002",
  ],
  knowsAbout: [
    "C#",
    "ASP.NET Core",
    "SQL Server",
    "REST APIs",
    "React",
    "Next.js",
    "TypeScript",
  ],
};