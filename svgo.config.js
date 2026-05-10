// SVGO configuration for space-quickstart-images.
// Tuned to keep illustrations visually identical while shrinking file size.
// Docs: https://svgo.dev/docs/preset-default/
module.exports = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: false,
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Keep viewBox so SVGs remain responsive when scaled.
          removeViewBox: false,
          // Avoid breaking gradients / clipPaths referenced by id.
          cleanupIds: false,
        },
      },
    },
  ],
};

