const path = require("path");

module.exports = {
  entry: {
    handler: ["./handler.js"],
  },
  output: {
    libraryTarget: "commonjs2",
    path: path.join(__dirname, `build`),
  },
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
};
