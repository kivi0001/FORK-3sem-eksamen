/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      //   port: "4000",
      //   pathname: "/**",
      // },
      {
        protocol: "http",
        hostname:
          "mmd3-nightclub-api.onrender.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  cacheComponents: true,
};

export default nextConfig;
