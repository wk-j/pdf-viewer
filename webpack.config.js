var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        'main': './main.js',
        'pdf.worker': 'pdfjs-dist/build/pdf.worker.entry'
    },
    mode: 'none',
    output: {
        path: path.join(__dirname, '/build/viewer'),
        publicPath: 'build/viewer',
        filename: '[name].bundle.js'
    }
};