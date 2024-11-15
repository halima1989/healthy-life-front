/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Désactive l'optimisation des images
  },
  transpilePackages: ['@mui/x-charts'],
}

export default nextConfig