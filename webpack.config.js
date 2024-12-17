const path = require('path');

module.exports = {
  // Entry point of the application
  entry: './src/index.ts', // The main file for your TypeScript application

  // Output configuration
  output: {
    filename: 'bundle.js', // The bundled output file
    path: path.resolve(__dirname, 'dist'), // Output folder for the bundle
  },

  // Resolve .ts and .js extensions
  resolve: {
    extensions: ['.ts', '.js'],
  },

  // Module loaders configuration
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply this rule to .ts files
        use: 'ts-loader', // Use the TypeScript loader
        exclude: /node_modules/, // Exclude node_modules folder
      },
    ],
  },

  // Development server configuration (optional for live-reloading)
  devServer: {
    static: './dist', // Serve the files from the 'dist' folder
    open: true, // Automatically open the browser
    port: 5500, // Port to run the development server
  },

  // Source maps for debugging
  devtool: 'source-map',
};