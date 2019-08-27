const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    world: path.join(__dirname, "legacy", "index.tsx")
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
};
