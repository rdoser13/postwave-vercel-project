import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/content/blog/posts";

export const metadata: Metadata = {
  title: "Postwave Blog — AI social media tips, guides, and comparisons",
  description:
    "Guides, comparisons, and tactics for creators using AI to ship more social content.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12">
        <p className="mb-2 text-sm font-medium gradient-text">Blog</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Ideas for creators building <span className="gradient-text">with AI</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          Guides, comparisons, and tactics for shipping social content faster
          without sacrificing quality.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-colors hover:border-white/20"
          >
            <div className="mb-4 h-40 w-full rounded-xl gradient-bg opacity-80" />
            <p className="text-xs text-[var(--muted)]">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readingTime}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight group-hover:text-white">
              {post.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              {post.description}
            </p>
            <span className="mt-4 inline-block text-sm font-medium gradient-text">
              Read post →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
