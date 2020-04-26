import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import config from "./webpack.config";

config.mode = "development";

config.devtool = "cheap-module-source-map";

config.devServer = {
  disableHostCheck: true,
};

config.plugins!.push(
  new HtmlWebpackPlugin({
    /**
     * This HTML template is only used for local development.
     */
    template: path.join(__dirname, "template.html"),
    templateParameters: {
      config: require("../config/local.json"),

      /**
       * These modules are the equivalent of the vendor libraries that are
       * available globally and are only used locally.
       */
      modules: [
        "https://unpkg.com/react@16/umd/react.development.js",
        "https://unpkg.com/react-dom@16/umd/react-dom.development.js",
        "https://unpkg.com/react-is@16.13.1/umd/react-is.development.js",
        "https://unpkg.com/styled-components@5.1.0/dist/styled-components.min.js",
      ],
    },
  })
);

export default config;
