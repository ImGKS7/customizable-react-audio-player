const path = require('path'); // <-get absolute location for saving
const pkg = require('./package.json');
const nodeExternals = require('webpack-node-externals');
module.exports = {
entry: "./src/index.js", // <- starting point for bundle
output: {
path: path.resolve(__dirname, 'dist'),//<-where to save ur bundle
filename: "index.js",//<-filename for bundled file
library: pkg.name,
libraryTarget: "commonjs2" //<- to which version are we compiling js
},
module: {
rules: [
{
test: /\.(js|jsx)$/,
exclude: /node_modules/,
use: {
loader: "babel-loader"
}
},
{
test: /\.css$/i,
use: ["style-loader", "css-loader"]
}
]
},
target: 'node',
externals: [nodeExternals()]//<- if we need to bundle anything extra with our code, if nothing entered means nothing else to compile, else we can mention, if, in case we want to bundle a particular 3rd party code with our codebase
};