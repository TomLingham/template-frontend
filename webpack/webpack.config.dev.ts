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
    template: path.resolve(__dirname, "index.html"),
    templateParameters: {
      config: require("../config/local.json"),
      modules: require("./modules.json"),
    },
    title: "Page Title",
  })
);

export default config;
