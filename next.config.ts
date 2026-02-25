import type { NextConfig } from "next";

function throwErrorIfMissing(envVar: string) {
  if(!process.env[envVar]) {
    throw `Abort: ${envVar} is not set in the environment`;
  }
}

//throwErrorIfMissing("RESEND_API_KEY");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return {
      // fallback: [
      //   {
      //     source: '/:path*',
      //     destination: '/',
      //   },
      // ]
    };
  },
};

export default nextConfig;
