import { Flex } from "@teamsparta/stack-flex";
import { Text } from "@teamsparta/stack-text";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] transition-colors">
      <Flex
        align="center"
        justify={"space-between" as any}
        className="max-w-[var(--max-width)] mx-auto px-6 py-10"
      >
        <Text font="captionSb" as="span" color="var(--tertiary)">
          SPARTA DESIGN
        </Text>
        <Text font="captionM" as="span" color="var(--tertiary)">
          Teamsparta Design Team
        </Text>
      </Flex>
    </footer>
  );
}
