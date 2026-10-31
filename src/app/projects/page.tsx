"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { usePortfolio } from "@/context/PortfolioContext";
import ArchitectureModal from "@/components/ArchitectureModal";

import "./styles.css";

export default function ProjectsPage() {
  const router = useRouter();
  const { language } = usePortfolio();

  const isPt = language === "pt";

  // Estado para Modal de Arquitetura
  const [archModalProject, setArchModalProject] = useState<
    "wkontrolai" | "analisai" | null
  >(null);

  // Estado para Cópia de E-mail
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("wko.programmer@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = "mailto:wko.programmer@gmail.com";
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-8 pb-0 overflow-hidden font-body">
      {/* Botão Superior: Voltar para AI & Systems */}
      <div
        className="prev-scroll flex items-center flex-col justify-center gap-2 mb-10 text-mid-grey cursor-pointer"
        onClick={() => router.push("/ai")}
      >
        <div className="button-prev w-14 h-14 rounded-full bg-dark-grey flex items-center justify-center">
          <div className="triangle-prev w-0 h-0 border-l-[0.8rem] border-l-transparent border-b-[1rem] border-b-[var(--triangle-color)] border-r-[0.8rem] border-r-transparent"></div>
        </div>
        <span>{isPt ? "IA & Sistemas" : "AI & Systems"}</span>
      </div>

      <div className="main-info max-w-lg w-full">
        <div className="projects flex flex-col w-full mt-2">
          <div className="projects-header flex flex-row gap-5 mb-4">
            <h3 className="half-underline text-light-grey text-xl">
              {isPt ? "Projetos Selecionados" : "Recent Projects"}
            </h3>
            <div className="github-icon flex items-center justify-center mb-2 cursor-pointer">
              <Link
                href={"https://github.com/WKO8?tab=repositories"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/github.svg"
                  alt="Github icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          <div className="projects-cards w-full">
            {/* Projeto 1: WKO Hub */}
            <div className="project-card-0 ml-2">
              <div className="flex flex-row w-full gap-3">
                <div className="project-image w-[60px] h-[60px] align-middle text-center justify-center mt-2 shrink-0">
                  <Link
                    href="https://wkohub.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/wkohub-logo-plain.svg"
                      alt="WKO Hub logo"
                      width={60}
                      height={60}
                      className="rounded-3xl"
                    />
                  </Link>
                </div>
                <div className="project-info w-4/5 ml-2">
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Link
                      href="https://wkohub.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-hacker-green transition-colors"
                    >
                      WKO Hub
                    </Link>
                    <Link
                      href="https://wkohub.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-hacker-green hover:opacity-80 transition-opacity"
                    >
                      <span className="underline">wkohub.com</span>
                      <span>↗</span>
                    </Link>
                  </h4>
                  <p className="text-desc text-sm text-start">
                    {isPt
                      ? "Plataforma SaaS multi-tenant criada para digitalizar a gestão de pequenas e médias empresas."
                      : "A multi-tenant SaaS platform designed to digitize small and medium-sized businesses."}
                  </p>
                </div>
              </div>
            </div>

            {/* Projeto 2: WKontrolAI */}
            <div className="project-card-1 ml-2">
              <div className="flex flex-row w-full gap-3 mt-6">
                <div className="project-image w-[60px] h-[60px] align-middle text-center justify-center mt-2 shrink-0">
                  <Link
                    href="https://github.com/WKO8/wkontrolai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/wkontrolai-logo.svg"
                      alt="WKontrolAI logo"
                      width={60}
                      height={60}
                      className="rounded-3xl"
                    />
                  </Link>
                </div>
                <div className="project-info w-4/5 ml-2">
                  <h4 className="text-lg font-bold mb-2 flex flex-wrap items-center gap-2">
                    <Link
                      href="https://github.com/WKO8/wkontrolai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-hacker-green transition-colors"
                    >
                      WKontrolAI
                    </Link>
                    <Link
                      href="https://github.com/WKO8/wkontrolai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-hacker-green hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src="/images/github.svg"
                        alt="GitHub"
                        width={14}
                        height={14}
                      />
                      <span className="underline">GitHub</span>
                    </Link>
                    <button
                      onClick={() => setArchModalProject("wkontrolai")}
                      type="button"
                      className="text-xs font-mono text-hacker-green hover:underline cursor-pointer transition-colors"
                      title={
                        isPt
                          ? "Ver fluxo e decisões de arquitetura"
                          : "View architecture & pipeline flow"
                      }
                    >
                      [ {isPt ? "Ver Arquitetura" : "View Architecture"} ]
                    </button>
                  </h4>
                  <p className="text-desc text-sm text-start">
                    {isPt
                      ? "Co-piloto autônomo de inteligência financeira integrado ao WhatsApp e PWA com extração multimodal de comprovantes."
                      : "Autonomous AI financial co-pilot operating via WhatsApp and PWA with multi-modal vision expense extraction."}
                  </p>
                </div>
              </div>
            </div>

            {/* Projeto 3: Pipeline Shorts */}
            <div className="project-card-2 ml-2">
              <div className="flex flex-row w-full gap-3 mt-6">
                <div className="project-image w-[60px] h-[60px] align-middle text-center justify-center mt-2 shrink-0">
                  <Link
                    href="https://github.com/WKO8/pipeline-shorts"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/pipeline-shorts-logo.svg"
                      alt="Pipeline Shorts logo"
                      width={60}
                      height={60}
                      className="rounded-3xl"
                    />
                  </Link>
                </div>
                <div className="project-info w-4/5 ml-2">
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Link
                      href="https://github.com/WKO8/pipeline-shorts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-hacker-green transition-colors"
                    >
                      Pipeline Shorts
                    </Link>
                    <Link
                      href="https://github.com/WKO8/pipeline-shorts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-hacker-green hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src="/images/github.svg"
                        alt="GitHub"
                        width={14}
                        height={14}
                      />
                      <span className="underline">GitHub</span>
                    </Link>
                  </h4>
                  <p className="text-desc text-sm text-start">
                    {isPt
                      ? "Pipeline local de IA multimodal para geração autônoma de cortes verticais em GPUs de consumo com faster-whisper, Ollama Qwen, YuNet e Active Speaker Detection (LR-ASD)."
                      : "Local-first multimodal pipeline that generates vertical shorts on consumer GPUs using faster-whisper, Ollama Qwen, YuNet, and Active Speaker Detection (LR-ASD)."}
                  </p>
                </div>
              </div>
            </div>

            {/* Projeto 4: WKrawler / TCC */}
            <div className="project-card-3 ml-2">
              <div className="flex flex-row w-full gap-3 mt-6">
                <div className="project-image w-[60px] h-[60px] align-middle text-center justify-center mt-2 shrink-0">
                  <Link
                    href="https://github.com/WKO8/wkrawler"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/wkrawler-logo.svg"
                      alt="WKrawler logo"
                      width={60}
                      height={60}
                      className="rounded-3xl"
                    />
                  </Link>
                </div>
                <div className="project-info w-4/5 ml-2">
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Link
                      href="https://github.com/WKO8/wkrawler"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-hacker-green transition-colors"
                    >
                      WKrawler / TCC
                    </Link>
                    <Link
                      href="https://github.com/WKO8/wkrawler"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-hacker-green hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src="/images/github.svg"
                        alt="GitHub"
                        width={14}
                        height={14}
                      />
                      <span className="underline">GitHub</span>
                    </Link>
                  </h4>
                  <p className="text-desc text-sm text-start">
                    {isPt
                      ? "Crawler de alta concorrência e motor de extração para perícia forense digital e OSINT."
                      : "High-concurrency OSINT crawler and digital forensics extraction engine for threat intelligence graphs."}
                  </p>
                </div>
              </div>
            </div>

            {/* More Projects */}
            <div className="more-projects mt-10">
              <Link
                href={"https://github.com/WKO8?tab=repositories"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center justify-center text-center space-x-2">
                  <span className="text-light-grey text-sm">
                    {isPt ? "mais projetos" : "more projects"}
                  </span>
                  <div className="flex items-center justify-center rounded-full bg-mid-grey h-4 w-10">
                    <span>...</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media & Contact */}
        <div className="social-icons flex flex-col w-full my-10">
          <h3 className="half-underline text-light-grey text-xl">
            Social Media
          </h3>
          <div className="social-media-icons flex flex-row gap-3 items-center justify-around mt-5">
            {/* GitHub */}
            <Link
              href={"https://github.com/WKO8"}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub / WKO8"
            >
              <Image
                src="/images/github.svg"
                alt="Github icon"
                width={30}
                height={30}
              />
            </Link>

            {/* Email com cópia rápida e feedback de 2s */}
            <button
              onClick={handleCopyEmail}
              type="button"
              className="group relative flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
              title={
                isPt
                  ? "Clique para copiar e-mail (wko.programmer@gmail.com)"
                  : "Click to copy e-mail (wko.programmer@gmail.com)"
              }
              aria-label="Copy email to clipboard"
            >
              <Image
                src="/images/email-icon.svg"
                alt="Email icon"
                width={35}
                height={35}
              />
              {copiedEmail && (
                <span className="absolute -top-7 px-2 py-0.5 rounded bg-hacker-green text-black font-mono text-[11px] font-bold shadow-md whitespace-nowrap animate-fadeIn">
                  {isPt ? "[ copiado! ]" : "[ copied! ]"}
                </span>
              )}
            </button>

            {/* LinkedIn */}
            <Link
              href={
                "https://www.linkedin.com/in/matheus-moreira-sorrentino-a5899b1b0/"
              }
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn / Matheus Moreira Sorrentino"
            >
              <Image
                src="/images/linkedin.svg"
                alt="LinkedIn icon"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Modal de Arquitetura Minimalista */}
      <ArchitectureModal
        isOpen={archModalProject !== null}
        onClose={() => setArchModalProject(null)}
        projectId={archModalProject}
        isPt={isPt}
      />
    </div>
  );
}
