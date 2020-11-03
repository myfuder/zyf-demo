const path = require("path");
const webpack = require("webpack");
const resolve = function(dir) {
    return path.join(__dirname, dir);
};
// const chalk = require('chalk')
// const _import = require('./env.' + process.env.NODE_ENV)
module.exports = {
    publicPath: "/",
    outputDir: "ysb",
    assetsDir: "static",
    lintOnSave: false, // 是否开启eslint保存检测
    runtimeCompiler: true,
    productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
    css: {
        //查看CSS属于哪个css文件
        sourceMap: true
    },
    configureWebpack: {
        // devtool: process.env.NODE_ENV === "production" ? 'false' : 'source-map',
        devtool:'source-map',
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
    chainWebpack: config => {
        config
            .entry("app")
            .add("babel-polyfill")
            .end();
        config.resolve.alias
            .set("@", resolve("src"))
            .set("@l", resolve("src/layout"))
            .set("@v", resolve("src/views"))
            .set("@c", resolve("src/components"))
            .set("@u", resolve("src/utils"))
            .set("@s", resolve("src/service"));
        /* 别名配置 */
        config.optimization.runtimeChunk("single");
        config.module
            .rule("hhh")
            .test(/\.html$/)
            .use()
            .loader("html-loader")
            .end();
    },
    devServer: {
        // host: "localhost",
        /* 本地ip地址 */
        host: "0.0.0.0",
        port: "8080",
        hot: true,
        /* 自动打开浏览器 */
        open: false,
        overlay: {
            warning: false,
            error: true
        }
        /* 跨域代理 */
        // proxy: {
        //   "/api": {
        //     /* 目标代理服务器地址 */
        //     target: "", //
        //     // target: "http://192.168.1.102:8888", //
        //     /* 允许跨域 */
        //     changeOrigin: true,
        //     ws: true,
        //     pathRewrite: {
        //       "^/api": ""
        //     }
        //   }
        // }
    }
};
