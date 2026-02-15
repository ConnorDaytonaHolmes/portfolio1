import Image from "next/image";
import { ReactNode } from "react";
import ScrollButton from "./ScrollButton";

interface ProjectCardProps {
  title: string;
  link?: string;
  children: ReactNode;
  isPersonal: boolean;
}

function ProjectCard({ title, link, children, isPersonal }: ProjectCardProps) {
  return (
    <div className="fade-in-section delay-100">
      <div className="bg-white/5 p-6 rounded-lg h-full flex flex-col relative">
        {/* Icon in top right corner */}
        <div className="absolute top-4 right-4 group">
          {isPersonal ? (
            <>
              <svg
                className="w-5 h-5 opacity-60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* person icon */}
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <div className="absolute top-full right-0 mt-1 px-2 py-1 bg-black/90 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                Personal Project
              </div>
            </>
          ) : (
            <>
              <Image
                src="icons/redisoftware.svg"
                alt="Redi Software"
                width={20}
                height={20}
                className="opacity-60"
                unoptimized
              />
              <div className="absolute top-full right-0 mt-1 px-2 py-1 bg-black/90 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                At Redi Software
              </div>
            </>
          )}
        </div>

        <h4 className="text-xl mb-2 font-semibold pr-8">
          {link ? (
            <a href={link} target='_blank' className="hover:opacity-80 transition-opacity">
              {title}
            </a>
          ) : (
            title
          )}
        </h4>
        {children}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="py-20 px-8 md:px-20 h-screen" id='projects'>
      <h2 className="heading text-8xl md:text-8xl mb-12 text-center">
        Projects
      </h2>

      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Picardata */}
          <ProjectCard
            title="Picardata — Business Intelligence & Analytics Platform"
            link="https://picardata.com"
            isPersonal={false}
          >
              <ul className="list-disc list-inside space-y-2 opacity-80 mb-4 flex-grow text-sm">
                <li>Designed and implemented a custom utility to programmatically transform live dashboard views into formatted PowerPoint (PPTX) presentations, saving stakeholders hours of manual reporting</li>
                <li>Engineered a comprehensive localization framework to support a multilingual user base, managing dynamic translations across the platform</li>
                <li>Built a modular UI featuring interactive, real-time widgets for weather, currency exchange, and stock market data</li>
              </ul>
              <div className="flex gap-2 mt-auto">
                <Image src="skills/csharp.svg" alt="C#" width={24} height={24} unoptimized />
                <Image src="skills/typescript.svg" alt="TypeScript" width={24} height={24} unoptimized />
                <Image src="skills/react.svg" alt="React" width={24} height={24} unoptimized />
                <Image src="skills/azure.svg" alt="Azure" width={24} height={24} unoptimized />
              </div>
            </ProjectCard>

          {/* I-VADE */}
          <ProjectCard
            title="I-VADE — VR Aggression De-escalation Training"
            isPersonal={false}
          >
              <ul className="list-disc list-inside space-y-2 opacity-80 mb-4 flex-grow text-sm">
                <li>Acted as project lead and lead developer</li>
                <li>Developed a React-based administrative dashboard for user management</li>
                <li>Built a .NET WPF desktop application to orchestrate and launch localized VR scenarios</li>
                <li>Engineered a centralized .NET microservices backend to synchronize trainee performance data and session telemetry via RESTful APIs</li>
              </ul>
              <div className="flex gap-2 mt-auto">
                <Image src="skills/csharp.svg" alt="C#" width={24} height={24} unoptimized />
                <Image src="skills/typescript.svg" alt="TypeScript" width={24} height={24} unoptimized />
                <Image src="skills/react.svg" alt="React" width={24} height={24} unoptimized />
              </div>
            </ProjectCard>

          {/* Pronto */}
          <ProjectCard
            title="Pronto — Project Scaffolding Engine (Internal tool)"
            isPersonal={false}
          >
              <ul className="list-disc list-inside space-y-2 opacity-80 mb-4 flex-grow text-sm md:columns-2 md:gap-8">
                <li>Spearheaded and architectured an automated "Zero-to-Deployed" provisioning tool that reduced new client project setup time from several days to under 30 minutes</li>
                <li>Developed a configurable and component-driven wizard allowing engineers to dynamically select infrastructure requirements including CRMs, microservices, and notification (e-mail, SMS) layers</li>
                <li>Developed scripts to programmatically provision Azure resources, manage repository forks, and configure DNS records and proxies</li>
                <li>Integrated Postmark API for automated email template deployment and configured full CI/CD pipelines for frontends and serverless functions</li>
              </ul>
              <div className="flex gap-2 mt-auto">
                <Image src="skills/typescript.svg" alt="TypeScript" width={24} height={24} unoptimized />
                <Image src="skills/azure.svg" alt="Azure" width={24} height={24} unoptimized />
                <Image src="skills/bash.svg" alt="Bash" width={24} height={24} unoptimized />
                <Image src="skills/cloudflare.svg" alt="Cloudflare" width={24} height={24} unoptimized />
              </div>
            </ProjectCard>

          {/* Mul-Ty-Player */}
          <ProjectCard
            title="Mul-Ty-Player — Video Game Mod"
            link="https://github.com/xMcacutt/Mul-Ty-Player"
            isPersonal={true}
          >
              <ul className="list-disc list-inside space-y-2 opacity-80 mb-4 flex-grow text-sm">
                <li>Collaborated with a small team to build a .NET WPF app to transform a single player game (Ty the Tasmanian Tiger) into a fully featured multiplayer experience</li>
                <li>Employed process & memory manipulation, DLL injection and server-client socket connections to allow players to host, join and play with friends in custom environments and game-modes</li>
                <li>Implemented client-side prediction and server-side reconciliation algorithms to minimize perceived latency and ensure state synchronization across all clients</li>
                <li>Used performance profilers to find memory leaks and suboptimal coroutines to increase server-side runtime performance by 96%</li>
              </ul>
              <div className="flex gap-2 mt-auto">
                <Image src="skills/csharp.svg" alt="C#" width={24} height={24} unoptimized />
                <Image src="skills/python.svg" alt="Python" width={24} height={24} unoptimized />
                <Image src="skills/cpp.svg" alt="C++" width={24} height={24} unoptimized />
              </div>
            </ProjectCard>
        </div>
      </div>

      <ScrollButton target="skills" />
    </section>
  );
}
