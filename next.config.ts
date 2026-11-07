import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Permite visualizar o modo dev pelo IP da rede local (celular no mesmo Wi-Fi).
  allowedDevOrigins: ["192.168.31.90"],
};

export default nextConfig;
