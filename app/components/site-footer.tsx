import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-block h-7 w-7 rounded-md gradient-bg" />
              <span className="text-lg font-semibold tracking-tight">
                Postwave
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-[var(--muted)]">
              AI-first scheduling and content repurposing for creators, teams,
              and agencies.
            </p>
          </div>
          <FooterCol
            title="Product"
            links={[
              { href: "/#features", label: "Features" },
              { href: "/#pricing", label: "Pricing" },
              { href: "/blog", label: "Blog" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { href: "/#about", label: "About" },
              { href: "/#contact", label: "Contact" },
              { href: "/#affiliates", label: "Affiliates" },
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              { href: "/#terms", label: "Terms" },
              { href: "/#privacy", label: "Privacy" },
            ]}
          />
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Postwave. Practice build.</span>
          <span>Built with Next.js + Vercel.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold">{title}</h4>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
