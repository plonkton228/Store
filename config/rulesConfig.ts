import type webpack from 'webpack'
import { type webpackSettings } from './types/webpackTypes'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

function rulesConfig (settings: webpackSettings): webpack.RuleSetRule[] {
    const tsRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const cssRules = {
        test: /\.s[ac]ss$/i,
        use: [
            settings.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: settings.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]'
                    }
                }
            },
            'sass-loader'
        ]
    }

    const imgsRules = {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'img/[name].[ext]'
        }
    }
    const babelRules = {
        test: /\.(?:ts|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', { targets: 'defaults' }]
                ]
            }
        }
    }
    return [
        babelRules,
        tsRule,
        cssRules,
        imgsRules
    ]
}

export default rulesConfig
