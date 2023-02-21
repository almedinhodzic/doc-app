const webpack = require("webpack");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// new BundleAnalyzerPlugin(), // Add to plugins if needed

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Almedin - Prod"),
    }),
  ],
};
