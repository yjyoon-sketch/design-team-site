"use client";

import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

export function EmotionRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => {
    const c = createCache({ key: "css", prepend: true });
    c.compat = true;
    return c;
  });

  useServerInsertedHTML(() => {
    const entries = Object.entries(cache.inserted);
    if (entries.length === 0) return null;

    let styles = "";
    const names: string[] = [];

    entries.forEach(([name, value]) => {
      if (typeof value === "string") {
        styles += value;
        names.push(name);
      }
    });

    // flush inserted so styles aren't duplicated
    names.forEach((name) => {
      delete cache.inserted[name];
    });

    if (!styles) return null;

    return (
      <style
        key={`css-${names.join("-")}`}
        data-emotion={`css ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
