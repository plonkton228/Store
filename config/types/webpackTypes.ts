export interface Paths {
    entry : string,
    output : string,
    HtmlPlugin : string,
    defaultImport : string,
    modules : string
}
export interface serverSettings {
    port : number,
    devServerPath : string
}
export type modeType = "development" | "production";


export interface webpackSettings {
    mode :  modeType,
    paths : Paths,
    devServer : serverSettings,
    isDev : boolean
}