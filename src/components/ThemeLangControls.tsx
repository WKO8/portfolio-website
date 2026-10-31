"use client";

import React from "react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function ThemeLangControls() {
  const { language, toggleLanguage, theme, toggleTheme } = usePortfolio();

  return (
    <aside
      aria-label="Language and theme toggles"
      className="fixed top-6 right-8 flex items-center gap-3 text-xs text-mid-grey font-body z-50 select-none"
    >
      <button
        onClick={toggleLanguage}
        type="button"
        className="hover:text-hacker-green transition-colors cursor-pointer"
        aria-label="Toggle language"
        title="Toggle language / Alternar idioma"
      >
        [{" "}
        <span className={language === "en" ? "text-hacker-green font-bold" : "opacity-60"}>
          en
        </span>{" "}
        |{" "}
        <span className={language === "pt" ? "text-hacker-green font-bold" : "opacity-60"}>
          pt
        </span>{" "}
        ]
      </button>
      <button
        onClick={toggleTheme}
        type="button"
        className="hover:text-hacker-green transition-colors cursor-pointer"
        aria-label="Toggle theme"
        title="Toggle theme / Alternar tema"
      >
        [ {theme === "dark" ? "🌙" : "☀️"} ]
      </button>
    </aside>
  );
}
