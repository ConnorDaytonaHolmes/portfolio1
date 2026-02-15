"use client";

import { forwardRef, useState, useEffect } from 'react';
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
import Image from 'next/image';

interface ExperienceItemProps {
  icon: IconDefinition;
  title: string;
  description: string;
  side: 'left' | 'right';
}

function ExperienceItem({ icon, title, description, side }: ExperienceItemProps) {
  const halfHeightMap = {
    '2xl': 60,
    'xl': 56,
    'md': 56,
  };

  const getHalfHeight = () => {
    if (typeof window === 'undefined') return 56;
    return window.innerWidth > 1535 ? halfHeightMap['2xl'] : window.innerWidth > 1280 ? halfHeightMap['xl'] : halfHeightMap['md'];
  };

  const [halfHeight, setHalfHeight] = useState(getHalfHeight());

  useEffect(() => {
    const handleResize = () => {
      setHalfHeight(getHalfHeight());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="group relative">
      {/* Combined chevron and description box with morphing polygon */}
      <div
        className={`
          relative cursor-pointer
          bg-gray-800 group-hover:bg-gray-700 transition-all duration-450
          overflow-hidden          
          ${side === 'left' ? '-mr-6' : '-ml-6'}
        `}
        style={{
          clipPath: side === 'left'
            ? `polygon(0 0, calc(100% - ${halfHeight}px) 0, 100% ${halfHeight}px, 100% calc(100% - ${halfHeight}px), calc(100% - ${halfHeight}px) 100%, 0 100%)`
            : `polygon(100% 0, ${halfHeight}px 0, 0 ${halfHeight}px, 0 calc(100% - ${halfHeight}px), ${halfHeight}px 100%, 100% 100%)`
        }}
      >
        {/* Header section */}
        <div className={`flex items-center p-6 ${side === 'left' ? 'pr-12 justify-end' : 'pl-12 justify-start'}`}>
          <div className={`flex gap-6 items-center opacity-70 group-hover:opacity-100 transition-opacity
            ${side === 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
            <FontAwesomeIcon icon={icon} size='4x' />
            <h4 className="2xl:text-7xl xl:text-5xl md:text-3xl font-medium opacity-80 group-hover:opacity-100 transition-opacity">
              {title}
            </h4>
          </div>
        </div>

        {/* Description section - expands on hover */}
        <div className={`transition-all duration-450 ease-in-out overflow-hidden max-h-0 group-hover:max-h-200`}>
          <div className={`pt-8 pb-6 ${side === 'left' ? 'pr-12 pl-6' : 'pl-12 pr-6'}`}>
            <p className="opacity-70 leading-relaxed text-2xl">
              {description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

const ExperienceSection = forwardRef<HTMLElement>(function ExperienceSection(props, ref) {
  return (
    <section ref={ref} className="py-20 bg-white/[0.02] h-screen color-red-500">
      <h2 className="heading text-8xl md:text-8xl mb-12 text-center px-8 md:px-20">
        Experience
      </h2>

      <div className="max-wfull mx-auto px-8 md:px-20 mb-12 justify-self-start">
        <div className="fade-in-section flex flex-row gap-16 items-center">
          <div className='flex gap-12 items-center flex-row mb-2'>
            <Image
              src='icons/redisoftware.svg'
              alt="Redi Software"
              width={86}
              height={86}
              unoptimized
              priority
            />
            <h3 className="text-5xl">Redi Software, Perth</h3>
          </div>
          <div>
            <p className="text-xl opacity-50">Intern <i className='ml-4'>Feb 2024 - May 2024</i></p>
            <p className="text-xl opacity-80">Junior Software Developer <i className='ml-4'>August 2024 - PRESENT</i></p>
          </div>
        </div>
      </div>

      {/* Full-width chevron items container */}
      <div className="w-full">
        <div className="flex flex-col 2xl:-space-y-14 xl:-space-y-13 md:-space-y-13 ">
          {/* Row 1 - Left side */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ExperienceItem
              icon={faPalette}
              title="UI/UX"
              description="Design and build polished, responsive user interfaces using React and CSS media queries, ensuring cross-browser compatibility and accessibility on desktop, tablet and mobile devices"
              side="left"
            />
            <div></div>
          </div>

          {/* Row 2 - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div></div>
            <ExperienceItem
              icon={faInfinity}
              title="CI/CD"
              description="Optimise CI/CD deployment pipelines using custom Docker images, caching and parallelization to reduce build times and compute costs by up to 30%"
              side="right"
            />
          </div>

          {/* Row 3 - Left side */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ExperienceItem
              icon={faDatabase}
              title="Database"
              description="Architect relational database schemas, write performant T-SQL queries and stored procedures, create and monitor indexes for optimised query performance for high-throughput applications"
              side="left"
            />
            <div></div>
          </div>

          {/* Row 4 - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div></div>
            <ExperienceItem
              icon={faShield}
              title="Security"
              description="Manage cloud resource security via Azure RBAC, configuring Managed Identities and Service Principals to enforce the principle of least privilege across development and production environments"
              side="right"
            />
          </div>

          {/* Row 5 - Left side */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ExperienceItem
              icon={faUserLock}
              title="Authentication"
              description="Implement robust authentication and authorization frameworks using .NET Identity and JWT bearer tokens, defining granular role-based claims and custom security policies to secure sensitive API endpoints"
              side="left"
            />
            <div></div>
          </div>

          {/* Row 6 - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div></div>
            <ExperienceItem
              icon={faServer}
              title="Microservices"
              description="Architect and maintain scalable RESTful microservices using ASP.NET Core, implementing efficient controller patterns and middleware to handle complex business logic for high-traffic applications"
              side="right"
            />
          </div>

          {/* Row 7 - Left side */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ExperienceItem
              icon={faUsers}
              title="Mentoring"
              description="Onboard interns, conduct code reviews and give constructive feedback & performance reports"
              side="left"
            />
            <div></div>
          </div>

          {/* Row 8 - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div></div>
            <ExperienceItem
              icon={faChartLine}
              title="Azure Functions"
              description="Engineered a suite of over 20 queue-triggered Azure Functions to synchronize data from third-party APIs (including HubSpot, Google Ads, PayPal) into a centralized BI platform (Picardata); implemented asynchronous processing to handle high-volume data ingestion reliably"
              side="right"
            />
          </div>

          {/* Row 9 - Left side */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ExperienceItem
              icon={faKey}
              title="OAuth 2.0"
              description="Developed a sophisticated OAuth 2.0 & API Key management system, including the full three-legged authorization flow and a 'base' function architecture that automated Azure Key Vault token retrieval, state validation, and dynamic header/query parameter configuration"
              side="left"
            />
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ExperienceSection;