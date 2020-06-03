const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
            test: /\.(sass|scss|css)$/, //修改成scss 可以讀的檔案
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it use publicPath in webpackOptions.output
                        publicPath: './dist'
                    }
                },
                {
                    loader: 'css-loader', //(順序2)
                    options: {
                        modules: true
                    }
                },
                {
                    loader: 'sass-loader', //(順序1)
                }
            ]
        }]
      },
      plugins: [
        //這個套件是載入 css 檔案
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "./css/[name].css"
        }),
        new HtmlWebpackPlugin({
            //來源檔
            template: './src/index.html',
            
            //產生的檔案
            filename: 'index.html', 
            
            //是否要壓縮 要看 mode 模式
            minify: false,
            
            //調整配置 true || 'head' || 'body' || false
            inject: 'head',
        })
    ]      
   };