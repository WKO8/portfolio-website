"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "pt";
export type Theme = "dark" | "light";

interface PortfolioContextType {
  language: Language;
  theme: Theme;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "portfolio_theme";
const LANG_STORAGE_KEY = "portfolio_language";

function applyThemeClass(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(theme);
}

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    queueMicrotask(() => {
      // Carregar idioma salvo ou inferir do navegador
      try {
        const savedLang = localStorage.getItem(LANG_STORAGE_KEY) as Language | null;
        if (savedLang === "en" || savedLang === "pt") {
          setLanguageState(savedLang);
        } else {
          const browserLang = navigator.language.toLowerCase();
          if (browserLang.startsWith("pt")) {
            setLanguageState("pt");
          }
        }
      } catch {
        // Ignorar fallback em caso de restrição de localStorage
      }

      // Carregar tema salvo ou inferir de prefers-color-scheme
      try {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
        if (savedTheme === "dark" || savedTheme === "light") {
          setThemeState(savedTheme);
          applyThemeClass(savedTheme);
        } else {
          const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
          const initialTheme: Theme = prefersDark ? "dark" : "light";
          setThemeState(initialTheme);
          applyThemeClass(initialTheme);
        }
      } catch {
        applyThemeClass("dark");
      }
    });
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // localStorage indisponível
    }
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === "en" ? "pt" : "en";
    setLanguage(nextLang);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyThemeClass(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {
      // localStorage indisponível
    }
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <PortfolioContext.Provider
      value={{
        language,
        theme,
        setLanguage,
        toggleLanguage,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio(): PortfolioContextType {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
