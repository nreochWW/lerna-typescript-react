module.exports = {
  mode: "production",
  entry: {
    hello: "./packages/Hello/index.tsx",
    world: "./packages/World/index.tsx"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
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
