"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: "wkontrolai" | "analisai" | null;
  isPt: boolean;
}

export default function ArchitectureModal({
  isOpen,
  onClose,
  projectId,
  isPt,
}: ArchitectureModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !projectId) return null;

  const isWKontrol = projectId === "wkontrolai";

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-2xl rounded-2xl border border-[var(--color-mid-grey)]/40 bg-[var(--color-dark-grey)] text-[var(--foreground-rgb)] p-6 sm:p-8 font-body shadow-2xl transition-all">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--color-mid-grey)]/30">
          <div className="flex items-center gap-2">
            <span className="text-hacker-green font-mono font-bold text-sm">
              &gt; {"//"}
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-mono text-[var(--foreground-rgb)] flex items-center gap-2">
              {isWKontrol ? "WKontrolAI" : "AnalisAI"}{" "}
              <span className="text-sm font-normal text-mid-grey">
                [{isPt ? "Arquitetura" : "Architecture"}]
              </span>
            </h3>
          </div>
          <div className="flex items-center gap-3">
            {isWKontrol && (
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
            )}
            <button
              onClick={onClose}
              type="button"
              className="text-mid-grey hover:text-hacker-green font-mono text-sm px-2 py-1 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              [ X ]
            </button>
          </div>
        </div>

        {/* Pipeline ASCII Flow */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase text-hacker-green tracking-wider mb-2">
            {"// "}{isPt ? "Fluxo do Pipeline de Dados" : "Data Pipeline Flow"}
          </h4>
          <div className="p-3.5 rounded-xl border border-[var(--color-mid-grey)]/30 bg-black/40 overflow-x-auto text-xs font-mono leading-relaxed text-[var(--foreground-rgb)]">
            {isWKontrol ? (
              <div className="whitespace-nowrap sm:whitespace-normal">
                <span className="text-hacker-green font-bold">WhatsApp</span>
                <span className="text-mid-grey mx-1.5">➔</span>
                <span>Evolution API</span>
                <span className="text-mid-grey mx-1.5">➔</span>
                <span className="text-sky-400">BullMQ + Redis</span>
                <span className="text-mid-grey mx-1.5">➔</span>
                <span className="text-yellow-400">Groq Whisper LPU + DeepSeek V3</span>
                <span className="text-mid-grey mx-1.5">➔</span>
                <span className="text-emerald-400">Drizzle ORM (RLS) + PostgreSQL 16</span>
                <span className="text-mid-grey mx-1.5">➔</span>
                <span>Next.js PWA Dashboard</span>
              </div>
            ) : (
              <div className="whitespace-nowrap sm:whitespace-normal">
                <span className="text-hacker-green font-bold">Upload (.csv / .xlsx)</span>
                <span className="text-mid-grey mx-1.5">➔</span>
                <span className="text-sky-400">FastAPI Pipeline (Pandas)</span>
                <span className="text-mid-grey mx-1.5">➔</span>
                <span className="text-yellow-400">Redis Session Cache</span>
                <span className="text-mid-grey mx-1.5">➔</span>
                <span className="text-emerald-400">LLM WebSocket Reasoning</span>
                <span className="text-mid-grey mx-1.5">➔</span>
                <span>WeasyPrint PDF Reports</span>
              </div>
            )}
          </div>
        </div>

        {/* Engineering & Security Decisions */}
        <div className="mt-6 space-y-3.5 text-xs sm:text-sm">
          <h4 className="text-xs font-mono uppercase text-hacker-green tracking-wider">
            {"// "}{isPt ? "Decisões de Engenharia & Segurança" : "Key Engineering & Security Decisions"}
          </h4>

          {isWKontrol ? (
            <ul className="space-y-3 text-desc">
              <li className="flex items-start gap-2">
                <span className="text-hacker-green font-mono shrink-0">01.</span>
                <span>
                  <strong className="text-[var(--foreground-rgb)]">
                    {isPt
                      ? "Processamento Assíncrono com Zero-Loss: "
                      : "Zero-Loss Asynchronous Queue: "}
                  </strong>
                  {isPt
                    ? "Ingestão via webhooks desacoplada em workers BullMQ com Redis, garantindo idempotência e re-tentativas com backoff exponencial sob picos de mensagens."
                    : "Webhook ingestion decoupled into BullMQ workers on Redis, ensuring message idempotency and exponential backoff retry policies under high load."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hacker-green font-mono shrink-0">02.</span>
                <span>
                  <strong className="text-[var(--foreground-rgb)]">
                    {isPt
                      ? "Isolamento Estrito e AppSec (Row-Level Security): "
                      : "Strict Isolation & AppSec (RLS): "}
                  </strong>
                  {isPt
                    ? "Políticas de Row-Level Security no PostgreSQL 16 aplicadas pelo Drizzle ORM garantem isolamento criptográfico entre registros contábeis de diferentes usuários."
                    : "PostgreSQL 16 native Row-Level Security policies enforced through Drizzle ORM guarantee complete tenant isolation across ledger transactions."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hacker-green font-mono shrink-0">03.</span>
                <span>
                  <strong className="text-[var(--foreground-rgb)]">
                    {isPt
                      ? "Inferência de Ultra-Baixa Latência: "
                      : "Ultra-Low Latency Inference: "}
                  </strong>
                  {isPt
                    ? "Transcrição de notas de voz via Groq Whisper LPU em <300ms e extração estruturada de comprovantes via DeepSeek V3 com contratos Pydantic."
                    : "Voice notes transcribed via Groq Whisper LPU in sub-300ms, paired with DeepSeek V3 multimodal vision parser and strict Pydantic JSON contracts."}
                </span>
              </li>
            </ul>
          ) : (
            <ul className="space-y-3 text-desc">
              <li className="flex items-start gap-2">
                <span className="text-hacker-green font-mono shrink-0">01.</span>
                <span>
                  <strong className="text-[var(--foreground-rgb)]">
                    {isPt
                      ? "Streaming Bidirecional via WebSockets: "
                      : "Bidirectional WebSocket Streaming: "}
                  </strong>
                  {isPt
                    ? "Comunicação full-duplex de baixa latência permitindo raciocínio iterativo em planilhas volumosas sem restrições de timeout HTTP."
                    : "Full-duplex low-latency communication allowing iterative conversational reasoning over large tabular datasets without HTTP timeout barriers."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hacker-green font-mono shrink-0">02.</span>
                <span>
                  <strong className="text-[var(--foreground-rgb)]">
                    {isPt
                      ? "Pipeline Determinístico de Higienização: "
                      : "Deterministic Data Cleaning Pipeline: "}
                  </strong>
                  {isPt
                    ? "Engine modular com Pandas e NumPy para normalização de esquemas, tratamento estrito de missing values e detecção de anomalias estatísticas."
                    : "Modular Pandas & NumPy engine for automated schema normalization, strict missing value handling, and statistical anomaly detection."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hacker-green font-mono shrink-0">03.</span>
                <span>
                  <strong className="text-[var(--foreground-rgb)]">
                    {isPt
                      ? "Geração Dinâmica de Relatórios Executivos: "
                      : "Dynamic Executive PDF Generation: "}
                  </strong>
                  {isPt
                    ? "Renderização headless server-side de relatórios executivos em PDF com WeasyPrint a partir de insights conversacionais e gráficos analíticos."
                    : "Headless server-side executive PDF report compilation using WeasyPrint directly from conversational insights and visual charts."}
                </span>
              </li>
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-[var(--color-mid-grey)]/30 flex items-center justify-between">
          {isWKontrol ? (
            <Link
              href="https://github.com/WKO8/wkontrolai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-hacker-green hover:opacity-80 transition-opacity font-mono"
            >
              <Image
                src="/images/github.svg"
                alt="GitHub"
                width={14}
                height={14}
              />
              <span className="underline">github.com/WKO8/wkontrolai</span>
              <span>↗</span>
            </Link>
          ) : (
            <div />
          )}
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-1.5 rounded-lg border border-[var(--color-mid-grey)]/50 hover:border-hacker-green text-xs font-mono text-mid-grey hover:text-hacker-green transition-all cursor-pointer"
          >
            [ {isPt ? "Fechar (ESC)" : "Close (ESC)"} ]
          </button>
        </div>
      </div>
    </div>
  );
}
