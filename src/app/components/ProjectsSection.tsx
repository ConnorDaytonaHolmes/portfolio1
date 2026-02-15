"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";
import ScrollButton from "./ScrollButton";
import ProjectIcon from "./ProjectIcon";

type CardState = 'title' | 'expanded' | 'thin' | 'corner';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  link?: string;
  children: ReactNode;
  isPersonal: boolean;
  state: CardState;
  onClick: () => void;
}

function ProjectCard({ title, subtitle, link, children, isPersonal, state, onClick }: ProjectCardProps) {
  switch (state) {
    case 'title':
      // Normal state - showing only title
      return (
        <div className="transition-all duration-700 overflow-hidden cursor-pointer">
          <div
            className="bg-white/5 rounded-lg flex flex-col relative transition-all duration-700 h-full justify-center p-8 cursor-pointer hover:bg-white/10"
            onClick={onClick}
          >
            <ProjectIcon isPersonal={isPersonal} size={24} />

            {/* Title */}
            <h5 className="font-semibold pr-12 transition-all duration-700 text-center text-6xl md:text-6xl mb-0">
              {title}
            </h5>
          </div>
        </div>
      );

    case 'expanded':
      // Expanded state - showing full content
      return (
        <div className="transition-all duration-700 overflow-hidden cursor-pointer">
          <div className="bg-white/5 rounded-lg flex flex-col relative transition-all duration-700 h-full p-12 cursor-pointer hover:bg-white/10" onClick={onClick}>
            <ProjectIcon isPersonal={isPersonal} size={32} position="top-8 right-8" />

            {/* Title */}
            <h5 className="font-semibold pr-12 transition-all duration-700 text-3xl md:text-4xl mb-2">
              {link ? (
                <a href={link} target='_blank' className="hover:opacity-80 transition-opacity">
                  {title}
                </a>
              ) : (
                title
              )}
            </h5>

            { /* Subtitle */ }
            <h6 className="italic text-lg opacity-50">
              {subtitle}
            </h6>

            {/* Content */}
            <div className="transition-all duration-700 opacity-100 max-h-[2000px] flex flex-col flex-grow mt-8">
              {children}
            </div>
          </div>
        </div>
      );

    case 'thin':
      // Thin state - same row or column as expanded
      return (
        <div className="transition-all duration-700 overflow-hidden cursor-pointer">
          <div className="bg-white/5 rounded-lg flex flex-col relative transition-all duration-700 h-full p-2 overflow-hidden hover:bg-white/10" onClick={onClick}>
            <ProjectIcon isPersonal={isPersonal} size={24} opacity="opacity-0" />

            {/* Title hidden */}
            <h5 className="font-semibold pr-12 transition-all duration-700 text-xs opacity-0">
              {title}
            </h5>
          </div>
        </div>
      );

    case 'corner':
      // Corner state - diagonal from expanded (small square)
      return (
        <div className="transition-all duration-700 overflow-hidden cursor-pointer">
          <div className="bg-white/5 rounded-lg flex flex-col relative transition-all duration-700 h-full p-2 overflow-hidden hover:bg-white/10" onClick={onClick}>
            {/* Completely hidden content */}
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function ProjectsSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Simple grid template based on which card is expanded
  // Card positions: 0=top-left, 1=top-right, 2=bottom-left, 3=bottom-right
  // Using calc to account for gap: total height/width - gap - thin size
  const getGridTemplate = () => {
    switch (expandedCard) {
      case 0: return { rows: 'calc(100% - 2rem - 20px) 20px', cols: 'calc(100% - 2rem - 20px) 20px' }; // top-left
      case 1: return { rows: 'calc(100% - 2rem - 20px) 20px', cols: '20px calc(100% - 2rem - 20px)' }; // top-right
      case 2: return { rows: '20px calc(100% - 2rem - 20px)', cols: 'calc(100% - 2rem - 20px) 20px' }; // bottom-left
      case 3: return { rows: '20px calc(100% - 2rem - 20px)', cols: '20px calc(100% - 2rem - 20px)' }; // bottom-right
      default: return { rows: 'calc(50% - 1rem) calc(50% - 1rem)', cols: 'calc(50% - 1rem) calc(50% - 1rem)' }; // none expanded
    }
  };

  const getCardState = (index: number): CardState => {
    if (expandedCard === null) {
      return 'title';
    }

    if (expandedCard === index) {
      return 'expanded';
    }

    const row = Math.floor(index / 2);
    const col = index % 2;
    const expandedRow = Math.floor(expandedCard / 2);
    const expandedCol = expandedCard % 2;

    const isSameRow = row === expandedRow;
    const isSameCol = col === expandedCol;

    if (isSameRow || isSameCol) {
      return 'thin';
    }

    return 'corner';
  };

  const gridTemplate = getGridTemplate();

  return (
    <section className="h-screen" id='projects'>
      <img className="absolute w-screen h-screen -z-999 brightness-15" 
        src="bg1.webp" 
        alt="Background"/>
      <h2 className={`heading text-8xl md:text-8xl mb-12 text-center transition-opacity duration-700 mt-20`}>
        Projects
      </h2>

      <div className="max-w-6xl mx-auto h-[600px]">
        <div
          className="grid h-full"
          style={{
            gridTemplateRows: gridTemplate.rows,
            gridTemplateColumns: gridTemplate.cols,
            gap: '2rem',
            transition: 'grid-template-rows 0.7s cubic-bezier(0.4, 0, 0.2, 1), grid-template-columns 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Picardata */}
          <ProjectCard
            title="Picardata"
            subtitle="Business Intelligence & Analytics Platform"
            link="https://picardata.com"
            isPersonal={false}
            state={getCardState(0)}
            onClick={() => handleCardClick(0)}
          >
              <ul className="list-disc list-inside space-y-3 opacity-80 mb-6 flex-grow text-lg">
                <li>Designed and implemented a custom utility to programmatically transform live dashboard views into formatted PowerPoint (PPTX) presentations, saving stakeholders hours of manual reporting</li>
                <li>Engineered a comprehensive localization framework to support a multilingual user base, managing dynamic translations across the platform</li>
                <li>Built a modular UI featuring interactive, real-time widgets for weather, currency exchange, and stock market data</li>
              </ul>
              <div className="flex gap-3 mt-auto">
                <Image src="skills/csharp.svg" alt="C#" width={36} height={36} unoptimized />
                <Image src="skills/typescript.svg" alt="TypeScript" width={36} height={36} unoptimized />
                <Image src="skills/react.svg" alt="React" width={36} height={36} unoptimized />
                <Image src="skills/azure.svg" alt="Azure" width={36} height={36} unoptimized />
              </div>
            </ProjectCard>

          {/* I-VADE */}
          <ProjectCard
            title="I-VADE"
            subtitle="VR Aggression De-escalation Training"
            link="https://research.csiro.au/onalumni/i-vade/"
            isPersonal={false}
            state={getCardState(1)}
            onClick={() => handleCardClick(1)}
          >
              <ul className="list-disc list-inside space-y-3 opacity-80 mb-6 flex-grow text-lg">
                <li>Acted as project lead and lead developer</li>
                <li>Developed a React-based administrative dashboard for user management</li>
                <li>Built a .NET WPF desktop application to orchestrate and launch localized VR scenarios</li>
                <li>Engineered a centralized .NET microservices backend to synchronize trainee performance data and session telemetry via RESTful APIs</li>
              </ul>
              <div className="flex gap-3 mt-auto">
                <Image src="skills/csharp.svg" alt="C#" width={36} height={36} unoptimized />
                <Image src="skills/typescript.svg" alt="TypeScript" width={36} height={36} unoptimized />
                <Image src="skills/react.svg" alt="React" width={36} height={36} unoptimized />
              </div>
            </ProjectCard>

          {/* Pronto */}
          <ProjectCard
            title="Pronto"
            subtitle="Project Scaffolding Engine (Internal tool)"
            isPersonal={false}
            state={getCardState(2)}
            onClick={() => handleCardClick(2)}
          >
              <ul className="list-disc list-inside space-y-3 opacity-80 mb-6 flex-grow text-lg md:gap-8">
                <li>Spearheaded and architectured an automated "Zero-to-Deployed" provisioning tool that reduced new client project setup time from several days to under 30 minutes</li>
                <li>Developed a configurable and component-driven wizard allowing engineers to dynamically select infrastructure requirements including CRMs, microservices, and notification (e-mail, SMS) layers</li>
                <li>Developed scripts to programmatically provision Azure resources, manage repository forks, and configure DNS records and proxies</li>
                <li>Integrated Postmark API for automated email template deployment and configured full CI/CD pipelines for frontends and serverless functions</li>
              </ul>
              <div className="flex gap-3 mt-auto">
                <Image src="skills/typescript.svg" alt="TypeScript" width={36} height={36} unoptimized />
                <Image src="skills/azure.svg" alt="Azure" width={36} height={36} unoptimized />
                <Image src="skills/bash.svg" alt="Bash" width={36} height={36} unoptimized />
                <Image src="skills/cloudflare.svg" alt="Cloudflare" width={36} height={36} unoptimized />
              </div>
            </ProjectCard>

          {/* Mul-Ty-Player */}
          <ProjectCard
            title="Mul-Ty-Player"
            subtitle="Video Game Mod"
            link="https://github.com/xMcacutt/Mul-Ty-Player"
            isPersonal={true}
            state={getCardState(3)}
            onClick={() => handleCardClick(3)}
          >
              <ul className="list-disc list-inside space-y-3 opacity-80 mb-6 flex-grow text-lg">
                <li>Collaborated with a small team to build a .NET WPF app to transform a single player game (Ty the Tasmanian Tiger) into a fully featured multiplayer experience</li>
                <li>Employed process & memory manipulation, DLL injection and server-client socket connections to allow players to host, join and play with friends in custom environments and game-modes</li>
                <li>Implemented client-side prediction and server-side reconciliation algorithms to minimize perceived latency and ensure state synchronization across all clients</li>
                <li>Used performance profilers to find memory leaks and suboptimal coroutines to increase server-side runtime performance by 96%</li>
              </ul>
              <div className="flex gap-3 mt-auto">
                <Image src="skills/csharp.svg" alt="C#" width={36} height={36} unoptimized />
                <Image src="skills/python.svg" alt="Python" width={36} height={36} unoptimized />
                <Image src="skills/cpp.svg" alt="C++" width={36} height={36} unoptimized />
              </div>
            </ProjectCard>
        </div>
      </div>

      <div className={`transition-opacity duration-700`}>
        <ScrollButton target="skills" />
      </div>
    </section>
  );
}
