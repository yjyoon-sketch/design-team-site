"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const NAV_ITEMS = [
  { href: "/", label: "Interaction" },
  { href: "/blog", label: "Blog" },
  { href: "/design-system", label: "Design System" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl transition-colors">
      <div
        className="flex items-center max-w-[var(--max-width)] mx-auto px-6 h-[60px]"
        style={{ justifyContent: "space-between" }}
      >
        <Link href="/" className="flex items-center gap-0 h-[60px] py-3">
          <Image src="/logo.svg" alt="TeamSparta" width={160} height={32} className="h-auto" />
          <span style={{ fontSize: 24, fontWeight: 800, fontFamily: "Pretendard", lineHeight: 1 }}>
            DESIGN
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    isActive
                      ? "font-semibold text-[var(--foreground)]"
                      : "text-[var(--secondary)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full text-[var(--secondary)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
            aria-label="테마 전환"
          >
            {theme === "light" ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
