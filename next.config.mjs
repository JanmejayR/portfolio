/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { isServer }) {
        // Add a rule to handle GLSL files
        config.module.rules.push({
          test: /\.(glsl|vs|fs)$/, // Match GLSL, vertex, and fragment shaders
          use: 'raw-loader',     // Use raw-loader to handle GLSL files
        });

        config.module.rules.push({
          test: /\.(woff2|woff|ttf|eot|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/fonts/', // Output directory
              publicPath: '/_next/static/fonts/', // Public URL
            },
          },
        });
    
        return config;
      },
};

export default nextConfig;
