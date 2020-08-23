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
    },
  })
);

export default config;
