import type webpack from 'webpack'
import { DefinePlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type Paths } from './types/webpackTypes'

function pluginsConfig (path: Paths, isDev: boolean): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: path.HtmlPlugin
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
            chunkFilename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css'
        }),
        new DefinePlugin({
            ISDEV: JSON.stringify(isDev)
        })
    ]
}

export default pluginsConfig
