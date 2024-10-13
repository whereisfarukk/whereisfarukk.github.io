module.exports = {
  output: 'export', // Make sure you're exporting static files
  assetPrefix: process.env.GITHUB_PAGES ? '/your-repo-name/' : '', // Set this to your repo name
};
