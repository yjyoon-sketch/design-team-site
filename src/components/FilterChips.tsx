"use client";

import { Flex } from "@teamsparta/stack-flex";
import { Chip, ChipGroup } from "@teamsparta/stack-chip";
import { Text } from "@teamsparta/stack-text";

interface FilterChipsProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export function FilterChips({
  label,
  options,
  value,
  onChange,
}: FilterChipsProps) {
  return (
    <Flex align="center" gap="3" className="flex-wrap">
      <Text
        font="captionSb"
        as="span"
        color="var(--tertiary)"
        className="min-w-[52px] shrink-0"
      >
        {label}
      </Text>
      <ChipGroup value={value} onChange={onChange as any}>
        <Flex gap="1.5" className="flex-wrap">
          <Chip value="all" size="sm">
            전체
          </Chip>
          {options.map((opt) => (
            <Chip key={opt} value={opt} size="sm">
              {opt}
            </Chip>
          ))}
        </Flex>
      </ChipGroup>
    </Flex>
  );
}
