"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const ROUTES = ["/experience", "/ai", "/projects"];

export default function KeyboardNav() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignorar se o usuário estiver digitando em campo de texto
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea") {
        return;
      }

      // Ignorar se modal de arquitetura estiver aberto
      if (document.querySelector('[role="dialog"]')) {
        return;
      }

      // Ignorar combinações de teclas especiais (Ctrl, Alt, Meta)
      if (e.ctrlKey || e.altKey || e.metaKey) {
        return;
      }

      // Atalhos diretos por número: 1, 2, 3
      if (e.key === "1") {
        e.preventDefault();
        router.push("/experience");
        return;
      }
      if (e.key === "2") {
        e.preventDefault();
        router.push("/ai");
        return;
      }
      if (e.key === "3") {
        e.preventDefault();
        router.push("/projects");
        return;
      }

      // Atalhos de navegação sequencial: ArrowDown / j (avançar) e ArrowUp / k (voltar)
      const currentRoute = !pathname || pathname === "/" ? "/experience" : pathname;
      const currentIndex = ROUTES.indexOf(currentRoute);

      if (currentIndex === -1) return;

      if (e.key === "ArrowDown" || e.key === "j" || e.key === "J") {
        if (currentIndex < ROUTES.length - 1) {
          e.preventDefault();
          router.push(ROUTES[currentIndex + 1]);
        }
      } else if (e.key === "ArrowUp" || e.key === "k" || e.key === "K") {
        if (currentIndex > 0) {
          e.preventDefault();
          router.push(ROUTES[currentIndex - 1]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pathname, router]);

  return (
    <div
      aria-hidden="true"
      className="fixed bottom-4 right-6 text-[11px] font-mono text-mid-grey/60 hidden md:block select-none pointer-events-none z-40 transition-opacity opacity-70 hover:opacity-100"
    >
      [ nav: ↑ / ↓ or 1, 2, 3 ]
    </div>
  );
}
