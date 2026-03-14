"use client";

import { useState, useRef, useEffect } from "react";
import { Flex } from "@teamsparta/stack-flex";
import { Text } from "@teamsparta/stack-text";
import { vars } from "@teamsparta/stack-tokens";

interface FilterSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export function FilterSelect({
  label,
  options,
  value,
  onChange,
}: FilterSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayText = value === "all" ? label : value;
  const allOptions = [
    { value: "all", label: "전체" },
    ...options.map((o) => ({ value: o, label: o })),
  ];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] transition-colors hover:border-[var(--foreground)]"
      >
        <Text
          font="captionSb"
          as="span"
          color={value !== "all" ? "var(--foreground)" : "var(--secondary)"}
        >
          {displayText}
        </Text>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          style={{ color: "var(--tertiary)" }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-2 min-w-[160px] rounded-xl border border-[var(--border)] shadow-lg overflow-hidden z-50 py-1"
          style={{ background: vars.background.default }}
        >
          {allOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 transition-colors"
              style={{
                background:
                  opt.value === value ? vars.background.subtle : "transparent",
              }}
              onMouseEnter={(e) => {
                if (opt.value !== value)
                  e.currentTarget.style.background = vars.background.subtle;
              }}
              onMouseLeave={(e) => {
                if (opt.value !== value)
                  e.currentTarget.style.background = "transparent";
              }}
            >
              <Flex align="center" justify={"space-between" as any}>
                <Text
                  font="captionM"
                  as="span"
                  color={
                    opt.value === value
                      ? "var(--foreground)"
                      : "var(--secondary)"
                  }
                >
                  {opt.label}
                </Text>
                {opt.value === value && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    style={{ color: "var(--foreground)" }}
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </Flex>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
