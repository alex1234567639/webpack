const path = require('path');

//基本配置
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),  //設定打包來源
        filename: 'scripts.js',  //設定打包後生成的檔案名稱
        // filename: '[name].bundle.js',  //每次打包生成不同快取直 
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: 'style-loader' //(順序2)
                },
                {
                    loader: 'css-loader', //(順序1)
                    options: {
                        modules: true
                    }
                }]
        }]
    },
    //plugins: []
   };