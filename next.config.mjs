import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/**
 * @type {import('next').NextConfig}
 */
export default {
  webpack: (config, options) => {
    const { isServer } = options;
    
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shop',
        filename: 'static/chunks/remoteEntry.js',

        remotes: {
          remote: 'remote@http://localhost:3001/_next/static/chunks/remoteEntry.js',
        },

        exposes: {
          './ProductList': './components/ProductList.tsx',
          './ProductDetail': './components/ProductDetail.tsx',
        },

        shared: {
          // shared modules
        },
      })
    );
    return config;
  },
};
