/**
 * Created by Developer on 2017/6/29.
 */
const path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/asserts'),
        publicPath: "asserts"

    }
}