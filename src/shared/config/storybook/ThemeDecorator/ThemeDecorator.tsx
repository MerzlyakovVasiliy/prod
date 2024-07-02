import 'app/styles/index.scss';
import React from 'react';
import { StoryFn } from '@storybook/react';

type Theme = 'light' | 'app_dark_theme';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
