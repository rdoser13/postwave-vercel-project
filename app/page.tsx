import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="radial-glow absolute inset-0 -z-10" />
      <div className="mx-auto max-w-5xl px-6 py-28 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-4 py-1.5 text-xs text-[var(--muted)]">
          <span className="h-1.5 w-1.5 rounded-full gradient-bg" />
          New: AI caption rewriter for every platform
        </div>
        <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          Schedule, repurpose, and publish
          <br />
          <span className="gradient-text">with AI in one click.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted)]">
          Postwave turns one piece of content into a week of posts across every
          major social platform. Stop juggling tools — ship more, faster.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/#signup"
            className="rounded-full gradient-bg px-6 py-3 text-sm font-medium text-white shadow-lg shadow-pink-500/20 transition-opacity hover:opacity-90"
          >
            Start FREE Week
          </Link>
          <Link
            href="/#demo"
            className="rounded-full border border-[var(--border)] bg-white/5 px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-white/10"
          >
            Watch 2-min demo
          </Link>
        </div>
        <p className="mt-6 text-xs text-[var(--muted)]">
          No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}

const features = [
  {
    title: "AI caption rewriting",
    body: "One idea becomes platform-optimized captions for X, LinkedIn, Threads, Instagram, and TikTok — each tuned to how that platform actually ranks.",
  },
  {
    title: "Repurpose any video",
    body: "Paste a YouTube URL and Postwave extracts the hooks, pulls the best clips, and drafts a week of short-form content in your voice.",
  },
  {
    title: "Schedule everywhere",
    body: "Publish to 20+ accounts across every major network from a single calendar. Bulk upload, auto-queue, and time-slot presets built in.",
  },
  {
    title: "Built-in analytics",
    body: "See what's actually working across platforms. Posts are ranked by reach-per-minute-of-effort, so you stop guessing what to double down on.",
  },
  {
    title: "Team collaboration",
    body: "Approval flows, shared drafts, and client workspaces. Built for agencies and creator teams that need sign-off before posts go live.",
  },
  {
    title: "Chrome extension",
    body: "Save any post, article, or tweet as a content idea with one click. Turn your feed scroll into your next month of content.",
  },
];

function Features() {
  return (
    <section id="features" className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Everything you need to <span className="gradient-text">ship content faster</span>.
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            One AI-first workspace that replaces Buffer, Hootsuite, Opus Clip,
            and half your Notion.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-colors hover:border-white/20"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg gradient-bg text-white">
                <span className="text-sm font-bold">★</span>
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const tiers = [
  {
    name: "Starter",
    price: "$19",
    blurb: "For solo creators testing the waters.",
    features: [
      "5 social accounts",
      "100 scheduled posts / month",
      "AI caption rewrites",
      "Basic analytics",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    blurb: "For serious creators shipping daily.",
    features: [
      "20 social accounts",
      "Unlimited scheduled posts",
      "Video repurposing (10 hrs/mo)",
      "Advanced analytics",
      "Chrome extension",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    price: "$129",
    blurb: "For agencies and creator teams.",
    features: [
      "Unlimited accounts",
      "Unlimited posts + video",
      "Approval workflows",
      "Client workspaces",
      "Priority support",
    ],
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Simple pricing, <span className="gradient-text">no surprises</span>.
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Start free, upgrade when you&apos;re ready. Every plan includes a 7-day
            free trial.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-8 ${
                t.highlighted
                  ? "border-transparent bg-gradient-to-b from-pink-500/10 to-purple-500/10 ring-1 ring-white/20"
                  : "border-[var(--border)] bg-[var(--card)]"
              }`}
            >
              {t.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-bg px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{t.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">{t.price}</span>
                <span className="text-sm text-[var(--muted)]">/month</span>
              </div>
              <Link
                href="/#signup"
                className={`mt-6 block rounded-full px-4 py-2.5 text-center text-sm font-medium transition ${
                  t.highlighted
                    ? "gradient-bg text-white hover:opacity-90"
                    : "border border-[var(--border)] bg-white/5 text-[var(--foreground)] hover:bg-white/10"
                }`}
              >
                Start FREE Week
              </Link>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-[var(--muted)]"
                  >
                    <span className="mt-0.5 inline-block h-4 w-4 flex-shrink-0 rounded-full gradient-bg" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Ready to <span className="gradient-text">post smarter</span>?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
          Join thousands of creators using Postwave to ship more content with
          less effort.
        </p>
        <div className="mt-8">
          <Link
            href="/#signup"
            className="inline-block rounded-full gradient-bg px-8 py-3 text-sm font-medium text-white shadow-lg shadow-pink-500/20 transition-opacity hover:opacity-90"
          >
            Start FREE Week
          </Link>
        </div>
      </div>
    </section>
  );
}
