import {BuildOption} from "./types/config";
import {Configuration as DevServerConfiguration} from 'webpack-dev-server';

export const buildDewServer = (options: BuildOption): DevServerConfiguration => {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true
    }
}