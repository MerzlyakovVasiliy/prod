import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage, NotFoundPageProps } from 'pages/NotFoundPage/ui/NotFoundPage';

const meta: Meta<NotFoundPageProps> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<NotFoundPageProps>;

export const Standard: Story = {
    args: {
    },
};

export const Outline: Story = {
    args: {
    },
};
