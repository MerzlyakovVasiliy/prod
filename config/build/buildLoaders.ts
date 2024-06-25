import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOption } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';

export const buildLoaders = ({ isDev }: BuildOption): webpack.RuleSetRule[] => {
    const assetsLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    const cssLoader = buildCssLoaders(isDev);

    const typeScripLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        assetsLoader,
        svgLoader,
        babelLoader,
        typeScripLoader,
        cssLoader,
    ];
};
