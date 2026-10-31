"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Typewriter from "typewriter-effect";
import { usePortfolio } from "@/context/PortfolioContext";

import "./styles.css";

export default function ExperiencePage() {
  const router = useRouter();
  const { language } = usePortfolio();

  const isPt = language === "pt";

  return (
    <div className="flex min-h-screen flex-col items-center justify-around p-8 overflow-hidden font-body">
      <div className="glitch-title text-6xl" title="W_K.O">
        W_K.O
      </div>

      <div className="main-info max-w-lg">
        <div className="personal-info text-light-grey text-justify">
          <div className="about-me">
            <span>
              {isPt
                ? "Sou Engenheiro de Software formado em Ciência da Computação (PUC Minas), focado em serviços backend escaláveis, pipelines assíncronos de agentes de IA e sistemas de alta performance com Python, TypeScript e Rust. Sempre desenvolvendo soluções"
                : "I'm a Software Engineer with a Computer Science degree (PUC Minas), focused on scalable backend services, asynchronous AI agent pipelines, and high-performance systems with Python, TypeScript, and Rust. Always architecting solutions that are"}
              <span key={language} id="typewriter" className="typewriter text-hacker-green">
                <Typewriter
                  options={{
                    strings: isPt
                      ? [
                          "inteligentes",
                          "resilientes",
                          "de alta performance",
                          "tolerantes a falhas",
                          "escaláveis",
                        ]
                      : [
                          "intelligent",
                          "resilient",
                          "high-performance",
                          "fault-tolerant",
                          "scalable",
                        ],
                    wrapperClassName: "inline-flex",
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
          </div>

          <div className="current-job mt-8">
            <p className="text-desc">
              {isPt
                ? "Atualmente disponível para oportunidades em Engenharia de Software, Backend, IA e AppSec (Remoto / Híbrido)."
                : "Currently open to Software Engineering, Backend, AI & AppSec opportunities (Remote / Hybrid)."}
            </p>
          </div>
        </div>

        <div className="experience flex flex-col mt-20">
          <span className="text-mid-grey text-md">
            {isPt ? "0.5 ano de" : "0.5 year of"}
          </span>
          <h3 className="half-underline text-light-grey text-xl">
            {isPt ? "Experiência" : "Experience"}
          </h3>
          <div className="job-local-time flex flex-row justify-between px-2 mt-5">
            <h2 className="text-xl text-start">
              {isPt ? "Estágio em" : "Mobile Developer"} <br />
              {isPt ? "Desenvolvimento Mobile" : "Internship"}
            </h2>
            <div className="job-time text-end">
              <h3 className="text-lg">Mestria</h3>
              <h4 className="text-sm text-mid-grey">
                {isPt ? "Fev/24 - Jul/24" : "Feb/24 - Jul/24"}
              </h4>
            </div>
          </div>
        </div>

        <div className="experience flex flex-col mt-10">
          <span className="text-mid-grey text-md">
            {isPt ? "1 ano de" : "1 year of"}
          </span>
          <h3 className="half-underline text-light-grey text-xl">
            {isPt ? "Experiência" : "Experience"}
          </h3>
          <div className="job-local-time flex flex-row justify-between px-2 mt-5">
            <h2 className="text-xl text-start">
              {isPt ? "Estágio em Engenharia" : "iOS Software Engineer"} <br />
              {isPt ? "de Software iOS" : "Internship"}
            </h2>
            <div className="job-time text-end">
              <h3 className="text-lg">dti digital</h3>
              <h4 className="text-sm text-mid-grey">
                {isPt ? "Jun/25 - Mai/26" : "Jun/25 - May/26"}
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div
        className="next-scroll flex items-center flex-col justify-center gap-2 text-mid-grey cursor-pointer"
        onClick={() => router.push("/ai")}
      >
        <span>{isPt ? "IA & Sistemas" : "AI & Systems"}</span>
        <div className="button-next w-14 h-14 rounded-full bg-dark-grey flex items-center justify-center">
          <div className="triangle-next w-0 h-0 border-l-[0.8rem] border-l-transparent border-t-[1rem] border-t-[var(--triangle-color)] border-r-[0.8rem] border-r-transparent"></div>
        </div>
      </div>
    </div>
  );
}