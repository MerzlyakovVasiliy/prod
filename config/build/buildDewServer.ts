import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOption } from './types/config';

export const buildDewServer = (options: BuildOption): DevServerConfiguration => ({
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
});
