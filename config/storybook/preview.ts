import type { Preview } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const preview: Preview = {
    decorators: [
        StyleDecorator,
        (
            Story,
            context,
        ) => ThemeDecorator(context.globals.theme === 'dark' ? 'app_dark_theme' : 'light')(Story),
        withRouter,
    ],
    parameters: {
        reactRouter: reactRouterParameters({
        }),
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: ['light', 'dark'],
                dynamicTitle: true,
            },
        },
    },
};

export default preview;
