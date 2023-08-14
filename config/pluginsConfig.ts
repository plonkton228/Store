import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { Paths } from './types/webpackTypes'

function pluginsConfig (path : Paths, isDev : boolean) : webpack.WebpackPluginInstance[] {
    return [
       new HtmlWebpackPlugin({
        template : path.HtmlPlugin
       }),
       new MiniCssExtractPlugin({
        filename : isDev? "css/[name].css" :  "css/[name].[contenthash:8].css",
        chunkFilename : isDev ? "css/[name].css": "css/[name].[contenthash:8].css"
       })
    ]
}

export default pluginsConfig