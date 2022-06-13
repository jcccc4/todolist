const path = require('path');

 module.exports = {
   entry: './src/App.js',
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
   devServer: {
            static: {
                directory: path.join(__dirname, '/')
            }
        },
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     ],
   },
 };