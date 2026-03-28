"use client";

import { useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "abhayshrestha18@gmail.com",
    href: "mailto:abhayshrestha18@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 8l10 7 10-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abhayshrestha",
    href: "https://linkedin.com/in/abhayshrestha",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Abstha002",
    href: "https://github.com/Abstha002",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

type FormState = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFields((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    // ─────────────────────────────────────────────────────────────
    // Replace this block with your preferred form handler:
    //Option A — Formspree: https://formspree.io
      const res = await fetch("https://formsubmit.co/15bb1f49e820a11fac7a407e7d723db7", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) setFormState("sent"); else setFormState("error");
    //
    // Option B — EmailJS, Resend, or your own API route
    // ─────────────────────────────────────────────────────────────

    // Simulated success for now:
    //await new Promise((r) => setTimeout(r, 1200));
   // setFormState("sent");
  };

  const inputClass =
    "w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition-all focus:border-stone-500 focus:bg-white focus:ring-0";

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">

      {/* Page header */}
      <div className="mb-16">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-stone-400">
          05 — Contact
        </p>
        <h1 className="mb-6 font-serif text-5xl font-normal leading-tight tracking-tight text-stone-900 md:text-6xl">
          Let&apos;s
          <br />
          <em className="font-serif italic text-stone-400">connect</em>
        </h1>
        <p className="mb-6 max-w-lg text-base leading-relaxed text-stone-500">
          Open to full-time .NET roles, freelance projects, and interesting
          collaborations. I typically reply within 24 hours.
        </p>
        <div className="h-px w-full bg-stone-100" />
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_320px]">

        {/* Left: Form */}
        <div>
          {formState === "sent" ? (
            /* Success state */
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-8 py-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" aria-hidden>
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-base font-medium text-emerald-900">
                  Message sent!
                </p>
                <p className="mt-1 text-sm text-emerald-700">
                  Thanks for reaching out, {fields.name}. I&apos;ll get back to
                  you at {fields.email} shortly.
                </p>
              </div>
              <button
                onClick={() => {
                  setFormState("idle");
                  setFields({ name: "", email: "", message: "" });
                }}
                className="mt-2 font-mono text-xs text-emerald-600 underline underline-offset-2 hover:text-emerald-800"
              >
                Send another message
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="font-mono text-xs text-stone-400"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={fields.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-mono text-xs text-stone-400"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={fields.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-mono text-xs text-stone-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about the role, project, or just say hello..."
                  value={fields.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {formState === "error" && (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-xs text-red-600">
                  Something went wrong. Please email me directly at{" "}
                  <a
                    href="mailto:abhayshrestha18@gmail.com"
                    className="underline"
                  >
                    abhayshrestha18@gmail.com
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-stone-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {formState === "sending" ? (
                  <>
                    <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  "Send message →"
                )}
              </button>

              <p className="text-center font-mono text-[11px] text-stone-400">
                Or email me directly — I read everything.
              </p>
            </form>
          )}
        </div>

        {/* Right: contact links */}
        <div className="flex flex-col gap-3">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-stone-400">
            Other ways to reach me
          </p>
          {contactLinks.map(({ label, value, href, icon }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-stone-200 bg-white px-4 py-4 transition-all hover:border-stone-400 hover:shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-500 transition-colors group-hover:bg-stone-900 group-hover:text-white">
                {icon}
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-wider text-stone-400">
                  {label}
                </p>
                <p className="truncate text-sm text-stone-700">{value}</p>
              </div>
              <span className="ml-auto text-stone-300 transition-colors group-hover:text-stone-600">
                ↗
              </span>
            </a>
          ))}

          {/* Location card */}
          <div className="mt-2 rounded-xl border border-stone-100 bg-stone-50 px-4 py-4">
            <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-stone-400">
              Location
            </p>
            <p className="text-sm text-stone-700">Kathmandu, Nepal</p>
            <p className="mt-1 font-mono text-xs text-stone-400">
              NPT — UTC+5:45
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}