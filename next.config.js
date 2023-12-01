/** @type {import('next').NextConfig} */
const { extendDefaultPlugins } = require('svgo')

const nextConfig = {
   output: 'export',
   images: {
      unoptimized: true,
    },
    
    webpack(config) { // configuration used to transform SVG files into React component
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          // Include only SVGs imported from your own project
          and: [/\.(js|ts|jsx|tsx)$/],
        },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [{
                  name: 'preset-default',
                  params: {
                    overrides: {
                      // customize options
                      cleanupIds: false, // This is used to keep the ids from figma
                    },
                  },
                },]
              }
            }
          }
        ],
      });

      return config;
    },
}

module.exports = nextConfig