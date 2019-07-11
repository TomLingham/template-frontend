import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import config from "./webpack.config";

config.mode = "development";

config.devtool = "cheap-module-eval-source-map";

config.devServer = {
  disableHostCheck: true
};

config.plugins!.push(
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "index.html"),
    templateParameters: {
      config: JSON.stringify(require("../config/local.json"))
    },
    title: "Jobi.sh"
  })
);

export default config;
