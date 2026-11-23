/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allows photos hosted on Cloudinary, Google Drive CDN, etc. Local files in /public always work.
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};
export default nextConfig;
