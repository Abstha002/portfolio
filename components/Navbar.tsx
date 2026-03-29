"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./Themeprovider";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/project", label: "projects" },
  { href: "/contact", label: "contact" },
];

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="2"  x2="12" y2="4"  />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"  />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="2"  y1="12" x2="4"  y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <header
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg-base) 90%, transparent)",
        borderBottomColor: "var(--border-subtle)",
      }}
      className="sticky top-0 z-50 w-full border-b backdrop-blur-sm transition-colors duration-200"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight transition-opacity hover:opacity-60"
          style={{ color: "var(--text-primary)" }}
        >
          ars<span style={{ color: "var(--text-muted)" }}>.dev</span>
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-6">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="font-mono text-xs tracking-wider transition-colors"
                  style={{
                    color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                    fontWeight: isActive ? 500 : 400,
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right side: theme toggle + resume */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-all hover:opacity-70"
            style={{
              backgroundColor: "var(--bg-surface)",
              color: "var(--text-secondary)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md px-3 py-1.5 font-mono text-xs transition-all sm:block"
            style={{
              color: "var(--text-secondary)",
              border: "1px solid var(--border-mid)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--text-primary)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-mid)";
            }}
          >
            resume ↓
          </a>
        </div>
      </nav>
    </header>
  );
}