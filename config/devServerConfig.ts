import { Configuration, Configuration as DevServerConfig } from "webpack-dev-server";
import { serverSettings } from "./types/webpackTypes";

function devServerConfig (settings : serverSettings)  : Configuration {
  return {
    static : {
        directory: settings.devServerPath
    },
    port : settings.port,
    historyApiFallback : true
  }
}


export default devServerConfig