import { Paths } from '../types/webpackTypes';
import path from "path";

export const paths: Paths = {
    entry: '',
    HtmlPlugin: '',
    output: '',
    defaultImport: '',
    modules: path.resolve(__dirname, '../' , '../', 'src')
  }


export const cssRules = {
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader' ,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName:  '[path][name]__[local]--[hash:base64:5]'
                }
            }
        },
        'sass-loader'
    ]
}
