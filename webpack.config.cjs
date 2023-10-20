const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  experiments: {
    outputModule: true,
  },
  output: {
    filename: 'useEasingScroll.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'module',
    clean: true,
    module: true,
    environment: {
      module: true,
    }
  },
  externals: {
    // Use external version of React
    react: 'react',
    'react-dom': 'react-dom',
    
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.mjs'],
  },
};
