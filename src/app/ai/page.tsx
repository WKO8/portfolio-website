"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { usePortfolio } from "@/context/PortfolioContext";
import ArchitectureModal from "@/components/ArchitectureModal";

export default function AIPage() {
  const router = useRouter();
  const { language } = usePortfolio();

  const isPt = language === "pt";

  // Estado para Modal de Arquitetura do WKontrolAI Engine
  const [isArchModalOpen, setIsArchModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-8 sm:p-8 overflow-y-auto font-body">
      {/* Botão Superior: Voltar para Experience */}
      <div
        className="prev-scroll flex items-center flex-col justify-center gap-2 mb-6 sm:mb-10 text-mid-grey cursor-pointer"
        onClick={() => router.push("/experience")}
      >
        <div className="button-prev w-14 h-14 rounded-full bg-dark-grey flex items-center justify-center">
          <div className="triangle-prev w-0 h-0 border-l-[0.8rem] border-l-transparent border-b-[1rem] border-b-[var(--triangle-color)] border-r-[0.8rem] border-r-transparent"></div>
        </div>
        <span>{isPt ? "Experiência" : "Experience"}</span>
      </div>

      {/* Conteúdo Principal */}
      <div className="main-info max-w-lg w-full">
        {/* Seção 1: IA & Sistemas */}
        <div className="ai-section flex flex-col w-full mt-2">
          <h3 className="half-underline text-light-grey text-xl mb-6">
            {isPt ? "IA & Sistemas" : "AI & Systems"}
          </h3>

          {/* 1. Pipeline Shorts Engine */}
          <div className="job-local-time flex flex-col sm:flex-row sm:justify-between px-2 mt-4">
            <div className="text-start w-full sm:w-auto">
              <div className="flex items-center justify-between sm:justify-start gap-2">
                <h2 className="text-xl font-bold">Pipeline Shorts Engine</h2>
                <Link
                  href="https://github.com/WKO8/pipeline-shorts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex sm:hidden items-center gap-1.5 text-xs text-hacker-green hover:opacity-80 transition-opacity shrink-0"
                >
                  <Image
                    src="/images/github.svg"
                    alt="GitHub"
                    width={14}
                    height={14}
                  />
                  <span className="underline">GitHub</span>
                </Link>
              </div>
              <p className="text-desc text-sm mt-1 w-full">
                {isPt
                  ? "Geração autônoma de cortes verticais em GPU de consumo, sincronização fonética WhisperX e detecção visual de falante com LR-ASD e YuNet."
                  : "Autonomous vertical shorts generation on consumer GPUs, phonetic WhisperX alignment, and visual active speaker detection with LR-ASD & YuNet."}
              </p>
            </div>
            <div className="job-time flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start mt-2 sm:mt-0 shrink-0 sm:ml-4">
              <Link
                href="https://github.com/WKO8/pipeline-shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs text-hacker-green hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/github.svg"
                  alt="GitHub"
                  width={14}
                  height={14}
                />
                <span className="underline">GitHub</span>
              </Link>
              <h3 className="text-sm text-hacker-green mt-0 sm:mt-1">
                {isPt ? "Visão Multimodal" : "Multimodal / Video"}
              </h3>
              <h4 className="text-xs text-mid-grey">Ollama / Whisper</h4>
            </div>
          </div>

          {/* 2. WKontrolAI Engine */}
          <div className="job-local-time flex flex-col sm:flex-row sm:justify-between px-2 mt-6">
            <div className="text-start w-full sm:w-auto">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xl font-bold">
                  <Link
                    href="https://github.com/WKO8/wkontrolai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-hacker-green transition-colors"
                  >
                    WKontrolAI Engine
                  </Link>
                </h2>
                <div className="flex sm:hidden items-center gap-2">
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
                    onClick={() => setIsArchModalOpen(true)}
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
                </div>
              </div>
              <p className="text-desc text-sm mt-1 w-full">
                {isPt
                  ? "Co-piloto financeiro no WhatsApp e PWA com Whisper LPU de baixa latência, DeepSeek V3, filas BullMQ e confirmação Human-in-the-Loop."
                  : "WhatsApp & PWA financial co-pilot featuring low-latency Whisper LPU, DeepSeek V3 vision, BullMQ queues, and Human-in-the-Loop confirmation."}
              </p>
            </div>
            <div className="job-time flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start mt-2 sm:mt-0 shrink-0 sm:ml-4">
              <div className="hidden sm:flex items-center gap-2">
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
                  onClick={() => setIsArchModalOpen(true)}
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
              </div>
              <h3 className="text-sm text-hacker-green mt-0 sm:mt-1">
                {isPt ? "Agentes Autônomos" : "Autonomous Agents"}
              </h3>
              <h4 className="text-xs text-mid-grey">Groq / DeepSeek</h4>
            </div>
          </div>
        </div>

        {/* Seção 2: Certificações Oficiais */}
        <div className="certifications flex flex-col w-full mt-10">
          <h3 className="half-underline text-light-grey text-xl mb-4">
            {isPt ? "Certificações" : "Certifications"}
          </h3>

          {/* 1. Databricks - Generative AI Fundamentals */}
          <div className="job-local-time flex flex-col sm:flex-row sm:justify-between px-2 mt-4">
            <div className="text-start w-full sm:w-auto">
              <h2 className="text-lg font-bold">Generative AI Fundamentals</h2>
              <p className="text-desc text-xs mt-0.5">
                {isPt
                  ? "Fundamentos de LLMs, arquiteturas RAG e governança de IA"
                  : "LLMs foundations, RAG architectures & ethical AI governance"}
              </p>
            </div>
            <div className="job-time flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start mt-1 sm:mt-0 shrink-0 sm:ml-4">
              <h3 className="text-sm text-hacker-green">Databricks</h3>
              <h4 className="text-xs text-mid-grey font-mono">
                {isPt ? "Cód: " : "ID: "}169612060
              </h4>
            </div>
          </div>

          {/* 2. DIO - Fundamentos da IA Moderna */}
          <div className="job-local-time flex flex-col sm:flex-row sm:justify-between px-2 mt-5">
            <div className="text-start w-full sm:w-auto">
              <h2 className="text-lg font-bold">
                {isPt ? "Fundamentos da IA Moderna" : "Modern AI Fundamentals"}
              </h2>
              <p className="text-desc text-xs mt-0.5">
                {isPt
                  ? "Machine Learning, LLMs, IA Generativa e Agentes"
                  : "Machine Learning, LLMs, Generative AI and Agents"}
              </p>
            </div>
            <div className="job-time flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start mt-1 sm:mt-0 shrink-0 sm:ml-4">
              <h3 className="text-sm text-hacker-green">DIO</h3>
              <Link
                href="https://www.dio.me/certificate/J2DQHOY1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-mid-grey hover:text-hacker-green transition-colors font-mono underline"
                title="Verificar certificado oficial"
              >
                J2DQHOY1 ↗
              </Link>
            </div>
          </div>

          {/* 3. DIO - Bootcamp Itaú Java com IA */}
          <div className="job-local-time flex flex-col sm:flex-row sm:justify-between px-2 mt-5">
            <div className="text-start w-full sm:w-auto">
              <h2 className="text-lg font-bold">
                Bootcamp Itaú - Java com IA
              </h2>
              <p className="text-desc text-xs mt-0.5">
                {isPt
                  ? "Engenharia backend corporativa em Java e integração com IA"
                  : "Enterprise Java backend engineering and AI integration"}
              </p>
            </div>
            <div className="job-time flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start mt-1 sm:mt-0 shrink-0 sm:ml-4">
              <h3 className="text-sm text-hacker-green">Itaú / DIO</h3>
              <Link
                href="https://www.dio.me/certificate/AW6BOVSB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-mid-grey hover:text-hacker-green transition-colors font-mono underline"
                title="Verificar certificado oficial"
              >
                AW6BOVSB ↗
              </Link>
            </div>
          </div>

          {/* 4. AWS TreinaBrasil */}
          <div className="job-local-time flex flex-col sm:flex-row sm:justify-between px-2 mt-5">
            <div className="text-start w-full sm:w-auto">
              <h2 className="text-lg font-bold">
                {isPt
                  ? "Como automatizar chatbots para o seu negócio"
                  : "AWS Chatbots & Cloud Automation"}
              </h2>
              <p className="text-desc text-xs mt-0.5">
                {isPt
                  ? "Arquitetura cloud AWS, automação inteligente e chatbots"
                  : "AWS cloud architecture, intelligent chatbots & automation"}
              </p>
            </div>
            <div className="job-time flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start mt-1 sm:mt-0 shrink-0 sm:ml-4">
              <h3 className="text-sm text-hacker-green">AWS / TreinaBrasil</h3>
              <h4 className="text-xs text-mid-grey">
                {isPt ? "Especialização" : "Specialization"}
              </h4>
            </div>
          </div>
        </div>

        {/* Seção 3: AI Lab & Estudos */}
        <div className="lab-section flex flex-col w-full mt-10">
          <h3 className="half-underline text-light-grey text-xl mb-4">
            {isPt ? "Laboratório & Estudos de IA" : "AI Lab & Studies"}
          </h3>

          {/* 1. Tradução & Alinhamento de Vídeo (MFA + Whisper) */}
          <div className="job-local-time flex flex-col sm:flex-row sm:justify-between px-2 mt-4">
            <div className="text-start w-full sm:w-auto">
              <h2 className="text-base font-bold">
                {isPt
                  ? "Tradução & Alinhamento de Vídeo"
                  : "Video Translation & Phonetic Alignment"}
              </h2>
              <p className="text-desc text-xs mt-0.5">
                {isPt
                  ? "Alinhamento fonético automatizado com Montreal Forced Aligner e Whisper para dublagem e legendas com precisão temporal de frames."
                  : "Automated phonetic forced alignment with Montreal Forced Aligner & Whisper for frame-accurate dubbing and subtitles."}
              </p>
            </div>
            <div className="job-time flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start mt-1 sm:mt-0 shrink-0 sm:ml-4">
              <h4 className="text-xs text-mid-grey">MFA / Whisper</h4>
            </div>
          </div>

          {/* 2. Visão Computacional & OCR (YOLOv5) */}
          <div className="job-local-time flex flex-col sm:flex-row sm:justify-between px-2 mt-5">
            <div className="text-start w-full sm:w-auto">
              <h2 className="text-base font-bold">
                {isPt
                  ? "Visão Computacional & OCR (YOLOv5)"
                  : "Computer Vision & OCR (YOLOv5)"}
              </h2>
              <p className="text-desc text-xs mt-0.5">
                {isPt
                  ? "Modelos treinados para detecção de objetos, rastreamento espacial e leitura visual de texto otimizados para execução local."
                  : "Custom models for object detection, spatial tracking, and visual text extraction optimized for local edge inference."}
              </p>
            </div>
            <div className="job-time flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start mt-1 sm:mt-0 shrink-0 sm:ml-4">
              <h4 className="text-xs text-mid-grey">
                {isPt ? "Visão em Edge" : "Computer Vision"}
              </h4>
            </div>
          </div>

          {/* 3. Consultas em Linguagem Natural (PandasAI) */}
          <div className="job-local-time flex flex-col sm:flex-row sm:justify-between px-2 mt-5">
            <div className="text-start w-full sm:w-auto">
              <h2 className="text-base font-bold">
                {isPt
                  ? "Consultas em Linguagem Natural (PandasAI)"
                  : "Natural Language Queries (PandasAI)"}
              </h2>
              <p className="text-desc text-xs mt-0.5">
                {isPt
                  ? "Conversão de linguagem natural em código de manipulação e geração dinâmica de gráficos em DataFrames analíticos."
                  : "Natural language query translation into executable Python DataFrame aggregations and dynamic charting."}
              </p>
            </div>
            <div className="job-time flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start mt-1 sm:mt-0 shrink-0 sm:ml-4">
              <h4 className="text-xs text-mid-grey">Tabular AI</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Botão Inferior: Avançar para Projects */}
      <div
        className="next-scroll flex items-center flex-col justify-center gap-2 my-8 sm:my-10 text-mid-grey cursor-pointer"
        onClick={() => router.push("/projects")}
      >
        <span>{isPt ? "Projetos" : "Projects"}</span>
        <div className="button-next w-14 h-14 rounded-full bg-dark-grey flex items-center justify-center">
          <div className="triangle-next w-0 h-0 border-l-[0.8rem] border-l-transparent border-t-[1rem] border-t-[var(--triangle-color)] border-r-[0.8rem] border-r-transparent"></div>
        </div>
      </div>

      {/* Modal de Arquitetura do WKontrolAI Engine */}
      <ArchitectureModal
        isOpen={isArchModalOpen}
        onClose={() => setIsArchModalOpen(false)}
        projectId="wkontrolai"
        isPt={isPt}
      />
    </div>
  );
}
