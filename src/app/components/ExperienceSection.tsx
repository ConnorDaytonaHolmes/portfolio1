export default function ExperienceSection() {
  return (
    <section className="py-20 px-8 md:px-20 bg-white/[0.02]">
      <h2 className="heading text-3xl md:text-4xl mb-12 text-center">
        Experience
      </h2>

      <div className="max-w-3xl mx-auto">

        <div className="fade-in-section mb-12">
          <div className='flex gap-4 items-center flex-row mb-2'>
            <img src='/redisoftware.svg' alt="Redi Software" />
            <h3 className="text-xl mb-1">Redi Software, Perth</h3>
          </div>
          <p className="text-lg opacity-80 mb-2">Junior Software Developer</p>
          <p className="opacity-60 mb-4">August 2024 - PRESENT</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Design and build polished, responsive user interfaces using React and CSS media queries, ensuring cross-browser compatibility and accessibility on desktop, tablet and mobile devices</li>
            <li>Optimise CI/CD deployment pipelines using custom Docker images, caching and parallelization to reduce build times and compute costs by up to 30%</li>
            <li>Architect relational database schemas, write performant T-SQL queries and stored procedures, create and monitor indexes for optimised query performance for high-throughput applications</li>
            <li>Manage cloud resource security via Azure RBAC, configuring Managed Identities and Service Principals to enforce the principle of least privilege across development and production environments</li>
            <li>Implement robust authentication and authorization frameworks using .NET Identity and JWT bearer tokens, defining granular role-based claims and custom security policies to secure sensitive API endpoints</li>
            <li>Architect and maintain scalable RESTful microservices using ASP.NET Core, implementing efficient controller patterns and middleware to handle complex business logic for high-traffic applications</li>
            <li>Onboard interns, conduct code reviews and give constructive feedback & performance reports</li>
          </ul>
        </div>


        <div className="fade-in-section delay-100">
          <div className='flex gap-4 items-center flex-row mb-2'>
            <img src='/redisoftware.svg' alt="Redi Software" />
            <h3 className="text-xl mb-1">Redi Software, Perth</h3>
          </div>
          <p className="text-lg opacity-80 mb-2">Intern</p>
          <p className="opacity-60 mb-4">February 2024 - May 2024</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Engineered a suite of over 20 queue-triggered Azure Functions to synchronize data from third-party APIs (including HubSpot, Google Ads, PayPal) into a centralized BI platform (Picardata); implemented asynchronous processing to handle high-volume data ingestion reliably</li>
            <li>Developed a sophisticated OAuth 2.0 & API Key management system, including the full three-legged authorization flow and a "base" function architecture that automated Azure Key Vault token retrieval, state validation, and dynamic header/query parameter configuration</li>
          </ul>
        </div>
      </div>
    </section>
  );
}