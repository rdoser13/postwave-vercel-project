import { Fragment, type ReactNode } from "react";

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let remaining = text;
  let key = 0;
  const pattern = /\*\*([^*]+)\*\*|\*([^*]+)\*/;
  while (remaining.length > 0) {
    const match = pattern.exec(remaining);
    if (!match) {
      nodes.push(<Fragment key={key++}>{remaining}</Fragment>);
      break;
    }
    if (match.index > 0) {
      nodes.push(
        <Fragment key={key++}>{remaining.slice(0, match.index)}</Fragment>,
      );
    }
    if (match[1]) {
      nodes.push(<strong key={key++}>{match[1]}</strong>);
    } else if (match[2]) {
      nodes.push(<em key={key++}>{match[2]}</em>);
    }
    remaining = remaining.slice(match.index + match[0].length);
  }
  return nodes;
}

export function Markdown({ source }: { source: string }) {
  const blocks = source.split(/\n\n+/);
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;
        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-10 text-2xl font-semibold tracking-tight text-[var(--foreground)]"
            >
              {renderInline(trimmed.slice(3))}
            </h2>
          );
        }
        if (trimmed.startsWith("# ")) {
          return (
            <h1
              key={i}
              className="mt-10 text-3xl font-semibold tracking-tight text-[var(--foreground)]"
            >
              {renderInline(trimmed.slice(2))}
            </h1>
          );
        }
        if (trimmed.startsWith("- ") || /^\d+\.\s/.test(trimmed)) {
          const isOrdered = /^\d+\.\s/.test(trimmed);
          const items = trimmed.split("\n").map((line) =>
            isOrdered ? line.replace(/^\d+\.\s/, "") : line.replace(/^-\s/, ""),
          );
          const ListTag = isOrdered ? "ol" : "ul";
          return (
            <ListTag
              key={i}
              className={`ml-6 space-y-2 text-[var(--muted)] ${
                isOrdered ? "list-decimal" : "list-disc"
              }`}
            >
              {items.map((item, j) => (
                <li key={j}>{renderInline(item)}</li>
              ))}
            </ListTag>
          );
        }
        return (
          <p key={i} className="leading-relaxed text-[var(--muted)]">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
