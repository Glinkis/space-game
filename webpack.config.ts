import { Configuration } from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import * as packageConfig from "./package.json"

export default (): Configuration => ({
  module: {
    rules: [
      {
        test: /ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: packageConfig.name,
    }),
  ],
})
