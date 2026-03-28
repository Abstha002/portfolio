export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-100 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-xs text-stone-400">
          © {year} Abhay Raj Shrestha
        </p>

        <div className="flex items-center gap-5">
          {[
            { label: "GitHub", href: "https://github.com/Abstha002" },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/abhayshrestha",
            },
            { label: "Email", href: "mailto:abhayshrestha18@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="font-mono text-xs text-stone-400 transition-colors hover:text-stone-700"
            >
              {label}
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-stone-300">
          Built with Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}