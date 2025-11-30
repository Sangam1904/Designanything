/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Base path for GitHub Pages (set this to your repo name if not using username.github.io)
  // For example: if repo is "my-website", URL will be: https://username.github.io/my-website/
  // Leave empty string '' if using username.github.io repo
  basePath: process.env.GITHUB_PAGES_BASE_PATH || '',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    domains: ['localhost', 'images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/models/',
          outputPath: 'static/models/',
        },
      },
    });
    // Workaround Windows ENOENT rename cache errors by disabling persistent cache in dev
    if (process.env.NODE_ENV === 'development') {
      config.cache = false
    }
    return config;
  },
}

module.exports = nextConfig
