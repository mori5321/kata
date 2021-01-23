import * as webpack from 'webpack';
import * as path from 'path';

// const isDev = process.env.NODE_ENV === 'development';

const baseConfig: webpack.Configuration = {
  // mode: isDev ? 'development' : 'production',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "assets": path.resolve(__dirname, "assets")
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          publicPath: "images",
          outputPath: "images"
        },     
      }
    ]  
  },
}

const main: webpack.Configuration = {
  ...baseConfig,
  target: 'electron-main',
  entry: {
    main: './src/main.ts'
  }
}

// const preload: webpack.Configuration = {
//   ...baseConfig,
//   target: 'electron-preload',
//   entry: {
//     preload: './src/preload.ts'
//   }
// }


const renderer: webpack.Configuration = {
  ...baseConfig,
  target: 'web',
  entry: {
    renderer: './src/index.tsx'
  },
}

export default [main, renderer]
