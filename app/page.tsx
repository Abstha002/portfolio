import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Abhay Raj Shrestha — .NET Developer in Kathmandu, Nepal",
  description:
    "Abhay Raj Shrestha is a .NET Developer in Kathmandu, Nepal, building backend systems and web applications with ASP.NET Core, C#, and SQL Server.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </>
  );
}