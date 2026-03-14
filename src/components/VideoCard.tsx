"use client";

import { useRef } from "react";
import { Flex } from "@teamsparta/stack-flex";
import { Text } from "@teamsparta/stack-text";
import { Tag } from "@teamsparta/stack-tag";
import { vars } from "@teamsparta/stack-tokens";

interface VideoCardProps {
  name: string;
  url: string;
  service: string;
  categories: string[];
  trigger: string;
  device: string;
  platform: string;
  onFilterByCategory?: (value: string) => void;
  onFilterByTrigger?: (value: string) => void;
  onFilterByDevice?: (value: string) => void;
  onFilterByPlatform?: (value: string) => void;
  onClick?: () => void;
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

function MobileFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto transition-transform duration-300 group-hover:scale-105" style={{ width: "55%", maxWidth: 240 }}>
      <div className="relative rounded-[24px] border-[3px] border-[#1a1a1a] bg-[#1a1a1a] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.15) 8px 12px 18px 6px" }}>
        <div className="rounded-[21px] overflow-hidden bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

function DesktopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto transition-transform duration-300 group-hover:scale-105" style={{ width: "90%", maxWidth: 640 }}>
      {/* Browser outer shell */}
      <div className="relative rounded-[12px] border-[3px] border-[#1a1a1a] bg-[#1a1a1a] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.15) 8px 12px 18px 6px" }}>
        {/* Title bar */}
        <div className="flex items-center gap-[5px] px-3 py-[6px] bg-[#1a1a1a]">
          <span className="w-[8px] h-[8px] rounded-full bg-[#ff5f57]" />
          <span className="w-[8px] h-[8px] rounded-full bg-[#febc2e]" />
          <span className="w-[8px] h-[8px] rounded-full bg-[#28c840]" />
        </div>
        {/* Screen */}
        <div className="overflow-hidden bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

export function VideoCard({
  name,
  url,
  service,
  categories,
  trigger,
  device,
  platform,
  onFilterByCategory,
  onFilterByTrigger,
  onFilterByDevice,
  onFilterByPlatform,
  onClick,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const articleRef = useRef<HTMLElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {});
    if (articleRef.current) {
      articleRef.current.style.background = vars.background.default;
      articleRef.current.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 14px 32px 0px";
      articleRef.current.style.zIndex = "10";
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (articleRef.current) {
      articleRef.current.style.background = vars.background.subtle;
      articleRef.current.style.boxShadow = "none";
      articleRef.current.style.zIndex = "";
    }
  };

  const isDesktop = device === "Desktop";

  const videoElement = (
    <div className="card-video">
      <video
        ref={videoRef}
        src={url}
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );

  return (
    <article
      ref={articleRef}
      className={`group rounded-2xl border border-[var(--border)] cursor-pointer p-2 transition-all duration-300 ${
        isDesktop ? "xl:col-span-2" : ""
      }`}
      style={{ background: vars.background.subtle }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div
        className={`relative w-full flex items-center justify-center rounded-xl ${
          isDesktop ? "py-10 px-6" : "py-12 px-6"
        }`}
        style={{ background: vars.background.default }}
      >
        {isDesktop ? (
          <DesktopFrame>{videoElement}</DesktopFrame>
        ) : (
          <MobileFrame>{videoElement}</MobileFrame>
        )}
      </div>
      <Flex direction="column" gap="2" className="px-4 pb-4 pt-5">
        <Text font="captionM" as="span" color="var(--tertiary)">
          {service}
        </Text>
        <Text font="subTitle2" as="h3">
          {name}
        </Text>
        <Flex className="flex-wrap gap-1" style={{ marginTop: "calc(var(--spacing) * 2)" }}>
          <span onClick={(e) => { e.stopPropagation(); onFilterByDevice?.(device); }} className="cursor-pointer">
            <Tag size="sm" style={tagStyle(DEVICE_COLORS[device]?.bg || TRIGGER_COLORS.bg, DEVICE_COLORS[device]?.color || TRIGGER_COLORS.color)}>{device}</Tag>
          </span>
          <span onClick={(e) => { e.stopPropagation(); onFilterByPlatform?.(platform); }} className="cursor-pointer">
            <Tag size="sm" style={tagStyle(PLATFORM_COLORS[platform]?.bg || TRIGGER_COLORS.bg, PLATFORM_COLORS[platform]?.color || TRIGGER_COLORS.color)}>{platform}</Tag>
          </span>
          <span onClick={(e) => { e.stopPropagation(); onFilterByTrigger?.(trigger); }} className="cursor-pointer">
            <Tag size="sm" style={tagStyle(TRIGGER_COLORS.bg, TRIGGER_COLORS.color)}>{trigger}</Tag>
          </span>
        </Flex>
      </Flex>
    </article>
  );
}
