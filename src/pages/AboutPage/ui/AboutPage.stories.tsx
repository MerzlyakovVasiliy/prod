import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from 'pages/AboutPage/ui/AboutPage';

const meta: Meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
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
