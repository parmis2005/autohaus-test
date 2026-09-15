/** @type {import('next').NextConfig} */
const nextConfig = {
  // Verhindert, dass Turbopack wegen einer package-lock.json im Home-Verzeichnis
  // (außerhalb dieses Git-Repos) die falsche Projektwurzel errät.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
