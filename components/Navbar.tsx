"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/project", label: "projects" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-stone-900 transition-opacity hover:opacity-70"
        >
          ars<span className="text-stone-400">.dev</span>
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-6">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-mono text-xs tracking-wider transition-colors ${
                    isActive
                      ? "text-stone-900 font-medium"
                      : "text-stone-400 hover:text-stone-700"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Resume CTA */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-md border border-stone-300 px-3 py-1.5 font-mono text-xs text-stone-600 transition-all hover:border-stone-900 hover:text-stone-900 sm:block"
        >
          resume ↓
        </a>
      </nav>
    </header>
  );
}