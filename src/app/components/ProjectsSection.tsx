import Image from "next/image";
import { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  link?: string;
  children: ReactNode;
}

function ProjectCard({ title, link, children }: ProjectCardProps) {
  return (
    <div className="bg-white/5 p-6 rounded-lg h-full flex flex-col">
      <h4 className="text-xl mb-2 font-semibold">
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
  );
}

export default function ProjectsSection() {
  return (
    <section className="py-20 px-8 md:px-20">
      <h2 className="heading text-3xl md:text-4xl mb-12 text-center">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Redi Software Projects */}
        <div>
          <h3 className="text-2xl md:text-3xl mb-8 text-center opacity-90">At Redi Software</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Picardata */}
            <div className="fade-in-section delay-100">
              <ProjectCard
                title="Picardata — Business Intelligence & Analytics Platform"
                link="https://picardata.com"
              >
                <ul className="list-disc list-inside space-y-2 opacity-80 mb-4 flex-grow text-sm">
                  <li>Designed and implemented a custom utility to programmatically transform live dashboard views into formatted PowerPoint (PPTX) presentations, saving stakeholders hours of manual reporting</li>
                  <li>Engineered a comprehensive localization framework to support a multilingual user base, managing dynamic translations across the platform</li>
                  <li>Built a modular UI featuring interactive, real-time widgets for weather, currency exchange, and stock market data</li>
                </ul>
                <div className="flex gap-2 mt-auto">
                  <Image src="/csharp.svg" alt="C#" width={24} height={24} />
                  <Image src="/typescript.svg" alt="TypeScript" width={24} height={24} />
                  <Image src="/react.svg" alt="React" width={24} height={24} />
                  <Image src="/azure.svg" alt="Azure" width={24} height={24} />
                </div>
              </ProjectCard>
            </div>

            {/* I-VADE */}
            <div className="fade-in-section">
              <ProjectCard title="I-VADE — VR Aggression De-escalation Training">
                <ul className="list-disc list-inside space-y-2 opacity-80 mb-4 flex-grow text-sm">
                  <li>Acted as project lead and lead developer</li>
                  <li>Developed a React-based administrative dashboard for user management</li>
                  <li>Built a .NET WPF desktop application to orchestrate and launch localized VR scenarios</li>
                  <li>Engineered a centralized .NET microservices backend to synchronize trainee performance data and session telemetry via RESTful APIs</li>
                </ul>
                <div className="flex gap-2 mt-auto">
                  <Image src="/csharp.svg" alt="C#" width={24} height={24} />
                  <Image src="/typescript.svg" alt="TypeScript" width={24} height={24} />
                  <Image src="/react.svg" alt="React" width={24} height={24} />
                </div>
              </ProjectCard>
            </div>

            {/* Pronto */}
            <div className="fade-in-section delay-200 md:col-span-2">
              <ProjectCard title="Pronto — Project Scaffolding Engine (Internal tool)">
                <ul className="list-disc list-inside space-y-2 opacity-80 mb-4 flex-grow text-sm md:columns-2 md:gap-8">
                  <li>Spearheaded and architectured an automated "Zero-to-Deployed" provisioning tool that reduced new client project setup time from several days to under 30 minutes</li>
                  <li>Developed a configurable and component-driven wizard allowing engineers to dynamically select infrastructure requirements including CRMs, microservices, and notification (e-mail, SMS) layers</li>
                  <li>Developed scripts to programmatically provision Azure resources, manage repository forks, and configure DNS records and proxies</li>
                  <li>Integrated Postmark API for automated email template deployment and configured full CI/CD pipelines for frontends and serverless functions</li>
                </ul>
                <div className="flex gap-2 mt-auto">
                  <Image src="/typescript.svg" alt="TypeScript" width={24} height={24} />
                  <Image src="/azure.svg" alt="Azure" width={24} height={24} />
                  <Image src="/bash.svg" alt="Bash" width={24} height={24} />
                  <Image src="/cloudflare.svg" alt="Cloudflare" width={24} height={24} />
                </div>
              </ProjectCard>
            </div>
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-2xl md:text-3xl mb-8 text-center opacity-90">Personal Projects</h3>

          <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
            {/* Mul-Ty-Player */}
            <div className="fade-in-section delay-300">
              <ProjectCard
                title="Mul-Ty-Player — Video Game Mod"
                link="https://github.com/xMcacutt/Mul-Ty-Player"
              >
                <ul className="list-disc list-inside space-y-2 opacity-80 mb-4 flex-grow text-sm">
                  <li>Collaborated with a small team to build a .NET WPF app to transform a single player game (Ty the Tasmanian Tiger) into a fully featured multiplayer experience</li>
                  <li>Employed process & memory manipulation, DLL injection and server-client socket connections to allow players to host, join and play with friends in custom environments and game-modes</li>
                  <li>Implemented client-side prediction and server-side reconciliation algorithms to minimize perceived latency and ensure state synchronization across all clients</li>
                  <li>Used performance profilers to find memory leaks and suboptimal coroutines to increase server-side runtime performance by 96%</li>
                </ul>
                <div className="flex gap-2 mt-auto">
                  <Image src="/csharp.svg" alt="C#" width={24} height={24} />
                  <Image src="/python.svg" alt="Python" width={24} height={24} />
                  <Image src="/cpp.svg" alt="C++" width={24} height={24} />
                </div>
              </ProjectCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
