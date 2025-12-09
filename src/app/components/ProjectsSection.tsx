import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section className="py-20 px-8 md:px-20">
      <h2 className="heading text-3xl md:text-4xl mb-12 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Project 1 */}
        <div className="fade-in-section">
          <div className="bg-white/5 p-6 rounded-lg h-full">
            <h3 className="text-xl mb-2"><a href='https://picardata.com' target='_blank'>Picardata</a></h3>
            <p className="opacity-80 mb-4">Business analytics SaaS platform</p>
            <div className="flex gap-2">
              <Image src="/typescript.svg" alt="TypeScript" width={24} height={24} />
              <Image src="/csharp.svg" alt="C#" width={24} height={24} />
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="fade-in-section delay-100">
          <div className="bg-white/5 p-6 rounded-lg h-full">
            <h3 className="text-xl mb-2">Project Title</h3>
            <p className="opacity-80 mb-4">Project description placeholder. Replace with actual project details.</p>
            <div className="flex gap-2">
              <Image src="/java.svg" alt="Java" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
