'use strict '

const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/', //gera uma pasta em memória, uma pasta virtual para servir os arquivos
    }
}