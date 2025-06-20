export default function ExperienceSection() {
  return (
    <section className="py-20 px-8 md:px-20 bg-white/[0.02]">
      <h2 className="heading text-3xl md:text-4xl mb-12 text-center">
        Experience
      </h2>

      <div className="max-w-3xl mx-auto">
        
        <div className="fade-in-section mb-12">
          <h3 className="text-xl mb-1">Redi Software</h3>
          <p className="text-lg opacity-80 mb-2">Junior Software Developer</p>
          <p className="opacity-60 mb-4">Aug 2024 - Present</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Full-stack development with C# (.NET) backend and React TypeScript frontend</li>
            <li>Built company-wide deployment system using Bash, Bitbucket pipelines, and Azure Bicep Templates</li>
            <li>Created Atlassian Forge app for automated project provisioning and containerized deployment</li>
            <li>Developed many third-party platform integrations for the Picardata project</li>
          </ul>
        </div>

        
        <div className="fade-in-section delay-100">
          <h3 className="text-xl mb-1">Richmond Vanadium</h3>
          <p className="text-lg opacity-80 mb-2">Network Technician</p>
          <p className="opacity-60 mb-4">Sep 2015 - Aug 2024</p>
          <p>I dunno man my friend told me to put this here.</p>
        </div>
      </div>
    </section>
  );
}