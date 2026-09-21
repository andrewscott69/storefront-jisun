/** @type {import('next').NextConfig} */

// Supabase Storage host, derived from the project URL so it cannot drift out of
// sync with NEXT_PUBLIC_SUPABASE_URL the way a hardcoded domain did.
//
// The wildcard entry is a deliberate safety net: if the env var is missing or
// malformed at build time, next/image would otherwise reject every product
// image with "hostname is not configured", which fails the build rather than
// just breaking one picture. Scoped to the public storage path either way.
let supabaseHost: string | undefined
try {
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    supabaseHost = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname
  }
} catch {
  supabaseHost = undefined
}

const storagePath = "/storage/v1/object/public/**"

const nextConfig = {
  images: {
    remotePatterns: [
      ...(supabaseHost ? [{ protocol: "https" as const, hostname: supabaseHost, pathname: storagePath }] : []),
      { protocol: "https" as const, hostname: "*.supabase.co", pathname: storagePath },
    ],
  },
}

module.exports = nextConfig
