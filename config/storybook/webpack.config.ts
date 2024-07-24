import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPath } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPath = {
        entry: '',
        html: '',
        output: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/ };
        }
        return rule;
    });

    config.module?.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');

    config!.module!.rules.push(buildCssLoaders(true));
    return config;
};
