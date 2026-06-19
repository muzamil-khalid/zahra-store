/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",            // static HTML export — fast + host anywhere
  images: { unoptimized: true },
  reactStrictMode: true,
  trailingSlash: true,
};
export default nextConfig;
