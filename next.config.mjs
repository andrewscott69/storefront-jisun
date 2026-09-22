/** @type {import('next').NextConfig} */

// Supabase Storage host, derived from the project URL so it cannot drift out of
// sync with NEXT_PUBLIC_SUPABASE_URL the way a hardcoded domain did. Only used
// if images.unoptimized is ever turned off; kept correct so that switch is safe.
let supabaseHost
try {
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    supabaseHost = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname
  }
} catch {
  supabaseHost = undefined
}

const storagePath = '/storage/v1/object/public/**'

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      ...(supabaseHost
        ? [{ protocol: 'https', hostname: supabaseHost, pathname: storagePath }]
        : []),
      { protocol: 'https', hostname: '*.supabase.co', pathname: storagePath },
    ],
  },
  transpilePackages: ['shared-database'],
}

export default nextConfig
