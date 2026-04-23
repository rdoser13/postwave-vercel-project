import Link from "next/link";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/#affiliates", label: "Affiliates" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[rgba(10,6,18,0.75)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-7 w-7 rounded-md gradient-bg" />
          <span className="text-lg font-semibold tracking-tight">Postwave</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/#login"
            className="hidden text-sm text-[var(--muted)] hover:text-[var(--foreground)] sm:inline-block"
          >
            Login
          </Link>
          <Link
            href="/#signup"
            className="rounded-full gradient-bg px-4 py-2 text-sm font-medium text-white shadow-lg shadow-pink-500/20 transition-opacity hover:opacity-90"
          >
            Start FREE Week
          </Link>
        </div>
      </div>
    </header>
  );
}
