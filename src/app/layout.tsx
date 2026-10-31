import type { Metadata } from "next";
import "./globals.css";
import { PortfolioProvider } from "@/context/PortfolioContext";
import ThemeLangControls from "@/components/ThemeLangControls";
import KeyboardNav from "@/components/KeyboardNav";

export const metadata: Metadata = {
  title: "W_K.O - Software Developer Portfolio",
  description:
    "Discover my journey as a software developer. Here, you'll find a showcase of my personal projects, professional experiences, and skills that shape my work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('portfolio_theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = storedTheme || (prefersDark ? 'dark' : 'light');
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <PortfolioProvider>
          <ThemeLangControls />
          <KeyboardNav />
          {children}
        </PortfolioProvider>
      </body>
    </html>
  );
}
