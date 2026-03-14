"use client";

import Image from "next/image";
import { Flex } from "@teamsparta/stack-flex";
import { Text } from "@teamsparta/stack-text";
import { vars } from "@teamsparta/stack-tokens";
import { BLOG_POSTS } from "@/data/blog";

export default function BlogPage() {
  return (
    <section className="max-w-[var(--max-width)] mx-auto px-6 pt-20 pb-20">
      <div className="flex flex-col md:flex-row md:gap-12">
        {/* Title */}
        <div className="mb-8 md:mb-0 md:shrink-0 md:w-[320px] md:sticky md:top-[80px] md:self-start">
          <Text font="largeTitle" as="h1">
            Blog
          </Text>
          <Text font="bodyM" as="p" color="var(--secondary)" className="mt-4">
            팀스파르타 디자인팀의 이야기
          </Text>
        </div>

        {/* Blog List */}
        <div className="flex-1 flex flex-col md:-mt-6">
          {BLOG_POSTS.map((post, i) => (
            <a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 md:gap-6 py-4 md:py-6 rounded-2xl px-4 -mx-4 transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.background = vars.background.subtle)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {/* Thumbnail */}
              <div className="shrink-0 w-[100px] h-[72px] md:w-[200px] md:h-[120px] rounded-lg md:rounded-xl overflow-hidden bg-[var(--surface-alt)]">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={200}
                  height={120}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <Flex direction="column" className="flex-1 min-w-0">
                <Text font="subTitle3" as="h3" className="md:hidden" style={{ paddingBottom: 4 }}>
                  {post.title}
                </Text>
                <Text font="subTitle1" as="h3" className="hidden md:block" style={{ paddingBottom: 8 }}>
                  {post.title}
                </Text>
                <Text
                  font="bodyLong"
                  as="p"
                  color="var(--secondary)"
                  className="hidden md:block line-clamp-2"
                >
                  {post.excerpt}
                </Text>
                <Text font="captionM" as="span" color="var(--tertiary)" style={{ marginTop: 4 }}>
                  {post.date}
                </Text>
              </Flex>

              {/* Arrow */}
              <span className="hidden md:block shrink-0 text-[var(--tertiary)] opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
