"use client";

import { forwardRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import ScrollButton from './ScrollButton';
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
  // const halfHeightMap = {
  //   '2xl': 56,
  //   'xl': 56,
  //   'md': 56,
  // };

  // const getHalfHeight = () => {
  //   if (typeof window === 'undefined') return 56;
  //   return window.innerWidth > 1535 ? halfHeightMap['2xl'] : window.innerWidth > 1280 ? halfHeightMap['xl'] : halfHeightMap['md'];
  // };

  // const [halfHeight, setHalfHeight] = useState(56);
  const getIconSize: () => SizeProp = () => {
    if (typeof window === 'undefined') return '2x';
    return window.innerWidth > 1535 ? '4x' : window.innerWidth > 1280 ? '3x' : '2x';
  };
  
  const [iconSize, setIconSize] = useState<SizeProp>('2x');
  useEffect(() => {
    
    // Set initial state on mount
    setIconSize(getIconSize());

    const handleResize = () => {
      setIconSize(getIconSize());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const halfHeight = 48;

  
  
  return (
    <div className="group relative">
      {/* Combined chevron and description box with morphing polygon */}
      <div
        className={`
          experience-item-container
          relative cursor-pointer
          h-[6.5vh] md:h-auto
          md:bg-gray-800 group-hover:bg-gray-700 transition-all duration-450
          overflow-hidden
          mx-0 md:rounded-lg bg-linear-to-b from-gray-700 to-gray-800
          ${side === 'left' ? 'md:-mr-5 md:rounded-none' : 'md:-ml-5 md:rounded-none'}
        `}
        style={{
          '--clip-path-polygon': side === 'left'
            ? `polygon(0 0, calc(100% - ${halfHeight}px) 0, 100% ${halfHeight}px, 100% calc(100% - ${halfHeight}px), calc(100% - ${halfHeight}px) 100%, 0 100%)`
            : `polygon(100% 0, ${halfHeight}px 0, 0 ${halfHeight}px, 0 calc(100% - ${halfHeight}px), ${halfHeight}px 100%, 100% 100%)`
        } as React.CSSProperties}
      >
        {/* Header section */}
        <div className={`flex items-center p-3 md:p-4 justify-center ${side === 'left' ? 'md:pr-12 md:justify-end' : 'md:pl-12 md:justify-start'}`}>
          <div className={`flex gap-6 items-center opacity-70 group-hover:opacity-100 transition-opacity flex-row-reverse
            ${side === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <FontAwesomeIcon icon={icon} size={iconSize} />
            <h4 className="xl:text-5xl text-xl font-medium opacity-80 group-hover:opacity-100 transition-opacity">
              {title}
            </h4>
          </div>
        </div>

        {/* Description section - expands on hover */}
        <div className={`transition-all duration-450 ease-in-out overflow-hidden max-h-0 group-hover:max-h-200`}>
          <div className={`pt-8 pb-6 ${side === 'left' ? 'md:pr-12 md:pl-6' : 'md:pl-12 md:pr-6'}`}>
            <p className="opacity-70 leading-relaxed text-xl">
              {description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section className="min-h-screen" id='experience'>
      <img className="absolute w-screen min-h-screen -z-999 brightness-15" 
        src="bg2.png" 
        alt="Background"/>

      <h2 className="heading text-6xl md:text-8xl mb-6 text-center md:px-20 3xl:mt-20 mt-10">
        Experience
      </h2>

      <div className="max-wfull mx-auto px-8 md:px-20 mb-6 justify-self-start">
        <div className="flex md:gap-16 items-center md:flex-row flex-col">
          <div className='flex gap-12 items-center flex-row mb-2'>
            <Image
              src='icons/redisoftware.svg'
              alt="Redi Software"
              width={72}
              height={72}
              unoptimized
              priority
            />
            <h3 className="text-xl 2xl:text-5xl">Redi Software, Perth</h3>
          </div>
          <div>
            <p className="text-xs md:text-xl opacity-50">Intern <i className='ml-4'>Feb 2024 - May 2024</i></p>
            <p className="text-xs md:text-xl opacity-80">Junior Software Developer <i className='ml-4'>August 2024 - PRESENT</i></p>
          </div>
        </div>
      </div>

      {/* Full-width chevron items container */}
      <div className="w-full">
        <div className="flex flex-col xl:-space-y-11 md:-space-y-11 ">
          {/* Row 1 - Left side */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start">
            <ExperienceItem
              icon={faPalette}
              title="UI/UX"
              description="Design and build polished, responsive user interfaces using React and CSS media queries, ensuring cross-browser compatibility and accessibility on desktop, tablet and mobile devices"
              side="left"
            />
            <div></div>
          </div>

          {/* Row 2 - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-end md:items-start">
            <div></div>
            <ExperienceItem
              icon={faInfinity}
              title="CI/CD"
              description="Optimise CI/CD deployment pipelines using custom Docker images, caching and parallelization to reduce build times and compute costs by up to 30%"
              side="right"
            />
          </div>

          {/* Row 3 - Left side */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start">
            <ExperienceItem
              icon={faDatabase}
              title="Database"
              description="Architect relational database schemas, write performant T-SQL queries and stored procedures, create and monitor indexes for optimised query performance for high-throughput applications"
              side="left"
            />
            <div></div>
          </div>

          {/* Row 4 - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-end md:items-start">
            <div></div>
            <ExperienceItem
              icon={faShield}
              title="Security"
              description="Manage cloud resource security via Azure RBAC, configuring Managed Identities and Service Principals to enforce the principle of least privilege across development and production environments"
              side="right"
            />
          </div>

          {/* Row 5 - Left side */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start">
            <ExperienceItem
              icon={faUserLock}
              title="Authentication"
              description="Implement robust authentication and authorization frameworks using .NET Identity and JWT bearer tokens, defining granular role-based claims and custom security policies to secure sensitive API endpoints"
              side="left"
            />
            <div></div>
          </div>

          {/* Row 6 - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-end md:items-start">
            <div></div>
            <ExperienceItem
              icon={faServer}
              title="Microservices"
              description="Architect and maintain scalable RESTful microservices using ASP.NET Core, implementing efficient controller patterns and middleware to handle complex business logic for high-traffic applications"
              side="right"
            />
          </div>

          {/* Row 7 - Left side */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start">
            <ExperienceItem
              icon={faUsers}
              title="Mentoring"
              description="Onboard interns, conduct code reviews and give constructive feedback & performance reports"
              side="left"
            />
            <div></div>
          </div>

          {/* Row 8 - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-end md:items-start">
            <div></div>
            <ExperienceItem
              icon={faChartLine}
              title="Azure Functions"
              description="Engineered a suite of over 20 queue-triggered Azure Functions to synchronize data from third-party APIs (including HubSpot, Google Ads, PayPal) into a centralized BI platform (Picardata); implemented asynchronous processing to handle high-volume data ingestion reliably"
              side="right"
            />
          </div>

          {/* Row 9 - Left side */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start">
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

      <ScrollButton target="projects" />
    </section>
  );
};

export default ExperienceSection;