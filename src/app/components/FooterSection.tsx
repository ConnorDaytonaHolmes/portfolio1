import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="py-12 px-8 md:px-20 mt-auto bg-white/[0.02]">
      <div className="flex justify-center gap-8">
        <a
          href="https://github.com/ConnorDaytonaHolmes"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          <Image src="/github.svg" alt="GitHub" width={48} height={48} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          <Image src="/linkedin.svg" alt="LinkedIn" width={48} height={48} />
        </a>
      </div>
    </footer>
  );
}