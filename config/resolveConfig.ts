import type webpack from 'webpack'
import { type Paths } from './types/webpackTypes'

function resolveConfig (paths: Paths): webpack.ResolveOptions {
    return {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
        modules: [paths.modules, 'node_modules']
    }
}
export default resolveConfig
