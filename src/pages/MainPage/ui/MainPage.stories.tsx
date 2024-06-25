import type { Meta, StoryObj } from '@storybook/react';
import MainPage from 'pages/MainPage/ui/MainPage';

const meta: Meta = {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj;

export const Standard: Story = {
    args: {
    },
};

export const Outline: Story = {
    args: {
    },
};
