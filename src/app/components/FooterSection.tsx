import Image from "next/image";

export default function FooterSection() {
  console.log('admnikaod');
  return (
    <footer className="py-12 px-8 md:px-20 mt-auto bg-white/[0.02]">
      <div className="flex justify-center gap-8">
        { /* GITHUB PROFILE */ }
        { process.env.PROFILE_GITHUB_URL && <a
          href={process.env.PROFILE_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
        >
          <Image src="/github.svg" alt="GitHub" width={48} height={48} />
        </a> }
        
        { /* LINKEDIN PROFILE */ }
        { process.env.LINKEDIN_PROFILE_URL && <a
          href={process.env.LINKEDIN_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
        >
          <Image src="/linkedin.svg" alt="LinkedIn" width={48} height={48} />
        </a> }
      </div>
    </footer>
  );
}