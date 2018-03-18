const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const combineLoaders = require('webpack-combine-loaders');

const extractTheme1 = new ExtractTextPlugin('theme1.css');
const extractLoader1 = extractTheme1.extract([
    {loader: 'css-loader'}
]);

const theme1Combined = combineLoaders(
    extractLoader1
);

console.log('--------- extractLoader1 ------------');
console.log(extractLoader1);
console.log('---------  ------------');
console.log(theme1Combined);
console.log('---------  ------------');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        filename: "[name].js",
        path: path.resolve("dist")
    },
    module: {
        //rules: [{ test: /\.css$/, loader: theme1Combined}]
        rules: [{ test: /\.css$/, loader: extractLoader1}]
    },
    plugins: [
        extractTheme1
    ]
};