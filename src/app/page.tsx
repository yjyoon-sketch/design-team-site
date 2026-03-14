"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { Flex } from "@teamsparta/stack-flex";
import { Text } from "@teamsparta/stack-text";
import { FilterSelect } from "@/components/FilterSelect";
import { VideoCard } from "@/components/VideoCard";
import { DetailModal } from "@/components/DetailModal";
import { MOCK_DATA, type ReferenceItem } from "@/data/references";

const CATEGORIES = [
  "탐색",
  "온보딩",
  "결제",
  "신청",
  "리워드/보상",
  "로딩",
  "광고",
  "기타",
];
const TRIGGERS = [
  "클릭",
  "호버",
  "스크롤",
  "스와이프",
  "드래그",
  "뷰",
  "자동재생",
  "서비스 트리거",
];
const DEVICES = ["Mobile", "Desktop"];
const PLATFORMS = ["App", "web", "OS"];

export default function InteractionPage() {
  const [category, setCategory] = useState("all");
  const [trigger, setTrigger] = useState("all");
  const [device, setDevice] = useState("all");
  const [platform, setPlatform] = useState("all");
  const [search, setSearch] = useState("");
  const [isStuck, setIsStuck] = useState(false);
  const filterRef = useRef<HTMLElement>(null);
  const [selectedItem, setSelectedItem] = useState<ReferenceItem | null>(null);

  useEffect(() => {
    const el = filterRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { rootMargin: "-61px 0px 0px 0px", threshold: 1 }
    );
    const sentinel = document.getElementById("filter-sentinel");
    if (sentinel) observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return MOCK_DATA.filter((item) => {
      if (category !== "all" && !item.categories.includes(category))
        return false;
      if (trigger !== "all" && item.trigger !== trigger) return false;
      if (device !== "all" && item.device !== device) return false;
      if (platform !== "all" && item.platform !== platform) return false;
      if (q) {
        const matchCategory = item.categories.some((c) => c.toLowerCase().includes(q));
        const matchService = item.service.toLowerCase().includes(q);
        if (!matchCategory && !matchService) return false;
      }
      return true;
    });
  }, [category, trigger, device, platform, search]);

  return (
    <>
      {/* Hero */}
      <section className="max-w-[var(--max-width)] mx-auto px-6 pt-20 pb-12">
        <Text font="largeTitle" as="h1">
          Interaction
          <br />
          Reference Archive
        </Text>
        <Text font="bodyM" as="p" color="var(--secondary)" className="mt-4">
          팀스파르타 디자인팀이 매주 수집하는 인터랙션 디자인 레퍼런스
        </Text>
      </section>

      <div id="filter-sentinel" />

      {/* Filters */}
      <section
        ref={filterRef}
        className={`sticky top-[60px] z-40 bg-[var(--background)] py-4 transition-all ${
          isStuck ? "border-b border-[var(--border)]" : ""
        }`}
      >
        <div className="max-w-[var(--max-width)] mx-auto px-6 flex items-center justify-between gap-4">
          <Flex className="flex-wrap gap-2">
            <FilterSelect
              label="디바이스"
              options={DEVICES}
              value={device}
              onChange={setDevice}
            />
            <FilterSelect
              label="플랫폼"
              options={PLATFORMS}
              value={platform}
              onChange={setPlatform}
            />
            <FilterSelect
              label="트리거"
              options={TRIGGERS}
              value={trigger}
              onChange={setTrigger}
            />
            <FilterSelect
              label="카테고리"
              options={CATEGORIES}
              value={category}
              onChange={setCategory}
            />
          </Flex>
          <div className="relative shrink-0">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="absolute left-3 top-1/2 -translate-y-1/2"
              style={{ color: "var(--tertiary)" }}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="서비스명 검색"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-3 py-2 w-[180px] rounded-full border border-[var(--border)] bg-transparent text-sm outline-none transition-colors focus:border-[var(--foreground)] placeholder:text-[var(--tertiary)]"
              style={{ fontFamily: "Pretendard" }}
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-[var(--max-width)] mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
          {filtered.map((item, i) => (
            <VideoCard
              key={i}
              {...item}
              onFilterByCategory={setCategory}
              onFilterByTrigger={setTrigger}
              onFilterByDevice={setDevice}
              onFilterByPlatform={setPlatform}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </section>

      <DetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}
