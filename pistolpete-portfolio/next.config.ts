import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS || false;
const repo = 'psikalis16.github.io';

const nextConfig: NextConfig = {
  output: 'export',

  // Set the base path for GitHub Pages if deploying to a custom path
  basePath: isGithubPages ? `/${repo}` : '',

  // Adjust asset prefix to match GitHub Pages requirements
  assetPrefix: isGithubPages ? `/${repo}/` : '',
};

export default nextConfig;
