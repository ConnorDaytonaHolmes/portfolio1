import Image from "next/image";

interface ProjectIconProps {
  isPersonal: boolean;
  size?: number;
  position?: string;
  opacity?: string;
}

export default function ProjectIcon({ isPersonal, size = 24, position = "top-6 right-6", opacity = "opacity-100" }: ProjectIconProps) {
  return (
    <div className={`absolute ${position} group transition-all duration-700 ${opacity}`}>
      {isPersonal ? (
        <>
          <svg
            className="opacity-60 transition-all duration-700"
            style={{ width: `${size}px`, height: `${size}px` }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <div className="absolute top-full right-0 mt-1 px-2 py-1 bg-black/90 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            Personal Project
          </div>
        </>
      ) : (
        <>
          <Image
            src="icons/redisoftware.svg"
            alt="Redi Software"
            width={size}
            height={size}
            className="opacity-60 transition-all duration-700"
            unoptimized
          />
          <div className="absolute top-full right-0 mt-1 px-2 py-1 bg-black/90 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            At Redi Software
          </div>
        </>
      )}
    </div>
  );
}

