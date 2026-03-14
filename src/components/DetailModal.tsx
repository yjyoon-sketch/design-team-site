"use client";

import { useEffect, useRef, useCallback } from "react";
import { Flex } from "@teamsparta/stack-flex";
import { Text } from "@teamsparta/stack-text";
import { Tag } from "@teamsparta/stack-tag";
import type { ReferenceItem } from "@/data/references";

interface DetailModalProps {
  item: ReferenceItem | null;
  onClose: () => void;
}

const DEVICE_COLORS: Record<string, { bg: string; color: string }> = {
  Mobile: { bg: "#9a0dff1a", color: "#6f00ff" },
  Desktop: { bg: "#ff0db61a", color: "#ff00bf" },
};

const PLATFORM_COLORS: Record<string, { bg: string; color: string }> = {
  App: { bg: "#363cff1a", color: "#0048ff" },
  web: { bg: "#368dff1a", color: "#368dff" },
  OS: { bg: "#00c7d11a", color: "#00c7d1" },
};

const TRIGGER_COLORS = { bg: "#00034d1a", color: "#001854" };

function tagStyle(bg: string, color: string) {
  return {
    "--stack-tag-background-color": bg,
    "--stack-tag-text-color": color,
  } as React.CSSProperties;
}

export function DetailModal({ item, onClose }: DetailModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
      videoRef.current?.play().catch(() => {});
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  // ESC to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [item, onClose]);

  if (!item) return null;

  const isDesktop = item.device === "Desktop";
  const details = item.details || {};
  const detailEntries = Object.entries(details).filter(([, v]) => v.trim() !== "");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
      style={{
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        animation: "modal-fade-in 250ms ease",
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[900px] mx-4 my-[4vh] rounded-2xl overflow-hidden"
        style={{
          background: "var(--background)",
          animation: "modal-slide-up 300ms ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--background)]/80 hover:bg-[var(--surface)] transition-colors z-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Video - large */}
        <div
          className="w-full flex items-center justify-center"
          style={{ background: isDesktop ? "#1a1a1a" : "#000" }}
        >
          {isDesktop ? (
            <div className="w-full">
              <div className="card-video">
                <video
                  ref={videoRef}
                  src={item.url}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls
                  style={{ width: "100%", maxHeight: "70vh", objectFit: "contain", display: "block" }}
                />
              </div>
            </div>
          ) : (
            <div style={{ maxWidth: 400, width: "100%", padding: "24px 0" }}>
              <div
                className="mx-auto rounded-[32px] border-[4px] border-[#1a1a1a] bg-[#1a1a1a] overflow-hidden"
                style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 20px 40px 8px" }}
              >
                <div className="rounded-[28px] overflow-hidden bg-white">
                  <div className="card-video">
                    <video
                      ref={videoRef}
                      src={item.url}
                      muted
                      loop
                      playsInline
                      preload="auto"
                      controls
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Info section */}
        <div className="p-8">
          <Flex direction="column" gap="2">
            <Text font="captionM" as="span" color="var(--tertiary)">
              {item.service}
            </Text>
            <Text font="title1" as="h2">
              {item.name}
            </Text>

            {/* Tags */}
            <Flex className="flex-wrap gap-2" style={{ marginTop: 8 }}>
              <Tag
                size="sm"
                style={tagStyle(
                  DEVICE_COLORS[item.device]?.bg || TRIGGER_COLORS.bg,
                  DEVICE_COLORS[item.device]?.color || TRIGGER_COLORS.color
                )}
              >
                {item.device}
              </Tag>
              <Tag
                size="sm"
                style={tagStyle(
                  PLATFORM_COLORS[item.platform]?.bg || TRIGGER_COLORS.bg,
                  PLATFORM_COLORS[item.platform]?.color || TRIGGER_COLORS.color
                )}
              >
                {item.platform}
              </Tag>
              <Tag
                size="sm"
                style={tagStyle(TRIGGER_COLORS.bg, TRIGGER_COLORS.color)}
              >
                {item.trigger}
              </Tag>
              {item.categories.map((cat) => (
                <Tag
                  key={cat}
                  size="sm"
                  style={tagStyle("var(--surface)", "var(--secondary)")}
                >
                  {cat}
                </Tag>
              ))}
            </Flex>
          </Flex>

          {/* Detail table */}
          {detailEntries.length > 0 && (
            <div
              className="mt-8 rounded-xl overflow-hidden border border-[var(--border)]"
            >
              {detailEntries.map(([key, value], i) => (
                <div
                  key={key}
                  className={`flex ${i > 0 ? "border-t border-[var(--border)]" : ""}`}
                >
                  <div
                    className="shrink-0 px-5 py-4"
                    style={{
                      width: 160,
                      background: "var(--surface)",
                    }}
                  >
                    <Text font="captionSb" as="span" color="var(--foreground)">
                      {key}
                    </Text>
                  </div>
                  <div className="flex-1 px-5 py-4">
                    <Text font="captionM" as="p" color="var(--secondary)">
                      {value}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
