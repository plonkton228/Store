import type webpack from 'webpack'
import { type webpackSettings } from './types/webpackTypes'
import resolveConfig from './resolveConfig'
import rulesConfig from './rulesConfig'
import pluginsConfig from './pluginsConfig'
import devServerConfig from './devServerConfig'
function webpackConfig (settings: webpackSettings): webpack.Configuration {
    return {
        mode: settings.mode,
        entry: settings.paths.entry,
        output: {
            filename: 'main.js',
            path: settings.paths.output,
            clean: true
        },
        resolve: resolveConfig(settings.paths),
        module: {
            rules: rulesConfig(settings)
        },
        plugins: pluginsConfig(settings.paths, settings.isDev),
        devtool: settings.isDev ? 'inline-source-map' : undefined,
        devServer: settings.isDev ? devServerConfig(settings.devServer) : undefined
    }
}

export default webpackConfig
