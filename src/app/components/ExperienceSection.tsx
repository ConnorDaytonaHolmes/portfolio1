"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faPalette,
  faInfinity,
  faDatabase,
  faShield,
  faUserLock,
  faServer,
  faUsers,
  faChartLine,
  faKey
} from '@fortawesome/free-solid-svg-icons';

interface ExperienceItemProps {
  icon: IconDefinition;
  title: string;
  description: string;
  side: 'left' | 'right';
}

function ExperienceItem({ icon, title, description, side }: ExperienceItemProps) {
  return (
    <div className="group relative">
      {/* Collapsed state - chevron shape */}
      <div
        className={`
          relative flex items-center p-4 cursor-pointer z-2 mb-0.5
          bg-gray-800 group-hover:bg-gray-700 transition-all duration-300
          ${side === 'left'
            ? 'clip-path-chevron-left pr-8 -mr-3 justify-end'
            : 'clip-path-chevron-right pl-8 -ml-3 justify-start'
          }
        `}
        style={{
          clipPath: side === 'left'
            ? 'polygon(0 0, calc(100% - 28px) 0, 100% 50%, calc(100% - 28px) 100%, 0 100%)'
            : 'polygon(28px 0, 100% 0, 100% 100%, 28px 100%, 0 50%)'
        }}
      >
        <div className={`flex gap-4 align-center w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity
          ${side === 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
          <FontAwesomeIcon icon={icon} className="w-full h-full" />
          <h4 className="text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            {title}
          </h4>
        </div>
      </div>

      {/* Expanded state on hover */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden
        max-h-0 group-hover:max-h-96 group-hover:-mt-7
        -translate-y-7 group-hover:-translate-y-0.5
        ${side === 'left' ? '-mr-3' : '-ml-3'}
      `}>
        <div
          className={`pt-6 pb-4 bg-gray-800 group-hover:bg-gray-700 transition-all duration-300 ease-in-out
            ${side === 'left' ? 'pr-8 pl-4' : 'pl-8 pr-4'}
          `}
          style={{
            clipPath: side === 'left'
              ? 'polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%)'
              : 'polygon(0 0, 100% 0, 100% 100%, 28px 100%, 0 calc(100% - 28px))'
          }}
        >
          <p className="text-sm opacity-70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="py-20 px-8 md:px-20 bg-white/[0.02]">
      <h2 className="heading text-3xl md:text-4xl mb-12 text-center">
        Experience
      </h2>

      <div className="max-w-3xl mx-auto">

        <div className="fade-in-section mb-12">
          <div className='flex gap-4 items-center flex-row mb-2'>
            <img src='icons/redisoftware.svg' alt="Redi Software" />
            <h3 className="text-xl mb-1">Redi Software, Perth</h3>
          </div>
          <p className="text-lg opacity-80 mb-2">Junior Software Developer</p>
          <p className="opacity-60 mb-4">August 2024 - PRESENT</p>

          <div className="flex flex-col -space-y-7">
            {/* Row 1 - Left side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <ExperienceItem
                icon={faPalette}
                title="UI/UX"
                description="Design and build polished, responsive user interfaces using React and CSS media queries, ensuring cross-browser compatibility and accessibility on desktop, tablet and mobile devices"
                side="left"
              />
              <div></div>
            </div>

            {/* Row 2 - Right side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div></div>
              <ExperienceItem
                icon={faInfinity}
                title="CI/CD"
                description="Optimise CI/CD deployment pipelines using custom Docker images, caching and parallelization to reduce build times and compute costs by up to 30%"
                side="right"
              />
            </div>

            {/* Row 3 - Left side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <ExperienceItem
                icon={faDatabase}
                title="Database"
                description="Architect relational database schemas, write performant T-SQL queries and stored procedures, create and monitor indexes for optimised query performance for high-throughput applications"
                side="left"
              />
              <div></div>
            </div>

            {/* Row 4 - Right side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div></div>
              <ExperienceItem
                icon={faShield}
                title="Security"
                description="Manage cloud resource security via Azure RBAC, configuring Managed Identities and Service Principals to enforce the principle of least privilege across development and production environments"
                side="right"
              />
            </div>

            {/* Row 5 - Left side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <ExperienceItem
                icon={faUserLock}
                title="Authentication"
                description="Implement robust authentication and authorization frameworks using .NET Identity and JWT bearer tokens, defining granular role-based claims and custom security policies to secure sensitive API endpoints"
                side="left"
              />
              <div></div>
            </div>

            {/* Row 6 - Right side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div></div>
              <ExperienceItem
                icon={faServer}
                title="Microservices"
                description="Architect and maintain scalable RESTful microservices using ASP.NET Core, implementing efficient controller patterns and middleware to handle complex business logic for high-traffic applications"
                side="right"
              />
            </div>

            {/* Row 7 - Left side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <ExperienceItem
                icon={faUsers}
                title="Mentoring"
                description="Onboard interns, conduct code reviews and give constructive feedback & performance reports"
                side="left"
              />
              <div></div>
            </div>
          </div>
        </div>


        <div className="fade-in-section delay-100">
          <div className='flex gap-4 items-center flex-row mb-2'>
            <img src='icons/redisoftware.svg' alt="Redi Software" />
            <h3 className="text-xl mb-1">Redi Software, Perth</h3>
          </div>
          <p className="text-lg opacity-80 mb-2">Intern</p>
          <p className="opacity-60 mb-4">February 2024 - May 2024</p>

          <div className="flex flex-col -space-y-7">
            {/* Row 1 - Left side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <ExperienceItem
                icon={faChartLine}
                title="Azure Functions"
                description="Engineered a suite of over 20 queue-triggered Azure Functions to synchronize data from third-party APIs (including HubSpot, Google Ads, PayPal) into a centralized BI platform (Picardata); implemented asynchronous processing to handle high-volume data ingestion reliably"
                side="left"
              />
              <div></div>
            </div>

            {/* Row 2 - Right side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div></div>
              <ExperienceItem
                icon={faKey}
                title="OAuth 2.0"
                description="Developed a sophisticated OAuth 2.0 & API Key management system, including the full three-legged authorization flow and a 'base' function architecture that automated Azure Key Vault token retrieval, state validation, and dynamic header/query parameter configuration"
                side="right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}