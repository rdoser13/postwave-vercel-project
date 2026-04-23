import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/content/blog/posts";
import { Markdown } from "../markdown";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Postwave Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
      >
        ← All posts
      </Link>
      <header className="mb-10">
        <p className="text-xs text-[var(--muted)]">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readingTime}
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">{post.description}</p>
      </header>
      <div className="mb-12 h-64 w-full rounded-2xl gradient-bg opacity-80" />
      <Markdown source={post.body} />
      <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
        <h3 className="text-2xl font-semibold tracking-tight">
          Try <span className="gradient-text">Postwave</span> free for 7 days
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-[var(--muted)]">
          AI-first scheduling and content repurposing. No credit card required.
        </p>
        <Link
          href="/#signup"
          className="mt-6 inline-block rounded-full gradient-bg px-6 py-3 text-sm font-medium text-white shadow-lg shadow-pink-500/20"
        >
          Start FREE Week
        </Link>
      </div>
    </article>
  );
}
