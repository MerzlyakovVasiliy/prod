import webpack from 'webpack';
import { BuildOption } from './types/config';
import { buildPlugin } from './buildPlugin';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDewServer } from './buildDewServer';

export function buildWebpackConfig(options: BuildOption): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        devtool: isDev ? 'inline-source-map' : undefined,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
        },
        plugins: buildPlugin(options),
        mode,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devServer: isDev ? buildDewServer(options) : undefined,
    };
}
