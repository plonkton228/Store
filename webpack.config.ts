import type webpack from 'webpack'
import { type webpackSettings } from './config/types/webpackTypes'
import webpackConfig from './config/webpackConfig'
import path from 'path'
export default (env: webpackSettings): webpack.Configuration => {
     const settings: webpackSettings = {
        paths: {
            entry: path.resolve(__dirname, 'src'),
            output: path.resolve(__dirname, 'dist'),
            HtmlPlugin: path.resolve(__dirname, 'public', 'index.html'),
            defaultImport: path.resolve(__dirname, 'src'),
            modules: path.resolve(__dirname, 'src')
        },
        devServer: {
            port: 3000,
            devServerPath: path.resolve(__dirname, 'dist', 'index.html')
        },
        mode: env.mode || 'development',
        isDev: true
    }
    settings.isDev = settings.mode === 'development'
    return webpackConfig(settings)
}
