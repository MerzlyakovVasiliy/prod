import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOption } from './types/config';

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

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('module.scss')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

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
