import 'app/styles/index.scss';
import React from 'react';
import { StoryFn } from '@storybook/react';

type Theme = 'light' | 'dark';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
