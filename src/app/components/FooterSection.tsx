import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="py-12 px-8 md:px-20 mt-auto bg-white/[0.02]">
      <div className="flex justify-center gap-8">
        { /* GITHUB PROFILE */ }
        <a
          href="https://github.com/ConnorDaytonaHolmes"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
        >
          <Image src="icons/github.svg" alt="GitHub" width={48} height={48} unoptimized />
        </a>

        { /* LINKEDIN PROFILE */ }
        <a
          href="https://www.linkedin.com/in/connor-holmes-27588b226/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
        >
          <Image src="icons/linkedin.svg" alt="LinkedIn" width={48} height={48} unoptimized />
        </a>
      </div>
    </footer>
  );
}