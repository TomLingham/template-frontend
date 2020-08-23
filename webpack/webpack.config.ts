import path from "path";
import { Configuration, WebpackPluginInstance } from "webpack";
import Manifest from "webpack-manifest-plugin";

const config: Configuration = {
  entry: require.resolve("../src/index.ts"),
  resolve: { extensions: [".tsx", ".ts", ".js", ".jsx"] },
  output: { filename: "[name].[contenthash].js", path: path.resolve("dist") },
  optimization: {
    chunkIds: "named",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
  externals: {
    // react: "React",
    // "react-dom": "ReactDOM",
    // "styled-components": "styled",
  },
  plugins: [
    new Manifest({
      generate: (_seed, filed, _entrypoints) => {
        return {
          version: "1.0",
          name: "maiar",
          buildDateTime: new Date().toISOString(),
          type: "spa",
          page: {
            assets: filed.reduce(
              (f, n) => (n.isInitial ? { ...f, [n.name ?? ""]: n.path } : f),
              {}
            ),
          },
        };
      },
    }) as WebpackPluginInstance,
  ],
};

export default config;
