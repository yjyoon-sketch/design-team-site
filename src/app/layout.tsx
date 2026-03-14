"use client";

import { StackProvider } from "@teamsparta/stack-core";
import "@teamsparta/stack-core/style.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import { EmotionRegistry } from "@/components/EmotionRegistry";

function LayoutInner({ children }: { children: React.ReactNode }) {
  const { stackTheme } = useTheme();

  return (
    <StackProvider theme={stackTheme}>
      <Header />
      <main className="flex-1 pb-[56px] md:pb-0">{children}</main>
      <Footer />
      <BottomNav />
    </StackProvider>
  );
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <title>팀스파르타 디자인팀</title>
        <meta
          name="description"
          content="AI시대, 미래를 돌파하는 디자인팀"
        />
        <meta property="og:title" content="팀스파르타 디자인팀" />
        <meta property="og:description" content="AI시대, 미래를 돌파하는 디자인팀" />
        <meta property="og:image" content={`${basePath}/og-image.png`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="팀스파르타 디자인팀" />
        <meta name="twitter:description" content="AI시대, 미래를 돌파하는 디자인팀" />
        <meta name="twitter:image" content={`${basePath}/og-image.png`} />
        <link rel="icon" href={`${basePath}/favicon.png`} type="image/png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <EmotionRegistry>
          <ThemeProvider>
            <LayoutInner>{children}</LayoutInner>
          </ThemeProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
