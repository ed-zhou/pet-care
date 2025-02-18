import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverRuntimeConfig:{
    host: "0.0.0.0",
    port: 9000
  }
};

export default nextConfig;
