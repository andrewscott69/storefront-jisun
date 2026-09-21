/** @type {import('next').NextConfig} */

// Supabase Storage host, derived from the project URL so it can never drift
// out of sync with NEXT_PUBLIC_SUPABASE_URL the way a hardcoded domain did.
const supabaseHost = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname
  : undefined

const nextConfig = {
  images: {
    remotePatterns: supabaseHost
      ? [{ protocol: "https", hostname: supabaseHost, pathname: "/storage/v1/object/public/**" }]
      : [],
  },
}

module.exports = nextConfig
