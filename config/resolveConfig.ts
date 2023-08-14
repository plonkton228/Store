import webpack from 'webpack'
import { Paths } from './types/webpackTypes'

function resolveConfig (paths : Paths) : webpack.ResolveOptions {
 return {
    extensions : ['.js', '.ts' , '.tsx', '.jsx'],
    modules : [paths.modules , "node_modules"]
 }
}
export default resolveConfig