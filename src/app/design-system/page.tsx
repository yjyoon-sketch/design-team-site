"use client";

import Image from "next/image";
import { Flex } from "@teamsparta/stack-flex";
import { Text } from "@teamsparta/stack-text";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function DesignSystemPage() {
  return (
    <section className="flex-1 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Flex direction="column" align="center" gap="8" className="px-6">
        <Image
          src={`${basePath}/under-construction.png`}
          alt="준비 중"
          width={180}
          height={180}
          className="object-contain"
        />
        <Flex direction="column" align="center" gap="4">
          <Text font="largeTitle" as="h1">
            Design System
          </Text>
          <Text font="bodyM" as="p" color="var(--secondary)">
            디자인시스템 문서를 준비하고 있습니다.
          </Text>
        </Flex>
      </Flex>
    </section>
  );
}
